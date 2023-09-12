import React from "react";
import { createRoot } from "react-dom/client";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Jaishreeram = () => {
  function Box(props) {
    // This reference will give us direct access to the mesh
    const meshRef = useRef();
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (meshRef.current.rotation.x += delta));
    // Return view, these are regular three.js elements expressed in JSX
    return (
      <mesh
        {...props}
        ref={meshRef}
        scale={active ? 1.5 : 2}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
      >
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color={hovered ? "black" : "white"} />
      </mesh>
    );
  }
  return (
    <div className="h-[100vh] w-full">
      <Canvas>
        <OrbitControls/>
        <ambientLight color={"blue"}/>
        <pointLight position={[10, 10, 10]} />
        <Box position={[0, 0, -2]} />
        {/* <Box position={[1.2, 0, 0]} /> */}
      </Canvas>
    </div>
  );
};

export default Jaishreeram;
