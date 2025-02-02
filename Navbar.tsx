"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FiShoppingCart, FiUser, FiMenu, FiX, FiSearch } from "react-icons/fi";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store"; // Replace with the actual path to your store's RootState type

const Navbar: React.FC = () => {
  const itemCount = useSelector((state: RootState) => state.cart.length); // Get cart item count
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white px-4 md:px-8 py-4 flex items-center justify-between text-blue-950">
      <div className="flex items-center space-x-4">
        {/* Hamburger Menu Button */}
        <button
          className="text-2xl md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Logo */}
        <div className="text-grey-100 font-bold text-xl tracking-wide">Bandage</div>
      </div>

      {/* Navigation Links (Mobile/Tablet) */}
      <ul
        className={`${
          isMenuOpen ? "absolute left-0 top-16 w-full bg-[#FFFBF0] shadow-lg" : "hidden"
        } md:flex md:static md:w-auto space-y-2 md:space-y-0 md:space-x-8 text-base font-medium`}
      >
        <Link href="/">
          <li className="px-4 py-2 md:p-0 text-center md:text-left hover:text-gray-600">Home</li>
        </Link>
        <Link href="/about">
          <li className="px-4 py-2 md:p-0 text-center md:text-left hover:text-gray-600">About</li>
        </Link>
        <Link href="/product">
          <li className="px-4 py-2 md:p-0 text-center md:text-left hover:text-gray-600">Shop</li>
        </Link>
        <Link href="/products">
          <li className="px-4 py-2 md:p-0 text-center md:text-left hover:text-gray-600">Products</li>
        </Link>
        <Link href="/contact">
          <li className="px-4 py-2 md:p-0 text-center md:text-left hover:text-gray-600">Contact</li>
        </Link>
      </ul>

      <div className="flex items-center space-x-4">
        {/* Search Bar (Desktop) */}
        <div className="hidden md:flex items-center bg-[#F7EDE4] rounded-full px-4 py-2 w-[400px] mr-12">
          <FiSearch />
          <input
            type="text"
            placeholder="Search for products..."
            className="bg-transparent focus:outline-none text-sm placeholder-gray-500"
          />
        </div>

        {/* Cart Icon with Item Count */}
        <Link href="/cart" className="relative">
          <FiShoppingCart size={24} />
          {itemCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1">
              {itemCount}
            </span>
          )}
        </Link>

<Link href={"/login"}>
<FiUser size={24} /></Link>
        {/* User Icon */}
        
      </div>
    </nav>
  );
};

export default Navbar;
