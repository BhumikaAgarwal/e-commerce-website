
import React from "react";
import { necklaces } from "../Data";
import Necklace from "./Necklace";
import './products.css'


const Necklaces = () => {
  return (
    <div className="prod-item">
      {necklaces.map((item) => (
        <Necklace item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Necklaces;

