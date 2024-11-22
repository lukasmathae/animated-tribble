import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ArticleDetail = () => {
    const { id } = useParams(); // Get the article ID from the URL
    const [article, setArticle] = useState(null);
    const API_URL = process.env.REACT_APP_API_URL;
    const endpoint = process.env.NODE_ENV === 'production' ? `${API_URL}/api/news` : `${API_URL}/news`;

    // Fetch article data
    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await axios.get(`${endpoint}/${id}`);
                setArticle(response.data);
            } catch (error) {
                console.error('Error fetching article in NewSingleArticle:', error);
            }
        };
        fetchArticle();
    }, [id]);

    if (!article) {
        return <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600"></div>
            <span className="ml-4 text-lg text-blue-600">Loading article...</span>
        </div>;
    }

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="container mx-auto px-6 py-16">
                <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
                <p className="text-gray-600 text-sm mb-6">
                    Published on {new Date(article.created_at).toLocaleDateString()}
                </p>
                {article.image_url && (
                    <img
                        src={article.image_url}
                        alt={article.title}
                        className="w-full max-w-3xl mx-auto rounded-lg mb-6"
                    />
                )}
                <div className="prose max-w-3xl mx-auto">
                    <p>{article.content}</p>
                </div>
            </div>
        </div>
    );
};

export default ArticleDetail;
