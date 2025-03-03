import React from 'react';
import { Link } from 'react-router-dom';
import { Search, User, ShoppingCart, LogOut, LogIn } from "lucide-react"
import Logo from "../images/Logo.svg";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const cart = useSelector(state => state.cartState.cart);
  const dispatcher = useDispatch();
  const isLogin = false;


  return (
    <nav className="bg-white px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link to='/' ><img className="h-10 w-auto sm:h-10" src={Logo} alt="ELECTRO Logo" /></Link>
        </div>
        <div className="hidden md:flex md:items-center md:justify-end md:flex-1 lg:w-auto">
          <div className="text-sm lg:flex-grow text-center">
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
        </div>
        <div className="flex items-center">
          <Link href="#" className="text-gray-700 hover:text-gray-900 mr-4">
            <Search size={20} />
          </Link>
          <Link to="/cart" className="text-gray-700 hover:text-gray-900 mr-4 relative">
            <ShoppingCart size={20} />
            {/* Small indicator for products */}
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs flex justify-center items-center h-5 w-5 rounded-full p-1">
              {cart.length} {/* Replace with dynamic product count */}
            </span>
          </Link>
          {
            (isLogin == true) ? (<>
              <Link onClick={() => {}} to='/profile' className="text-gray-700 hover:text-gray-900 mr-4">
                <User size={20} />
              </Link> 
              <button onClick={ () => {} } className="text-gray-700 hover:text-gray-900">
                <LogOut size={20} />
              </button>
            </>) : <button onClick={() => {} } className='curspor-pointer'><LogIn size={20} /></button>
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;