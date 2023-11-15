import React from 'react';
import card from './Card.module.css'
import { MdOutlineShowChart } from "react-icons/md";

function Card() {
  return (
    <div className={card.main}>
      <div className={card.left}>
        <h2>Slots</h2>
        <h4>Total Slots</h4>
        <p>320 Slots</p>
      </div>
      <div className={card.right}>
      <MdOutlineShowChart />
      </div>
    </div>
  )
}

export default Card
