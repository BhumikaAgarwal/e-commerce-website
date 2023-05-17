import { useState } from 'react'
import Cart from './components/Cart'
import Home from './components/Home'
import Newsletter from './components/Newsletter'
import Productlist from './components/Productlist'
import Singleproduct from './components/Singleproduct'
// import {BrowserRouter as Router , Route , Switch , Link} from "react-router-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
    <>
    <Home></Home>
    <Productlist></Productlist>
    {/* <Ringlist></Ringlist> */}
    {/* <Singleproduct></Singleproduct> */}
    {/* <Cart></Cart> */}
    <Newsletter></Newsletter>
    </>
  )
}

export default App
