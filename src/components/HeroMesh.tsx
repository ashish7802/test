"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const NODE_COUNT = 72;
const LINK_DISTANCE = 2.45;
const STAR_COUNT = 420;

type CanvasSize = {
  width: number;
  height: number;
};

const getSize = (element: HTMLElement): CanvasSize => ({
  width: element.clientWidth || window.innerWidth,
  height: element.clientHeight || window.innerHeight,
});

const createNodes = () =>
  Array.from({ length: NODE_COUNT }, (_, index) => {
    const ring = index % 3;
    const angle = (index / NODE_COUNT) * Math.PI * 2 * (ring + 1.15);
    const radius = 1.45 + ring * 1.25 + Math.random() * 1.55;

    return new THREE.Vector3(
      Math.cos(angle) * radius + (Math.random() - 0.5) * 0.55,
      Math.sin(angle) * radius * 0.68 + (Math.random() - 0.5) * 0.55,
      Math.sin(angle * 1.7) * 1.25 + (Math.random() - 0.5) * 1.25,
    );
  });

const createStarField = () => {
  const positions = new Float32Array(STAR_COUNT * 3);

  for (let index = 0; index < STAR_COUNT; index += 1) {
    const stride = index * 3;
    positions[stride] = (Math.random() - 0.5) * 22;
    positions[stride + 1] = (Math.random() - 0.5) * 14;
    positions[stride + 2] = -4 - Math.random() * 14;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  return geometry;
};

export default function HeroMesh() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const baseNodes = createNodes();
    const animatedNodes = baseNodes.map((node) => node.clone());
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0a0f, 0.055);

    const camera = new THREE.PerspectiveCamera(58, 1, 0.1, 100);
    camera.position.set(0, 0.15, 8.2);

    let renderer: THREE.WebGLRenderer;

    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
    } catch {
      mount.classList.add("hero-mesh-fallback");
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const rig = new THREE.Group();
    scene.add(rig);

    const ambientLight = new THREE.AmbientLight(0x9adfff, 0.45);
    const cyanLight = new THREE.PointLight(0x00d4ff, 24, 18);
    cyanLight.position.set(-3.5, 2.5, 4);
    const redLight = new THREE.PointLight(0xff3366, 16, 14);
    redLight.position.set(3.5, -2.5, 3.5);
    scene.add(ambientLight, cyanLight, redLight);

    const coreGeometry = new THREE.IcosahedronGeometry(1.05, 2);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x111827,
      emissive: 0x00d4ff,
      emissiveIntensity: 0.45,
      metalness: 0.72,
      roughness: 0.22,
      transparent: true,
      opacity: 0.72,
      wireframe: true,
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    rig.add(core);

    const haloGeometry = new THREE.TorusKnotGeometry(1.85, 0.018, 180, 12, 2, 5);
    const haloMaterial = new THREE.MeshBasicMaterial({ color: 0xff3366, transparent: true, opacity: 0.7 });
    const halo = new THREE.Mesh(haloGeometry, haloMaterial);
    halo.rotation.x = Math.PI * 0.5;
    rig.add(halo);

    const orbitGeometry = new THREE.TorusGeometry(2.75, 0.01, 8, 160);
    const orbitMaterial = new THREE.MeshBasicMaterial({ color: 0x7b2fbe, transparent: true, opacity: 0.44 });
    const orbits = [0, 1, 2].map((_, index) => {
      const orbit = new THREE.Mesh(orbitGeometry, orbitMaterial.clone());
      orbit.rotation.set(index * 0.72, index * 1.04, index * 0.38);
      rig.add(orbit);
      return orbit;
    });

    const pointGeometry = new THREE.BufferGeometry().setFromPoints(animatedNodes);
    const pointMaterial = new THREE.PointsMaterial({
      color: 0x00d4ff,
      opacity: 0.95,
      size: 0.055,
      transparent: true,
    });
    const points = new THREE.Points(pointGeometry, pointMaterial);
    rig.add(points);

    const lineGeometry = new THREE.BufferGeometry();
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x7b2fbe,
      opacity: 0.34,
      transparent: true,
    });
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    rig.add(lines);

    const starGeometry = createStarField();
    const starMaterial = new THREE.PointsMaterial({
      color: 0xd8f7ff,
      opacity: 0.42,
      size: 0.018,
      transparent: true,
    });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    const resize = () => {
      const { width, height } = getSize(mount);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    const updateLines = () => {
      const positions: number[] = [];

      for (let i = 0; i < animatedNodes.length; i += 1) {
        for (let j = i + 1; j < animatedNodes.length; j += 1) {
          if (animatedNodes[i].distanceTo(animatedNodes[j]) < LINK_DISTANCE) {
            positions.push(
              animatedNodes[i].x,
              animatedNodes[i].y,
              animatedNodes[i].z,
              animatedNodes[j].x,
              animatedNodes[j].y,
              animatedNodes[j].z,
            );
          }
        }
      }

      lineGeometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    };

    let frame = 0;
    let scrollY = window.scrollY;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const onScroll = () => {
      scrollY = window.scrollY;
    };

    const animate = () => {
      frame = requestAnimationFrame(animate);
      const time = performance.now() * 0.001;
      const motionScale = reducedMotion ? 0.18 : 1;
      const scrollDrift = scrollY * 0.00038;

      animatedNodes.forEach((node, index) => {
        const base = baseNodes[index];
        node.set(
          base.x + Math.sin(time * 0.85 + index) * 0.22 * motionScale,
          base.y + Math.cos(time * 0.72 + index * 0.7) * 0.18 * motionScale,
          base.z + Math.sin(time * 0.95 + index * 0.43) * 0.2 * motionScale,
        );
      });

      rig.rotation.y = time * 0.09 * motionScale + scrollDrift;
      rig.rotation.x = Math.sin(time * 0.25) * 0.14 * motionScale;
      rig.rotation.z = Math.cos(time * 0.2) * 0.08 * motionScale;
      core.rotation.y = time * 0.65 * motionScale;
      core.rotation.x = time * 0.42 * motionScale;
      halo.rotation.z = -time * 0.38 * motionScale;
      orbits.forEach((orbit, index) => {
        orbit.rotation.z += (0.0018 + index * 0.0008) * motionScale;
        orbit.rotation.x += (0.0012 + index * 0.0005) * motionScale;
      });
      stars.rotation.y = time * 0.012 * motionScale + scrollDrift * 0.25;
      camera.position.y = 0.15 + Math.sin(time * 0.28) * 0.16 * motionScale;

      pointGeometry.setFromPoints(animatedNodes);
      updateLines();
      renderer.render(scene, camera);
    };

    resize();
    updateLines();
    animate();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      coreGeometry.dispose();
      coreMaterial.dispose();
      haloGeometry.dispose();
      haloMaterial.dispose();
      orbitGeometry.dispose();
      orbitMaterial.dispose();
      orbits.forEach((orbit) => (orbit.material as THREE.Material).dispose());
      pointGeometry.dispose();
      lineGeometry.dispose();
      starGeometry.dispose();
      pointMaterial.dispose();
      lineMaterial.dispose();
      starMaterial.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={mountRef} aria-hidden className="pointer-events-none fixed inset-0 -z-10 opacity-95" />;
}
