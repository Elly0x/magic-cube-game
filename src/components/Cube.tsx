import React from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

type Props = { size?: number; };

const Cube: React.FC<Props> = ({ size = 1 }) => {
  const ref = React.useRef<Mesh | null>(null);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.2;
  });

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial color="#00aaff" />
    </mesh>
  );
};

export default Cube;
