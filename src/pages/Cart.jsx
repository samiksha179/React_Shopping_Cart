import React from 'react'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'

import { ShoppingCart, ChevronLeft, Zap } from "lucide-react";

const Cart = () => {
  const { cart, cartTotal, cartCount } = useCart();

  return <>
    <div className="container mx-auto px-4 md:px-8 py-8">
      <div className="mb-10">
        <Link to={'/'} className='flex items-center text-gray-400 hover:text-green-400 transition duration-150 font-semibold'>
          <ChevronLeft className="w-6 h-6 mr-3" />
            Back to Store
        </Link>

        <h2 className="text-3xl font-bold text-white mb-10 ml-auto flex items-center">
          Shopping Cart ({cartCount})</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-4">
              {cart.map(item=> <CartItem key={item.id} item={item} />)}
            </div>
            <div className="lg:col-span-1 p-8 bg-gray-900 rounded-2xl sticky top-20 h-fit">
              <h3 className='text-3xl font-bold text-white mb-5 border-b border-gray-700 pb-3 flex items-center space-x-2'>
                <div className='flex justify-between'>
                  <span className='w-6 h-6 text-green-400'>$</span>
                  <span>Order Total</span>
                </div>
              </h3>
              <div className="space-y-4 text-gray-400">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${cartTotal?.toFixed(2) ?? '0.00'}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className='text-green-400'>Free</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${(cartTotal * 0.08).toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t border-gray-700 pt-4">
                  <span>Total</span>
                  <span>${(cartTotal * 1.08).toFixed(2)}</span>
                </div>

                <Link to={'/checkout'}
                className="w-full mt-8 py-4 bg-green-600 hover:bg-green-700 text-white font-extrabold text-lg py-2 px-4 rounded-full flex items-center justify-center space-x-2 transition duration-300 cursor-pointer mb-4">
                <Zap className="w-5 h-5 text-white-400 mr-2" />
                <span>Proceed to Checkout</span>
              </Link>
                <p className="text-xs text-gray-500 leading-relaxed text-center">
                  All transactions are secured and encrypted.
                 </p>
              </div>
            </div>
          </div>

      </div>
    </div>
  </>;
}

export default Cart