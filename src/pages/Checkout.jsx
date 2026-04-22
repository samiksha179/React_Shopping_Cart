import React, { useState } from "react"
import { useCart } from "../context/CartContext"
import { Package, MapPin } from "lucide-react"
import { useNavigate } from "react-router-dom"

const Checkout = () => {
  const { cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [ deliveryDetails, setDeliveryDetails ] = useState({
    name: '',
    address: '',
    city: '',
    postalCode: '',
    country: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeliveryDetails(prevDetails => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearCart();
    navigate('/order-confirmation', { state: { deliveryDetails, total: cartTotal } });
  };

  return (
    <>
      <div className="container mx-auto px-4 md:px-8 py-8 text-white">
        <h2 className="text-3xl font-bold">Order Summary</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-6">
          <div className="lg:col-span-2 p-8 bg-gray-800 rounded-lg border border-gray-700">
            <h3 className="text-2xl font-bold mb-4 flex items-center space-x-2">
              <MapPin className="w-7 h-7 text-green-500" />
              <span>Shipping Information</span>
            </h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {Object.keys(deliveryDetails).map(key => (
                <div key={key}>
                  <label htmlFor={key} className="block text-sm font-semibold text-gray-300 capitalize mb-1">{key.replace(/([A-Z])/g, ' $1').trim()}</label>
                  <input
                    type="text"
                    id={key}
                    name={key}
                    value={deliveryDetails[key]}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                    placeholder={key.replace(/([A-Z])/g, ' $1').trim()}
                  />
                </div>
              ))}
              
              <button
                type="submit"
                className="w-full mt-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold text-lg rounded-lg flex items-center justify-center space-x-2 transition duration-300">
                <Package className="w-5 h-5 text-white-400" />
                <span>Place Order</span>
              </button>

            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Checkout
