"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const NODE_COUNT = 58;
const LINK_DISTANCE = 2.35;

export default function HeroMesh() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const nodes = Array.from({ length: NODE_COUNT }, (_, index) => {
      const angle = (index / NODE_COUNT) * Math.PI * 2;
      const radius = 1.2 + Math.random() * 4.6;
      return new THREE.Vector3(Math.cos(angle) * radius + (Math.random() - 0.5), Math.sin(angle) * radius * 0.62 + (Math.random() - 0.5), (Math.random() - 0.5) * 2.2);
    });

    const pointGeometry = new THREE.BufferGeometry().setFromPoints(nodes);
    const pointMaterial = new THREE.PointsMaterial({ color: 0x00d4ff, size: 0.045, transparent: true, opacity: 0.95 });
    const points = new THREE.Points(pointGeometry, pointMaterial);
    scene.add(points);

    const lineGeometry = new THREE.BufferGeometry();
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x7b2fbe, transparent: true, opacity: 0.24 });
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    const resize = () => {
      const width = mount.clientWidth || window.innerWidth;
      const height = mount.clientHeight || window.innerHeight;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    const updateLines = () => {
      const positions: number[] = [];
      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          if (nodes[i].distanceTo(nodes[j]) < LINK_DISTANCE) positions.push(nodes[i].x, nodes[i].y, nodes[i].z, nodes[j].x, nodes[j].y, nodes[j].z);
        }
      }
      lineGeometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    };

    let frame = 0;
    let scrollY = window.scrollY;
    const onScroll = () => { scrollY = window.scrollY; };
    const animate = () => {
      frame = requestAnimationFrame(animate);
      const time = performance.now() * 0.00018;
      const scrollDrift = scrollY * 0.00035;
      nodes.forEach((node, index) => {
        node.x += Math.sin(time * 5 + index) * 0.0009;
        node.y += Math.cos(time * 4 + index * 0.7) * 0.0008;
      });
      points.rotation.z = time * 0.75 + scrollDrift;
      points.rotation.x = Math.sin(time) * 0.11;
      lines.rotation.copy(points.rotation);
      pointGeometry.setFromPoints(nodes);
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
      pointGeometry.dispose();
      lineGeometry.dispose();
      pointMaterial.dispose();
      lineMaterial.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={mountRef} aria-hidden className="pointer-events-none fixed inset-0 -z-10 opacity-90" />;
}
