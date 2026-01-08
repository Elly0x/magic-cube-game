import * as THREE from 'three';

export const defaultMaterial = new THREE.MeshStandardMaterial({ color: 0x00aaff, metalness: 0.2, roughness: 0.4 });

export function createFaceMaterial(hexColor: number) {
  return new THREE.MeshStandardMaterial({ color: hexColor, roughness: 0.3 });
}
