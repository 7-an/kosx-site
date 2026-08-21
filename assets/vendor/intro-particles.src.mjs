/*
 * KOSX intro particle slogan — adapted from VOIDTYPE (github.com/7-an/voidtype).
 *
 * Interaction model: off-screen text sampling -> Three.js point cloud ->
 * pointer momentum injected into a 10px velocity grid -> pressure propagation
 * -> velocity handoff -> elastic return.
 *
 * The grid solver is an adapted implementation of the MIT-licensed
 * fluid-particle model credited in THIRD_PARTY_NOTICES.md.
 *
 * Differences from the VOIDTYPE original:
 * - explicit mount(root, options) instead of DOM auto-scan
 * - configurable color / entrance duration, hidden lines skipped
 * - demo board tilt removed, returns dispose() for intro lifecycle
 */

import {
  BufferAttribute,
  BufferGeometry,
  Color,
  OrthographicCamera,
  Points,
  Scene,
  ShaderMaterial,
  WebGLRenderer,
} from "three";

const DPR_CAP = 2;
const CELL_SIZE = 10;
const FORCE_RADIUS = 48;
const PATH_STEP = 6;
const FIELD_PICKUP = 0.06;
const PRESSURE_COUPLING = 0.25;
const FIELD_SPEED_CAP = 100;
const PARTICLE_SPEED_CAP = 30;
const PARTICLE_DAMPING = 0.4;
const RETURN_SPEED_THRESHOLD = 0.5;
const RETURN_RAMP_SECONDS = 0.05;
const RETURN_FORCE = 50;
const RETURN_INITIAL_STRENGTH = 0.15;
const DESKTOP_POINT_SIZE = 1.6;
const MOBILE_POINT_SIZE = 1;
const TEXT_SAMPLE_COVERAGE = 0.7;
const MAX_PARTICLES_DESKTOP = 140000;
const MAX_PARTICLES_MOBILE = 54000;

const POINT_VERTEX_SHADER = `
  attribute float aSize;
  attribute float aAlpha;
  varying float vAlpha;

  void main() {
    vAlpha = aAlpha;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = aSize;
  }
`;

const POINT_FRAGMENT_SHADER = `
  uniform vec3 uColor;
  varying float vAlpha;

  void main() {
    gl_FragColor = vec4(uColor, vAlpha);
  }
`;

/**
 * @param {HTMLElement} root container holding canvas.wordmark-canvas and [data-particle-source]
 * @param {{ color?: string, entranceSeconds?: number }} [options]
 * @returns {{ dispose: () => void } | null} null when WebGL is unavailable
 */
