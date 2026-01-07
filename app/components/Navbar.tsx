"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaFilePdf } from "react-icons/fa";
import { useTheme } from "./ThemeProvider";


const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "ABOUT", href: "#about" },
    { name: "SKILLS", href: "#skills" },
    { name: "PROJECTS", href: "#projects" },
    { name: "EDUCATION", href: "#experience" },
    { name: "CONTACT", href: "#contact" },
  ];

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-[60] bg-white/70 dark:bg-[#040D12]/65 backdrop-blur-md border-b border-gray-900/10 dark:border-white/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <div className="text-2xl font-bold tracking-tight inline-flex">
          <Link href="/">
            <span
              className="text-nature-green"
              style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                fontFamily: 'inherit',
                color: '#1877F2',
                letterSpacing: -0.025
              }}
            >
              Sourav
            </span>
            <span
              className="text-gray-900 dark:text-white ml-2"
              style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                fontFamily: 'inherit',
                color: theme === 'dark' ? '#ffffff' : '#111827',
                letterSpacing: -0.025
              }}
            >
              Sukla Baidya
            </span>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-gray-900 dark:text-white text-same font-bold tracking-widest hover:text-nature-blue transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-6 border-l border-gray-900/20 dark:border-white/20 pl-6">
            <Link
              href="/resume.pdf"
              target="_blank"
              className="flex items-center space-x-2 text-gray-900 dark:text-white text-sm font-bold tracking-widest hover:text-nature-red transition-colors duration-300"
            >
              <FaFilePdf className="text-lg" />
              <span>RESUME</span>
            </Link>

            <label className="inline-flex items-center relative cursor-pointer">
              <input
                className="peer hidden"
                type="checkbox"
                checked={theme === 'dark'}
                onChange={toggleTheme}
                aria-label="Toggle theme"
              />
              <div
                className="w-20 h-10 rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 peer-checked:from-blue-400 peer-checked:to-indigo-500 transition-all duration-500 after:content-['☀️'] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-8 after:w-8 after:flex after:items-center after:justify-center after:transition-all after:duration-500 peer-checked:after:translate-x-10 peer-checked:after:content-['🌙'] after:shadow-md after:text-lg"
              ></div>
            </label>
          </div>
        </div>

        <div className="md:hidden">
          <button
            className="text-gray-900 dark:text-white p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMenu}
            type="button"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-[#040D12] border-b border-gray-200 dark:border-gray-700 shadow-lg">
          <div className="px-6 py-4">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="block text-gray-900 dark:text-white text-lg font-medium hover:text-nature-yellow transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center space-x-2 text-gray-900 dark:text-white font-medium hover:text-nature-red transition-colors duration-300"
                >
                  <FaFilePdf className="text-lg" />
                  <span>RESUME</span>
                </Link>

                <label className="inline-flex items-center relative cursor-pointer">
                  <input
                    className="peer hidden"
                    type="checkbox"
                    checked={theme === 'dark'}
                    onChange={() => {
                      toggleTheme();
                      setIsMobileMenuOpen(false);
                    }}
                    aria-label="Toggle theme"
                  />
                  <div
                    className="w-16 h-8 rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 peer-checked:from-blue-400 peer-checked:to-indigo-500 transition-all duration-500 after:content-['☀️'] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-6 after:w-6 after:flex after:items-center after:justify-center after:transition-all after:duration-500 peer-checked:after:translate-x-8 peer-checked:after:content-['🌙'] after:shadow-md after:text-base"
                  ></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}


    </nav>
  );
};

export default Navbar;
