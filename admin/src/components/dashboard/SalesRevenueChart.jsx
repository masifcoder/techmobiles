import React from 'react';
import ReactApexChart from 'react-apexcharts';

const SalesRevenueAreaChart = () => {
  // Sample data - replace with your actual data
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const salesData = [44, 55, 57, 56, 61, 58, 63, 60, 66, 72, 68, 74];
  const revenueData = [76, 85, 101, 98, 87, 105, 91, 114, 94, 110, 120, 112];

  const options = {
    chart: {
      type: 'area',
      height: 350,
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'monotoneCubic',
      width: 1,
    },
    title: {
      text: 'Monthly Sales & Revenue',
      align: 'left',
      style: {
        fontSize: '18px',
        fontWeight: 'normal',
      },
    },
    xaxis: {
      categories: months,
      title: {
        text: 'Month',
      },
    },
    yaxis: {
      title: {
        text: 'Amount ($)',
      },
      labels: {
        formatter: function (val) {
          return val.toFixed(0);
        },
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return '$' + val.toLocaleString();
        },
      },
    },
    legend: {
      position: 'top',
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
    colors: ['#008FFB', '#00E396'],
  };

  const series = [
    {
      name: 'Sales',
      data: salesData,
    },
    {
      name: 'Revenue',
      data: revenueData,
    },
  ];

  return (
    <div className="sales-revenue-area-chart bg-white shadow-sm mb-5 rounded-lg p-6">
      <ReactApexChart 
        options={options} 
        series={series} 
        type="area" 
        height={330} 
      />
    </div>
  );
};

export default SalesRevenueAreaChart;