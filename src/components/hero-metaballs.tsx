"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

// Metaballs raymarched with SDF. Ported from
// https://codepen.io/filipz/pen/ogjXgBP (moody preset, portfolio-scoped).

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;

  uniform float uTime;
  uniform vec2  uResolution;
  uniform vec2  uActualResolution;
  uniform vec2  uMousePosition;
  uniform vec3  uCursorSphere;
  uniform float uCursorRadius;
  uniform int   uSphereCount;
  uniform float uFixedTopLeftRadius;
  uniform float uFixedBottomRightRadius;
  uniform float uSmallTopLeftRadius;
  uniform float uSmallBottomRightRadius;
  uniform float uMergeDistance;
  uniform float uSmoothness;
  uniform float uAmbientIntensity;
  uniform float uDiffuseIntensity;
  uniform float uSpecularIntensity;
  uniform float uSpecularPower;
  uniform float uFresnelPower;
  uniform vec3  uBackgroundColor;
  uniform vec3  uSphereColor;
  uniform vec3  uLightColor;
  uniform vec3  uLightPosition;
  uniform float uContrast;
  uniform float uFogDensity;
  uniform float uAnimationSpeed;
  uniform float uMovementScale;
  uniform float uMinMovementScale;
  uniform float uMaxMovementScale;
  uniform float uCursorGlowIntensity;
  uniform float uCursorGlowRadius;
  uniform vec3  uCursorGlowColor;
  uniform float uOpacity;
  uniform float uStipple;
  uniform float uPixelRatio;
  uniform float uPhaseOffsets[10];
  uniform float uSpeedOffsets[10];

  const float PI = 3.14159265359;
  const float EPSILON = 0.001;
  const float MAX_DIST = 100.0;

  float smin(float a, float b, float k) {
    float h = max(k - abs(a - b), 0.0) / k;
    return min(a, b) - h * h * k * 0.25;
  }

  float sdSphere(vec3 p, float r) { return length(p) - r; }

  vec3 screenToWorld(vec2 normalizedPos) {
    vec2 uv = normalizedPos * 2.0 - 1.0;
    uv.x *= uResolution.x / uResolution.y;
    return vec3(uv * 2.0, 0.0);
  }

  float getDistanceToCenter(vec2 pos) {
    float dist = length(pos - vec2(0.5, 0.5)) * 2.0;
    return smoothstep(0.0, 1.0, dist);
  }

  float sceneSDF(vec3 pos) {
    float result = MAX_DIST;

    // Slow independent drift for the anchors so they never sit still.
    float driftT = uTime * 0.12;

    vec3 topLeftPos = screenToWorld(vec2(0.14, 0.85))
      + vec3(sin(driftT + 0.7) * 0.25, cos(driftT * 0.83 + 1.4) * 0.25, 0.0);
    float topLeft = sdSphere(pos - topLeftPos, uFixedTopLeftRadius);

    vec3 smallTopLeftPos = screenToWorld(vec2(0.30, 0.70))
      + vec3(cos(driftT * 0.91 + 2.1) * 0.22, sin(driftT * 0.77 + 0.3) * 0.22, 0.0);
    float smallTopLeft = sdSphere(pos - smallTopLeftPos, uSmallTopLeftRadius);

    vec3 bottomRightPos = screenToWorld(vec2(0.82, 0.18))
      + vec3(sin(driftT * 0.88 + 3.4) * 0.25, cos(driftT + 0.9) * 0.25, 0.0);
    float bottomRight = sdSphere(pos - bottomRightPos, uFixedBottomRightRadius);

    vec3 smallBottomRightPos = screenToWorld(vec2(0.68, 0.30))
      + vec3(cos(driftT * 0.79 + 1.7) * 0.22, sin(driftT * 0.93 + 2.6) * 0.22, 0.0);
    float smallBottomRight = sdSphere(pos - smallBottomRightPos, uSmallBottomRightRadius);

    float t = uTime * uAnimationSpeed;

    float distToCenter = getDistanceToCenter(uMousePosition);
    float mixFactor = smoothstep(0.0, 1.0, distToCenter);
    float dynamicMovementScale = mix(uMinMovementScale, uMaxMovementScale, mixFactor);

    for (int i = 0; i < 10; i++) {
      if (i >= uSphereCount) break;

      float fi = float(i);
      float phaseOffset = uPhaseOffsets[i];
      float speed = (0.35 + fi * 0.05) * uSpeedOffsets[i];
      float radius = 0.12 + mod(fi, 3.0) * 0.06;
      float orbitRadius = (0.35 + mod(fi, 3.0) * 0.18) * dynamicMovementScale;

      float distToCursor = length(vec3(0.0) - uCursorSphere);
      float proximityScale = 1.0 + (1.0 - smoothstep(0.0, 1.0, distToCursor)) * 0.5;
      orbitRadius *= proximityScale;

      vec3 offset = vec3(
        sin(t * speed + phaseOffset) * orbitRadius * 0.8
          + sin(t * speed * 0.37 + phaseOffset * 1.9) * orbitRadius * 0.25,
        cos(t * speed * 0.85 + phaseOffset * 1.3) * orbitRadius * 0.6
          + cos(t * speed * 0.29 + phaseOffset * 0.7) * orbitRadius * 0.22,
        sin(t * speed * 0.5 + phaseOffset) * 0.3
      );

      vec3 toCursor = uCursorSphere - offset;
      float cursorDist = length(toCursor);
      if (cursorDist < uMergeDistance && cursorDist > 0.0) {
        float attraction = (1.0 - cursorDist / uMergeDistance) * 0.3;
        offset += normalize(toCursor) * attraction;
      }

      float movingSphere = sdSphere(pos - offset, radius);

      float blend = 0.05;
      if (cursorDist < uMergeDistance) {
        float influence = 1.0 - (cursorDist / uMergeDistance);
        blend = mix(0.05, uSmoothness, influence * influence * influence);
      }

      result = smin(result, movingSphere, blend);
    }

    float cursorBall = sdSphere(pos - uCursorSphere, uCursorRadius);
    float topLeftGroup = smin(topLeft, smallTopLeft, 0.4);
    float bottomRightGroup = smin(bottomRight, smallBottomRight, 0.4);

    result = smin(result, topLeftGroup, 0.3);
    result = smin(result, bottomRightGroup, 0.3);
    result = smin(result, cursorBall, uSmoothness);

    return result;
  }

  vec3 calcNormal(vec3 p) {
    float eps = 0.001;
    return normalize(vec3(
      sceneSDF(p + vec3(eps, 0, 0)) - sceneSDF(p - vec3(eps, 0, 0)),
      sceneSDF(p + vec3(0, eps, 0)) - sceneSDF(p - vec3(0, eps, 0)),
      sceneSDF(p + vec3(0, 0, eps)) - sceneSDF(p - vec3(0, 0, eps))
    ));
  }

  float ambientOcclusion(vec3 p, vec3 n) {
    float occ = 0.0;
    float weight = 1.0;
    // 4 samples — one third fewer than reference, near-identical result on moody preset
    for (int i = 0; i < 4; i++) {
      float dist = 0.015 + 0.03 * float(i * i);
      float h = sceneSDF(p + n * dist);
      occ += (dist - h) * weight;
      weight *= 0.8;
    }
    return clamp(1.0 - occ, 0.0, 1.0);
  }

  float softShadow(vec3 ro, vec3 rd, float mint, float maxt, float k) {
    float result = 1.0;
    float t = mint;
    // 12 iterations instead of 20 — hard to tell apart on this preset
    for (int i = 0; i < 12; i++) {
      if (t >= maxt) break;
      float h = sceneSDF(ro + rd * t);
      if (h < EPSILON) return 0.0;
      result = min(result, k * h / t);
      t += h;
    }
    return result;
  }

  float rayMarch(vec3 ro, vec3 rd) {
    float t = 0.0;
    for (int i = 0; i < 48; i++) {
      vec3 p = ro + rd * t;
      float d = sceneSDF(p);
      if (d < EPSILON) return t;
      if (t > 5.0) break;
      t += d * 0.9;
    }
    return -1.0;
  }

  vec3 lighting(vec3 p, vec3 rd, float t) {
    if (t < 0.0) return vec3(0.0);

    vec3 normal = calcNormal(p);
    vec3 viewDir = -rd;
    vec3 baseColor = uSphereColor;

    float ao = ambientOcclusion(p, normal);
    vec3 ambient = uLightColor * uAmbientIntensity * ao;
    vec3 lightDir = normalize(uLightPosition);
    float diff = max(dot(normal, lightDir), 0.0);
    float shadow = softShadow(p, lightDir, 0.01, 10.0, 20.0);
    vec3 diffuse = uLightColor * diff * uDiffuseIntensity * shadow;

    vec3 reflectDir = reflect(-lightDir, normal);
    float spec = pow(max(dot(viewDir, reflectDir), 0.0), uSpecularPower);
    float fresnel = pow(1.0 - max(dot(viewDir, normal), 0.0), uFresnelPower);
    vec3 specular = uLightColor * spec * uSpecularIntensity * fresnel;
    vec3 fresnelRim = uLightColor * fresnel * 0.4;

    float distToCursor = length(p - uCursorSphere);
    if (distToCursor < uCursorRadius + 0.4) {
      float highlight = 1.0 - smoothstep(0.0, uCursorRadius + 0.4, distToCursor);
      specular += uLightColor * highlight * 0.2;
      float glow = exp(-distToCursor * 3.0) * 0.15;
      ambient += uLightColor * glow * 0.5;
    }

    vec3 color = (baseColor + ambient + diffuse + specular + fresnelRim) * ao;
    color = pow(color, vec3(uContrast * 0.9));
    color = color / (color + vec3(0.8));
    return color;
  }

  float cursorGlow(vec3 worldPos) {
    float dist = length(worldPos.xy - uCursorSphere.xy);
    float glow = 1.0 - smoothstep(0.0, uCursorGlowRadius, dist);
    return pow(glow, 2.0) * uCursorGlowIntensity;
  }

  void main() {
    vec2 uv = (gl_FragCoord.xy * 2.0 - uActualResolution.xy) / uActualResolution.xy;
    uv.x *= uResolution.x / uResolution.y;

    vec3 ro = vec3(uv * 2.0, -1.0);
    vec3 rd = vec3(0.0, 0.0, 1.0);

    float t = rayMarch(ro, rd);
    vec3 p = ro + rd * t;
    vec3 color = lighting(p, rd, t);

    float glow = cursorGlow(ro);
    vec3 glowContribution = uCursorGlowColor * glow;

    if (t > 0.0 && uStipple > 0.5) {
      // Light theme: stippled print. A white core breaks into black grain toward the
      // silhouette, like engraving, so the spheres sit in the paper's own grain.
      vec3 n = calcNormal(p);
      float facing = max(dot(-rd, n), 0.0);
      float ndl = dot(n, normalize(uLightPosition)) * 0.5 + 0.5;
      float lit = clamp(facing * 1.1 + (ndl - 0.5) * 0.45, 0.0, 1.0);
      float dark = smoothstep(0.08, 0.95, 1.0 - lit);
      // One grain cell per CSS pixel, so dots stay crisp instead of blending into grey.
      vec2 cell = floor(gl_FragCoord.xy / max(uPixelRatio, 1.0));
      float grain = fract(sin(dot(cell, vec2(12.9898, 78.233))) * 43758.5453);
      vec3 ink = vec3(0.07);
      vec3 paper = vec3(0.97);
      gl_FragColor = vec4(grain < dark ? ink : paper, 1.0);
    } else if (t > 0.0) {
      float fogAmount = 1.0 - exp(-t * uFogDensity);
      color = mix(color, uBackgroundColor.rgb, fogAmount * 0.3);
      color += glowContribution * 0.3;
      gl_FragColor = vec4(color, 1.0);
    } else {
      if (glow > 0.01) gl_FragColor = vec4(glowContribution, glow * 0.8);
      else gl_FragColor = vec4(0.0);
    }

    // Soft feather at the section's edges — any sphere approaching a border
    // dissolves into the paper instead of getting cut.
    vec2 uvNorm = gl_FragCoord.xy / uActualResolution.xy;
    float edgeFade = smoothstep(0.0, 0.12, uvNorm.x)
                   * smoothstep(0.0, 0.12, uvNorm.y)
                   * smoothstep(0.0, 0.12, 1.0 - uvNorm.x)
                   * smoothstep(0.0, 0.12, 1.0 - uvNorm.y);
    gl_FragColor.a *= edgeFade;
    gl_FragColor.rgb *= edgeFade;

    // Per-pixel intro fade — smoother than fading the canvas element
    gl_FragColor.a *= uOpacity;
    gl_FragColor.rgb *= uOpacity;
  }
