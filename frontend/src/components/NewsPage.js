import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const NewsPage = () => {
    const [news, setNews] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const API_URL = process.env.REACT_APP_API_URL;
    const endpoint = process.env.NODE_ENV === 'production' ? `${API_URL}/api/news` : `${API_URL}/news`;

    // Fetch all news data
    const fetchNews = async () => {
        setLoading(true); // Start loading
        try {
            const response = await axios.get(endpoint);
            const sortedNews = response.data.sort(
                (a, b) => new Date(b.created_at) - new Date(a.created_at)
            );
            setNews(sortedNews);
        } catch (error) {
            console.error('Error fetching news:', error);
        } finally {
            setLoading(false); // End loading
        }
    };

    useEffect(() => {
        fetchNews();
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            try {
                const response = await axios.get(endpoint, {
                    params: {q: searchQuery},
                });
                setSearchResults(response.data);
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        } else {
            setSearchResults([]); // Clear search results if the query is empty
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen mt-16">
            {/* Hero Section */}
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-gray-600"></div>
                    <span className="ml-4 text-lg text-gray-600">Loading news...</span>
                </div>
            ) : (
                news.length > 0 && (
                    <section className="bg-gray-600 text-white py-20">
                        <div className="container mx-auto px-6 text-center">
                            <h1 className="text-5xl font-bold mb-4">{news[0].title}</h1>
                            <p className="text-lg mb-6">{news[0].content}</p>
                            {news[0].image_url && (
                                <img
                                    src={news[0].image_url}
                                    alt="Main News"
                                    className="mx-auto w-full max-w-2xl rounded-lg shadow-lg"
                                />
                            )}
                        </div>
                    </section>
                )
            )}

            {/* Search Bar */}
            <section className="py-6 bg-white shadow-md">
                <div className="container mx-auto px-6 flex justify-center">
                    <form onSubmit={handleSearch} className="flex w-full max-w-lg">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search news..."
                            className="flex-1 p-2 border rounded-l-lg focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-gray-600 text-white px-4 py-2 rounded-r-lg hover:bg-gray-700"
                        >
                            Search
                        </button>
                    </form>
                </div>
            </section>

            {/* Search Results Section */}
            {searchResults.length > 0 && (
                <section className="py-8">
                    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {searchResults.map((item) => (
                            <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                                <img
                                    src={item.image_url || 'https://via.placeholder.com/300'}
                                    alt={item.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h2 className="text-lg font-semibold">{item.title}</h2>
                                    <p className="text-gray-700 mt-2 text-sm truncate">{item.content}</p>
                                    <p className="text-gray-500 text-sm mt-2">
                                        {new Date(item.created_at).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Older News Section */}
            {!loading && (
                <section className="py-16">
                    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {news.slice(1).map((item) => (
                            <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                                <Link to={`/article/${item.id}`}>
                                    <img
                                        src={item.image_url || 'https://via.placeholder.com/300'}
                                        alt={item.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <h2 className="text-lg font-semibold">{item.title}</h2>
                                        <p className="text-gray-700 mt-2 text-sm truncate">{item.content}</p>
                                        <p className="text-gray-500 text-sm mt-2">
                                            {new Date(item.created_at).toLocaleDateString()}
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
};

export default NewsPage;
