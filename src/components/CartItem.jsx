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
    <div className="flex items-center py-4 border-b border-gray-200">
      <div className="w-20 h-20 flex-shrink-0">
        <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover rounded" />
      </div>
      <div className="ml-4 flex-grow">
        <h3 className="text-lg font-medium text-gray-800">{item.title}</h3>
        <p className="text-gray-600">${item.price}</p>
      </div>
      <div className="flex items-center">
        <button onClick={handleDecreaseQuantity} className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition">
          <FaMinus className="text-gray-600" size={12} />
        </button>
        <span className="mx-3 w-8 text-center">{item.quantity}</span>
        <button onClick={handleIncreaseQuantity} className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition">
          <FaPlus className="text-gray-600" size={12} />
        </button>
      </div>
      <div className="ml-6 text-right">
        <p className="text-lg font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
        <button onClick={handleRemove} className="text-red-500 hover:text-red-700 transition mt-1">
          <FaTrash />
        </button>
      </div>
    </div>
  )
}

export default CartItem