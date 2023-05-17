import React from 'react'
import './Categories.css'
// import { useHistory } from "react-router-dom" ;


const Categoryitem = ({item}) => {

  // let history = useHistory();

  return (

    <div className="container">
      <div className="image"><img src={item.img}/></div>
      <div className="info">
        <div className="title">{item.title}</div>
        {/* <button className="shop" 
        onClick={() =>{
          history.push('./Productlist.jsx')

        }}
        >SHOP NOW </button> */}

      </div>
    </div>
  )
}

export default Categoryitem
