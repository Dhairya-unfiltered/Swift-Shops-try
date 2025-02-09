import React, { useState } from "react";
import logo from '../assets/newl.png'

const Navbar = () => {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-transparent text-white w-full">
      <div className="md:px-5 py-4 px-3 md:flex justify-between items-center">
        <div className="flex text-3xl cursor-pointer items-center gap-2">
            <img src={logo} className="logo rounded-md" />
          <span className="font-bold">SwiftShops</span>
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 h-10 absolute right-8 top-6 cursor-pointer md:hidden transition-transform duration-300 ease-in-out"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="transform rotate-180"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          )}
        </div>
        <ul
          className={`md:flex text-xl pl-9 md:pl-0 md:items-center md:pb-0 pb-12 absolute md:static bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 transition-all duration-500 ease-in ${
            isOpen ? 'top-20 opacity-100' : 'top-[-200px] md:opacity-100 opacity-0'
          }`}
        >
          <li className="font-semibold my-7 md:my-0 md:ml-8">
            <a href="https://www.linkedin.com/in/shahdhairya245" target="_blank" rel="noopener noreferrer">Waitlist</a>
          </li>
          <button
            type="button"
            className="bg-white text-black font-semibold text-xl md:ml-8 rounded-full md:static px-5 py-2.5"
          >
            <a href="https://tally.so/r/n0Zzp6" target="_blank" rel="noopener noreferrer">
              Contact Us
            </a>
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
