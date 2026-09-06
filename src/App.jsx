import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Discover from './components/Discover/Discover'
import Products from './components/Products/Products'
import Testimonials from './components/Testimonials/Testimonials'
import Subscribe from './components/Subscribe/Subscribe'
import Footer from './components/Footer/Footer'
import Login from './Pages/Login/Login'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Discover />
              <Products />
              <Testimonials />
              <Subscribe />
              <Footer />
            </>
          }
        />
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
