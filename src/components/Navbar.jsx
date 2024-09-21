import React, { useState } from "react";

function Navbar() {
  const [dropdown, setDropdown] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <nav className="flex justify-between items-center py-4 px-4 md:px-6 lg:px-40">
          {/* Logo */}
          <div className="text-3xl md:text-4xl text-green-500 font-bold flex items-center">
            <img className="w-10 md:w-12" src="/printify.png" alt="Logo" />
            Printify
          </div>

          {/* Hamburger menu for mobile */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-green-500 focus:outline-none"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-6 items-center text-gray-500 text-sm">
            <li>
              <a href="#features" className="hover:text-green-500">
                Catalog
              </a>
            </li>
            {/* Dropdowns */}
            <li
              className="relative"
              onMouseEnter={() => setDropdown("howItWorks")}
              onMouseLeave={() => setDropdown("")}
            >
              <button className="hover:text-green-500 focus:outline-none flex items-center">
                How it works <span className="ml-2">▼</span>
              </button>
              {dropdown === "howItWorks" && (
                <ul className="absolute left-0 mt-2 py-2 w-40 bg-white shadow-lg z-50">
                  <li>
                    <a
                      href="#startups"
                      className="block px-4 py-2 text-sm hover:text-green-500"
                    >
                      How Printify Works
                    </a>
                  </li>
                  <li>
                    <a
                      href="#sports"
                      className="block px-4 py-2 text-sm hover:text-green-500"
                    >
                      Print On Demand
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="#pricing" className="hover:text-green-500">
                Pricing
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-green-500">
                Blog
              </a>
            </li>
            {/* More dropdowns */}
            <li
              className="relative"
              onMouseEnter={() => setDropdown("services")}
              onMouseLeave={() => setDropdown("")}
            >
              <button className="hover:text-green-500 focus:outline-none flex items-center">
                Services <span className="ml-2">▼</span>
              </button>
              {dropdown === "services" && (
                <ul className="absolute left-0 mt-2 py-2 w-40 bg-white shadow-lg z-50">
                  <li>
                    <a
                      href="#design"
                      className="block px-4 py-2 text-sm hover:text-green-500"
                    >
                      Printify Studio
                    </a>
                  </li>
                  <li>
                    <a
                      href="#marketing"
                      className="block px-4 py-2 text-sm hover:text-green-500"
                    >
                      Printify Express Delivery
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="#support" className="hover:text-green-500">
                Contacts
              </a>
            </li>
          </ul>

          {/* Login/Signup for both mobile and desktop */}
          <div className="hidden lg:flex space-x-2">
            <button className="border border-gray-500 text-black hover:text-green-500 px-5 py-2 rounded">
              Log in
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white px-5 py-2 rounded">
              Sign up
            </button>
          </div>
        </nav>

        {/* Mobile Sidebar */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 bg-white z-50 p-6">
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-gray-500"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <ul className="mt-10 space-y-4 text-gray-600">
              <li>
                <a href="#features" className="hover:text-green-500">
                  Catalog
                </a>
              </li>
              <li>
                <a href="#howItWorks" className="hover:text-green-500">
                  How it works
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-green-500">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-green-500">
                  Blog
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-green-500">
                  Services
                </a>
              </li>
              <li>
                <a href="#support" className="hover:text-green-500">
                  Contacts
                </a>
              </li>
            </ul>
            <div className="mt-8 space-y-2">
              <button className="w-full border border-gray-500 text-black hover:text-green-500 px-5 py-2 rounded">
                Log in
              </button>
              <button className="w-full bg-green-500 hover:bg-green-700 text-white px-5 py-2 rounded">
                Sign up
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;
