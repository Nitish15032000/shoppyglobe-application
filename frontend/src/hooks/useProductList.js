import { useState, useEffect } from "react"


// A custom React hook that fetches a list of products from a remote API.

// @returns {Object} An object containing the following properties:
// @returns {Array} products - An array of product objects.
// @returns {boolean} isLoading - A boolean indicating whether the data is still loading.
// @returns {string|null} error - A string containing the error message, or null if no error occurred.
 
export const useProductList = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true)
        const response = await fetch("https://dummyjson.com/products")

        if (!response.ok) {
          throw new Error(`Failed to fetch products: ${response.status}`)
        }

        const data = await response.json()
        console.log(data.products);
        // API retuns products in object format, so we need to convert it to an array
        setProducts(data.products)
        setIsLoading(false)
      } catch (err) {
        setError(err.message)
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return { products, isLoading, error }
}

