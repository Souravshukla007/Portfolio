"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaFilePdf, FaSun, FaMoon } from "react-icons/fa";
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

  return (
    <nav className="sticky top-0 z-[60] bg-white/95 dark:bg-[#001F3D]/95 backdrop-blur-md border-b border-gray-900/10 dark:border-white/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <div className="text-2xl font-bold tracking-tight">
          <Link href="/">
            <span className="text-nature-yellow">Sourav</span>
            <span className="text-gray-900 dark:text-white ml-2">Sukla Baidya</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-gray-900 dark:text-white text-xs font-bold tracking-widest hover:text-nature-yellow transition-colors duration-300"
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
              className="flex items-center space-x-2 text-gray-900 dark:text-white text-xs font-bold tracking-widest hover:text-nature-red transition-colors duration-300"
            >
              <FaFilePdf className="text-lg" />
              <span>RESUME</span>
            </Link>

            <button
              onClick={toggleTheme}
              className="p-2 text-gray-900 dark:text-white hover:text-nature-yellow transition-all duration-300 hover:scale-110"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <FaMoon className="text-lg transition-transform duration-300 hover:rotate-12" />
              ) : (
                <FaSun className="text-lg transition-transform duration-300 hover:rotate-12" />
              )}
            </button>
          </div>
        </div>

        <div className="md:hidden text-gray-900 dark:text-white">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 hover:text-nature-yellow transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#001F3D]/95 backdrop-blur-md border-t border-gray-900/10 dark:border-white/10">
          <div className="px-6 py-4 space-y-4">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-gray-900 dark:text-white text-sm font-bold tracking-widest hover:text-nature-yellow transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between pt-4 border-t border-gray-900/20 dark:border-white/20">
              <Link
                href="/resume.pdf"
                target="_blank"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center space-x-2 text-gray-900 dark:text-white text-sm font-bold tracking-widest hover:text-nature-red transition-colors duration-300"
              >
                <FaFilePdf className="text-lg" />
                <span>RESUME</span>
              </Link>

              <button
                onClick={() => {
                  toggleTheme();
                  setIsMobileMenuOpen(false);
                }}
                className="p-2 text-gray-900 dark:text-white hover:text-nature-yellow transition-all duration-300 hover:scale-110"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <FaMoon className="text-lg transition-transform duration-300 hover:rotate-12" />
                ) : (
                  <FaSun className="text-lg transition-transform duration-300 hover:rotate-12" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
