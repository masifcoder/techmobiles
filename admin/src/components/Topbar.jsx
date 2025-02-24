import React, { useEffect, useState } from 'react'
import { Bell, Search, Sun, Moon } from "lucide-react";
import UserDropdown from './UserDropdown';

const Topbar = () => {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);
    return (
        <div className="flex items-center justify-between dark:bg-gray-900">
            {/* Search Bar */}
            <div className="relative w-96">
                <input
                    type="text"
                    placeholder="Search here..."
                    className="w-full px-4 py-2.5 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none shadow-sm"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" size={18} />
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-6">
                {/* Light/Dark Mode Toggle */}
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                    {darkMode ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-gray-800" />}
                </button>

                {/* Notification Bell */}
                <div className="relative">
                    <Bell size={22} className="text-gray-600 dark:text-gray-300" />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">2</span>
                </div>

                {/* User Profile */}
                <div className="flex items-center gap-2">
                    <div>
                        <UserDropdown />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar