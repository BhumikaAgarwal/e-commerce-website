import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Search from "@mui/icons-material/Search";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import './products.css'
import { useState} from "react";




const Product = ({ item }) => {
  const [divColor, setDivColor] = useState('black');

  const handleClick = () => {
    const newColor = divColor === 'black' ? 'red' : 'black';
    setDivColor(newColor);
  };
  return (
    <div className="products">
      <div className="prod-image">
        <img src={item.img}/>
      </div>
      <div className="prod-info">
        <div className="icon">
          <ShoppingCartIcon />
        </div>
        <div className="icon">
          <Search></Search>
        </div>
        <div className="icon1"
        style={{ color: divColor,  }}
      onClick={handleClick} >
          <FavoriteBorder />
        </div>
      </div>
    </div>
  );
};

export default Product;
