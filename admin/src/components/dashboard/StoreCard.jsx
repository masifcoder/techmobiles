import React from "react";


const StoreCard = ({ icon: Icon, title, value, change, today, color }) => {
  return (
    <div className="bg-slate-50 rounded-2xl shadow-sm p-6 flex flex-col w-full max-w-xs">
      <div className="flex items-center space-x-3">
        <Icon className={`text-${color}-500 text-2xl`} />
        <h4 className="text-gray-500 font-medium">{title}</h4>
      </div>
      <h2 className="text-2xl font-bold mt-2">{value}</h2>
      <div className="flex items-center text-sm mt-1">
        <span className={`text-${change > 0 ? "green" : "red"}-500 font-medium`}>{change}% {change > 0 ? "\u2191" : "\u2193"}</span>
        <span className="text-gray-400 ml-2">| +{today} today</span>
      </div>
    </div>
  );
};

export default StoreCard