import React from 'react'
import Navbar from './Navbar'
import './Cart.css'

const Cart = () => {
  return (
    <div>
    <div className="cart">
        <Navbar></Navbar>
        <div className="cart-wrapper">
            <h1 className="cart-title">YOUR BAG</h1>
            <div className="top">
                <button className="top-button">CONTINUE SHOPPING</button>
                <button className="top-button">CHECKOUT NOW</button>
            </div>
            <div className="bottom"></div>
        </div>
    </div>
      
    </div>
  )
}

export default Cart
