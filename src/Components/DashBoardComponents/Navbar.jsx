import { Typography } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";



const Navbar = () => {
  const navigate = useNavigate();
  const navigation = [
    { name: "INTRO", route: "/", key: "1" },
    { name: "WHO", route: "/who", key: "3" },
    { name: "WORK", route: "/work", key: "2" },
    { name: "WHAT", route: "/what", key: "4" },
  ];
  return (
    <div className="w-full h-[10vh] flex justify-between items-center px-10 bg-black">
      <div></div>
      <div className="hidden sm:flex gap-6 relative ">
        {navigation.map((data) => {
          return (
            <div
              className="h-full transition-all hover:mx-1 navbar relative top-[2vh]"
              key={data.key}
              onClick={() => navigate(data.route)}
            >
              <Typography className=" text-[#c9dcff] tracking-[0.2rem] text-[0.6rem] font-semibold transition-all hover:-m-1 hover:text-orange-400">
                {data.name}
              </Typography>
            </div>
          );
        })}
      </div>
      <div>
        {/* <Typography
          className="text-white hidden sm:flex tracking-[0.1rem] navbar text-[0.8rem] transition-all"
        >
          Contact
        </Typography> */}
      </div>
    </div>
  );
};

export default Navbar;
