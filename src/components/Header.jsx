import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import QuoteModal from './QuoteModal';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeLink, setActiveLink] = useState('home'); // State to track active link
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const handleMouseEnter = (dropdownName) => {
    setOpenDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <>
      <header className="bg-white dark:bg-dark-card shadow-md fixed top-0 left-0 right-0 z-50 border-b border-gray-200 dark:border-dark-border min-h-[80px]">
        <div className="container mx-auto px-8 h-[80px] flex items-center max-w-[1400px]">
          {/* Logo */}
          <Link to="/" className="flex items-center text-2xl font-bold text-black dark:text-white tracking-wide">
            {/* Placeholder for icon */}
            <span className="text-yellow-500 mr-2">◆</span> Cargo <span className="text-yellow-500 ml-1">TON</span>
          </Link>

          {/* Nav Links and Buttons */}
          <div className="hidden md:flex items-center ml-auto space-x-12">
            <nav className="flex space-x-6 text-gray-700 dark:text-gray-300 font-medium">
              {/* HOME */}
              <Link
                to="/"
                className={`hover:text-yellow-500 transition flex items-center ${activeLink === 'home' ? 'border-l-2 border-yellow-500 pl-2' : ''}`}
                onClick={() => handleLinkClick('home')}
              >
                HOME
              </Link>

              {/* PAGES */}
              <div className="relative" onMouseEnter={() => handleMouseEnter('pages')} onMouseLeave={handleMouseLeave}>
                <a
                  href="#"
                  className={`hover:text-yellow-500 transition flex items-center cursor-pointer ${activeLink === 'pages' ? 'border-l-2 border-yellow-500 pl-2' : ''}`}
                  onClick={() => handleLinkClick('pages')}
                >
                  PAGES <span className="ml-2 text-xs">▼</span>
                </a>
                {openDropdown === 'pages' && (
                  <div className="absolute top-[calc(100%+1px)] left-0 w-48 bg-white dark:bg-dark-card rounded-sm shadow-lg border border-gray-100 dark:border-dark-border py-1 z-50">
                    <div className="absolute -top-1 left-0 right-0 h-1"></div>
                    <a href="#" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-bg">About Us</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-bg">Contact Us</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-bg">Careers</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-bg">Testimonials</a>
                  </div>
                )}
              </div>

              {/* TRACKING */}
              <a
                href="#"
                className={`hover:text-yellow-500 transition flex items-center ${activeLink === 'tracking' ? 'border-l-2 border-yellow-500 pl-2' : ''}`}
                onClick={() => handleLinkClick('tracking')}
              >
                TRACKING
              </a>

              {/* SERVICES */}
              <div className="relative" onMouseEnter={() => handleMouseEnter('services')} onMouseLeave={handleMouseLeave}>
                <a
                  href="#"
                  className={`hover:text-yellow-500 transition flex items-center cursor-pointer ${activeLink === 'services' ? 'border-l-2 border-yellow-500 pl-2' : ''}`}
                  onClick={() => handleLinkClick('services')}
                >
                  SERVICES <span className="ml-2 text-xs">▼</span>
                </a>
                {openDropdown === 'services' && (
                  <div className="absolute top-[calc(100%+1px)] left-0 w-48 bg-white dark:bg-dark-card rounded-sm shadow-lg border border-gray-100 dark:border-dark-border py-1 z-50">
                    <div className="absolute -top-1 left-0 right-0 h-1"></div>
                    <a href="#" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-bg">Ocean Freight</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-bg">Air Freight</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-bg">Land Transport</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-bg">Warehousing</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-bg">Supply Chain Solutions</a>
                  </div>
                )}
              </div>

              {/* BLOG */}
              <div className="relative" onMouseEnter={() => handleMouseEnter('blog')} onMouseLeave={handleMouseLeave}>
                <a
                  href="#"
                  className={`hover:text-yellow-500 transition flex items-center cursor-pointer ${activeLink === 'blog' ? 'border-l-2 border-yellow-500 pl-2' : ''}`}
                  onClick={() => handleLinkClick('blog')}
                >
                  BLOG <span className="ml-2 text-xs">▼</span>
                </a>
                {openDropdown === 'blog' && (
                  <div className="absolute top-[calc(100%+1px)] left-0 w-48 bg-white dark:bg-dark-card rounded-sm shadow-lg border border-gray-100 dark:border-dark-border py-1 z-50">
                    <div className="absolute -top-1 left-0 right-0 h-1"></div>
                    <a href="#" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-bg">Latest Articles</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-bg">Industry News</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-bg">Case Studies</a>
                  </div>
                )}
              </div>
            </nav>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                // Sun icon for light mode
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                // Moon icon for dark mode
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Buttons */}
            <div className="flex space-x-4">
              <button 
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-yellow-500 text-black px-6 py-2 rounded-sm font-semibold hover:bg-yellow-600 transition"
              >
                GET A QUOTE
              </button>
              <Link to="/signin" className="bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition">
                SIGN IN
              </Link>
            </div>
          </div>
        </div>
      </header>

      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </>
  );
};

export default Header;
