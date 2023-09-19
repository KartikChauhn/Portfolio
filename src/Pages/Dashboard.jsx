import "../Css/Dashboard.css";
import { Typography } from "antd";

import React, { useEffect } from "react";
import Navbar from "../Components/DashBoardComponents/Navbar";
import { useNavigate } from "react-router-dom";
import Logo from "../Components/CommonComponents/Logo";
import NameReflection from "../Components/DashBoardComponents/NameReflection";

const Dashboard = ({ scrollTop }) => {
  return (
    <>
      {/* bg-[#5F758E] */}
      <Logo />
      <div className="w-full h-[100vh] background bg-black">
        <Navbar />  
        <NameReflection/>
      </div>
    </>
  );
};

export default Dashboard;
