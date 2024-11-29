import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../logo.jpg"
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-custom-gradient p-4 shadow-lg z-50">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="text-white font-bold text-2xl flex">
                    <Link to="/" className="flex space-x-2">
                        <div>
                            <img src={logo} className="App-logo rounded-full mx-auto my-auto space-x-3" alt="logo"
                                 width="40" height="40"/>
                        </div>
                        <div className="text-white font-bold text-2xl flex y">
                            K&L
                        </div>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 font-bold">
                    <Link to="/" className="text-white hover:text-gray-300 transition duration-200">
                        Home
                    </Link>
                    <Link to="/news" className="text-white hover:text-gray-300 transition duration-200">
                        News
                    </Link>
                    <Link to="/about" className="text-white hover:text-gray-300 transition duration-200">
                        About
                    </Link>
                    <Link to="/jobs" className="text-white hover:text-gray-300 transition duration-200">
                        Jobs
                    </Link>
                    <Link to="/contact" className="text-white hover:text-gray-300 transition duration-200">
                        Contact
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={toggleMenu}
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
                            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 right-0 h-full bg-custom-gradient text-white w-64 transform ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-300 ease-in-out z-40`}
            >
                <button
                    className="absolute top-4 right-4 text-white focus:outline-none"
                    onClick={toggleMenu}
                >
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
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <div className="flex flex-col space-y-6 mt-16 text-center">
                    <Link to="/" className="text-white hover:text-gray-300">
                        Home
                    </Link>
                    <Link to="/about" className="text-white hover:text-gray-300">
                        About
                    </Link>
                    <Link to="/news" className="text-white hover:text-gray-300">
                        News
                    </Link>
                    <Link to="/jobs" className="text-white hover:text-gray-300">
                        Jobs
                    </Link>
                    <Link to="/contact" className="text-white hover:text-gray-300">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
