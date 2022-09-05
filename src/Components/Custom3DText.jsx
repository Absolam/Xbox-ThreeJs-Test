import { Text3D } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export const Custom3DText = ({ position, size, children, color, rotation }) => {
  const { viewport } = useThree();
  return (
    <Text3D
      position={position}
      size={size}
      rotation={rotation}
      height={0.03}
      font="./Font/Roboto_Regular.json"
      castShadow
    >
      {children}
      <meshStandardMaterial color={color} />
    </Text3D>
  );
};
