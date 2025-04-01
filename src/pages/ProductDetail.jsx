import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addToCart } from "../redux/cartSlice"
import { FaCartPlus, FaStar, FaArrowLeft } from "react-icons/fa"
import Loading from "../components/Loading"

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        setLoading(true)
        const response = await fetch(`https://dummyjson.com/products/${id}`)

        if (!response.ok) {
          throw new Error(`Failed to fetch product: ${response.status}`)
        }

        const data = await response.json()
        setProduct(data)
        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }

    fetchProductDetail()
  }, [id])

  const handleAddToCart = () => {
    if (product) {
      dispatch(
        addToCart({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.thumbnail,
          quantity: quantity,
        }),
      )
    }
  }

  const handleQuantityChange = (e) => {
    const value = Number.parseInt(e.target.value)
    if (value > 0 && value <= product.stock) {
      setQuantity(value)
    }
  }

  if (loading) return <Loading />

  if (error) {
    return (
      <div className="text-center text-red-500 p-4 bg-red-100 rounded-md">
        <p>Error loading product: {error}</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
        >
          Go back to products
        </button>
      </div>
    )
  }

  if (!product) return null

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <button
        onClick={() => navigate("/")}
        className="flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
      >
        <FaArrowLeft className="mr-2" /> Back to Products
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="mb-4 h-80 overflow-hidden rounded-lg">
            <img
              src={product.images[activeImage] || "/placeholder.svg"}
              alt={product.title}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex overflow-x-auto space-x-2 pb-2">
            {product.images.map((image, index) => (
              <div
                key={index}
                className={`cursor-pointer border-2 rounded-md overflow-hidden h-16 w-16 flex-shrink-0 ${
                  activeImage === index ? "border-blue-500" : "border-gray-200"
                }`}
                onClick={() => setActiveImage(index)}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${product.title} - view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.title}</h1>

          <div className="flex items-center mb-4">
            <div className="flex items-center text-yellow-400">
              <FaStar />
              <span className="ml-1 text-gray-700">{product.rating}</span>
            </div>
            <span className="mx-2 text-gray-400">|</span>
            <span className="text-gray-600 capitalize">{product.category}</span>
            <span className="mx-2 text-gray-400">|</span>
            <span className="text-gray-600">Brand: {product.brand}</span>
          </div>

          <div className="mb-4">
            <span className="text-3xl font-bold text-blue-600">${product.price}</span>
            {product.discountPercentage > 0 && (
              <span className="ml-2 text-sm text-green-600">{product.discountPercentage}% OFF</span>
            )}
          </div>

          <p className="text-gray-700 mb-6">{product.description}</p>

          <div className="mb-6">
            <div className="flex items-center mb-4">
              <span className="text-gray-700 mr-4">Quantity:</span>
              <div className="flex items-center">
                <button
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  className="px-2 py-1 border border-gray-300 rounded-l-md bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  max={product.stock}
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-12 text-center border-t border-b border-gray-300 py-1"
                />
                <button
                  onClick={() => quantity < product.stock && setQuantity(quantity + 1)}
                  className="px-2 py-1 border border-gray-300 rounded-r-md bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  +
                </button>
              </div>
              <span className="ml-4 text-sm text-gray-500">{product.stock} available</span>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md flex items-center justify-center transition-colors"
            >
              <FaCartPlus className="mr-2" /> Add to Cart
            </button>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <h3 className="font-semibold text-gray-800 mb-2">Product Details:</h3>
            <ul className="text-gray-600 space-y-1">
              <li>
                <span className="font-medium">Brand:</span> {product.brand}
              </li>
              <li>
                <span className="font-medium">Category:</span> {product.category}
              </li>
              <li>
                <span className="font-medium">Stock:</span> {product.stock} units
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail