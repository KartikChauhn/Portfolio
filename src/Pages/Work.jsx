import { Canvas } from "@react-three/fiber";
import { Typography } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Skull } from "../ModelComponents/Skull";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

const Work = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-[100vh]">
      <div
        className="absolute top-6 right-6 p-1 rounded px-6 border-2 border-black"
        onClick={() => {
          navigate(-1);
        }}
      >
        <Typography>Back</Typography>
      </div>
      <div className="w-[90%] border-r-2 border-black h-full flex justify-center items-center">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 2.8]} />
          <OrbitControls />
          <pointLight position={[0, 1, 3]} intensity={100}/>
          <ambientLight intensity={10.2} />

          <Skull position={[0, 0.2, 0]} />
        </Canvas>
      </div>
    </div>
  );
};

export default Work;
