"use client"

import { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { FaArrowLeft, FaCheck } from "react-icons/fa"

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items)
  const [orderPlaced, setOrderPlaced] = useState(false)

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = subtotal > 0 ? 10 : 0
  const tax = subtotal * 0.1 // 10% tax
  const total = subtotal + shipping + tax

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate order placement
    setTimeout(() => {
      setOrderPlaced(true)
    }, 1500)
  }

  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-50 to-purple-100 text-center py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-6">You need to add items to your cart before checkout.</p>
        <Link
          to="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors"
        >
          Start Shopping
        </Link>
      </div>
    )
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-50 to-purple-100 text-center py-16">
        <div className="bg-green-100 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-6">
          <FaCheck className="text-green-600" size={32} />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Order Placed Successfully!</h2>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your order has been received and is being processed.
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-50 to-purple-100 px-4 sm:px-6 lg:px-8 py-8">
      <Link to="/cart" className="flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors">
        <FaArrowLeft className="mr-2" /> Back to Cart
      </Link>

      <h1 className="text-3xl font-bold text-gray-800 mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Shipping and Payment Form */}
        <div>
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Shipping Information</h2>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="firstName" className="block text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="address" className="block text-gray-700 mb-1">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label htmlFor="city" className="block text-gray-700 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="state" className="block text-gray-700 mb-1">
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="zip" className="block text-gray-700 mb-1">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    id="zip"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <h2 className="text-xl font-bold text-gray-800 mb-4">Payment Information</h2>

              <div className="mb-4">
                <label htmlFor="cardName" className="block text-gray-700 mb-1">
                  Name on Card
                </label>
                <input
                  type="text"
                  id="cardName"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="cardNumber" className="block text-gray-700 mb-1">
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  required
                  placeholder="XXXX XXXX XXXX XXXX"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="expiry" className="block text-gray-700 mb-1">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    id="expiry"
                    required
                    placeholder="MM/YY"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="cvv" className="block text-gray-700 mb-1">
                    CVV
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    required
                    placeholder="XXX"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition-colors"
              >
                Place Order
              </button>
            </form>
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>

            <div className="mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between py-2 border-b border-gray-200">
                  <div className="flex items-center">
                    <span className="font-medium text-gray-800">{item.quantity} x</span>
                    <span className="ml-2 text-gray-600">{item.title}</span>
                  </div>
                  <span className="text-gray-800">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-200 pt-3 flex justify-between font-bold text-gray-800">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout