import { Typography } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="fixed top-5 left-5 sm:left-10">
        <Typography
          className="text-black text-[1.2rem] border-b-2 border-black italic"
          onClick={() => {
            navigate("/jaiShreeRam");
          }}
        >
          जय <span className="text-orange-400">श्री राम</span>
        </Typography>
      </div>
    </div>
  );
};

export default Logo;
