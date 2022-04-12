import React, { useState } from "react";
import ShopFilterPopout from "./ShopFilterPopout";

const ShopFilter = ({ filter, toggle }) => {
  const [showCategory, setShowCategory] = useState(false);
  const [showSeries, setShowSeries] = useState(false);

  const show = {
    visibility: "visible",
    left: "0",
    transition: "visibility linear,left .5s ease-in-out",
  };

  const hide = {
    visibility: "hidden",
    left: "-100vw",
    transition: "visibility .5s linear,left .5s ease-in-out",
  };

  const toggleCategory = () => {
    setShowCategory((prev) => !prev);
  };
  const toggleSeries = () => {
    setShowSeries((prev) => !prev);
  };

  return (
    <div className="shop-filters w-0">
      <ShopFilterPopout
        toggle={toggle}
        filter={filter}
        show={show}
        hide={hide}
        toggleCategory={toggleCategory}
        toggleSeries={toggleSeries}
        series={showSeries}
        category={showCategory}
      />
      <aside className="shop-filter-wrapper top-0 bg-white p-5 tracking-widest hidden">
        <h1 className="text-lg font-black tracking-wider pb-9">FILTER</h1>
        <div className="filter-list border-y border-gray-400">
          <div
            className="filter-header flex justify-between cursor-pointer hover:bg-gray-100  pr-2 py-4"
            onClick={toggleCategory}
          >
            <p className="font-black">Category</p>
            <p className="font-black">{showCategory ? "-" : "+"}</p>
          </div>
          {showCategory && (
            <ul className="pl-5 pb-5 tracking-wide text-sm flex flex-col gap-2">
              <li className="cursor-pointer hover:underline">Shells</li>
              <li className="cursor-pointer hover:underline">Shark Teeth</li>
              <li className="cursor-pointer hover:underline">Fossils</li>
              <li className="cursor-pointer hover:underline">Driftwood</li>
              <li className="cursor-pointer hover:underline">Fish?</li>
            </ul>
          )}
        </div>
        <div className="filter-list border-y border-gray-400">
          <div
            className="filter-header flex justify-between cursor-pointer hover:bg-gray-100  pr-2 py-4"
            onClick={toggleSeries}
          >
            <p className="font-black">Series</p>
            <p className="font-black">{showSeries ? "-" : "+"}</p>
          </div>
          {showSeries && (
            <ul className="pl-5 pb-2 tracking-wide font-normal text-sm flex flex-col gap-1">
              <li className="cursor-pointer hover:underline">Tiny</li>
              <li className="cursor-pointer hover:underline">Small</li>
              <li className="cursor-pointer hover:underline">Medium</li>
              <li className="cursor-pointer hover:underline">Large</li>
              <li className="cursor-pointer hover:underline">Giant</li>
            </ul>
          )}
        </div>
      </aside>
    </div>
  );
};

export default ShopFilter;
