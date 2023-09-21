import { Typography } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="fixed top-5 right-5 z-50 sm:right-10">
        <div>
          <Typography
            className="text-[#c9dcff] text-[1.2rem] border-b border-[#c9dcff] italic"
            onClick={() => {
              navigate("/jaiShreeRam");
            }}
          >
            जय <span className="text-orange-400">श्री राम</span>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Logo;
