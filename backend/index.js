// backend/index.js
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

const rateLimit = require('express-rate-limit');

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

// API Routes
app.get('/api/jobs', async (req, res) => {
  const result = await pool.query('SELECT * FROM jobs');
  res.json(result.rows);
});

app.post('/api/jobs', async (req, res) => {
  console.log('Received POST request at /api/jobs with body:', req.body);
  const { title, description } = req.body;
  const result = await pool.query(
    'INSERT INTO jobs (title, description) VALUES ($1, $2) RETURNING *',
    [title, description]
  );
  res.json(result.rows[0]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

