import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className='mt-10 mb-5 text-center text-gray-400 text-sm border-t border-gray-700 pt-5 pb-5'>
        &copy; {new Date().getFullYear()} Samiksha Jadhav. All rights reserved.
      </footer>
    </>
  )
}

export default Footer