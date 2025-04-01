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
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
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
        <div className="flex items-center mt-1">
          <FaStar className="text-yellow-400" />
          <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
          <span className="mx-2 text-gray-400">|</span>
          <span className="text-sm text-gray-600">{product.category}</span>
        </div>
        <p className="mt-2 text-gray-600 text-sm line-clamp-2">{product.description}</p>
        <div className="mt-3 flex justify-between items-center">
          <span className="text-xl font-bold text-blue-600">${product.price}</span>
          <button
            onClick={handleAddToCart}
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md flex items-center transition-colors"
          >
            <FaCartPlus className="mr-1" /> Add
          </button>
        </div>
        <div className="mt-2 text-sm text-gray-500">
          <span className={product.stock > 10 ? "text-green-600" : "text-orange-600"}>
            {product.stock > 10 ? "In Stock" : `Only ${product.stock} left`}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProductItem