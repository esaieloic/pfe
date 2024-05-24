import React from 'react'
import { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';


function Profile() {

  const [openSidebar, setOpenSidebar] = useState(false)
  function StateSidebar(){
    setOpenSidebar(!openSidebar)
  }

  return (
    <div className='containeur'>
      <Sidebar openSidebar={openSidebar} stateSidebar={StateSidebar}/>        
      <div className='containeur0'>
        <Header stateSidebar={StateSidebar}/>
        <div>My Profile</div>
      </div>
    </div>
  )
}

export default Profile;