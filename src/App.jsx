import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Discover from './components/Discover/Discover'
import Products from './components/Products/Products'
import Testimonials from './components/Testimonials/Testimonials'
import Subscribe from './components/Subscribe/Subscribe'
import Footer from './components/Footer/Footer'
import Login from './Pages/Login/Login'
import Signup from './Pages/Signup/Signup'
import { Navigate, useLocation } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const location = useLocation()
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'

  if (!isAuthenticated) {
    return <Navigate to='/login' replace state={{ from: location }} />
  }

  return children
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Navbar />
              <Hero />
              <Discover />
              <Products />
              <Testimonials />
              <Subscribe />
              <Footer />
            </ProtectedRoute>
          }
        />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
