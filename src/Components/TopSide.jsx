import React from 'react';
import top from './Styles/Top.module.css';
import { Outlet } from 'react-router-dom';

function TopSide() {
  return (
    <div className={top.mainWrapper}>
      <div className={top.mainTop}>
        <h1>hdhdhdhdhh</h1>
      </div>
      <div className={top.body}>
      <Outlet/>
      </div>
    </div>
  )
}

export default TopSide
