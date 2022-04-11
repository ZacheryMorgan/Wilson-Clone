import React from 'react';
import { BsXLg } from 'react-icons/bs';

const ShopFilterPopout = ({ toggle, filter, show, hide, toggleCategory, toggleSeries, series, category }) => {
  return (
    <aside
      className="mobile-filter-wrapper fixed z-50 top-0 w-screen h-screen bg-white p-5 transition overflow-y-scroll tracking-widest"
      style={filter ? show : hide}
    >
      <div className="filter-header flex justify-between items-center pb-6 pr-3">
        <h1 className='text-lg font-black tracking-wider' >FILTER</h1>
        <BsXLg className="font-black hover:fill-red-600 cursor-pointer transition-all fill-gray-400" onClick={toggle}></BsXLg>
      </div>
      <div className="filter-list border-y border-gray-400">
        <div
          className="filter-header flex justify-between cursor-pointer hover:bg-gray-100  pr-2 py-4"
          onClick={toggleCategory}
        >
          <p className='font-black' >Category</p>
          <p className='font-black'>{category ? '-' : '+'}</p>
        </div>
        {category &&
          <ul className='pl-5 pb-2 tracking-wide text-sm flex flex-col gap-2' >
            <li className='cursor-pointer hover:underline' >Shells</li>
            <li className='cursor-pointer hover:underline' >Shark Teeth</li>
            <li className='cursor-pointer hover:underline' >Fossils</li>
            <li className='cursor-pointer hover:underline' >Driftwood</li>
            <li className='cursor-pointer hover:underline' >Fish?</li>
          </ul>
        }
      </div>
      <div className="filter-list border-y border-gray-400">
        <div
          className="filter-header flex justify-between cursor-pointer hover:bg-gray-100  pr-2 py-4"
          onClick={toggleSeries}
        >
          <p className='font-black' >Series</p>
          <p className='font-black'>{series ? '-' : '+'}</p>
        </div>
        {series &&
          <ul className='pl-5 pb-2 tracking-wide font-normal text-sm flex flex-col gap-1' >
            <li className='cursor-pointer hover:underline' >Tiny</li>
            <li className='cursor-pointer hover:underline' >Small</li>
            <li className='cursor-pointer hover:underline' >Medium</li>
            <li className='cursor-pointer hover:underline' >Large</li>
            <li className='cursor-pointer hover:underline' >Giant</li>
          </ul>
        }
      </div>
    </aside>
  )
}

export default ShopFilterPopout