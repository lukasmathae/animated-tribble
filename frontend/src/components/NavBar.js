import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-blue-600 p-4 shadow-lg">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="text-white font-bold text-2xl">
                    <Link to="/">K&L</Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
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
                            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="flex flex-col space-y-4 mt-4 text-center">
                        <Link to="/" className="text-white hover:text-gray-300">
                            Home
                        </Link>
                        <Link to="/about" className="text-white hover:text-gray-300">
                            About
                        </Link>
                        <Link to="/jobs" className="text-white hover:text-gray-300">
                            Jobs
                        </Link>
                        <Link to="/contact" className="text-white hover:text-gray-300">
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
