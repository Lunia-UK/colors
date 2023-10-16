
import { useRef } from "react";

function Experience() {
  const cubeRef = useRef();

  return (
    <>
      <mesh ref={cubeRef} scale={[10, 10, 1]}>
        <planeGeometry />
        <meshBasicMaterial />
      </mesh>
    </>
  );
}

export default Experience;
