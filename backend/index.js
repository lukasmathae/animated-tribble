// backend/index.js
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

const rateLimit = require('express-rate-limit');

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
});
app.use(limiter);

// CORS configuration
const allowedOrigin = process.env.CLIENT_ORIGIN;
app.use(cors({
  origin: allowedOrigin,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.options('*', cors());

app.use(express.json());

// PostgreSQL connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// === API Routes ===

// Jobs Routes
app.get('/api/jobs', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM jobs');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching jobs:', error);
    res.status(500).send('Server Error');
  }
});

app.post('/api/jobs', async (req, res) => {
  try {
    console.log('Received POST request at /api/jobs with body:', req.body);
    const { title, description } = req.body;
    const result = await pool.query(
        'INSERT INTO jobs (title, description) VALUES ($1, $2) RETURNING *',
        [title, description]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error creating job:', error);
    res.status(500).send('Server Error');
  }
});

// News Routes
app.get('/api/news', async (req, res) => {
  try {
    const { q } = req.query; // Query for searching news
    const query = q
        ? `SELECT * FROM news WHERE title ILIKE $1 OR content ILIKE $1 ORDER BY created_at DESC`
        : `SELECT * FROM news ORDER BY created_at DESC`;
    const values = q ? [`%${q}%`] : [];
    console.log("Got new request for search: ", values);
    const result = await pool.query(query, values);
    console.log("res.json(result.rows);",result.rows);
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).send('Server Error');
  }
});

app.post('/api/news', async (req, res) => {
  try {
    const { title, content, image_url } = req.body;
    const result = await pool.query(
        'INSERT INTO news (title, content, image_url) VALUES ($1, $2, $3) RETURNING *',
        [title, content, image_url]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error creating news:', error);
    res.status(500).send('Server Error');
  }
});

app.get('/api/news/:id', async (req, res) => {
  const { id } = req.params;
  const value = id ? [id] : [];
  try {
    const query = `SELECT * from news where id = $1`;
    const article =  await pool.query(query, value); // Replace with your DB logic
    if (!article) {
      return res.status(404).json({ error: 'Article not found' });
    }
    res.json(article.rows[0]);
  } catch (error) {
    console.info("The id is: ", id);
    console.error('Error fetching article:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);

});
