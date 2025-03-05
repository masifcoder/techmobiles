import React from 'react';
import { Link } from 'react-router-dom';
import { Search, User, ShoppingCart, LogOut, LogIn } from "lucide-react"
import Logo from "../images/Logo.svg";
import { useSelector, useDispatch } from "react-redux";
import {logout} from "../redux/authSlice"
import { Dropdown, Menu, Avatar } from 'antd';

const Navbar = () => {
  const cart = useSelector(state => state.cartState.cart);
  const { isLogin } = useSelector((state) => state.authSlice);
  const dispatcher = useDispatch();

  const userMenu = (
    <Menu>
        <Menu.Item key="profile">
            <Link to="/profile" className="flex items-center">
                <User size={16} className="mr-2" />
                Profile
            </Link>
        </Menu.Item>
        <Menu.Item key="orders">
            <Link to="/orders" className="flex items-center">
                <ShoppingCart size={16} className="mr-2" />
                My Orders
            </Link>
        </Menu.Item>
        <Menu.Item key="logout" onClick={() => dispatcher(logout())}>
            <div className="flex items-center">
                <LogOut size={16} className="mr-2" />
                Logout
            </div>
        </Menu.Item>
    </Menu>
  );

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
            (isLogin == true) ? (
              <Dropdown overlay={userMenu} trigger={['click']}>
                <div className="flex items-center text-gray-700 hover:text-gray-900 cursor-pointer">
                  <Avatar 
                    style={{ backgroundColor: '#87d068' }} 
                    icon={<User size={16} />} 
                    className="mr-2"
                  />
                  <span className='ms-1'>Account</span>
                </div>
              </Dropdown>
            ) : <Link to='/login' className='curspor-pointer'><LogIn size={20} /></Link>
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;