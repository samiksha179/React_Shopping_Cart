import React from 'react'
import Navbar from './components/Navbar'
import ProductList from './pages/ProductList'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import ProductDetails from './pages/ProductDetails'
import Footer from './components/Footer'
import OrderConfirmation from './pages/OrderConfirmation'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartProvider'

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className='bg-gray-950 min-h-screen font-sans'>
          <Navbar />

          <main className='container mx-auto px-4 md:px-8'>
            <Routes>
              <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
          </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </CartProvider>
  )
}

export default App