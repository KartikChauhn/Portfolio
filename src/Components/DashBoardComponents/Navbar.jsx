import { Typography } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Css/Dashboard.css";

const Navbar = ({ scrollTop }) => {
  const navigate = useNavigate();

  const navigation = [
    { name: "INTRO", route: "/", key: "1" },
    { name: "WHO", route: "/who", key: "3" },
    { name: "WORK", route: "/work", key: "2" },
    { name: "WHAT", route: "/what", key: "4" },
  ];
  return (
    <>
      <div
        className={`w-full fixed top-0 left-0 z-[50] ${
          scrollTop > 50
            ? "h-[100vh]  bg-[#111111a4] "
            : "h-[10vh] bg-transparent"
        }  flex justify-around items-center px-10  transition-all duration-1000`}
      >
        <div className={`hidden sm:flex gap-6 relative `}>
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
                  className={`text-[#ffffff] tracking-[0.2rem] ${
                    scrollTop > 50
                      ? "text-[5rem] mx-5 my-0"
                      : "text-[0.6rem] font-semibold"
                  }  transition-all hover:text-orange-400 duration-700 `}
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
