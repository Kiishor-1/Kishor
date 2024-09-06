"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // useEffect(() => {
  //   if (isOpen) {
  //     document.body.classList.add('overflow-hidden'); // Disable scroll when menu is open
  //   } else {
  //     document.body.classList.remove('overflow-hidden'); // Enable scroll when menu is closed
  //   }

  //   // Clean up by removing the class when the component unmounts
  //   return () => {
  //     document.body.classList.remove('overflow-hidden');
  //   };
  // }, [isOpen]);

  return (
    <nav className="navbar-dots flex justify-between items-center w-full pt-3 pb-6 md:py-10 relative  z-[20]">
      {/* Logo */}
      <div className="nav-item">
        <Link href={"/"} className="text-4xl">
          Portfolio
        </Link>
      </div>

      {/* Menu Icon for Smaller Screens */}
      <div className="md:hidden z-[90]">
        <button onClick={toggleMenu} className="text-3xl">
          {isOpen ? <FaTimes className="text-lavender" /> : <FaBars className="text-lavender" />}
        </button>
      </div>

      {/* Links */}
      <div
        className={`fixed inset-0 bg-slate-700 z-10 flex flex-col items-center justify-center space-y-4 transition-transform duration-500 ease-in-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:static md:flex-row md:space-y-0 md:space-x-6 md:translate-x-0 md:bg-transparent md:inset-auto md:p-0`}
      >
        <ul className="flex flex-col md:flex-row items-center gap- md:gap-10 text-xl md:text-base">
          <li>
            <Link href={"#about"} className="cursor-pointer" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link href={"#projects"} className="cursor-pointer" onClick={toggleMenu}>
              Projects
            </Link>
          </li>
          <li>
            <Link href={"#skills"} className="cursor-pointer" onClick={toggleMenu}>
              Skills
            </Link>
          </li>
          <li>
            <Link href={"#experiences"} className="cursor-pointer" onClick={toggleMenu}>
              Experience
            </Link>
          </li>
          <li>
            <Link href={"#education"} className="cursor-pointer" onClick={toggleMenu}>
              Education
            </Link>
          </li>
        </ul>
        <div className="mt-6 md:mt-0 ml-0">
          <Link
            href={"https://github.com/Kiishor-1"}
            className="rounded-xl border border-2 border-blue-400 px-5 py-2"
            onClick={toggleMenu}
          >
            Github Profile
          </Link>
        </div>
      </div>
    </nav>
  );
}