`;

// Moody preset — dark bg, subtle white shimmer.
const preset = {
  sphereCount: 6,
  ambientIntensity: 0.02,
  diffuseIntensity: 0.6,
  specularIntensity: 1.8,
  specularPower: 8,
  fresnelPower: 1.2,
  backgroundColor: new THREE.Color(0x050505),
  sphereColor: new THREE.Color(0x000000),
  lightColor: new THREE.Color(0xffffff),
  lightPosition: new THREE.Vector3(1, 1, 1),
  smoothness: 0.3,
  contrast: 2.0,
  fogDensity: 0.12,
  cursorGlowIntensity: 0.4,
  cursorGlowRadius: 1.2,
  cursorGlowColor: new THREE.Color(0xffffff),
};

const staticSettings = {
  fixedTopLeftRadius: 0.75,
  fixedBottomRightRadius: 0.75,
  smallTopLeftRadius: 0.3,
  smallBottomRightRadius: 0.35,
  cursorRadiusMin: 0.08,
  cursorRadiusMax: 0.15,
  animationSpeed: 0.22,
  movementScale: 1.35,
  mouseSmoothness: 0.1,
  mergeDistance: 1.5,
  minMovementScale: 0.3,
  maxMovementScale: 1.0,
};

export function HeroMetaballs({ pauseTargetId = "hero" }: { pauseTargetId?: string } = {}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const pixelRatio = Math.min(window.devicePixelRatio || 1, isMobile ? 1.25 : 1.5);

    const rect = container.getBoundingClientRect();
    let width = Math.max(rect.width, 1);
    let height = Math.max(rect.height, 1);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile,
      alpha: true,
      powerPreference: isMobile ? "default" : "high-performance",
    });
    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const canvas = renderer.domElement;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.display = "block";
    container.appendChild(canvas);

    const targetMouse = new THREE.Vector2(0.5, 0.5);
    const mouse = new THREE.Vector2(0.5, 0.5);
    const cursorSphere = new THREE.Vector3(0, 0, 0);

    // Random per-sphere seeds baked once — fresh reload = different choreography.
    const phaseOffsets = new Float32Array(10);
    const speedOffsets = new Float32Array(10);
    for (let i = 0; i < 10; i++) {
      phaseOffsets[i] = Math.random() * Math.PI * 2;
      speedOffsets[i] = 0.75 + Math.random() * 0.5;
    }

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2(width, height) },
        uActualResolution: { value: new THREE.Vector2(width * pixelRatio, height * pixelRatio) },
        uMousePosition: { value: mouse },
        uCursorSphere: { value: cursorSphere },
        uCursorRadius: { value: staticSettings.cursorRadiusMin },
        uSphereCount: { value: isMobile ? 4 : preset.sphereCount },
        uFixedTopLeftRadius: { value: staticSettings.fixedTopLeftRadius },
        uFixedBottomRightRadius: { value: staticSettings.fixedBottomRightRadius },
        uSmallTopLeftRadius: { value: staticSettings.smallTopLeftRadius },
        uSmallBottomRightRadius: { value: staticSettings.smallBottomRightRadius },
        uMergeDistance: { value: staticSettings.mergeDistance },
        uSmoothness: { value: preset.smoothness },
        uAmbientIntensity: { value: preset.ambientIntensity },
        uDiffuseIntensity: { value: preset.diffuseIntensity },
        uSpecularIntensity: { value: preset.specularIntensity },
        uSpecularPower: { value: preset.specularPower },
        uFresnelPower: { value: preset.fresnelPower },
        uBackgroundColor: { value: preset.backgroundColor },
        uSphereColor: { value: preset.sphereColor },
        uLightColor: { value: preset.lightColor },
        uLightPosition: { value: preset.lightPosition },
        uContrast: { value: preset.contrast },
        uFogDensity: { value: preset.fogDensity },
        uAnimationSpeed: { value: preset.animationSpeed },
        uMovementScale: { value: staticSettings.movementScale },
        uMinMovementScale: { value: staticSettings.minMovementScale },
        uMaxMovementScale: { value: staticSettings.maxMovementScale },
        uCursorGlowIntensity: { value: preset.cursorGlowIntensity },
        uCursorGlowRadius: { value: preset.cursorGlowRadius },
        uCursorGlowColor: { value: preset.cursorGlowColor },
        uOpacity: { value: 0 },
        uPixelRatio: { value: pixelRatio },
        uStipple: { value: document.documentElement.dataset.theme === "light" ? 1 : 0 },
        uPhaseOffsets: { value: phaseOffsets },
        uSpeedOffsets: { value: speedOffsets },
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      // The shader already multiplies rgb by alpha (edge fade, intro fade); blend it that way
      // so white stippled spheres stay white instead of being darkened a second time.
      premultipliedAlpha: true,
    });

    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    scene.add(mesh);

    // Accumulated shader time — survives pauses without jumping forward.
    let uTime = 2.5;
    let lastFrameMs = performance.now();

    let introTime = 0;
    const INTRO_DURATION = 1.6;

    function screenToWorldJS(nx: number, ny: number) {
      const uvx = nx * 2.0 - 1.0;
      const uvy = ny * 2.0 - 1.0;
      const aspect = width / height;
      return new THREE.Vector3(uvx * aspect * 2.0, uvy * 2.0, 0.0);
    }

    function handlePointer(clientX: number, clientY: number) {
      const r = container.getBoundingClientRect();
      const nx = (clientX - r.left) / r.width;
      const ny = 1.0 - (clientY - r.top) / r.height;
      targetMouse.set(Math.max(0, Math.min(1, nx)), Math.max(0, Math.min(1, ny)));
      const world = screenToWorldJS(targetMouse.x, targetMouse.y);
      cursorSphere.copy(world);
      material.uniforms.uCursorSphere.value.copy(cursorSphere);
    }

    function onMouseMove(e: MouseEvent) {
      handlePointer(e.clientX, e.clientY);
    }
    function onTouchMove(e: TouchEvent) {
      if (e.touches.length > 0) handlePointer(e.touches[0].clientX, e.touches[0].clientY);
    }

    function onResize() {
      const r = container.getBoundingClientRect();
      width = Math.max(r.width, 1);
      height = Math.max(r.height, 1);
      renderer.setSize(width, height);
      material.uniforms.uResolution.value.set(width, height);
      material.uniforms.uActualResolution.value.set(width * pixelRatio, height * pixelRatio);
    }

    handlePointer(rect.left + rect.width / 2, rect.top + rect.height / 2);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(container);

    let rafId = 0;
    let disposed = false;
    let heroVisible = true;
    let tabVisible = !document.hidden;
    let scrolling = false;

    function isPaused() {
      return disposed || !heroVisible || !tabVisible || scrolling;
    }

    function render() {
      if (isPaused()) {
        rafId = 0;
        return;
      }
      const now = performance.now();
      const dt = Math.min((now - lastFrameMs) / 1000, 0.05);
      lastFrameMs = now;
      uTime += dt;

      if (introTime < INTRO_DURATION) {
        introTime = Math.min(introTime + dt, INTRO_DURATION);
        const t = introTime / INTRO_DURATION;
        material.uniforms.uOpacity.value = 1 - Math.pow(1 - t, 3);
      }

      mouse.x += (targetMouse.x - mouse.x) * staticSettings.mouseSmoothness;
      mouse.y += (targetMouse.y - mouse.y) * staticSettings.mouseSmoothness;
      material.uniforms.uTime.value = uTime;
      renderer.render(scene, camera);
      rafId = requestAnimationFrame(render);
    }

    function resume() {
      if (isPaused() || rafId) return;
      lastFrameMs = performance.now();
      rafId = requestAnimationFrame(render);
    }

    // Pause when hero section is off-screen
    const heroEl = document.getElementById(pauseTargetId);
    const io = heroEl && new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        heroVisible = entry.isIntersecting;
        if (heroVisible) resume();
      },
      { threshold: 0 }
    );
    if (io && heroEl) io.observe(heroEl);

    // Pause when tab is hidden
    function onVisibilityChange() {
      tabVisible = !document.hidden;
      if (tabVisible) resume();
    }
    document.addEventListener("visibilitychange", onVisibilityChange);

    // Pause during active scroll
    let scrollIdleTimer: ReturnType<typeof setTimeout> | null = null;
    function onScroll() {
      scrolling = true;
      if (scrollIdleTimer) clearTimeout(scrollIdleTimer);
      scrollIdleTimer = setTimeout(() => {
        scrolling = false;
        resume();
      }, 120);
    }
    window.addEventListener("scroll", onScroll, { passive: true });

    // Follow the theme toggle: stippled spheres in light, liquid metal in dark.
    const themeObserver = new MutationObserver(() => {
      material.uniforms.uStipple.value = document.documentElement.dataset.theme === "light" ? 1 : 0;
      renderer.render(scene, camera);
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    // Always draw one initial frame so the canvas isn't blank if paused
    material.uniforms.uOpacity.value = 1;
    material.uniforms.uTime.value = uTime;
    renderer.render(scene, camera);

    if (reduceMotion) {
      material.uniforms.uOpacity.value = 1;
    } else {
      material.uniforms.uOpacity.value = 0;
      render();
    }

    return () => {
      disposed = true;
      cancelAnimationFrame(rafId);
      if (scrollIdleTimer) clearTimeout(scrollIdleTimer);
      io?.disconnect();
      themeObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      resizeObserver.disconnect();
      mesh.geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (canvas.parentNode === container) container.removeChild(canvas);
    };
  }, [pauseTargetId]);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    />
  );
}
