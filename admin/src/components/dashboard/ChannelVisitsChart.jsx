import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ChannelsVisitChart = () => {
  const [options] = useState({
    chart: {
      type: 'radialBar',
      height: 350,
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '70%',
          background: '#fff',
        },
        track: {
          background: '#f2f2f2',
          strokeWidth: '100%',
          margin: 0,
        },
        dataLabels: {
          show: true,
          name: {
            show: false,
          },
          value: {
            show: false,
          },
          total: {
            show: true,
            label: '',
            formatter: function () {
              return '820,100';
            },
            fontSize: '22px',
            fontWeight: 600,
            color: '#333'
          }
        },
      }
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: function (value) {
          return value + '%';
        }
      },
      style: {
        fontSize: '12px',
      },
      marker: {
        show: false,
      },
    },
    stroke: {
      lineCap: 'round',
    },
    colors: ['#0036c3', '#3cdfcb', '#39b9e6', '#ff9452'],
    labels: ['Social Media', 'Referral Code', 'Google Ads', 'Email Blast'],
    legend: {
      show: true,
      position: 'bottom',
      horizontalAlign: 'left',
      fontSize: '14px',
      markers: {
        width: 10,
        height: 10,
        radius: 0,
      },
      itemMargin: {
        horizontal: 10,
        vertical: 5
      },
      formatter: function (seriesName, opts) {
        return seriesName;
      }
    },
  });

  const [series] = useState([43.26, 16.74, 20, 20]);

  // Percentage tooltip element for Social Media
  const CustomTooltip = () => {
    return (
      <div className="absolute top-16 right-20 bg-black text-white py-1 px-3 rounded-md text-sm font-medium">
        43.26%
      </div>
    );
  };

  // Growth indicator
  const GrowthIndicator = () => {
    return (
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-4 text-center">
        <span className="text-teal-400 text-sm font-medium">8% ↑</span>
      </div>
    );
  };

  return (
    <div className="relative bg-white rounded-lg p-5 shadow-sm mb-5">
      <div className="mb-1">
        <h2 className="text-xl font-bold text-gray-800">Channels</h2>
        <p className="text-gray-400 text-sm">Visit Channels</p>
      </div>

      <div className="relative">
        <ReactApexChart
          options={options}
          series={series}
          type="radialBar"
          height={280}
        />
        <CustomTooltip />
        <GrowthIndicator />
      </div>
    </div>
  );
};

export default ChannelsVisitChart;