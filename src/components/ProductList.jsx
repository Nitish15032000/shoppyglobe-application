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
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center text-red-500 p-4 bg-red-100 rounded-md">
        <p>Error loading products: {error}</p>
        <p>Please try again later.</p>
      </div>
    )
  }

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center p-8">
        <p className="text-lg text-gray-600">No products found matching "{searchTerm}"</p>
      </div>
    )
  }

  return (
    <div className="product-grid">
      {filteredProducts.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList

