import React from 'react'
import { bracelets } from "../Data";
import Bracelet from "./Bracelet";
import './products.css'

const Bracelets = () => {
  return (
    <div className="prod-item">
    {bracelets.map((item) => (
      <Bracelet item={item} key={item.id} />
    ))}
  </div>
  )
}

export default Bracelets
