import React from 'react'
import { Home, BarChart, Box, CreditCard, ShoppingCart, Users, Calendar } from "lucide-react";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="h-screen bg-white dark:bg-gray-700 shadow-md p-4 flex flex-col">
      <div className="flex items-center space-x-2 px-2 mb-6">
        <div className="text-blue-500 dark:text-blue-400 font-bold text-xl">Nexmart</div>
      </div>
      <nav className="flex-1">
        <ul className="space-y-2">
          <li className="bg-blue-500 text-white rounded-lg">
            <Link to="/dashboard" className="flex items-center p-3 space-x-2">
              <Home size={20} />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <a href="#" className="flex items-center p-3 space-x-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
              <BarChart size={20} />
              <span>Statistics</span>
            </a>
          </li>
          <li>
            <Link to="/dashboard/products" className="flex items-center p-3 space-x-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
              <Box size={20} />
              <span>Products</span>
            </Link>
          </li>
          <li>
            <a href="#" className="flex items-center p-3 space-x-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
              <CreditCard size={20} />
              <span>Transactions</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-3 space-x-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
              <ShoppingCart size={20} />
              <span>Order</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-3 space-x-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
              <Users size={20} />
              <span>Customer</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-3 space-x-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
              <CreditCard size={20} />
              <span>Payment</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-3 space-x-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
              <Calendar size={20} />
              <span>Calendar</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar