import React, { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { initialProducts } from "../data/product"
import { ChevronLeft, Tag, Zap } from "lucide-react"
import { useCart } from "../context/useCart"

const ProductDetails = () => {

  const { id } = useParams();
  const [product, setProduct] = useState();
  const { addToCart } = useCart();

  useEffect(() => {
    setProduct(initialProducts.find(data => data.id === parseInt(id)));
  }, [id]);


  return (
    <>
      <div className="container mx-auto px-4 md:px-8 bg-gray-900 rounded-2xl shadow-2xl my-8 p-6 md:p-12 border border-gray-700">
        <Link to={'/'}>
          <button className="cursor-pointer flex items-center hover:text-green-300 font-bold py-2 px-4 rounded">
            <ChevronLeft className="w-6 h-6 mr-3" />
            <span>Back to Products</span>
          </button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
          <div className="w-full">
            <img src={product?.image} alt={product?.name} className="w-[600px] h-[400px] object-cover rounded-2xl shadow-2xl shadow-gray-950/50 border-4 border-gray-600" />
          </div>

          <div className="flex flex-col justify-between text-white">
            <h1 className="text-3xl font-bold mb-4">{product?.name}</h1>
            <p className="text-3xl font-bold text-green-400 mb-6">${product?.price.toFixed(2)}</p>

            <h2 className="text-xl font-bold text-gray-200 mb-2 border-b border-e-green-900/50 pb-2 flex items center space-x-2">
              <Tag className="w-5 h-5 text-green-500" />
              <span className="ml-2 text-gray-400">Product Overview</span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">{product?.description}</p>

            <ul className="space-y-3 text-gray-300 mb-6 bg-gray-800 rounded-xl border border-gray-700 p-4">
              <li className="flex items-center space-x-3 text-lg">
                <Zap className="w-5 h-5 text-green-400" />
                <span>High-quality materials and craftsmanship.</span>
              </li>
              <li className="flex items-center space-x-3 text-lg">
                <Zap className="w-5 h-5 text-green-400" />
                <span>High-quality materials and craftsmanship.</span>
              </li>
              <li className="flex items-center space-x-3 text-lg">
                <Zap className="w-5 h-5 text-green-400" />
                <span>High-quality materials and craftsmanship.</span>
              </li>

            </ul>

            <div>
              <button
                onClick={() => addToCart(product)}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 cursor-pointer mb-4">
                Add to Cart
              </button>

              <Link to={'/'}>
              <button
                className="w-full border border-green-500 hover:bg-green-700/10 text-white font-bold py-2 px-4 rounded transition duration-300 cursor-pointer mb-4">
                Keep shopping          
              </button>
</Link>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default ProductDetails
