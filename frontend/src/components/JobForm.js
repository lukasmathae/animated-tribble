import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

function JobForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [jobs, setJobs] = useState([]);
    const API_URL = process.env.REACT_APP_API_URL;
    const endpoint = process.env.NODE_ENV === 'production' ? `${API_URL}/api/jobs` : `${API_URL}/jobs`;

    // Memoize fetchJobs using useCallback
    const fetchJobs = useCallback(async () => {
        try {
            const response = await axios.get(endpoint);
            setJobs(response.data);
        } catch (error) {
            console.error('Error fetching job listings:', error);
        }
    }, [endpoint]);

    // Fetch jobs on component mount
    useEffect(() => {
        fetchJobs();
    }, [fetchJobs]);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(endpoint, { title, description });
            alert('Job listing added!');
            setTitle('');
            setDescription('');
            fetchJobs(); // Refresh job listings
        } catch (error) {
            console.error('Error adding job listing:', error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <form onSubmit={handleSubmit} className="mb-6 bg-white shadow-md rounded-lg p-4">
                <h2 className="text-xl font-bold mb-4">Add Job Listing</h2>
                <input
                    type="text"
                    placeholder="Job Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full mb-3 p-2 border rounded"
                    required
                />
                <textarea
                    placeholder="Job Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full mb-3 p-2 border rounded"
                    rows="4"
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Add Job
                </button>
            </form>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {jobs.map((job) => (
                    <div key={job.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img
                            src="https://via.placeholder.com/300"
                            alt="Job Image"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold">{job.title}</h2>
                            <p className="text-gray-700 mt-2">{job.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default JobForm;
