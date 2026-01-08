import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Cube: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const materials = [
      new THREE.MeshStandardMaterial({ color: 0xff0000 }),
      new THREE.MeshStandardMaterial({ color: 0x00ff00 }),
      new THREE.MeshStandardMaterial({ color: 0x0000ff }),
      new THREE.MeshStandardMaterial({ color: 0xffff00 }),
      new THREE.MeshStandardMaterial({ color: 0xff00ff }),
      new THREE.MeshStandardMaterial({ color: 0x00ffff })
    ];
    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);

    camera.position.z = 3;

    let rafId: number;
    const animate = () => {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100%', minHeight: 400 }} />;
};

export default Cube;
