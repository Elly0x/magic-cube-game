import * as THREE from 'three';

export function createRenderer(): THREE.WebGLRenderer {
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x0a0a0a);
  renderer.shadowMap.enabled = true;
  return renderer;
}

export function attachRendererTo(container: HTMLElement, renderer: THREE.WebGLRenderer) {
  container.appendChild(renderer.domElement);
  renderer.setSize(container.clientWidth, container.clientHeight);
}
