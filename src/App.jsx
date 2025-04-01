import { Suspense, lazy } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./redux/store"
import Header from "./components/Header"
import Loading from "./components/Loading"
import Footer from "./pages/Footer"

// Lazy loaded components
const Home = lazy(() => import("./pages/Home"))
const ProductDetail = lazy(() => import("./pages/ProductDetail"))
const Cart = lazy(() => import("./pages/Cart"))
const Checkout = lazy(() => import("./pages/Checkout"))
const NotFound = lazy(() => import("./pages/NotFound"))

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Header />
          <main className="container mx-auto py-8 px-4">
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  )
}

export default App