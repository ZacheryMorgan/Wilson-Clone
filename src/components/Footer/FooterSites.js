import React from 'react';

const FooterSites = ({ onClick, isShown }) => {
  return (
    <div className="about flex flex-col">
      <header
        className='flex justify-between bg-[#f5f5f5] border-y border-gray-400 p-3 items-center cursor-pointer'
        onClick={onClick}
      >
        <p className='title  text-[#666] font-black text-sm'>Our Sites</p>
        <p className='symbol  text-[#666] font-black'>{isShown ? '-' : '+'}</p>
      </header>
      <div className="about-dropdown p-4 px-6" style={isShown ? { display: 'block' } : { display: 'none' }}>
        <ul className='flex flex-col gap-2 text-sm tracking-wide'>
          <li>Wilson</li>
          <li>Louisville Slugger</li>
          <li>Limited Warranty</li>
          <li>DeMarini</li>
          <li>EvoShield</li>
          <li>ATEC</li>
          <li>Luxilon</li>
          <li>Wilson Team Shop</li>
        </ul>
      </div>
    </div>
  )
}

export default FooterSites