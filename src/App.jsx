import React from 'react'
import Home from './components/Home'
import { Link, Route, Routes } from 'react-router-dom'
import ProductDetails from './components/ProductDetails'
const App = () => {
  return (
    <div className='app'>
      <h3 className='text-center pt-2 main-heading text-white' >Food Product Explorer</h3>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product/:barcode' element={<ProductDetails />}/>
      </Routes>
    </div>
  )
}

export default App