import React from "react";
import Link from "next/link";
import Wrapper from "./Wrapper";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <Wrapper>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link
                href="/"
                className="text-lg font-bold content-center text-orange-600 hover:text-orange-800 transition duration-300"
              >
                <span className="font-extrabold text-2xl">TigCase</span>
              </Link>
            </div>
            <div className="hidden md:flex md:space-x-8">
              <Link
                href="/"
                className="text-gray-500 content-center hover:text-gray-900"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-500 content-center hover:text-gray-900"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-gray-500 content-center hover:text-gray-900"
              >
                Services
              </Link>
              <Link
                href="/about#contact"
                className="text-gray-500 content-center hover:text-gray-900"
              >
                Contact
              </Link>
            </div>
            <div className="flex items-center md:hidden">
              <button className="text-gray-500 hover:text-gray-900 focus:outline-none">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Wrapper>
    </nav>
  );
};

export default Navbar;
