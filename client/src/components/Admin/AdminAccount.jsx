import React, { useState } from 'react'
import SideBar from './SideBar'
import Dashboard from './Dashboard';
import { usePage } from '../Context/SelectedPageContext';
import AllUsers from './Tables/AllUsers';
import { AllDestinations } from './Tables/AllDestinations';
import { AllActivities } from './Tables/AllActivities';
import { AllPackages } from './Tables/AllPackages';
import { AllHousing } from './Tables/AllHousing';
import UpdateActivity from './Forms/UpdateActivity';
import AddActivity from './Forms/AddActivity';
const AdminAccount = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const [user, setUser] = useState([]);
const { page, onSelectPage, selectedId, onSelectedId } = usePage();
  return (
    <div>
      <SideBar />
      <div className='min-h-screen'>
        
        <div className={`${page === 'dashboard'?"block":"hidden"}`}>
            <Dashboard />
        </div>
        <div className={`${page === 'users'?"block":"hidden"} w-4/6 py-5`}>
            <AllUsers />
        </div>
        <div className={`${page === 'destinations'?"block":"hidden"} w-4/6 py-5`}>
            <AllDestinations />
        </div>
        <div className={`${page === 'activities'?"block":"hidden"} w-4/6 py-5`}>
            <AllActivities />
        </div>
        <div className={`${page === 'packages'?"block":"hidden"} w-4/6 py-5`}>
            <AllPackages />
        </div>
        <div className={`${page === 'accommodations'?"block":"hidden"}`}>
            <AllHousing />
        </div>
        <div className={`${page === 'addActivity'?"block":"hidden"}`}>
            <AddActivity />
        </div>
        <div className={`${page === 'updateActivity'?"block":"hidden"}`}>
            <UpdateActivity id={selectedId} />
        </div>    
        {/* <div className={`${page === 'accommodations'?"block":"hidden"}`}>
            <AllHousing />
        </div>     */}
        {/* <div className={`${page === 'accommodations'?"block":"hidden"}`}>
            <AllHousing />
        </div>     */}
        {/* <div className={`${page === 'accommodations'?"block":"hidden"}`}>
            <AllHousing />
        </div>     */}
        {/* <div className={`${page === 'accommodations'?"block":"hidden"}`}>
            <AllHousing />
        </div>     */}
      </div>
    </div>
  )
}

export default AdminAccount
