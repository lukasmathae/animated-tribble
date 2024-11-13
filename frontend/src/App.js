// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
//import HomePage from './components/HomePage';
import JobsPage from './components/JobForm';
import NavBar from './components/NavBar';


const App = () => {
    return (
        <Router>
            <NavBar />  {/* Add NavBar here */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/jobs" element={<JobsPage />} />
            </Routes>
        </Router>
    );
};

export default App;