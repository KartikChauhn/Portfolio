import React from "react";
import useMousePosition from "../../Jsfiles/useMousePosition";
import cursor from "./../../assets/cursor.png";

const Cursor = () => {
  const { x, y } = useMousePosition();
  return (
    <div
      className="absolute z-50 w-[26px] h-[26px] rounded-full border border-[#000000] shadow-md transition"
      style={{ top: `${y}px`, left: `${x}px` }}
    >
      <div className="w-[5px] h-[5px] rounded-md -m-[2px] ml-[10px] bg-orange-400"></div>
    </div>
  );
};

export default Cursor;
