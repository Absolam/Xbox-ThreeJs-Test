import { useRef } from "react";
import {
  CameraShake,
  OrbitControls,
  Stats,
  useHelper,
} from "@react-three/drei";
import {
  SpotLightHelper,
  PointLightHelper,
  GridHelper,
  CameraHelper,
  PerspectiveCamera,
} from "three";
import { useThree } from "@react-three/fiber";
import { softShadows } from "@react-three/drei";

export const Scene = () => {
  const ref = useRef();
  const spotLight1 = useRef();
  const spotLight2 = useRef();
  const camera = useRef();
  // useHelper(spotLight1, PointLightHelper, "cyan");
  // useHelper(spotLight2, PointLightHelper, "red");

  return (
    <>
      {/* <OrbitControls ref={ref} /> */}
      <Stats />
      {/* <gridHelper args={[50, 50]} /> */}
      <ambientLight intensity={1.4} color="#babccf" />
      <spotLight
        castShadow
        shadow-mapSize-height={1024 / 2}
        shadow-mapSize-width={1024 / 2}
        intensity={4}
        color="#babccf"
        distance={15}
        angle={Math.PI / 4}
        position={[1.7, 2, 2]}
        ref={spotLight2}
      />
      <mesh
        rotation={[Math.PI / -2, 0, 0]}
        position={[0, -1.5, 0]}
        scale={30}
        receiveShadow
      >
        <planeGeometry />
        <meshStandardMaterial roughness={0.8} color="#191a1f" />
      </mesh>
    </>
  );
};
