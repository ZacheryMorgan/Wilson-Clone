import React, { useState } from "react";
import { BsSortDown } from "react-icons/bs";
import ShopCard from "./Shop/ShopCard";
import ShopFilter from "./Shop/ShopFilter";
import { Link } from "react-router-dom";
import "../styles/Shop.scss";

const Shop = ({ data }) => {
  const [showFilter, setShowFilter] = useState(false);

  const shellElements = data.map((shell) => {
    return (
      <Link to={`/shop/${shell.id}`}>
        <ShopCard data={shell} key={shell.id} />
      </Link>
    );
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 770) {
      setShowFilter(false);
    }
  });

  const toggle = () => {
    setShowFilter((prev) => !prev);
  };

  return (
    <main className="px-4 flex flex-col items-center mx-auto pt-8">
      <h1 className="text-center text-xl font-black tracking-wide pb-3">
        Sea Shells
      </h1>
      <div className="mobile-sort flex justify-between w-full pb-4">
        <div className="mobile-sort-left flex items-center" onClick={toggle}>
          <BsSortDown className="hover:fill-red-600 cursor-pointer transition-all duration-300" />
          <span className="text-xs tracking-wider pl-1 font-black hover:text-red-600 cursor-pointer transition-all duration-300 hover:underline">
            Filter & Sort
          </span>
        </div>
        <div className="mobile-sort-right">
          <span className="text-xs tracking-wider font-black">28 Results</span>
        </div>
      </div>
      <div className="shop-wrapper w-full flex">
        <ShopFilter filter={showFilter} toggle={toggle} />
        <div
          className="shop-elements-wrapper
          grid grid-cols-2 gap-4 w-full pb-10
        "
        >
          {shellElements}
        </div>
      </div>
    </main>
  );
};

export default Shop;
