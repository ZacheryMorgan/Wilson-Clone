import React from "react";
import "../../styles/MainProductCard.scss";

const MainProductCard = () => {
  return (
    <div className="product-card w-10/12 mr-2">
      <img
        className="p-7 border-gray-300 border my-2 select-none"
        src="./assets/shell.png"
        alt=""
        height={596}
        width={596}
      />
      <p className="uppercase font-black tracking-wide text-xl">
        Custom Shell 1
      </p>
    </div>
  );
};

export default MainProductCard;
