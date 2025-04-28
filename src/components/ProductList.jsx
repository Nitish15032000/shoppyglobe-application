import ProductItem from "./ProductItem"
import { useSelector } from "react-redux"

const ProductList = ({ products, isLoading, error }) => {
  const searchTerm = useSelector((state) => state.products.searchTerm)

  // Filter products based on search term
  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center text-red-500 p-4 bg-red-100 rounded-md shadow-md">
        <p>Error loading products: {error}</p>
        <p>Please try again later.</p>
      </div>
    )
  }

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center p-8 bg-gradient-to-br from-gray-100 via-blue-50 to-purple-100 rounded-lg shadow-md">
        <p className="text-lg text-gray-600">No products found matching "{searchTerm}"</p>
      </div>
    )
  }

  return (
    <div className="product-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 p-6 rounded-lg shadow-lg">
      {filteredProducts.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList

