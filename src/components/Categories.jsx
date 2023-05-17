import { categories } from "../Data";
import "./Categories.css";

import React from "react";
import Categoryitem from "./Categoryitem.jsx";

const Categories = () => {
  return (
    <div className="categories">
      {categories.map((item) => (
        <Categoryitem item={item} key = {item.id} />
      ))}
    </div>
  );
};

export default Categories;
