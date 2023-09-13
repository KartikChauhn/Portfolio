import React from "react";
import { createRoot } from "react-dom/client";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

import Scene from "../../public/Ramji/Scene.jsx";
import { DownOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Typography } from "antd";

const Jaishreeram = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[100vh] w-full flex justify-between bg-[#DEDBE6]">
      <div className=" w-full h-full  ">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 3]} />
          <OrbitControls />
          <ambientLight color intensity={1.2} />
          <pointLight position={[10, 10, 10]} color="black" />
          <Scene position={[0, -1, -0.3]} />
          <mesh rotation={[-90 * (Math.PI / 180), 0, 0]} position={[0, -1, 0]}>
            <planeGeometry args={[40, 40]} />
            <meshStandardMaterial color={"#DEDBE6"} />
          </mesh>
        </Canvas>
      </div>
      <div>
        {" "}
        <div
          className="absolute text-[1.4rem] flex flex-col justify-center items-center bottom-8 right-8"
          onClick={() => {
            navigate("/");
          }}
        >
          <DownOutlined className="animate-bounce hover:animate-none -mb-[3px] " />
        </div>
      </div>
    </div>
  );
};

export default Jaishreeram;
