import React from "react";
import "../../styles/MainQuiltItem.scss";

const MainQuiltItem = () => {
  return (
    <div className="relative">
      <img src="./assets/beach710.jpg" alt="" className="w-full" />
      <div className="quilt-content text-left absolute bottom-0 left-0 p-3">
        <p className="text-lg font-black text-white pb-3">SAVE ON SETS</p>
        <p className="text-sm text-white pb-3">
          Save when you buy a <br /> performance top and bottom together
        </p>
        <button
          className="border-[#131b23] border-2 bg-white text-[#131b23] hover:bg-[#131b23] hover:text-white
            py-1 px-5 tracking-wider font-semibold text-base uppercase"
        >
          MEN'S SETS
        </button>
      </div>
    </div>
  );
};

export default MainQuiltItem;
