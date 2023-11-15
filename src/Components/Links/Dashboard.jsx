import React from 'react';
import Card from './Card/Card';
import dash from './Styles/Dashboard.module.css';

function Dashboard() {
  return (
    <div className={dash.dashMain}>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
}

export default Dashboard
