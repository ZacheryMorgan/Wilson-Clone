import React from "react";
import MainQuiltItem from "./HomeQuiltItem";

const MainQuilt = () => {
  return (
    <div className="quilt-wrapper w-full mt-8 gap-2 grid mb-4">
      <MainQuiltItem />
      <MainQuiltItem />
      <MainQuiltItem />
      <MainQuiltItem />
    </div>
  );
};

export default MainQuilt;
