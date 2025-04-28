import { useState } from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { FaShoppingCart, FaBars, FaTimes, FaHome, FaCashRegister } from "react-icons/fa"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const cartItems = useSelector((state) => state.cart.items)

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-3xl font-extrabold tracking-wide flex items-center space-x-2">
            <FaHome size={28} />
            <span>ShoppyGlobe</span>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="flex items-center space-x-2 hover:text-yellow-300 transition duration-300"
            >
              <FaHome />
              <span>Home</span>
            </Link>
            <Link
              to="/cart"
              className="flex items-center space-x-2 hover:text-yellow-300 transition duration-300"
            >
              <FaShoppingCart />
              <span>Cart</span>
            </Link>
            <Link
              to="/checkout"
              className="flex items-center space-x-2 hover:text-yellow-300 transition duration-300"
            >
              <FaCashRegister />
              <span>Checkout</span>
            </Link>
            {/* Sign In and Sign Up Buttons */}
            <Link
              to="/signin"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300"
            >
              Sign In
            </Link>
          </nav>

          {/* Cart Icon */}
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <FaShoppingCart size={28} />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 bg-white bg-opacity-90 rounded-lg shadow-md flex flex-col space-y-3 px-4 py-3">
            <Link
              to="/"
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaHome />
              <span>Home</span>
            </Link>
            <Link
              to="/cart"
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaShoppingCart />
              <span>Cart</span>
            </Link>
            <Link
              to="/checkout"
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaCashRegister />
              <span>Checkout</span>
            </Link>
            {/* Sign In and Sign Up Buttons for Mobile */}
            <Link
              to="/signin"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign In
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header