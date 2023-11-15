import React from 'react';
import top from './Styles/Top.module.css';
import { Outlet } from 'react-router-dom';
import { IoMdNotifications } from "react-icons/io";
import pro from '../Images/prof.jpg';

function TopSide() {
  return (
    <div className={top.mainWrapper}>
      <div className={top.mainTop}>
        <div className={top.search}>
          <input type="text" placeholder='search'/>
        </div>
        <div className={top.userProfile}>
          <IoMdNotifications className={top.icon}/>
          <img src={pro} alt="img" />
          <h3 className={top.text}>Admin</h3>
        </div>
      </div>
      <div className={top.body}>
      <Outlet/>
      </div>
    </div>
  )
}

export default TopSide
