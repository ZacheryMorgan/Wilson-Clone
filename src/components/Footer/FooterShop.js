import React from 'react';

const FooterShop = ({ isShown, onClick }) => {
  return (
    <div className="about flex flex-col border-b">
      <header
        className='flex justify-between bg-[#f5f5f5] border-y border-gray-400 p-3 items-center cursor-pointer'
        onClick={onClick}
      >
        <p className='title  text-[#666] font-black text-sm'>More Ways to Shop</p>
        <p className='symbol  text-[#666] font-black'>{isShown ? '-' : '+'}</p>
      </header>
      <div className="about-dropdown p-4 px-6" style={isShown ? { display: 'block' } : { display: 'none' }}>
        <ul className='flex flex-col gap-2 text-sm tracking-wide'>
          <li>Find a Dealer</li>
          <li>First Responder Discount</li>
          <li>Military Discount</li>
          <li>Healthcare Worker Discount</li>
          <li>Tax Exempt</li>
          <li>Catalogs</li>
        </ul>
      </div>
    </div>
  )
}

export default FooterShop