import React from "react";


const StoreCard = ({ icon: Icon, title, value, change, today, bgcolor, color }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 py-8 flex flex-col flex-1 h-full">
      <div className="flex items-center space-x-3 mb-3">
        <div style={{ backgroundColor: bgcolor }} className="p-2 rounded-2xl"><Icon style={{color: color}} /></div>
        <h4 className="font-medium !mb-0" >{title}</h4>
      </div>
      <h2 className="text-2xl font-bold mt-2">{value}</h2>
      <div className="flex items-center text-sm mt-1">
        <span className={change > 0 ? "text-green-600 font-medium" : "text-red-500 font-medium"}>
          {change}% {change > 0 ? "\u2191" : "\u2193"}
        </span>
        <span className="text-gray-400 ml-2">| +{today} today</span>
      </div>
    </div>
  );
};

export default StoreCard