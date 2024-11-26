import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Search Bar */}

            <section className="mt-16 py-4">
                <div className="bg-white-100 py-4">
                    <div className="container mx-auto">
                        {/* Add a responsive wrapper */}
                        <div
                            className="flex flex-wrap md:flex-nowrap gap-8 overflow-x-auto md:overflow-visible whitespace-nowrap text-gray-600 text-center scrollbar-hide px-4 md:justify-center">
                            <Link to="/about"
                                  className="flex flex-col items-center text-lg font-semibold hover:text-blue-800 transition">
                                <div
                                    className="border-2 border-gray-300 w-16 h-16 flex items-center justify-center rounded-full mb-2 hover:border-black transition duration-200">
                                    🏞️
                                </div>
                                Activities
                            </Link>
                            <Link to="/news"
                                  className="flex flex-col items-center text-lg font-semibold hover:text-blue-800 transition">
                                <div
                                    className="border-2 border-gray-300 w-16 h-16 flex items-center justify-center rounded-full mb-2 hover:border-black transition duration-200">
                                    📰
                                </div>
                                News
                            </Link>
                            <Link to="/jobs"
                                  className="flex flex-col items-center text-lg font-semibold hover:text-blue-800 transition">
                                <div
                                    className="border-2 border-gray-300 w-16 h-16 flex items-center justify-center rounded-full mb-2 hover:border-black transition duration-200">
                                    💼
                                </div>
                                Job
                            </Link>
                            <Link to="/contact"
                                  className="flex flex-col items-center text-lg font-semibold hover:text-blue-800 transition">
                                <div
                                    className="border-2 border-gray-300 w-16 h-16 flex items-center justify-center rounded-full mb-2 hover:border-black transition duration-200">
                                    🚲
                                </div>
                                Rental
                            </Link>
                            <Link to="/contact"
                                  className="flex flex-col items-center text-lg font-semibold hover:text-blue-800 transition">
                                <div
                                    className="border-2 border-gray-300 w-16 h-16 flex items-center justify-center rounded-full mb-2 hover:border-black transition duration-200">
                                    📱
                                </div>
                                U-Sim
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


            {/* Image Carousel Section */}
            <section className="">
                <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} showArrows={true}>
                    <div>
                        <img src="https://via.placeholder.com/1200x500?text=Image+1" alt="Image 1"/>
                    </div>
                    <div>
                        <img src="https://via.placeholder.com/1200x500?text=Image+2" alt="Image 2"/>
                    </div>
                    <div>
                        <img src="https://via.placeholder.com/1200x500?text=Image+3" alt="Image 3"/>
                    </div>
                </Carousel>
            </section>

            {/* About Section */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">About Us</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                        Our platform is designed to bring communities together, making it easy to find great deals,
                        sell
                        your items, and connect with people around you.
                        We believe in building trust and making local transactions safer and more convenient for
                        everyone.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 shadow-lg rounded-lg">
                            <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
                            <p className="text-gray-700">
                                We offer a secure platform for local transactions, user verification, and a friendly
                                community where everyone can feel safe and connected.
                            </p>
                        </div>
                        <div className="bg-white p-6 shadow-lg rounded-lg">
                            <h3 className="text-2xl font-semibold mb-4">Join Our Community</h3>
                            <p className="text-gray-700">
                                Signing up is easy and free! Become part of a trusted network of users who buy,
                                sell,
                                and support each other every day.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="bg-gray-100 py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Start?</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Create an account today and experience the best of local buying and selling.
                    </p>
                    <button
                        className="bg-gray-600 text-white font-semibold px-8 py-3 rounded-md shadow-lg hover:bg-gray-700 transition duration-200">
                        Sign Up Now
                    </button>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
