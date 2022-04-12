import React from "react";

const FooterAbout = ({ isShown, onClick }) => {
  return (
    <div className="about flex flex-col">
      <header
        className="flex justify-between bg-[#f5f5f5] border-y border-gray-400 p-3 items-center cursor-pointer"
        onClick={onClick}
      >
        <p className="title  text-[#666] font-black text-sm">About Us</p>
        <p className="symbol  text-[#666] font-black">{isShown ? "-" : "+"}</p>
      </header>
      <div
        className="about-dropdown p-4 px-6"
        style={isShown ? { display: "block" } : { display: "none" }}
      >
        <ul className="flex flex-col gap-2 text-sm tracking-wide">
          <li>Blog</li>
          <li>Return Policy</li>
          <li>Limited Warranty</li>
          <li>Careers</li>
          <li>Affiliate Program</li>
          <li>Submit an Idea</li>
          <li>Accessibility</li>
          <li>Patents</li>
        </ul>
      </div>
    </div>
  );
};

export default FooterAbout;
