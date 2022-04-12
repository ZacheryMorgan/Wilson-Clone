import React from "react";
import CartItem from "./CartItem";

const Cart = ({ cart, show, toggle, editQuantity }) => {
  const hideOverlay = {
    visibility: "hidden",
    background: "#101820b3",
    transition: ".3s cubic-bezier(.645,.045,.355,1)",
    bottom: "0",
    opacity: "0",
  };
  const showOverlay = {
    visibility: "visible",
    opacity: "1",
    background: "#101820b3",
    transition: ".3s cubic-bezier(.645,.045,.355,1)",
  };
  const hideCart = {
    visibility: "hidden",
    right: "-100%",
    transition: "visibility linear .5s,right .5s ease-in-out",
  };
  const showCart = {
    visibility: "visible",
    right: "0",
    transition: "visibility linear,right .5s ease-in-out",
  };

  let cartElements;
  let total;

  if (cart.length > 0) {
    cartElements = cart.map((item) => (
      <CartItem item={item} editQuantity={editQuantity} />
    ));
    total = cart
      .map((item) => item.quantity * item.price)
      .reduce((a, b) => a + b);
  }

  return (
    <div
      className="cart-wrapper
       text-center flex relative
    "
    >
      <div
        className="cart h-screen fixed z-[999] top-0 bg-white w-80  max-w-[90vw] text-center"
        style={!show ? hideCart : showCart}
      >
        <button
          onClick={toggle}
          className="cursor-pointer absolute top-4 right-4 z-[1000] hover:underline text-sm"
        >
          Close
        </button>
        <div className="cart-header pt-4 mb-4">
          <h1 className="text-xl font-black border-b border-gray-400 pb-4 uppercase">
            My Bag (
            {cart.length === 0
              ? 0
              : cart.map((item) => item.quantity).reduce((a, b) => a + b)}
            )
          </h1>
        </div>
        <div className="cart-main shadow-md shadow-gray-400 mb-5">
          {cartElements ? cartElements : "Your shopping bag is empty"}
        </div>
        {cart.length > 0 && (
          <div className="cart-total font-black text-xs tracking-wide mb-4">
            SUBTOTAL: ${Math.ceil(total * 100) / 100}
          </div>
        )}
        {cart.length > 0 && (
          <button className="cart-checkout font-black tracking-widest px-10 py-2 border-2 border-red-600 bg-red-600 text-white hover:bg-white hover:text-red-600 cursor-pointer">
            VIEW BAG & {<br />} CHECKOUT
          </button>
        )}
      </div>
      <div
        className="cart-background
        w-screen h-screen z-[100] fixed top-0 left-0"
        style={!show ? hideOverlay : showOverlay}
        onClick={toggle}
      ></div>
    </div>
  );
};

export default Cart;
