import React from 'react'
import { House, ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';


const Navbar = () => {
  const { cartCount } = useCart();
  return (
    <header className='sticky top-0 bg-gray-950/95 backdrop-blur-md text-white shadow-2xl shadow-gray-950/70 border-b border-green-500 z-50'>
      <div className='container mx-auto flex items-center justify-between py-4 px-4'>
        <Link to={'/'}>
          <div className='flex items-center space-x-3 cursor-pointer'>
            <House className='w-8 h-8 text-green-500 drop-shadow-lg' />
            <h1 className='text-4xl font-extrabold tracking-widest uppercase'>BOSS<span className='text-green-500'>STORE</span></h1>
          </div>
        </Link>

        <nav className='flex items-center space-x-6'>
          <Link to={'/cart'}
            className='relative p-3 bg-green-500/10 rounded-xl hover:bg-green-500/20 transition duration-200 border border-green-400/50 shadow-lg cursor-pointer'>
            <ShoppingCart className='w-6 h-6 text-white-400' />
            {cartCount > 0 && (
              <span className='absolute top-0 right-0 inline-flex items-center justify-center px-2 py-2 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-green-500 rounded-full min-w-[20px] h-[20px]'>{cartCount}</span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar