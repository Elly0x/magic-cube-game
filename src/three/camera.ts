import * as THREE from 'three';

export function createCamera(): THREE.PerspectiveCamera {
  const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(3, 3, 5);
  camera.lookAt(0, 0, 0);
  return camera;
}

export function updateCameraOnResize(camera: THREE.PerspectiveCamera) {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
}
