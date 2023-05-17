import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Search from "@mui/icons-material/Search";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import './products.css'

const Bracelet = ({ item }) => {
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
        <div className="icon">
          <FavoriteBorder />
        </div>
      </div>
    </div>
  );
};

export default Bracelet;
