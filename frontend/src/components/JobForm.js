// frontend/src/components/JobForm.js
import React, { useState } from 'react';
import axios from 'axios';

function JobForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
    const API_URL = process.env.REACT_APP_API_URL;


    const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${API_URL}/jobs`, {
      title,
      description,
    });
    alert('Job listing added!');
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Job Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Job Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Job</button>
    </form>
  );
}

export default JobForm;

