import React from "react";
import "../../styles/Header.scss";

const Header = () => {
  return (
    <header className="bg-[#101820] flex items-center justify-center h-9">
      <ol className="list-disc header-list">
        <li className="underline cursor-pointer text-white flex items-center text-xs tracking-wider">
          Free Shipping on Orders Over $50
        </li>
      </ol>
    </header>
  );
};
export default Header;
