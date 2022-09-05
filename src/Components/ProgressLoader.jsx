import { Html, useProgress } from "@react-three/drei";

export const ProgressLoader = () => {
  const { active, progress, errors, item, loaded, total } = useProgress();
  // console.log(active, progress, errors, item, loaded, total);
  return (
    <Html as="h2" wrapperClass="loader" center>
      {`${progress.toFixed(0)}%`}
    </Html>
  );
};
