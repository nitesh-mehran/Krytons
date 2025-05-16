import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Service', path: '/service' },
    { name: 'Project', path: '/projects' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Career', path: '/career' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const renderNavLink = ({ name, path }) => (
    <NavLink
      key={name}
      to={path}
      className={({ isActive }) =>
        `relative group text-black hover:text-[#4479A1] transition duration-200 pl-2 ${
          isActive ? 'text-[#4479A1]' : ''
        }`
      }
      onClick={() => setMenuOpen(false)}
    >
      {name}
      <span className="absolute left-0 -bottom-4 w-full h-[2px] bg-[#4479A1] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
    </NavLink>
  );

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-2 border-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 ml-[20px]">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-8 sm:h-12 md:h-16 w-auto object-contain"
            />
          </div>

          {/* Spacer */}
          <div className="w-[200px]"></div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-4 text-lg font-bold">
            {navLinks.map(renderNavLink)}
          </div>

          {/* Mobile Menu Toggle */}
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

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-2 py-4">
          <div className="flex flex-col space-y-4 font-bold text-lg">
            {navLinks.map(renderNavLink)}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
