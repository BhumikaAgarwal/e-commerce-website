import React from 'react'
import { rings } from "../Data";
import Ring from "./Ring";
import './products.css'

const Rings = () => {
  return (
    <div className="prod-item">
    {rings.map((item) => (
      <Ring item={item} key={item.id} />
    ))}
  </div>
  )
}

export default Rings
