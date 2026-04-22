import React from 'react'
import { useCart } from '../context/CartContext'

import{ X } from "lucide-react";

const CartItem = ({ item }) => {
    const { addToCart, removeFromCart } = useCart();

    const increaseQ = () => addToCart(item);
    const decreaseQ = () => removeFromCart(item.id);
  return (
    <div className="flex items-center justify-between space-x-4 bg-gray-800 p-4 rounded-lg">
      <div className="flex items-center space-x-4 w-full sm:w-auto">
<img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
      </div>
      
      <div className="flex-1">
        <h3 className="text-lg font-bold text-white">{item.name}</h3>
        <p className="text-lg text-green-400">${item.price.toFixed(2)}</p>
      </div>


      <div className="flex items-center justify-between sm:justify-end w-full sm:w-2/5 sm:mt-0 space-x-4">
      <div className="flex item-center border border-gray-700 rounded-full overflow-hidden">
        <button onClick={() => decreaseQ()} className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full transition duration-300">
          -
        </button>

        <span className="text-white font-bold text-base px-3">{item.quantity}</span>

        <button onClick={() => increaseQ()} className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full transition duration-300">
          +
        </button>
      </div>

      <p className='font-extrabold text-lg text-white'>${(item.price * item.quantity).toFixed(2)}</p>

        <button onClick={() => removeFromCart(item.id, true)} className="bg-green-800 hover:bg-green-700 text-white py-1 px-2 rounded-full transition duration-300">
          <X className="w-5 h-5" />
        </button>
      </div>


    </div>
  )
}

export default CartItem