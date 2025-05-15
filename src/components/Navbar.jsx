import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    'Home',
    'About',
    'Service',
    'Project',
    'Gallery',
    'Career',
    'Blog',
    'Contact',
  ];

  const renderNavLink = (link) => (
    <a
      key={link}
      href="#"
      className="relative group text-black hover:text-[#4479A1] transition duration-200 pl-2"
      onClick={() => setMenuOpen(false)}
    >
      {link}
      <span className="absolute left-0 -bottom-4 w-full h-[2px] bg-[#4479A1] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
    </a>
  );

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-2 border-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20">

          {/* Logo with 20px left margin */}
          <div className="flex-shrink-0 ml-[20px]">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-8 sm:h-12 md:h-16 w-auto object-contain"
            />
          </div>

          {/* Spacer div for 200px gap */}
          <div className="w-[200px]"></div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-4 text-lg font-bold">
            {navLinks.map(renderNavLink)}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-black focus:outline-none"
              aria-label="Toggle menu"
            >
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-2 py-4">
          <div className="flex flex-col space-y-4 font-bold text-lg">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-black hover:text-[#4479A1] pl-2"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
