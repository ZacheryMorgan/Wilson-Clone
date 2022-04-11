import React from 'react';

const ShopCard = ({ data }) => {
  return (
    <div className="card flex flex-col cursor-pointer pb-4">
      <div className="card-image  overflow-hidden mb-2 ">
        <img src={data.img} alt=""
          className='hover:scale-125 w-full'
        />
      </div>
      <p className='text-sm pb-2' >{data.name}</p>
      <p className='font-black text-sm tracking-tight' >${data.price}</p>
    </div>
  )
}

export default ShopCard