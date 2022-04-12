import React from "react";

const CartItem = ({ item, editQuantity }) => {
  const total = Math.ceil((item.quantity * item.price) * 100) / 100;

  return (
    <div className="item-wrapper border-t border-gray-500 pr-2 pl-6 py-4 flex items-center gap-3">
      <img src={item.img} alt="" height="80" width="80" className="" />
      <div className="cart-item flex flex-col grow h-[104px] justify-between">
        <div className="cart-item-details">
          <p className="text-lg font-black tracking-wide text-left">
            {item.name}
          </p>
        </div>
        <div className="cart-item-price flex justify-between">
          <input
            type="number"
            name=""
            id=""
            value={item.quantity}
            className="w-[50px]"
            onChange={(e) => editQuantity(e, item)}
            min="0"
          />
          <p className="font-black">${total}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
