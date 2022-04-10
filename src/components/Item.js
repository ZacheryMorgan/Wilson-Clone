import React from 'react';

const Item = ({ item, onChange }) => {
  return (
    <div className="item-wrapper
      flex justify-between w-3/5 shadow-black shadow-md p-6 px-12 max-w-2xl rounded-sm
    ">
      <p className="item-name text-2xl">{item.name}</p>
      <div className="price-wrapper
      flex gap-11 items-center
      ">
        <input
          className='w-14'
          type="number" name="" id="" placeholder='0' value={item.quantity} min='0'
          onChange={(e) => onChange(e, item.name)}
        />
        <p className="item-total w-12 text-xl">{item.total}</p>
      </div>
    </div>
  )
}

export default Item