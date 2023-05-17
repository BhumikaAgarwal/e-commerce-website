
import React from "react";
import { earrings } from "../Data";
import Product from "./Product";
import './products.css'


const Products = () => {
  return (
    <div className="prod-item">
      {earrings.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Products;

