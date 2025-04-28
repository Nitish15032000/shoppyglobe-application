import React from "react"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 text-white py-8">
      <div className="container mx-auto px-4 text-center sm:text-left">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-3">About ShoppyGlobe</h3>
            <p className="text-sm text-gray-300">
              Your one-stop destination for the best shopping experience. Explore a wide range of products and enjoy seamless shopping.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-3">Quick Links</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>
                <a href="/" className="hover:text-yellow-400 transition duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/cart" className="hover:text-yellow-400 transition duration-300">
                  Cart
                </a>
              </li>
              <li>
                <a href="/checkout" className="hover:text-yellow-400 transition duration-300">
                  Checkout
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-3">Follow Us</h3>
            <div className="flex justify-center sm:justify-start space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-500 transition duration-300"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition duration-300"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-pink-500 transition duration-300"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-600 transition duration-300"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6 text-sm text-gray-400 text-center">
          <p>&copy; {new Date().getFullYear()} ShoppyGlobe. All rights reserved.</p>
          <p>
            Developed by <strong className="text-white">Nitish Kumar</strong>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
