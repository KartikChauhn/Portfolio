import React from "react";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Scene from "../../public/Ramji/Scene.jsx";
import { DownOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Jaishreeram = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[100vh] w-full flex justify-between bg-[#E8D0F9]">
      <div className=" w-full h-full  ">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 3]} />
          <OrbitControls />
          <ambientLight intensity={10.2} />
          {/* <pointLight position={[0, 0, 0]} />  */}
          <pointLight position={[0, 0, 0.5]} intensity={2} color={[40, 40, 5]} />

          <Scene position={[0, -1, -0.3]} />
          <mesh
            rotation={[-90 * (Math.PI / 180), 0, 0]}
            position={[0, -1, 0]}
            castShadow
            receiveShadow
          >
            <planeGeometry args={[40, 40]} castShadow receiveShadow />
            <meshStandardMaterial color={"#9974ff"} castShadow receiveShadow />
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
