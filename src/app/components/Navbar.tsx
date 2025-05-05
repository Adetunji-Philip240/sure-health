"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="bg-blue-200 text-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/" className="text-black" id="logo">
                  Sure-Health_Care
                </a>
              </div>
            </div>
            <div className="flex md:hidden">
              <button onClick={toggleMenu} className="text-black">
                {isOpen ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="https://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6L12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="https://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className={`hidden md:block ${isOpen ? "block" : "hidden"}`}>
              <div className="ml-4 flex items-center space-x-4 list-none">
                <li>
                  <Link href="/" className="">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/" className="">
                    Service
                  </Link>
                </li>
                <li>
                  <Link href="/" className="">
                    Health Tips
                  </Link>
                </li>
                <div className="ml-28 space-x-4">
                  <button className="btn btn-outline">Login</button>
                  <button className="btn btn-outline btn-info">Sign up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden py-10">
            <div className="flex flex-col items-center space-y-2">
              <Link href="/" className="block">
                Home
              </Link>
              <Link href="/about-us" className="block">
                About Us
              </Link>
              <Link href="/" className="block">
                Service
              </Link>
              <Link href="/" className="block">
                Health Tips
              </Link>
              <div className="flex space-x-4">
                <button className="btn btn-outline">Login</button>
                <button className="btn btn-outline btn-info">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
