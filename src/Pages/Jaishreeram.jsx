import React from "react";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Scene from "../../public/Ramji/Scene.jsx";
import { DownOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Jaishreeram = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[100vh] w-full flex justify-between bg-[#7DA1A7]">
      <div className=" w-full h-full  ">
        <Canvas>
          <PerspectiveCamera makeDefault position={[2.4, 0.6, 2]} />
          <OrbitControls />
          <ambientLight intensity={1} color={[1,1,1]} />
          {/* <pointLight position={[0, 0, 0]} />  */}
          <pointLight
            position={[0, 0.5, 0.5]}
            intensity={2}
            color={[0.3, 1, 0.7]}
          />
          <pointLight
            position={[0, -0.7, 0.5]}
            intensity={0.2}
            color={[0.3, 1, 0.7]}
          />

          <Scene position={[0, -1, -0.3]} />
          <mesh
            rotation={[-90 * (Math.PI / 180), 0, 0]}
            position={[0, -1, 0]}
            castShadow
            receiveShadow
          >
            <planeGeometry args={[200, 200]} />
            <meshStandardMaterial color={[0.5,0.9,1]} />
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
