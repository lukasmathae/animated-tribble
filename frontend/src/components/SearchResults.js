import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const SearchResults = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState("");

    const API_URL = process.env.REACT_APP_API_URL;
    const endpoint =
        process.env.NODE_ENV === "production"
            ? `${API_URL}/api/search`
            : `${API_URL}/search`;

    const fetchSearchResults = async (searchQuery) => {
        setLoading(true);
        try {
            const response = await axios.get(endpoint, { params: { q: searchQuery } });
            setResults(response.data);
        } catch (error) {
            console.error("Error fetching search results:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleResultClick = (item) => {
        if (item.type === "news") {
            navigate(`/article/${item.id}`);
        }
    };

    useEffect(() => {
        if (location.state && location.state.searchQuery) {
            const searchQuery = location.state.searchQuery;
            setQuery(searchQuery); // Update the query for display purposes
            fetchSearchResults(searchQuery); // Trigger the search
        }
    }, [location]);

    return (
        <div className="container mx-auto py-4">
            <h1 className="text-2xl font-bold mb-4">Search Results for "{query}"</h1>
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-gray-600"></div>
                    <span className="ml-4 text-lg text-gray-600">Loading results...</span>
                </div>
            ) : results.length === 0 ? (
                <p>No results found for "{query}".</p>
            ) : (
                <div className="space-y-4">
                    {results.map((result) => (
                        <div
                            key={`${result.type}-${result.id}`}
                            className="p-4 border rounded shadow cursor-pointer hover:bg-gray-100 transition"
                            onClick={() => handleResultClick(result)}
                        >
                            <h2 className="text-xl font-semibold">{result.title}</h2>
                            <p className="text-gray-600">{new Date(result.created_at).toLocaleString()}</p>
                            <p>{result.content}</p>
                            <span className="text-sm text-gray-500 uppercase">{result.type}</span>
                        </div>
                    ))}
                </div>
            )}

            <div className="mx-auto mt-20 py-4">
                <Link to="/">
                    <button className="bg-gray-600 mx-auto flex items-center justify-between text-white font-semibold px-8 py-3 rounded-md shadow-lg hover:bg-gray-700 transition duration-200">
                        Back
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default SearchResults;
