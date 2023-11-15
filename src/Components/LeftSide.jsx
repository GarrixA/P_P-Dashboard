import React from 'react';
import left from './Styles/Left.module.css';

function LeftSide() {
  return (
    <div className={left.mainWapper}>
      <div className={left.profile}>
        MAIN
      </div>
      <div className={left.links}>
        <span>Dashboard</span>
        <span>Slots</span>
        <span>Booked slots</span>
        <span>Remaining slots</span>
        <span>Settings</span>
      </div>
    </div>
  )
}

export default LeftSide
