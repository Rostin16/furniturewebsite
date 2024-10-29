import React from 'react'
import Header from "./Components/Header"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Container/Home"
import About from "./Container/About"
import Shop from "./Container/Shop"
import Services from "./Container/Services"
import Blog from "./Container/Blog"
import Contact from "./Container/Contact"
import Footer from './Components/Footer'
import Cart from './Container/Cart'


function App() {
  return (
    <>
    <BrowserRouter>

    <Header/>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/shop' element={<Shop/>}/>
       <Route path='/services' element={<Services/>}/>
       <Route path='/blog' element={<Blog/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/cart' element={<Cart/>}/>
      
    </Routes>
    <Footer/>
    </BrowserRouter>
      
    </>
  )
}

export default App
