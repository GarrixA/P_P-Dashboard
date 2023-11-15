import React from 'react';
import home from './Home.module.css';
import LeftSide from './Components/LeftSide';
import TopSide from './Components/TopSide';

function Home() {
  return (
    <div className={home.main}>
    <div className={home.mainWrapper}>
      <div className={home.left}>
        <LeftSide/>
      </div>
      <div className={home.top}>
        <TopSide/>
      </div>
    </div>
    </div>
  )
}

export default Home
