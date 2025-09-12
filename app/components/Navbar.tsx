"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-800">
          <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
            RightClikk
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 font-medium">
          {/* Homepage sections */}
          <Link href="/#about" className="text-gray-600 hover:text-orange-500 transition">About</Link>
          <Link href="/#download" className="text-gray-600 hover:text-orange-500 transition">Download</Link>
          <Link href="/#contact" className="text-gray-600 hover:text-orange-500 transition">Contact</Link>

          {/* Separate Pages */}
          <Link href="/terms" className="text-gray-600 hover:text-orange-500 transition">Terms</Link>
          <Link href="/privacy" className="text-gray-600 hover:text-orange-500 transition">Privacy</Link>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-3xl text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col items-center space-y-4 py-6 font-medium">
            <Link href="/#about" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-orange-500 transition">About</Link>
            <Link href="/#download" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-orange-500 transition">Download</Link>
            <Link href="/#contact" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-orange-500 transition">Contact</Link>
            <Link href="/terms" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-orange-500 transition">Terms</Link>
            <Link href="/privacy" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-orange-500 transition">Privacy</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
