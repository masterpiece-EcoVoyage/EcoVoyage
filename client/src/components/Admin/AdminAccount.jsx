import React, { useState } from 'react'
import SideBar from './SideBar'
import Dashboard from './Dashboard';
import { usePage } from '../Context/SelectedPageContext';
import AllUsers from './Tables/AllUsers';
import { AllDestinations } from './Tables/AllDestinations';
const AdminAccount = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const [user, setUser] = useState([]);
const { page, onSelectPage } = usePage();
console.log(page);
  return (
    <div>
      <SideBar />
      <div className=''>
        <div className={`${page === 'dashboard'?"block":"hidden"}`}>
            <Dashboard />
        </div>
        <div className={`${page === 'users'?"block":"hidden"} w-4/6 py-5`}>
            <AllUsers />
        </div>
        <div className={`${page === 'destinations'?"block":"hidden"} w-4/6 py-5`}>
            <AllDestinations />
        </div>
      </div>
    </div>
  )
}

export default AdminAccount
