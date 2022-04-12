import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

const ShopItem = ({ data, onClick, cart }) => {
  const params = useParams();
  const current = data.find((shell) => shell.id == params.id);

  const [amount, setAmount] = useState(1);

  const editAmount = (e) => {
    setAmount(e.target.valueAsNumber);
  };

  return (
    <main className="px-4 flex flex-col items-center mx-auto pt-7">
      <Link to="/shop">
        <button className="font-black tracking-widest px-10 py-2 border-2 border-red-600 bg-red-600 text-white hover:bg-white hover:text-red-600 cursor-pointer mb-4">
          RETURN TO STORE
        </button>
      </Link>
      <section className="item-header border-b border-gray-300">
        <img src={current.img} alt="" className="w-full" />
        <div className="item-info border-b border-gray-300 flex flex-col gap-2 pb-3">
          <p className="">Shell</p>
          <h1 className="text-2xl font-black">{current.name}</h1>
          <p className="font-black">{current.price}</p>
        </div>
        <div className="item-buy border-b border-gray-300 flex py-4 gap-2 items-center">
          <p className="w-[10%] font-black">Qty:</p>
          <input
            className="w-[15%] border py-3 pl-2"
            type="number"
            name="quantity"
            id=""
            placeholder="0"
            min="1"
            onChange={editAmount}
            value={amount}
          />
          <button
            onClick={() => onClick(current, amount)}
            className="bg-red-600 w-full py-3 text-white tracking-widest font-black border-2 border-red-600
            hover:bg-white hover:text-red-600
          "
          >
            ADD TO BAG
          </button>
        </div>
      </section>
      <section className="item-description"></section>
    </main>
  );
};

export default ShopItem;
