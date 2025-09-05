"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // 👈 install lucide icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="#home" className="text-2xl font-bold text-orange-600">
            RightClikk
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            <Link href="#home" className="text-gray-700 hover:text-orange-600">
              Home
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-orange-600">
              About
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-orange-600">
              Contact
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-center gap-4 py-6">
            <Link
              href="#home"
              className="text-gray-700 hover:text-orange-600"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-gray-700 hover:text-orange-600"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="#download"
              className="text-gray-700 hover:text-orange-600"
              onClick={() => setIsOpen(false)}
            >
              Download
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-orange-600"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
