import React from "react";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { BiSearch, BiShoppingBag } from "react-icons/bi";
import { GiHamburgerMenu, GiNautilusShell } from "react-icons/gi";
import "../../styles/Nav.scss";

const Nav = ({ onClick }) => {
  return (
    <nav className="border-b">
      <div className="nav-wrapper flex justify-between items-center h-12 px-5 max-w-screen-2xl mx-auto xl:h-20">
        <Link to="/">
          <GiNautilusShell className="w-8 h-8 mr-10 xl:w-12 xl:h-12 min-w-min  hover:cursor-pointer" />
        </Link>
        <ul className="site-links flex gap-14">
          <Link to="/shop">
            <li className="text-l font-bold cursor-pointer relative p-2 uppercase hidden xl:block">
              Shells
            </li>
          </Link>
          <li className="text-l font-bold cursor-pointer relative p-2 uppercase hidden xl:block">
            Equipment
          </li>
          <li className="text-l font-bold cursor-pointer relative p-2 uppercase hidden xl:block">
            Custom
          </li>
        </ul>
        <ul className="flex gap-1 nav-links">
          <button className="">
            <BiSearch className="hover:fill-red-600 cursor-pointer transition-all duration-300 w-6 h-6" />
          </button>
          <button className="hidden xl:block">
            <FiUser className="hover:stroke-red-600 cursor-pointer transition-all duration-300 w-6 h-6" />
          </button>
          <button className="" onClick={onClick}>
            <BiShoppingBag className="hover:fill-red-600 cursor-pointer transition-all duration-300 w-6 h-6 " />
          </button>
          <button className="xl:hidden">
            <GiHamburgerMenu className="hover:fill-red-600 cursor-pointer transition-all duration-300 w-6 h-6 active:border-black after:border-2" />
          </button>
        </ul>
      </div>
    </nav>
  );
};
export default Nav;
