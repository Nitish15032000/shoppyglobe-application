import { useDispatch } from "react-redux"
import { removeFromCart, updateQuantity } from "../redux/cartSlice"
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa"

const CartItem = ({ item }) => {
  const dispatch = useDispatch()

  const handleRemove = () => {
    dispatch(removeFromCart(item.id))
  }

  const handleIncreaseQuantity = () => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
  }

  const handleDecreaseQuantity = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
    } else {
      dispatch(removeFromCart(item.id))
    }
  }

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between py-4 px-4 sm:px-6 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mb-4">
      {/* Product Image */}
      <div className="w-24 h-24 flex-shrink-0">
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          className="w-full h-full object-cover rounded-lg border border-gray-300"
        />
      </div>

      {/* Product Details */}
      <div className="mt-4 sm:mt-0 sm:ml-4 flex-grow text-center sm:text-left">
        <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
        <p className="text-gray-700 text-sm">${item.price.toFixed(2)}</p>
      </div>

      {/* Quantity Controls */}
      <div className="mt-4 sm:mt-0 flex items-center">
        <button
          onClick={handleDecreaseQuantity}
          className="p-2 rounded-full bg-blue-200 hover:bg-blue-300 hover:scale-110 transition-transform duration-200"
        >
          <FaMinus className="text-blue-600" size={14} />
        </button>
        <span className="mx-3 w-8 text-center text-gray-900 font-medium">
          {item.quantity}
        </span>
        <button
          onClick={handleIncreaseQuantity}
          className="p-2 rounded-full bg-blue-200 hover:bg-blue-300 hover:scale-110 transition-transform duration-200"
        >
          <FaPlus className="text-blue-600" size={14} />
        </button>
      </div>

      {/* Total Price and Remove Button */}
      <div className="mt-4 sm:mt-0 sm:ml-6 text-center sm:text-right">
        <p className="text-lg font-semibold text-gray-900">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
        <button
          onClick={handleRemove}
          className="mt-2 text-red-500 hover:text-red-700 hover:scale-110 transition-transform duration-200"
        >
          <FaTrash size={16} />
        </button>
      </div>
    </div>
  )
}

export default CartItem