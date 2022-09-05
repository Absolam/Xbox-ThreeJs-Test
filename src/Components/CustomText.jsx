import { Text } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export const CustomText = ({
  children,
  position,
  fontSize,
  color,
  maxWidth,
}) => {
  const { viewport } = useThree();
  return (
    <Text
      color={color}
      anchorX="center"
      anchorY="middle"
      position={position}
      fontSize={fontSize}
      maxWidth={(viewport.width / 100) * maxWidth}
      characters="abcdefghijklmnopqrstuvwxyz0123456789!"
      castShadow
    >
      {children}
    </Text>
  );
};
