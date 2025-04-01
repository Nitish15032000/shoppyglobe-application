import { useState } from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const cartItems = useSelector((state) => state.cart.items)

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            ShoppyGlobe
          </Link>

          {/* Mobile menu button */}
          <button className="md:hidden text-white focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-blue-200 transition">
              Home
            </Link>
            <Link to="/cart" className="hover:text-blue-200 transition">
              Cart
            </Link>
            <Link to="/checkout" className="hover:text-blue-200 transition">
              Checkout
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <FaShoppingCart size={24} />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-3">
            <Link to="/" className="hover:text-blue-200 transition" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/cart" className="hover:text-blue-200 transition" onClick={() => setIsMenuOpen(false)}>
              Cart
            </Link>
            <Link to="/checkout" className="hover:text-blue-200 transition" onClick={() => setIsMenuOpen(false)}>
              Checkout
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header