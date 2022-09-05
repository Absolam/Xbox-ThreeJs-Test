import { Suspense } from "react";
import { PresentationControls, Float } from "@react-three/drei";
import { Xbox } from "./Xbox_model";
import { Controller } from "./Xbox_controller";

export const XboxAndController = () => {
  return (
    <Suspense fallback={null}>
      <Float speed={0} rotationIntensity={0.1} floatingRange={[0.4, 0.4]}>
        <group position={[1.5, -1.6, 0]} rotation={[0, Math.PI / 6, 0]}>
          <Xbox />
          <Controller />
        </group>
      </Float>
    </Suspense>
  );
};
