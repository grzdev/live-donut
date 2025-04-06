import { Donut } from '@/components/Donut';
import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';

export default function Home() {
  return (
    <div className='h-[100vh] w-[100vw]'>
      <Canvas>
        <Environment files="/hdrs/kitchen.hdr" background/>
        <OrbitControls/>
        <Donut/>
      </Canvas>
    </div>
  );
}
