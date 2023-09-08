import "../Css/Dashboard.css";
import { Typography } from "antd";

import React, { useEffect } from "react";
import Navbar from "../Components/DashBoardComponents/Navbar";
import { useNavigate } from "react-router-dom";
import Who from "./Who";

const Dashboard = ({ scrollTop }) => {
  return (
    <>
      <div className="w-full h-[100vh] bg-[#5F758E]">
        <Navbar />
        <div className="h-[90vh] w-full flex px-[5vw] py-[5rem]  ">
          <div className="w-[65vw] h-full">
            <div className="">
              <Typography className="text-white text-[1.4rem]">
                Hey <span className="text-orange-400">I</span> am
              </Typography>
              <div>
                <div className="flex gap-[4px] -m-1 -mt-4">
                  <Typography className="developer">K</Typography>
                  <Typography className="developer">A</Typography>
                  <Typography className="developer">R</Typography>
                  <Typography className="developer">T</Typography>
                  <Typography className="developer text-orange-400" >I</Typography>
                  <Typography className="developer">K</Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Who />
    </>
  );
};

export default Dashboard;
