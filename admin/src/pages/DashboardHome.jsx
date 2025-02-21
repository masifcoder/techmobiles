import React from 'react'
import StoreAnalytics from '../components/dashboard/StoreAnalytics';
import SalesRevenueChart from '../components/dashboard/SalesRevenueChart';
import ChannelsVisitChart from '../components/dashboard/ChannelVisitsChart';
import SalesChart from '../components/dashboard/SalesChart';
import TopProductsTable from '../components/dashboard/TopProductsTable';

const DashboardHome = () => {
  return (
    <>
      <div className='mb-3'>
        <h1 className='text-3xl mb-3'>Welcome back to admin</h1>
        <StoreAnalytics />
      </div>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-4">
          <div>
            <SalesRevenueChart />
            <TopProductsTable />
          </div>

        </div>
        <div className="col-span-2">
          {/* Right column content */}
          <ChannelsVisitChart />
          <SalesChart />
        </div>
      </div>
    </>

  )
}

export default DashboardHome