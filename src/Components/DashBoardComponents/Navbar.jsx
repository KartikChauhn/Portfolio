import { Typography } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  // const navigate = useNavigate();
  const navigation = [
    { name: "INTRO", route: "/", key: "1" },
    { name: "WHO", route: "/who", key: "3" },
    { name: "WORK", route: "/work", key: "2" },
    { name: "WHAT", route: "/what", key: "4" },
  ];
  return (
    <div className="w-full h-[10vh] flex justify-between items-center px-10">
      <div></div>
      <div className="flex gap-6">
        {navigation.map((data) => {
          return (
            <div
              className="h-full   transition-all hover:mx-1"
              key={data.key}
              // onClick={() => navigate(data.route)}
            >
              <Typography className=" text-white tracking-[0.2rem] text-[0.6rem] font-semibold transition-all hover:-m-1 hover:text-orange-400">
                {data.name}
              </Typography>
            </div>
          );
        })}
      </div>
      <div>
        <Typography
          className="text-white hidden sm:flex tracking-[0.1rem] border-b-2  hover:border-orange-400 transition-all"
          // onClick={() => navigate("/contact")}
        >
          Contact
        </Typography>
      </div>
    </div>
  );
};

export default Navbar;
