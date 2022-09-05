/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Xbox(props) {
  const { nodes, materials } = useGLTF("/xbox/xbox_model.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[0, Math.PI, 0]} scale={7.99}>
        <mesh geometry={nodes.Xbox.geometry} material={materials.Xbox_Button} />
        <mesh
          geometry={nodes.Xbox_1.geometry}
          material={materials.Case}
          castShadow
        />
        <mesh
          geometry={nodes.Xbox_2.geometry}
          material={materials.Green_Accent}
        />
        <mesh
          geometry={nodes.Xbox_3.geometry}
          material={materials.Xbox_Light}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/xbox/xbox_model.glb");
