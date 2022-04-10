import React from 'react';

const MainHeader = () => {
  return (
    <div className="main-header
        flex flex-col items-center relative justify-center
      ">
      <div className="main-header-img">
        <picture>
          <source srcSet="./assets/ShoreBg.jpg" media="(min-width: 770px)" />
          <img src="./assets/ShoreBGSmall.jpg" alt="" />
        </picture>
      </div>
      <div className="main-header-text
          text-center border-gray-300 border py-3 w-full
        ">
        <p
          className='title text-xl text-5 font-extrabold uppercase pb-2 tracking-wider'
        >A tradition unlike any other</p>
        <p
          className='sub tracking-wider text-xs pb-4'
        >Celebrate the season's first Shell major with Beach-approved shells and shells.</p>
        <button
          className='border-[#131b23] border-2 bg-white text-[#131b23] hover:bg-[#131b23] hover:text-white
            py-1 px-5 tracking-wider font-semibold text-lg uppercase'
        >Shop Shells</button>
      </div>
    </div>)
}

export default MainHeader