// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import JobsPage from './components/JobForm';
import NavBar from './components/NavBar';
import Footer from "./components/Footer";
import NewsPage from "./components/NewsPage";
import NewsSingleArticle from "./components/NewsSingleArticle";
import SearchResults from "./components/SearchResults";


const App = () => {
    return (
        <Router>
            <NavBar />  {/* Add NavBar here */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/jobs" element={<JobsPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/article/:id" element={<NewsSingleArticle />} />
                <Route path="/search" element={<SearchResults />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;