export function mountParticleSlogan(root, options = {}) {
  if (!root || root.dataset.particleInitialized === "true") return null;

  const canvas = root.querySelector("canvas.wordmark-canvas");
  const source = root.querySelector("[data-particle-source]");
  if (!canvas || !source) return null;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return null;

  const renderCanvas = canvas;
  const textSource = source;
  const colorOption = options.color || "#f7f7f5";
  const entranceSeconds = options.entranceSeconds || 1.75;
  const textScale = options.textScale || 1;
  const scatter = Boolean(options.scatter);
  const textRegionWidth = options.textRegionWidth || 1;
  root.dataset.particleInitialized = "true";

  let renderer;
  try {
    renderer = new WebGLRenderer({
      canvas: renderCanvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
  } catch {
    return null;
  }

  renderer.setClearColor(0x000000, 0);
  const scene = new Scene();
  let camera = new OrthographicCamera();
  let points = null;
  let geometry = null;
  let material = null;

  let width = 1;
  let height = 1;
  let particleCount = 0;
  let positions = new Float32Array(0);
  let homes = new Float32Array(0);
  let particleVelocities = new Float32Array(0);
  let returnStartedAt = new Float64Array(0);

  let cols = 1;
  let rows = 1;
  let fieldX = new Float32Array(1);
  let fieldY = new Float32Array(1);
  let nextFieldX = new Float32Array(1);
  let nextFieldY = new Float32Array(1);
  let pressure = new Float32Array(1);

  const sampleCanvas = document.createElement("canvas");
  const sampleContext = sampleCanvas.getContext("2d", { willReadFrequently: true });
  let pointerX = -9999;
  let pointerY = -9999;
  let previousX = -9999;
  let previousY = -9999;
  let hasPointer = false;
  let animationFrame = 0;
  let lastFrameAt = performance.now();
  let running = false;
  let inView = true;
  let resizeTimer = 0;
  let initialBuildComplete = false;
  let entranceStartedAt = 0;
  let disposed = false;

  const cellIndex = (column, row) =>
    Math.min(rows - 1, Math.max(0, row)) * cols + Math.min(cols - 1, Math.max(0, column));

  function resetField() {
    cols = Math.ceil(width / CELL_SIZE);
    rows = Math.ceil(height / CELL_SIZE);
    const length = cols * rows;
    fieldX = new Float32Array(length);
    fieldY = new Float32Array(length);
    nextFieldX = new Float32Array(length);
    nextFieldY = new Float32Array(length);
    pressure = new Float32Array(length);
  }

  function sampleText() {
    if (!sampleContext) return new Float32Array(0);

    sampleCanvas.width = width;
    sampleCanvas.height = height;
    sampleContext.clearRect(0, 0, width, height);
    sampleContext.fillStyle = "#fff";
    sampleContext.textAlign = "center";
    sampleContext.textBaseline = "middle";

    const sourceStyle = getComputedStyle(textSource);
    const family = sourceStyle.fontFamily || getComputedStyle(document.body).fontFamily;
    const weight = sourceStyle.fontWeight || "700";
    const lines = Array.from(textSource.querySelectorAll("[data-particle-line]"))
      .filter((line) => getComputedStyle(line).display !== "none")
      .map((line) => line.textContent?.trim() || "")
      .filter(Boolean);
    if (lines.length === 0) lines.push(textSource.textContent?.trim() || "KOSX");

    // 多行时做下行阶梯错位：第一行偏左，末行偏右，步进随字号缩放
    const centerIndex = (lines.length - 1) / 2;
    const staggerRatio = 1.2;

    if (scatter) {
      // 打散模式：逐字母按预设位置/缩放/旋转绘制，制造不规则排布
      // textRegionWidth 把文字锚定在画布左侧区域内，指针场仍覆盖整个画布
      const regionW = width * textRegionWidth;
      const scatterSpec = [
        { x: 0.16, y: 0.3, s: 1.45, r: -8 },
        { x: 0.56, y: 0.22, s: 0.92, r: 6 },
        { x: 0.4, y: 0.66, s: 1.22, r: -4 },
        { x: 0.8, y: 0.6, s: 1.05, r: 9 },
        { x: 0.3, y: 0.42, s: 1.1, r: 5 },
        { x: 0.68, y: 0.4, s: 1.3, r: -6 },
      ];
      const chars = (lines.join("") || "KOSX").split("");
      const baseSize = Math.min(height * 0.44, regionW / 3.2, 300) * textScale;
      chars.forEach((ch, index) => {
        const spec = scatterSpec[index % scatterSpec.length];
        sampleContext.save();
        sampleContext.translate(regionW * spec.x, height * spec.y);
        sampleContext.rotate((spec.r * Math.PI) / 180);
        sampleContext.font = `${weight} ${baseSize * spec.s}px ${family}`;
        sampleContext.fillText(ch, 0, 0);
        sampleContext.restore();
      });
    } else {
      let fontSize = Math.min(height * (lines.length > 1 ? 0.19 : 0.3), width / 4.5, 132) * textScale;
      sampleContext.font = `${weight} ${fontSize}px ${family}`;
      const extents = lines.map((line, index) => {
        const lineWidth = sampleContext.measureText(line).width;
        return lineWidth + 2 * Math.abs(index - centerIndex) * staggerRatio * fontSize;
      });
      const needed = Math.max(...extents);
      if (needed > width * 0.94) {
        fontSize *= (width * 0.94) / needed;
        sampleContext.font = `${weight} ${fontSize}px ${family}`;
      }

      const lineHeight = fontSize * 1.04;
      const stepX = fontSize * staggerRatio;
      lines.forEach((line, index) => {
        const x = width / 2 + (index - centerIndex) * stepX;
        const y = height / 2 + (index - centerIndex) * lineHeight;
        sampleContext.fillText(line, x, y);
      });
    }
    const pixels = sampleContext.getImageData(0, 0, width, height).data;
    const mobile = width < 640;
    const cap = mobile ? MAX_PARTICLES_MOBILE : MAX_PARTICLES_DESKTOP;
    const step = mobile ? 1.35 : 1;
    const sampled = [];

    for (let y = 0; y < height; y += step) {
      const sampleY = Math.floor(y);
      for (let x = 0; x < width; x += step) {
        const sampleX = Math.floor(x);
        const alpha = pixels[(sampleY * width + sampleX) * 4 + 3];
        if (alpha <= 52 || sampled.length / 3 >= cap) continue;

        // Keep a single irregular layer. Deterministic thinning leaves enough
        // black space for the sub-pixel grains to remain individually legible.
        const coverage = mobile ? 0.78 : TEXT_SAMPLE_COVERAGE;
        const sampleHash = ((sampleX * 17 + sampleY * 31) % 100) / 100;
        if (sampleHash >= coverage) continue;
        sampled.push(
          x - width / 2 + (Math.random() - 0.5) * step * 2.4,
          height / 2 - y + (Math.random() - 0.5) * step * 2.4,
          0,
        );
      }
    }

    return new Float32Array(sampled);
  }

  function disposePoints() {
    if (points) scene.remove(points);
    geometry?.dispose();
    material?.dispose();
    points = null;
    geometry = null;
    material = null;
  }

  function rebuild(playEntrance) {
    const sampled = sampleText();
    if (sampled.length === 0) return false;

    particleCount = sampled.length / 3;
    positions = new Float32Array(sampled.length);
    homes = new Float32Array(sampled);
    particleVelocities = new Float32Array(sampled.length);
    returnStartedAt = new Float64Array(particleCount);
    returnStartedAt.fill(-1);
    const grainSizes = new Float32Array(particleCount);
    const grainAlphas = new Float32Array(particleCount);
    entranceStartedAt = performance.now() / 1000;
    const ratio = Math.min(window.devicePixelRatio || 1, DPR_CAP);
    const basePointSize = window.innerWidth <= 1024 ? MOBILE_POINT_SIZE : DESKTOP_POINT_SIZE;

    for (let index = 0; index < particleCount; index++) {
      const offset = index * 3;
      if (playEntrance) {
        const distance = width * (0.34 + Math.random() * 0.36);
        positions[offset] = homes[offset] + distance + (Math.random() - 0.5) * 90;
        positions[offset + 1] = homes[offset + 1] + (Math.random() - 0.5) * height * 0.46;
      } else {
        positions[offset] = homes[offset];
        positions[offset + 1] = homes[offset + 1];
      }
      positions[offset + 2] = 0;
      grainSizes[index] = basePointSize * ratio;
      grainAlphas[index] = 1;
    }

    disposePoints();
    geometry = new BufferGeometry();
    geometry.setAttribute("position", new BufferAttribute(positions, 3));
    geometry.setAttribute("aSize", new BufferAttribute(grainSizes, 1));
    geometry.setAttribute("aAlpha", new BufferAttribute(grainAlphas, 1));
    let particleColor;
    try {
      particleColor = new Color(colorOption);
    } catch {
      particleColor = new Color("#f7f7f5");
    }
    material = new ShaderMaterial({
      uniforms: { uColor: { value: particleColor } },
      vertexShader: POINT_VERTEX_SHADER,
      fragmentShader: POINT_FRAGMENT_SHADER,
      transparent: true,
      depthWrite: false,
      depthTest: false,
      toneMapped: false,
    });
    points = new Points(geometry, material);
    points.frustumCulled = false;
    scene.add(points);
    return true;
  }

  function injectPoint(x, y, deltaX, deltaY) {
    const left = Math.max(0, Math.floor((x - FORCE_RADIUS) / CELL_SIZE));
    const right = Math.min(cols - 1, Math.ceil((x + FORCE_RADIUS) / CELL_SIZE));
    const top = Math.max(0, Math.floor((y - FORCE_RADIUS) / CELL_SIZE));
    const bottom = Math.min(rows - 1, Math.ceil((y + FORCE_RADIUS) / CELL_SIZE));

    for (let row = top; row <= bottom; row++) {
      for (let column = left; column <= right; column++) {
        const centerX = column * CELL_SIZE;
        const centerY = row * CELL_SIZE;
        const dx = centerX - x;
        const dy = centerY - y;
        let distance = Math.hypot(dx, dy);
        if (distance >= FORCE_RADIUS) continue;
        distance = Math.max(4, distance);
        const multiplier = FORCE_RADIUS / distance;
        const index = row * cols + column;
        fieldX[index] += deltaX * multiplier;
        fieldY[index] += deltaY * multiplier;
      }
    }
  }

  function injectPath(fromX, fromY, toX, toY) {
    const deltaX = toX - fromX;
    const deltaY = toY - fromY;
    const steps = Math.max(1, Math.ceil(Math.hypot(deltaX, deltaY) / PATH_STEP));
    for (let step = 0; step <= steps; step++) {
      const progress = step / steps;
      injectPoint(fromX + deltaX * progress, fromY + deltaY * progress, deltaX, deltaY);
    }
  }

  function handlePointer(event) {
    const bounds = root.getBoundingClientRect();
    const nextX = ((event.clientX - bounds.left) / Math.max(1, bounds.width)) * width;
    const nextY = ((event.clientY - bounds.top) / Math.max(1, bounds.height)) * height;
    if (nextX < 0 || nextY < 0 || nextX > width || nextY > height) return;

    pointerX = nextX;
    pointerY = nextY;
    if (!hasPointer) {
      previousX = nextX;
      previousY = nextY;
    }
    hasPointer = true;
  }

  function injectPointerFrame() {
    if (!hasPointer) return;
    if (pointerX !== previousX || pointerY !== previousY) {
      injectPath(previousX, previousY, pointerX, pointerY);
    }
    previousX = pointerX;
    previousY = pointerY;
  }

  function handlePointerLeave() {
    hasPointer = false;
    pointerX = pointerY = previousX = previousY = -9999;
  }

  function updateField(time) {
    for (let row = 0; row < rows; row++) {
      for (let column = 0; column < cols; column++) {
        const index = row * cols + column;
        // 定型后不注入环境漂移：粒子完全静止，只有指针能扰动

        const upperLeft = cellIndex(column - 1, row - 1);
        const left = cellIndex(column - 1, row);
        const lowerLeft = cellIndex(column - 1, row + 1);
        const upperRight = cellIndex(column + 1, row - 1);
        const right = cellIndex(column + 1, row);
        const lowerRight = cellIndex(column + 1, row + 1);
        const up = cellIndex(column, row - 1);
        const down = cellIndex(column, row + 1);

        const horizontal =
          0.5 * fieldX[upperLeft] +
          fieldX[left] +
          0.5 * fieldX[lowerLeft] -
          0.5 * fieldX[upperRight] -
          fieldX[right] -
          0.5 * fieldX[lowerRight];
        const vertical =
          0.5 * fieldY[upperLeft] +
          fieldY[up] +
          0.5 * fieldY[upperRight] -
          0.5 * fieldY[lowerLeft] -
          fieldY[down] -
          0.5 * fieldY[lowerRight];
        pressure[index] = (horizontal + vertical) * PRESSURE_COUPLING;
      }
    }

    for (let row = 0; row < rows; row++) {
      for (let column = 0; column < cols; column++) {
        const index = row * cols + column;
        const upperLeft = cellIndex(column - 1, row - 1);
        const left = cellIndex(column - 1, row);
        const lowerLeft = cellIndex(column - 1, row + 1);
        const upperRight = cellIndex(column + 1, row - 1);
        const right = cellIndex(column + 1, row);
        const lowerRight = cellIndex(column + 1, row + 1);
        const up = cellIndex(column, row - 1);
        const down = cellIndex(column, row + 1);

        let velocityX =
          fieldX[index] +
          (0.5 * pressure[upperLeft] + pressure[left] + 0.5 * pressure[lowerLeft] -
            0.5 * pressure[upperRight] - pressure[right] - 0.5 * pressure[lowerRight]) *
            PRESSURE_COUPLING;
        let velocityY =
          fieldY[index] +
          (0.5 * pressure[upperLeft] + pressure[up] + 0.5 * pressure[upperRight] -
            0.5 * pressure[lowerLeft] - pressure[down] - 0.5 * pressure[lowerRight]) *
            PRESSURE_COUPLING;
        const speed = Math.hypot(velocityX, velocityY);
        if (speed > FIELD_SPEED_CAP) {
          velocityX *= FIELD_SPEED_CAP / speed;
          velocityY *= FIELD_SPEED_CAP / speed;
        }
        nextFieldX[index] = velocityX * 0.99;
        nextFieldY[index] = velocityY * 0.99;
      }
    }

    [fieldX, nextFieldX] = [nextFieldX, fieldX];
    [fieldY, nextFieldY] = [nextFieldY, fieldY];
  }

  function updateParticles(time, delta) {
    for (let index = 0; index < particleCount; index++) {
      const offset = index * 3;
      const entranceAge = time - entranceStartedAt;
      if (!initialBuildComplete && entranceAge < entranceSeconds) {
        const progress = Math.min(1, Math.max(0, entranceAge / entranceSeconds));
        const eased = 1 - Math.pow(1 - progress, 3);
        const settle = 0.018 + eased * 0.075;
        positions[offset] += (homes[offset] - positions[offset]) * settle;
        positions[offset + 1] += (homes[offset + 1] - positions[offset + 1]) * settle;
        particleVelocities[offset] = 0;
        particleVelocities[offset + 1] = 0;
        continue;
      }

      const screenX = Math.min(width - 1, Math.max(0, positions[offset] + width / 2));
      const screenY = Math.min(height - 1, Math.max(0, height / 2 - positions[offset + 1]));
      const column = Math.min(cols - 1, Math.max(0, Math.floor(screenX / CELL_SIZE)));
      const row = Math.min(rows - 1, Math.max(0, Math.floor(screenY / CELL_SIZE)));
      const index00 = cellIndex(column, row);
      const index10 = cellIndex(column + 1, row);
      const index01 = cellIndex(column, row + 1);
      const fractionX = (screenX % CELL_SIZE) / CELL_SIZE;
      const fractionY = (screenY % CELL_SIZE) / CELL_SIZE;

      let speed = Math.hypot(particleVelocities[offset], particleVelocities[offset + 1]);
      if (speed > RETURN_SPEED_THRESHOLD) {
        returnStartedAt[index] = -1;
      } else if (returnStartedAt[index] < 0) {
        returnStartedAt[index] = time;
      }

      if (returnStartedAt[index] >= 0) {
        const returnAge = Math.min(1, (time - returnStartedAt[index]) / RETURN_RAMP_SECONDS);
        const smoothReturn = returnAge * returnAge * (3 - 2 * returnAge);
        const spring =
          RETURN_FORCE *
          delta *
          (RETURN_INITIAL_STRENGTH + (1 - RETURN_INITIAL_STRENGTH) * smoothReturn);
        particleVelocities[offset] += (homes[offset] - positions[offset]) * spring;
        particleVelocities[offset + 1] += (homes[offset + 1] - positions[offset + 1]) * spring;
      }

      // Hand off the already-damped velocity first, then read this frame's field.
      particleVelocities[offset] +=
        ((1 - fractionX) * fieldX[index00] +
          fractionX * fieldX[index10] +
          fractionY * fieldX[index01]) *
        FIELD_PICKUP;
      particleVelocities[offset + 1] -=
        ((1 - fractionY) * fieldY[index00] +
          fractionX * fieldY[index10] +
          fractionY * fieldY[index01]) *
        FIELD_PICKUP;

      speed = Math.hypot(particleVelocities[offset], particleVelocities[offset + 1]);
      if (speed > PARTICLE_SPEED_CAP) {
        particleVelocities[offset] *= PARTICLE_SPEED_CAP / speed;
        particleVelocities[offset + 1] *= PARTICLE_SPEED_CAP / speed;
      }

      positions[offset] += particleVelocities[offset];
      positions[offset + 1] += particleVelocities[offset + 1];
      particleVelocities[offset] *= PARTICLE_DAMPING;
      particleVelocities[offset + 1] *= PARTICLE_DAMPING;
    }

    const attribute = geometry?.getAttribute("position");
    if (attribute) attribute.needsUpdate = true;
  }

  function animate(now) {
    if (!running) return;
    const time = now / 1000;
    const delta = Math.min(0.05, Math.max(0.001, (now - lastFrameAt) / 1000));
    lastFrameAt = now;
    injectPointerFrame();
    updateField(time);
    updateParticles(time, delta);
    renderer.render(scene, camera);
    animationFrame = requestAnimationFrame(animate);
  }

  function start() {
    if (running || !inView || document.hidden || disposed) return;
    running = true;
    lastFrameAt = performance.now();
    animationFrame = requestAnimationFrame(animate);
  }

  function stop() {
    running = false;
    cancelAnimationFrame(animationFrame);
  }

  function resize(playEntrance = false) {
    width = Math.max(1, Math.round(root.clientWidth));
    height = Math.max(1, Math.round(root.clientHeight));
    if (width < 10 || height < 10) return;

    const ratio = Math.min(window.devicePixelRatio || 1, DPR_CAP);
    renderer.setPixelRatio(ratio);
    renderer.setSize(width, height, false);
    camera = new OrthographicCamera(-width / 2, width / 2, height / 2, -height / 2, 0.1, 10);
    camera.position.z = 1;
    resetField();
    if (rebuild(playEntrance)) {
      root.classList.add("is-live");
      if (!playEntrance) entranceStartedAt = -Infinity;
    }
  }

  function handleVisibility() {
    if (document.hidden) stop();
    else start();
  }

  function handleContextLost(event) {
    event.preventDefault();
    stop();
    root.classList.remove("is-live");
  }

  root.addEventListener("pointerenter", handlePointer);
  root.addEventListener("pointermove", handlePointer);
  root.addEventListener("click", handlePointer);
  root.addEventListener("pointerleave", handlePointerLeave);

  const resizeObserver = new ResizeObserver(() => {
    if (!initialBuildComplete) return;
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => {
      if (
        Math.abs(Math.round(root.clientWidth) - width) < 2 &&
        Math.abs(Math.round(root.clientHeight) - height) < 2
      ) {
        return;
      }
      resize(false);
    }, 180);
  });
  resizeObserver.observe(root);

  const intersectionObserver = new IntersectionObserver((entries) => {
    inView = entries[0]?.isIntersecting ?? true;
    if (inView) start();
    else stop();
  });
  intersectionObserver.observe(root);

  document.addEventListener("visibilitychange", handleVisibility);
  renderCanvas.addEventListener("webglcontextlost", handleContextLost);

  resize(true);
  window.setTimeout(() => {
    initialBuildComplete = true;
  }, entranceSeconds * 1000 + 50);
  start();

  return {
    dispose() {
      if (disposed) return;
      disposed = true;
      stop();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
      renderCanvas.removeEventListener("webglcontextlost", handleContextLost);
      root.removeEventListener("pointerenter", handlePointer);
      root.removeEventListener("pointermove", handlePointer);
      root.removeEventListener("click", handlePointer);
      root.removeEventListener("pointerleave", handlePointerLeave);
      disposePoints();
      renderer.dispose();
      root.classList.remove("is-live");
    },
  };
}
