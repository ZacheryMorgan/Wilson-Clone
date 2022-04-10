import React from 'react';
import Item from './Item';

const Cart = ({ cart, onChange }) => {
  return (
    <>
      {cart.length === 0
        ?
        null
        :
        <div className="total flex gap-3 items-center justify-center mt-10">
          <p className='text-3xl font-bold'>Total: ${Math.ceil((cart.map(item => item.total).reduce((prev, next) => prev + next)) * 100) / 100}</p>
          <button
            className='bg-green-500 p-2 px-3 rounded-md text-white active:shadow-inner active:shadow-black'
          >
            Checkout</button>
        </div>
      }
      <div className="cart-wrapper
      flex flex-col gap-5 mt-40 items-center 
      ">
        {
          cart.length === 0 ?
            <h2 className='text-3xl font-bold text-center' >Your cart is empty</h2>
            : cart.map(item => {
              return <Item item={item} key={item} onChange={onChange} />
            })
        }
      </div>
    </>
  )
}

export default Cart