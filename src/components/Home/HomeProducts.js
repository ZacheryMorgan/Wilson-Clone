import React from "react";
import MainProductCard from "./HomeProductCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../../styles/MainProduct.scss";

const MainProducts = () => {
  let width;
  window.addEventListener("resize", () => {
    const cardWrapper = document.querySelector(".card-wrapper")
    cardWrapper.style.transform = "translate3d(0px, 0px, 0px)"
    document.querySelector(".left").style.fill = "#d1d5db";
    document.querySelector(".right").style.fill = "#101820";

    // if (window.innerWidth >= 771) {
    //   return;
    // }
    width = JSON.stringify(document.querySelector(".product-card").offsetWidth);
    // cardWrapper.style.transform = `translate3d(${Math.floor(
    //   -width - 8
    // )}px, 0px, 0px)`;
    return width;

  });

  window.addEventListener("load", () => {
    width = JSON.stringify(document.querySelector(".product-card").offsetWidth);
    return width;
  });

  const scrollRight = () => {
    document.querySelector(".left").style.fill = "black";
    const cardWrapper = document.querySelector(".card-wrapper");
    let pos = cardWrapper.style.transform;
    if (!pos || pos == "translate3d(0px, 0px, 0px)") {
      cardWrapper.style.transform = `translate3d(${Math.floor(
        -width - 8
      )}px, 0px, 0px)`;
    } else if (pos == `translate3d(${Math.floor(-width - 8)}px, 0px, 0px)`) {
      cardWrapper.style.transform = `translate3d(${Math.floor(
        -width * 2 - 8
      )}px, 0px, 0px)`;
    } else if (
      pos == `translate3d(${Math.floor(-width * 2 - 8)}px, 0px, 0px)`
    ) {
      document.querySelector(".right").style.fill = "#d1d5db";
      cardWrapper.style.transform = `translate3d(${Math.floor(
        -width * 3 - 8
      )}px, 0px, 0px)`;
    }
  };
  const scrollLeft = () => {
    document.querySelector(".right").style.fill = "black";
    const cardWrapper = document.querySelector(".card-wrapper");
    let pos = cardWrapper.style.transform;
    if (!pos) {
      return;
    } else if (pos == `translate3d(${Math.floor(-width - 8)}px, 0px, 0px)`) {
      document.querySelector(".left").style.fill = "#d1d5db";
      cardWrapper.style.transform = `translate3d(0px, 0px, 0px)`;
    } else if (
      pos == `translate3d(${Math.floor(-width * 2 - 8)}px, 0px, 0px)`
    ) {
      cardWrapper.style.transform = `translate3d(${Math.floor(
        -width - 8
      )}px, 0px, 0px)`;
    } else if (
      pos == `translate3d(${Math.floor(-width * 3 - 8)}px, 0px, 0px)`
    ) {
      cardWrapper.style.transform = `translate3d(${Math.floor(
        -width * 2 - 8
      )}px, 0px, 0px)`;
    }
  };

  return (
    <div className="container relative overflow-hidden">
      <FaChevronLeft
        onClick={scrollLeft}
        className="left text-black w-14 h-14 absolute left-0 bottom-2/4 cursor-pointer z-10 fill-gray-300"
        width="0"
      />
      <FaChevronRight
        onClick={scrollRight}
        className="right text-black w-14 h-14 absolute right-0 bottom-2/4 cursor-pointer z-10"
        width="0"
      />
      <div className="card-wrapper flex w-auto transition-all duration-500 ease-out">
        <MainProductCard />
        <MainProductCard />
        <MainProductCard />
        <MainProductCard />
      </div>
    </div>
  );
};

export default MainProducts;
