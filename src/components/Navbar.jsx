import React from "react";
import "./Navbar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";


export default function Navbar() {
  return (
    <>
      <div className="nav">
        <div className="name1">aria</div>

        <div className="items">
          <li className="earrings"><a href="#earring"> EARRINGS</a></li>
          <li className="rings"><a href="#rings"> RINGS</a></li>

          <li className="necklace">NECKLACES</li>
          <li className="bracelets">BRACELETS</li>
        </div>

        <div className="menu">
          <SearchIcon></SearchIcon>
          <ShoppingCartIcon></ShoppingCartIcon>
        </div>
      </div>
    </>
  );
}
