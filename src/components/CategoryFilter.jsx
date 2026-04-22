import React from 'react'
import { initialProducts } from '../data/product'
import { Tag } from "lucide-react";

const availableCategories = ["All", ...new Set(initialProducts.map(product => product.category))]

const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <>
      <div className='flex flex-wrap gap-3 border-b bg-gray-800 border-gray-700 py-4 px-4 mt-6 rounded-xl shadow-md'>
      <Tag className='w-5 h-5 text-green-400 mt-2 mr-2 hidden-sm:block' />
        {availableCategories.map((category) => (
          <button 
          key={category} 
          onClick={() => setSelectedCategory(category)}
          className={`px-4 py-2 text-sm font-bold rounded-full bg-gray-600 hover:bg-gray-500 shadow-md ${selectedCategory === category ? "bg-green-500 text-white shadow-green-800/50" : "bg-gray-800 text-gray-300 hover:bg-gray-600"}`}>{category}</button>
        ))}
      </div>
    </>
  )
}

export default CategoryFilter