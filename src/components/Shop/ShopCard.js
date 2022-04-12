import React from "react";

const ShopCard = ({ data }) => {
  return (
    <div className="card flex flex-col cursor-pointer pb-4">
      <div className="card-image  overflow-hidden mb-2 w-full h-full">
        <img
          src={data.img}
          alt=""
          width={233}
          height={311}
          className="hover:scale-125 w-full h-full"
        />
      </div>
      <p className="text-sm pb-2">{data.name}</p>
      <p className="font-black text-sm tracking-tight">${data.price}</p>
    </div>
  );
};

export default ShopCard;
