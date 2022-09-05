/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: NepsterCZ (https://sketchfab.com/NepsterCZ)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/halo-unsc-panama-mulsanne-class-8102cecc825e4fafbc1d217c9c4c2bb7
title: Halo - UNSC Panama | Mulsanne-class
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Frigate(props) {
  const { nodes, materials } = useGLTF("/halo_frigate/scene.gltf");
  const frigate_ref = useRef();
  useFrame((state, delta) => {
    frigate_ref.current.position.x += props.speed;
  });
  return (
    <group {...props} dispose={null} ref={frigate_ref}>
      <group position={[-0.3, 0, -1.4]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            geometry={nodes.UNSC_Panama_Frigate_0.geometry}
            material={materials.Trims}
            receiveShadow
          />
          <mesh
            geometry={nodes.UNSC_Panama_Frigate_1.geometry}
            material={materials.Glass}
          />
          <mesh
            geometry={nodes.UNSC_Panama_Frigate_2.geometry}
            material={materials.Panel_Dark}
            receiveShadow
          />
          <mesh
            geometry={nodes.UNSC_Panama_Frigate_3.geometry}
            material={materials.Panel_Light}
            receiveShadow
          />
          <mesh
            geometry={nodes.UNSC_Panama_Frigate_4.geometry}
            material={materials.Greeble_Mid}
            receiveShadow
          />
          <mesh
            geometry={nodes.UNSC_Panama_Frigate_4_1.geometry}
            material={materials.Greeble_Mid}
            receiveShadow
          />
          <mesh
            geometry={nodes.UNSC_Panama_Frigate_5.geometry}
            material={materials.Emmisive_White}
          />
          <mesh
            geometry={nodes.UNSC_Panama_Frigate_6.geometry}
            material={materials.Common_Parts}
            receiveShadow
          />
          <mesh
            geometry={nodes.UNSC_Panama_Frigate_7.geometry}
            material={materials.Greeble_Light}
          />
          <mesh
            geometry={nodes.UNSC_Panama_Frigate_8.geometry}
            material={materials.Panel_Mid}
            receiveShadow
          />
          <mesh
            geometry={nodes.UNSC_Panama_Frigate_9.geometry}
            material={materials.Decals}
            receiveShadow
          />
          <mesh
            geometry={nodes.UNSC_Panama_Frigate_10.geometry}
            material={materials.Greeble_Tan}
            receiveShadow
          />
          <mesh
            geometry={nodes.UNSC_Panama_Frigate_11.geometry}
            material={materials.Greeble_Brown}
            receiveShadow
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/halo_frigate/scene.gltf");