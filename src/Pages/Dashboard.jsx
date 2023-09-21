import "../Css/Dashboard.css";
import { Typography } from "antd";
import React, { useEffect } from "react";
import Navbar from "../Components/DashBoardComponents/Navbar";
import { useNavigate } from "react-router-dom";
import Logo from "../Components/CommonComponents/Logo";
import NameReflection from "../Components/DashBoardComponents/NameReflection";
import { useScroll } from "@react-three/drei";

const Dashboard = ({ scrollTop }) => {
  useEffect(() => {
    // useScroll(0, 0);
  }, []);
  return (
    <>
      <Logo />
      <div className="w-full h-[100vh] background bg-black">
        <Navbar scrollTop={scrollTop} />
        <NameReflection />
      </div>
    </>
  );
};

export default Dashboard;
