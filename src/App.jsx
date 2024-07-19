import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Logos from './components/logos'
import ProductCard from './components/products/indexcontainer'

function App() {

  return (
    <>
    <Navbar />
    <Home/>
    <Logos/>
    <ProductCard/>
    <Footer/>
    </>
  )
}

export default App
