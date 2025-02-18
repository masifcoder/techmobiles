
import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
import Topbar from '../components/Topbar'

const DashboardLayout = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 min-h-screen">
        {/* Sidebar Menu */}
        <aside className="bg-slate-100 text-white p-6 pt-0 ps-0 md:col-span-1">
            <Sidebar />
        </aside>

        {/* Main Content */}
        <main className="bg-white dark:bg-gray-700 p-6 md:col-span-3">
          <div className='mb-3'>
            <Topbar />
          </div>
          <h1 className="text-3xl font-bold mb-4">🖥️ Main Content</h1>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Welcome to your dashboard! This layout uses Tailwind CSS's grid system to create a responsive two-column layout.
          </p>

          <div className='ChildPages'>
            <Outlet />
          </div>  
        </main>
      </div>

    </>
  )
}

export default DashboardLayout