import { Typography } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Css/Dashboard.css";

const Navbar = ({ scrollTop, textColor }) => {
  const navigate = useNavigate();

  const navigation = [
    { name: "INTRO", route: "/intro", key: "1" },
    { name: "WORK", route: "/work", key: "2" },
    { name: "WHAT", route: "/what", key: "4" },
  ];
  return (
    <>
      <div
        className={`w-full fixed top-0 left-0 z-[50] ${
          scrollTop > 50
            ? "h-[100vh]   backdrop-blur-sm "
            : "h-[10vh] bg-transparent"
        }  flex justify-around items-center px-10  transition-all duration-1000`}
      >
        <div className={` flex gap-10 relative  `}>
          {navigation.map((data) => {
            return (
              <div
                className={`h-full  transition-all  navbar relative top-[2vh]  ${
                  scrollTop > 50 ? "hover:border-b-2 hover:border-white" : ""
                } `}
                key={data.key}
                onClick={() => navigate(data.route)}
              >
                <Typography
                  className={`tracking-[0.2rem] text-white cursor-pointer ${
                    scrollTop > 50
                      ? "text-[2rem] sm:text-[5rem] mx-5 my-0"
                      : "text-[0.7rem] sm:text-[0.6rem] font-semibold"
                  }  transition-all duration-700 `}
                  u
                >
                  {data.name}
                </Typography>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
