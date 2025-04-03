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
    <>
      {/* Hero Section */}
      <Hero />

      <div className="mb-6 mt-4 roubnded-md shadow-md p-4 bg-white">
        <form onSubmit={handleSearch} className="flex">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search products..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md transition-colors"
          >
            Search
          </button>
        </form>
      </div>

      <ProductList products={products} isLoading={isLoading} error={error} />
    </>
  )
}

export default Home

