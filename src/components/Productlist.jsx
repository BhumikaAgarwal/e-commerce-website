import { Select } from "@mui/base";
import React from "react";
import Bracelets from "./Bracelets";
import Navbar from "./Navbar";
import Newsletter from "./Newsletter";
import "./Productlist.css";
import Products from "./Products";
import Rings from "./rings";
// import Necklaces from "./Necklaces";

const Productlist = () => {
  return (
    <div className="productlist" id="earring">
      {/* <Navbar></Navbar> */}
      <h1 className="title">EARRINGS</h1>
      <div className="filter-container">
        <div className="filter">
          <div className="name"> FILTER PRODUCTS</div>
          <select>
            <option>colour</option>
            <option>red</option>
            <option>blue</option>
            <option>green</option>
            <option>yellow</option>
            <option>black</option>
          </select>
          <select>
            <option>size</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div className="filter">
          <div className="name"> SORT PRODUCTS</div>
          <select>
            <option>newest</option>
            <option>price(asc)</option>
            <option>price(desc)</option>
          </select>
        </div>
      </div>
      <Products></Products>

      <div id="rings">
        <h1 className="title">RINGS</h1>
        <div className="filter-container">
          <div className="filter">
            <div className="name"> FILTER PRODUCTS</div>
            <select>
              <option>colour</option>
              <option>red</option>
              <option>blue</option>
              <option>green</option>
              <option>yellow</option>
              <option>black</option>
            </select>
            <select>
              <option>size</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>
          <div className="filter">
            <div className="name"> SORT PRODUCTS</div>
            <select>
              <option>newest</option>
              <option>price(asc)</option>
              <option>price(desc)</option>
            </select>
          </div>
        </div>
        <Rings></Rings>
      </div>

      {/* <div id="bracelets">
        <h1 className="title">BRACELETS</h1>
        <div className="filter-container">
          <div className="filter">
            <div className="name"> FILTER PRODUCTS</div>
            <select>
              <option>colour</option>
              <option>red</option>
              <option>blue</option>
              <option>green</option>
              <option>yellow</option>
              <option>black</option>
            </select>
            <select>
              <option>size</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>
          <div className="filter">
            <div className="name"> SORT PRODUCTS</div>
            <select>
              <option>newest</option>
              <option>price(asc)</option>
              <option>price(desc)</option>
            </select>
          </div>
        </div>
        <Bracelets></Bracelets>
      </div> */}

      {/* <div id="necklaces">
        <h1 className="title">NECKLACES</h1>
        <div className="filter-container">
          <div className="filter">
            <div className="name"> FILTER PRODUCTS</div>
            <select>
              <option>colour</option>
              <option>red</option>
              <option>blue</option>
              <option>green</option>
              <option>yellow</option>
              <option>black</option>
            </select>
            <select>
              <option>size</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>
          <div className="filter">
            <div className="name"> SORT PRODUCTS</div>
            <select>
              <option>newest</option>
              <option>price(asc)</option>
              <option>price(desc)</option>
            </select>
          </div>
        </div>
        <Necklaces></Necklaces>
      </div> */}

      {/* <Newsletter></Newsletter> */}
    </div>
  );
};

export default Productlist;
