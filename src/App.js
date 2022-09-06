import { Canvas } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import { Center, Float, Loader } from "@react-three/drei";
import { Scene } from "./Components/Scene";
import { XboxAndController } from "./Components/XboxAndController";
import { Frigate } from "./Components/Frigate";
import { CustomCameraShake } from "./Components/CustomCameraShake";
import { Custom3DText } from "./Components/Custom3DText";
import { CovenantCarrier } from "./Components/CovenantCarrier";
import { Scale } from "./Scale";
import { useEffect } from "react";

function App() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  return (
    <div id="canvas-container">
      <Canvas
        shadows
        orthographic
        camera={{
          zoom: windowSize.innerWidth / 7.8,
          near: 0.01,
          far: 30,
          left: 1,
          right: 1,
          top: 3,
          bottom: 3,
        }}
      >
        <color args={["#191a1f"]} attach="background" />
        <Scale />
      </Canvas>
      <Loader />
    </div>
  );
}

export default App;
