import React from "react"
import { useLocation, Link } from "react-router-dom"
import { CheckCircle} from "lucide-react";
import { useCart } from "../context/CartContext";

const OrderConfirmation = () => {
  const { state } = useLocation();
  const { deliveryDetails } = state || {};
  const { clearCart } = useCart();

   React.useEffect(() => {
    clearCart();
   }, []);

  return (
    <>
      <div className="container mx-auto md:px-8 pt-12">
        <div className='p-12 bg-green-900/40 rounded-3xl shadow-2xl max-w-2xl mx-auto border border-green-700'>
          <CheckCircle className='w-24 h-24 text-green-500 mx-auto mb-6 drop-shadow-lg ' />

          <h2 className='text-4xl font-extrabold text-white mb-4 text-center'>Thank you for your order!</h2>
          <p className='text-lg text-gray-300 mb-6 text-center'>
            Your order has been successfully placed.
          </p>

          <div className='items-center space-y-2 text-gray-300 text-center'>
        <p className='font-semibold text-lg mb-1'>{deliveryDetails?.name}</p>
        <p>{deliveryDetails?.address}</p>
        <p>{deliveryDetails?.city},{deliveryDetails?.zip}</p>
      </div>

        </div>
      </div>

      <Link
        to={"/"}
        className="w-1/2 container mx-auto mt-2 px-2 py-2 bg-green-600 text-sm rounded-full shadow-lg shadow-green-800/50 cursor-pointer
        hover:bg-green-700 transition duration-300 flex items-center text-white font-extrabold justify-center space-x-2 transform uppercase tracking-wider">
        <span>Continue Shopping</span>
      </Link>
    </>
  )
}

export default OrderConfirmation
