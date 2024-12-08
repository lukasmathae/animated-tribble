import React, { useEffect, useState } from "react";
import {Link, useLocation} from "react-router-dom";

const SearchResults = () => {
    const location = useLocation();
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Access the passed search results from location state
        if (location.state && location.state.searchResults) {
            setResults(location.state.searchResults);
        }
    }, [location]);

    return (
        <div className="container mx-auto mt-20 py-4">
            <h1 className="text-2xl font-bold mb-4">Search Results</h1>
            {results.length === 0 ? (
                <p>No results found.</p>
            ) : (
                <div className="space-y-4">
                    {results.map((result) => (
                        <div key={`${result.type}-${result.id}`} className="p-4 border rounded shadow">
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
                    <button
                        className="bg-gray-600 mx-auto flex items-center justify-between text-white font-semibold px-8 py-3 rounded-md shadow-lg hover:bg-gray-700 transition duration-200">
                        Back
                    </button>
                </Link>
            </div>
        </div>

    );
};

export default SearchResults;