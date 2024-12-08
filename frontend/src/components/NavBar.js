import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../logo.jpg";

const Navbar = ({ adjustContent }) => {
    const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle
    const [searchOpen, setSearchOpen] = useState(false); // Mobile search bar toggle
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const toggleMenu = () => setIsOpen((prev) => !prev);
    const toggleSearch = () => setSearchOpen((prev) => !prev);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            try {
                navigate("/search", { state: { searchQuery: searchQuery } });
                setSearchQuery("");
            } catch (error) {
                console.error("Error fetching search results:", error);
            }
        }
    };

    useEffect(() => {
        // Adjust content only when the search bar is open
        adjustContent(searchOpen);
    }, [searchOpen, adjustContent]);

    useEffect(() => {
        setIsOpen(false); // Close the menu on route change
    }, [location]);

    return (
        <nav className="fixed top-0 left-0 w-full bg-custom-gradient p-4 shadow-lg z-50">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-2">
                    <img src={logo} alt="logo" className="rounded-full" width="40" height="40" />
                    <span className="text-white font-bold text-2xl">K&L</span>
                </Link>

                {/* Desktop Search Bar */}
                <div className="hidden md:flex items-center">
                    <form onSubmit={handleSearch} className="flex w-full max-w-8xl">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search website..."
                            className="flex-1 p-2 border rounded-l-lg focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-gray-600 text-white px-4 py-2 rounded-r-lg hover:bg-gray-700"
                        >
                            Search
                        </button>
                    </form>
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

                {/* Mobile Icons */}
                <div className="flex items-center md:hidden space-x-4">
                    {/* Search Icon */}
                    <button onClick={toggleSearch} className="text-white focus:outline-none">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="10" cy="10" r="6" strokeWidth="2" />
                            <line x1="15" y1="15" x2="20" y2="20" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button>
                    {/* Hamburger Menu */}
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
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
                                d={
                                    isOpen
                                        ? "M6 18L18 6M6 6l12 12"
                                        : "M4 6h16M4 12h16M4 18h16"
                                }
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Search Bar */}
            {searchOpen && (
                <div className="p-4 text-black">
                    <form onSubmit={handleSearch} className="flex">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search website..."
                            className="flex-1 p-2 border rounded-l-lg focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-gray-600 text-white px-4 py-2 rounded-r-lg hover:bg-gray-700"
                        >
                            Search
                        </button>
                    </form>
                </div>
            )}

            {/* Mobile Menu */}
            {isOpen && (
                <div
                    className="bg-custom-gradient text-white fixed top-0 right-0 h-full w-64 z-40 transform transition-transform duration-300 ease-in-out"
                >
                    <button onClick={toggleMenu} className="absolute top-4 right-4 text-white">
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
                    <div className="flex flex-col mt-16 text-center space-y-6">
                        <Link to="/" className="hover:text-gray-300">Home</Link>
                        <Link to="/about" className="hover:text-gray-300">About</Link>
                        <Link to="/news" className="hover:text-gray-300">News</Link>
                        <Link to="/jobs" className="hover:text-gray-300">Jobs</Link>
                        <Link to="/contact" className="hover:text-gray-300">Contact</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
