import React, { useEffect } from "react";
import Navbar from "../Components/DashBoardComponents/Navbar";
import { Typography } from "antd";
import { useNavigate } from "react-router-dom";
const Intro = () => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-[#1a224b]">
      <Navbar />
      <div
        className="fixed top-8 left-8 rounded-md flex justify-center items-center z-50 w-[2rem] h-[2rem] border border-white text-white cursor-pointer"
        onClick={() => navigate("/")}
      >
        X
      </div>
      <div className="fixed top-0 w-full h-[10vh] backdrop-blur-[1px] "></div>
      <div className="fixed top-[10vh] w-full h-[5vh] backdrop-blur-[1px]  "></div>
      <div className="w-full h-[100vh] flex flex-col justify-center items-center ">
        <Typography className="text-[2rem] sm:text-[4rem] text-white font-semibold headingFont">
          i am KARTIK, and they{" "}
        </Typography>
        <Typography className="text-[2rem] sm:text-[4rem] text-white font-semibold -mt-2 sm:-mt-6 headingFont">
          call me Frontend Developer{" "}
        </Typography>

        <div className="w-[70%] mt-2 sm:mt-0 ">
          <Typography className="text-[#ffffff] sm:text-[1.2rem] text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            molestiae facere amet unde voluptate commodi itaque suscipit!
            Mollitia eius adipisci in aut magni quia consectetur!
          </Typography>
        </div>
      </div>
      <div className="h-[100vh]"></div>
    </div>
  );
};

export default Intro;
