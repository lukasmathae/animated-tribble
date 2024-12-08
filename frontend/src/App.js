// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import JobsPage from './components/JobForm';
import NavBar from './components/NavBar';
import Footer from "./components/Footer";
import NewsPage from "./components/NewsPage";
import NewsSingleArticle from "./components/NewsSingleArticle";
import SearchResults from "./components/SearchResults";

const App = () => {
    const [navHeight, setNavHeight] = useState(0); // Manage navbar height

    const handleAdjustContent = (isNavOpen) => {
        // Dynamically adjust the height of the main content
        setNavHeight(isNavOpen ? 160 : 64); // Adjust values as needed for your design
    };

    return (
        <Router>
            <NavBar adjustContent={handleAdjustContent} />
            {/* Apply dynamic padding based on navbar height */}
            <div style={{ paddingTop: `${navHeight}px` }}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/jobs" element={<JobsPage />} />
                    <Route path="/news" element={<NewsPage />} />
                    <Route path="/article/:id" element={<NewsSingleArticle />} />
                    <Route path="/search" element={<SearchResults />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
};

export default App;
