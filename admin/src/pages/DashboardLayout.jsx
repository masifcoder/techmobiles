
import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
import Topbar from '../components/Topbar'

const DashboardLayout = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-6 min-h-screen">
        {/* Sidebar Menu */}
        <aside className="bg-white text-white p-6 pt-0 ps-0 md:col-span-1">
            <Sidebar />
        </aside>

        {/* Main Content */}
        <main className="bg-slate-100 dark:bg-gray-700 p-6 md:col-span-5">
          <div className='mb-3'>
            <Topbar />
          </div>
          

          <div className='ChildPages'>
            <Outlet />
          </div>  
        </main>
      </div>

    </>
  )
}

export default DashboardLayout