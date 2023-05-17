import React from 'react'
import Navbar from './Navbar'
import Newsletter from './Newsletter'
import './Singleproduct.css'

const Singleproduct = () => {
  return (
    <div className="single-prod">
        <Navbar></Navbar>
        <div className="wrapper">
            <div className="single-prod-image">
                <img src='https://ww1.prweb.com/prfiles/2019/05/31/16345675/8.jpg'/>
            </div>
            <div className="info">
                <h1 className="title">Chained-Neckpiece</h1>
                <div className="description">Today, jewelry is a way of life, and whether it is for wearing or for gift, it can be an expression of emotion. Jewelry trends have changed with time, yet one thing that has remained constant is the demand for sleek accessories. Statement necklaces are still in need, but with women becoming independent, everyday jewelry has itself become a trend.</div>
            <div className="price">$20</div>
            </div>
        </div>
        <Newsletter></Newsletter>

    </div>
  )
}

export default Singleproduct
