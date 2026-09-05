import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Discover from './components/Discover/Discover'
import Products from './components/Products/Products'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<><Navbar /> <Hero/></>} />
          
         

        </Routes>


      </BrowserRouter>
      <Discover />
      <Products />
    </div>
  )
}

export default App
