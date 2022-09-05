import { Canvas } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import { Center, Float, Loader } from "@react-three/drei";
import { Scene } from "./Components/Scene";
import { XboxAndController } from "./Components/XboxAndController";
import { Frigate } from "./Components/Frigate";
import { CustomCameraShake } from "./Components/CustomCameraShake";
import { Custom3DText } from "./Components/Custom3DText";
import { CovenantCarrier } from "./Components/CovenantCarrier";

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
              rotationIntensity={0.01}
              floatIntensity={1.1}
              floatingRange={[-0.02, 0.02]}
            >
              <Frigate
                position={[-5, 0, -1.3]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                direction="x"
                scale={0.0005}
                speed={0.003}
                stoppingPosition={-3.5}
              />
            </Float>
          </group>
          <group>
            <Float
              rotationIntensity={0.01}
              floatIntensity={1.7}
              floatingRange={[-0.02, 0.02]}
            >
              <Frigate
                position={[-5.4, -0.3, -1.2]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                direction="x"
                scale={0.0007}
                speed={0.003}
                stoppingPosition={-3.7}
              />
            </Float>
          </group>
          <Float
            rotationIntensity={0.01}
            floatIntensity={1.7}
            floatingRange={[-0.02, 0.04]}
          >
            <CovenantCarrier />
          </Float>
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
