import React from 'react';
import { Link } from 'react-router-dom';
import { Search, User } from "lucide-react"

const Navbar = () => {
  return (
    <nav className="bg-white px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img className="h-8 w-auto sm:h-10" src="path-to-your-logo.png" alt="ELECTRO Logo" />
          <span className="font-semibold text-xl tracking-tight">ELECTRO</span>
        </div>
        <div className="hidden md:flex md:items-center md:justify-end md:flex-1 lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-900 mr-4">
              Home
            </Link>
            <Link to="/category" className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-900 mr-4">
              Category
            </Link>
            <Link to="/about" className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-900 mr-4">
              About Us
            </Link>
            <Link to="/faq" className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-900 mr-4">
              FAQ
            </Link>
            <Link to="/blog" className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-900 mr-4">
              Blog
            </Link>
            <Link to="/contact" className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-900">
              Contact
            </Link>
          </div>
          <div className="flex items-center">
            <a href="#" className="text-gray-700 hover:text-gray-900 mr-4">
              <Search size={20} />
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <User size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;