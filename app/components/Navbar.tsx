"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // npm install lucide-react

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">

        {/* Logo + Brand */}
        <div className="flex items-center space-x-3">
          <Image
            src="/logo.jpg.jpg"
            alt="RightClikk Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-2xl md:text-3xl font-bold font-poppins bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
            RightClikk
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="#about" className="hover:text-orange-500 transition-colors">
            About
          </a>
          <a href="#download" className="hover:text-orange-500 transition-colors">
            Download
          </a>
          <a href="#contact" className="hover:text-orange-500 transition-colors">
            Contact
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col space-y-4 p-6 text-gray-700 font-medium">
            <a
              href="#about"
              className="hover:text-orange-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#download"
              className="hover:text-orange-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Download
            </a>
            <a
              href="#contact"
              className="hover:text-orange-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
