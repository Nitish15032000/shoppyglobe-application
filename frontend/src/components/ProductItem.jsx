import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addToCart } from "../redux/cartSlice"
import { FaCartPlus, FaStar } from "react-icons/fa"

const ProductItem = ({ product }) => {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.thumbnail,
        quantity: 1,
      }),
    )
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <Link to={`/product/${product.id}`}>
        <div className="h-48 overflow-hidden">
          <img
            src={product.thumbnail || "/placeholder.svg"}
            alt={product.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 truncate">{product.title}</h3>
        </Link>
        <div className="flex items-center mt-2">
          <FaStar className="text-yellow-400" />
          <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
          <span className="mx-2 text-gray-400">|</span>
          <span className="text-sm text-gray-600">{product.category}</span>
        </div>
        <p className="mt-3 text-gray-600 text-sm line-clamp-2">{product.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-xl font-bold text-blue-600">${product.price}</span>
          <button
            onClick={handleAddToCart}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center transition-transform duration-300 hover:scale-105"
          >
            <FaCartPlus className="mr-2" /> Add
          </button>
        </div>
        <div className="mt-3 text-sm text-gray-500">
          <span className={product.stock > 10 ? "text-green-600" : "text-orange-600"}>
            {product.stock > 10 ? "In Stock" : `Only ${product.stock} left`}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProductItem