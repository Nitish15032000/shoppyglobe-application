import { useState } from "react"
import { useDispatch } from "react-redux"
import { setSearchTerm } from "../redux/productSlice"
import ProductList from "../components/ProductList"
import { useProductList } from "../hooks/useProductList"
import { FaSearch } from "react-icons/fa"
import Hero from "../components/Hero"

const Home = () => {
  const { products, isLoading, error } = useProductList()
  const [searchInput, setSearchInput] = useState("")
  const dispatch = useDispatch()

  const handleSearch = (e) => {
    e.preventDefault()
    dispatch(setSearchTerm(searchInput))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-50 to-purple-100">
      {/* Hero Section */}
      <div className="mb-6 sm:mb-12">
        <Hero />
      </div>

      {/* Search Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search products..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg sm:rounded-r-none 
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                           text-gray-700 placeholder-gray-400 bg-gray-50 transition-all duration-300"
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 
                         text-white font-medium rounded-lg sm:rounded-l-none hover:from-blue-600 
                         hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                         focus:ring-blue-500 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      {/* Products Section */}
      <div className="mt-8 pb-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductList 
          products={products} 
          isLoading={isLoading} 
          error={error} 
        />
      </div>
    </div>
  )
}

export default Home

