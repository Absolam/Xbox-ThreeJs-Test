import { Canvas } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import { Float, Loader } from "@react-three/drei";
import { Scene } from "./Components/Scene";
import { XboxAndController } from "./Components/XboxAndController";
import { Frigate } from "./Components/Frigate";
import { CustomCameraShake } from "./Components/CustomCameraShake";
import { Custom3DText } from "./Components/Custom3DText";

function App() {
  const ref = useRef();

  return (
    <div id="canvas-container">
      <Canvas
        shadows
        orthographic
        camera={{ zoom: 200, far: 18, left: 1, right: 1, top: 1, bottom: 1 }}
      >
        <color args={["#191a1f"]} attach="background" />
        <group position={[1, 0, 4]} rotation={[0.33, 0, 0]}>
          <Scene />
          <Custom3DText
            position={[-4.7, -1.5, 0]}
            color="#fff"
            rotation={[0, Math.PI / 6, 0]}
            size={0.4}
          >
            Xbox Series X
          </Custom3DText>

          <XboxAndController />
          <group>
            <Float
              rotationIntensity={0.2}
              floatIntensity={2}
              floatingRange={[-0.08, 0.05]}
            >
              <Frigate
                position={[-5, 0, -1.3]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={0.001}
                speed={0.003}
              />
            </Float>
          </group>
          <group>
            <Float
              rotationIntensity={0.2}
              floatIntensity={2}
              floatingRange={[-0.05, 0.05]}
            >
              <Frigate
                position={[0.2, 0, -2]}
                rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                scale={0.0008}
                speed={-0.001}
              />
            </Float>
          </group>
          {/* <CustomText color="#fff" position={[-3, -1.2, 0]} fontSize={0.5}>
            Xbox Series X
          </CustomText> */}
        </group>
      </Canvas>
      <Loader />
    </div>
  );
}

export default App;
