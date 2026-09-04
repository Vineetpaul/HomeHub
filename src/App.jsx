import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<><Navbar /> <Hero/></>} />
         

        </Routes>


      </BrowserRouter>
    </div>
  )
}

export default App
