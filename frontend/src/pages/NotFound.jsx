import { Link } from "react-router-dom"
import { FaExclamationTriangle, FaHome } from "react-icons/fa"

const NotFound = () => {
  return (
    <div className="text-center py-16 max-w-md mx-auto">
      <FaExclamationTriangle className="text-yellow-500 mx-auto mb-4" size={64} />
      <h1 className="text-4xl font-bold text-gray-800 mb-2">404</h1>
      <h2 className="text-2xl font-bold text-gray-700 mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors"
      >
        <FaHome className="mr-2" /> Go to Homepage
      </Link>
    </div>
  )
}

export default NotFound