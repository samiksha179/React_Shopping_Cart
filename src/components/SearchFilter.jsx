import React from 'react'
import { Search } from "lucide-react";

const SearchFilter = ({ searchTerm, setSearchTerm }) => {
  return (
    <>
      <div className='mb-5 p-5 bg-gray-900 rounded-2xl shadow-xl border border-y-gray-800'>
        <div className='flex items-center border border-gray-600 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-green-500 transition duration-300 bg-gray-800'>
          <Search className='w-5 h-5 text-gray-400 ml-4 flex-shrink-0' />
          <input type="text" placeholder='Search...' className='w-full p-3 outline-none rounded-lg bg-gray-800 text-white focus:outline-none text-base font-medium' 
          aria-label='Search Products'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
    </>
  )
}

export default SearchFilter