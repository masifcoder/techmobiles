import React from "react";
import Chart from "react-apexcharts";

const SalesChart = () => {
  const salesData = [
    { state: "Washington", sales: 400, growth: 4 },
    { state: "North Dakota", sales: 200.12, growth: 4 },
    { state: "Wisconsin", sales: 720, growth: 4 },
  ];

  const chartOptions = {
    chart: {
      type: "bar",
      height: 300,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '20%'
      },
    },
    colors: ["#007bff"],
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: salesData.map((data) => data.state),
    },
  };

  const chartSeries = [
    {
      name: "Sales ($)",
      data: salesData.map((data) => data.sales),
    },
  ];

  return (
    <div className="p-4 rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-semibold">Sales Performance by State</h2>
      <Chart options={chartOptions} series={chartSeries} type="bar" height={300} />
      <div className="mt-4">
        {salesData.map((data, index) => (
          <div key={index} className="flex justify-between items-center border-b border-b-gray-200 py-2">
            <span className="font-medium">{data.state}</span>
            <span className="text-green-600 font-bold">${data.sales.toFixed(2)} ({data.growth}%) ↑</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesChart;
