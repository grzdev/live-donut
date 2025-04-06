
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Donut(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/donut2.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Plate"
          castShadow
          receiveShadow
          geometry={nodes.Plate.geometry}
          material={materials.Material}
          position={[0.05, 0.108, 0.081]}
        />
        <group
          name="Empty"
          position={[0.04, 0.247, 0.051]}
          rotation={[1.211, 0, 0]}
          scale={0.418}
        />
        <mesh
          name="Cylinder"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials.Sprinkles}
          position={[0.32, 0.122, -0.033]}
        />
        <mesh
          name="Cylinder001"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials.Sprinkles}
          position={[0.317, 0.122, -0.033]}
        />
        <mesh
          name="Cylinder002"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
          material={materials.Sprinkles}
          position={[0.313, 0.122, -0.033]}
        />
        <mesh
          name="Cylinder003"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003.geometry}
          material={materials.Sprinkles}
          position={[0.309, 0.122, -0.033]}
        />
        <mesh
          name="Sphere"
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={materials.Sprinkles}
          position={[0.304, 0.122, -0.033]}
        />
        <mesh
          name="donut"
          castShadow
          receiveShadow
          geometry={nodes.donut.geometry}
          material={materials['Material.001']}
          position={[0.139, 0.135, 0.088]}
          rotation={[-Math.PI, 1.375, -Math.PI]}>
          <mesh
            name="icing"
            castShadow
            receiveShadow
            geometry={nodes.icing.geometry}
            material={materials['red  icing 2']}
          />
        </mesh>
        <mesh
          name="donut001"
          castShadow
          receiveShadow
          geometry={nodes.donut001.geometry}
          material={materials['Material.001']}
          position={[-0.027, 0.135, 0.075]}>
          <mesh
            name="icing001"
            castShadow
            receiveShadow
            geometry={nodes.icing001.geometry}
            material={materials['pink  icing 2']}
          />
        </mesh>
        <mesh
          name="donut002"
          castShadow
          receiveShadow
          geometry={nodes.donut002.geometry}
          material={materials['Material.001']}
          position={[-0.035, 0.191, 0.082]}
          rotation={[-0.004, 0.507, 0.007]}>
          <mesh
            name="icing002"
            castShadow
            receiveShadow
            geometry={nodes.icing002.geometry}
            material={materials['Brown icing']}
          />
        </mesh>
        <mesh
          name="donut003"
          castShadow
          receiveShadow
          geometry={nodes.donut003.geometry}
          material={materials['Material.001']}
          position={[-0.028, 0.248, 0.09]}
          rotation={[0, -1.019, 0]}>
          <mesh
            name="icing003"
            castShadow
            receiveShadow
            geometry={nodes.icing003.geometry}
            material={materials['red  icing 2']}
          />
        </mesh>
        <mesh
          name="donut004"
          castShadow
          receiveShadow
          geometry={nodes.donut004.geometry}
          material={materials['Material.001']}
          position={[0.13, 0.19, 0.094]}
          rotation={[0, 0.262, 0]}>
          <mesh
            name="icing004"
            castShadow
            receiveShadow
            geometry={nodes.icing004.geometry}
            material={materials['pink  icing 2']}
          />
        </mesh>
        <mesh
          name="donut005"
          castShadow
          receiveShadow
          geometry={nodes.donut005.geometry}
          material={materials['Material.001']}
          position={[0.117, 0.262, 0.103]}
          rotation={[2.668, 0.912, -2.563]}>
          <mesh
            name="icing005"
            castShadow
            receiveShadow
            geometry={nodes.icing005.geometry}
            material={materials['Brown icing']}
          />
        </mesh>
        <mesh
          name="donut006"
          castShadow
          receiveShadow
          geometry={nodes.donut006.geometry}
          material={materials['Material.001']}
          position={[0.063, 0.182, -0.011]}
          rotation={[-1.059, -0.106, -0.16]}>
          <mesh
            name="icing006"
            castShadow
            receiveShadow
            geometry={nodes.icing006.geometry}
            material={materials['brown icing with sprinlles']}
          />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/donut2.glb')