"use client"
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMoon, faTimes } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Cars for Buy', href: '/cars-for-buy' },
    { name: 'Cars for Rent', href: '/cars-for-rent' },
    { name: 'Our Services', href: '/our-services' },
    { name: 'Tint', href: '/tint' },
    { name: 'About Us', href: '/about-us' },
    { name: 'FAQs', href: '/faqs' },
  ];

  const textColor = "text-gray-400 font-bold font-sans";
  const activeTextColor = "text-black font-bold font-sans";
  const inactiveBar = "border-b-2 border-transparent";
  const activeBar = "border-b-2 border-red-600";

  return (
    <nav className="bg-white shadow-lg font-sans">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="#" passHref>
            <div className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900 cursor-pointer">
              <img src="/Logo.jpeg" alt="Logo" className="h-6 w-auto mr-2" /> 
              <span className="font-bold" style={{color:'black'}}>AMO 
                <span style={{color: '#a02820'}}> AUTO SALES</span>
              </span>
            </div>
          </Link>


          {/* Primary nav */}
          <div className={`md:flex items-center space-x-1 ${isMenuOpen ? 'flex' : 'hidden'} absolute md:static flex-col md:flex-row w-full md:w-auto bg-white md:bg-transparent shadow-lg md:shadow-none left-0 md:space-x-4`}>
            {navItems.map((item) => (
              <Link href={item.href} key={item.name} passHref>
                <div
                  className={`py-5 px-3 ${activeNav === item.name.toLowerCase() ? activeTextColor : textColor} hover:text-gray-900 cursor-pointer ${activeNav === item.name.toLowerCase() ? activeBar : inactiveBar} block md:inline-block`}
                  onClick={() => {
                    setActiveNav(item.name.toLowerCase());
                  }}
                >
                  {item.name}
                </div>
              </Link>
            ))}
            <FontAwesomeIcon icon={faMoon} className="py-5 px-3 text-gray-700 hover:text-gray-900 cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;