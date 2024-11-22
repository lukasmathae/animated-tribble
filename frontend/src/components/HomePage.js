import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="bg-blue-600 text-white py-6">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl font-bold mb-4">Welcome to Our Community</h1>
                    <p className="text-lg mb-6">
                        Discover a vibrant marketplace where you can connect, buy, sell, and build trust with your
                        neighbors.
                    </p>
                    {/* <Link to="/jobs" className="text-white hover:text-gray-300 transition duration-200 py-16">
                        <button
                            className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-md shadow-lg hover:bg-gray-200 transition duration-200">
                            Get Started
                        </button>
                    </Link> */}
                </div>
            </section>

            <section>
                <div className="bg-gray-100 py-4">
                    <div className="container mx-auto flex flex-wrap justify-center gap-4 px-4 text-center">
                        <a href="/about" className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition">
                            Field trips & activities
                        </a>
                        <a href="/news" className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition">
                            News
                        </a>
                        <a href="/jobs" className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition">
                            Job Postings
                        </a>
                        <a href="/contact"
                           className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition">
                            Bicycle rental
                        </a>
                        <a href="/contact"
                           className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition">
                            Rental & U-Sim
                        </a>
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
                        Our platform is designed to bring communities together, making it easy to find great deals, sell
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
                                Signing up is easy and free! Become part of a trusted network of users who buy, sell,
                                and support each other every day.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="bg-blue-100 py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Start?</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Create an account today and experience the best of local buying and selling.
                    </p>
                    <button
                        className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-md shadow-lg hover:bg-blue-700 transition duration-200">
                        Sign Up Now
                    </button>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
