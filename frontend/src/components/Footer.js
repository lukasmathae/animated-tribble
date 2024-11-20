import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto px-6 text-center">
                <p>&copy; {new Date().getFullYear()} K&L. All rights reserved.</p>
                <p className="text-sm mt-2">
                    Built with 💻 and ❤️ {/*by <a href="https://yourwebsite.com" className="text-blue-400 hover:underline">Your Name</a>*/}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
