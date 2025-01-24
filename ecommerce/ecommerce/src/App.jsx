import React from 'react'
import Header from './components/Header/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Product from './components/Product/Product'
import Contact from './components/Contact/Contact'
import Signin from './components/Signin/Signin'
import Card from './components/Card/Card'
import { useState } from 'react'

const App = () => {
  //State for cart count
  const [cartCount, setCartCount] = useState(0);
  return (
    <div>
      <Header cartCount={cartCount}/>
      <Routes>
        <Route path='/' element={<Home setCartCount={setCartCount}/>} />
        <Route path='/product' element={<Product />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Signin/>} />
        <Route path='/cart' element={<Card cartCount={cartCount}/>} />  
      </Routes>
    </div>
  )
}

export default App
