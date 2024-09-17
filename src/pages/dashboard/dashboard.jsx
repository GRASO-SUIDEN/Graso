
import React from 'react';
import SideAdmin from "./sideadminpanel/side-admin-panel";
import './dashboard.css';
import './sideadminpanel/admin-info/admin-info'
import AdminInfo from './sideadminpanel/admin-info/admin-info';


function Dashboard() {
  return (
    <div className='dashboard-container'>
      <SideAdmin/>
      <AdminInfo/>
    </div>
  );
}

export default Dashboard;
