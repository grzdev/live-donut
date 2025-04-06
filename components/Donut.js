import { useGLTF } from '@react-three/drei';

export function Donut() {
  const { scene } = useGLTF('/models/donut2.glb'); // drop it in public/models/

  return <primitive object={scene} />;
};

useGLTF.preload('/models/donut2.glb');
