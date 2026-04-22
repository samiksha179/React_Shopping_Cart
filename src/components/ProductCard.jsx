import React from 'react'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <>
      <div className="bg-gray-800 rounded-lg p-4 shadow-md">
        <Link to={`/product/${product.id}`} className='relative cursor-pointer overflow-hidden block'>
          <img src={product.image} alt={product.name} className="w-full h-56 object-cover transition duration-500 group:hover:scale-110 group:hover:opacity-90 rounded-md mb-4" />

          <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
          <p className="text-gray-300 mb-2">{product.description}</p>

          <p className="text-lg font-bold text-green-400 mb-4">${product.price}</p>
        </Link>

        <button
          onClick={handleAddToCart}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </>
  )
}

export default ProductCard