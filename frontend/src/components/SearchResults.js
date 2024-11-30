import React from 'react';
import "../CarouselStyle.css"
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "../custom.css"
import {Link} from "react-router-dom";

const SearchResults = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Call to Action Section */}
            <section className="bg-custom-gradient py-16">
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
            <div>
                <Link to="/">
                    <button
                        className="bg-gray-600 mx-auto flex items-center justify-between text-white font-semibold px-8 py-3 rounded-md shadow-lg hover:bg-gray-700 transition duration-200">
                        Back
                    </button>
                </Link>
            </div>
        </div>
    )

}

export default SearchResults;