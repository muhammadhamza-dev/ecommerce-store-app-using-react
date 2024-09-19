import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaHeart, FaUserCircle, FaShoppingCart, FaBars } from 'react-icons/fa';
import Logo from "../assets/HeaderImages/logo_210x@2x.png"

const Navbar = () => {
  const cart = useSelector((state) => state.cart.items);

  return (
    <header className="bg-[#1F2937] sticky top-0 z-50 backdrop-blur-lg">
      <div className="container mx-auto p-4 flex justify-between items-center">
        
        <div className="flex items-center">
          <Link to="/" className="text-3xl font-bold text-white">
            {/* Add your logo here */}
            <img src={Logo} alt="Logo" className="h-8" />
          </Link>
        </div>

        {/* Search Bar */}
        <div className="hidden w-[40%] lg:flex mx-6">
          <div className="w-full flex gap-2">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full border-none px-4 py-2 text-black rounded-full  shadow-md focus:outline-none  focus:ring-orange-500"
            />
            <button className=" bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition duration-300">
              Search
            </button>
          </div>
        </div>

        {/* User Actions */}
        <div className="flex items-center space-x-6 text-white">
          <Link to="/account" className="hidden sm:flex items-center transition duration-300 hover:text-orange-500">
            <FaUserCircle className="text-2xl mr-2" />
            <span className="hidden md:inline">Account</span>
          </Link>
          <Link to="/wishlist" className="hidden sm:flex items-center transition duration-300 hover:text-orange-500">
            <FaHeart className="text-2xl mr-2" />
            <span className="hidden md:inline">Wishlist</span>
          </Link>
          <Link to="/cart" className="flex items-center transition duration-300 hover:text-orange-500">
            <FaShoppingCart className="text-2xl mr-2" />
            <span className="hidden md:inline">Cart</span>
            <span className="ml-2 text-sm bg-orange-500 rounded-full px-2 py-1 text-white">${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</span>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden flex items-center text-white">
          <button className="focus:outline-none">
            <FaBars className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="lg:hidden container mx-auto p-4">
        <div className="flex">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full px-4 py-2 text-black rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button className="ml-2 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition duration-300">
            Search
          </button>
        </div>
      </div>

      {/* Desktop Navigation Links */}
      <nav className="hidden lg:flex justify-center bg-[#1F2937] text-white py-2">
        <ul className="flex space-x-8">
          <li className="hover:text-orange-500 transition duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-orange-500 transition duration-300">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="hover:text-orange-500 transition duration-300">
            <Link to="/product">Product</Link>
          </li>
          <li className="hover:text-orange-500 transition duration-300">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="hover:text-orange-500 transition duration-300">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
