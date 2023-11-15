import React from 'react';
import left from './Styles/Left.module.css';
import prof from '../Images/prof.jpg';
import { Link } from 'react-router-dom';
import { RiDashboardLine } from "react-icons/ri";
import { SiSparkar } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { ImListNumbered } from "react-icons/im";
import { IoSettingsSharp } from "react-icons/io5";

function LeftSide() {
  return (
    <div className={left.mainWapper}>
      <div className={left.profile}>
        <img src={prof} alt="img" />
        <h3>Admin</h3>
      </div>
      <div className={left.links}>
      <span><RiDashboardLine /><Link to={''}> Dashboard</Link></span>
       <span><SiSparkar /> <Link to={'slots'}>Slots</Link></span>
       <span><SiNumpy /><Link to={'booked'}>Booked slots</Link></span>
        <span><ImListNumbered /><Link to={'remaining'}>Remaining slots</Link></span>
        <span><IoSettingsSharp /><Link>Settings</Link></span>
      </div>
      <div className={left.logout}>
        <h3>Logout</h3>
      </div>
    </div>
  )
}

export default LeftSide
