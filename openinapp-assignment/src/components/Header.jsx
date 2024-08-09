import React from "react";
import bellimg from "../assets/Vector.png";
import userimg from "../assets/image 1.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center mt-[49px] w-[1067px] h-[32.93px]">
      <div className="w-[133px] h-[32px]">
      <h1 className="text-black font-bold text-[24px] sm:text-[24px] ">
        Upload CSV
      </h1>
      </div>
      <div className="flex justify-between items-center gap-3" style={{float:"right"}}>
        <img src={bellimg} alt="bell" className="w-[18px] h-[23px] top-1" />
        <img src={userimg} alt="user" className="w-[30px] h-[30px] rounded-full"/>
      </div>
    </div>
    
  );
};

export default Header;
