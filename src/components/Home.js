import React from "react";
import "../styles/Home.scss";
import MainHeader from "./Home/HomeHeader";
import MainProducts from "./Home/HomeProducts";
import MainQuilt from "./Home/HomeQuilt";

const Home = () => {
  return (
    <div className="home">
      <main className="px-4 text-center flex flex-col items-center mx-auto">
        <MainHeader />
        <p className="uppercase mt-8 font-black tracking-wide text-xl">
          Shop popular shells
        </p>
        <MainProducts />
        <MainQuilt />
      </main>
    </div>
  );
};
export default Home;
