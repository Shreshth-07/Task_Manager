const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Database connection
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'task_manager'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});

// API Routes

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.get('/api/tasks', (req, res) => {
  const query = 'SELECT * FROM tasks ORDER BY dueDate ASC';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error retrieving tasks:', err);
      res.status(500).json({ error: 'Error retrieving tasks' });
    } else {
      res.json(results);
    }
  });
});

app.get('/api/tasks/search', (req, res) => {
  const { query } = req.query;
  console.log('Search endpoint hit. Query:', query);

  if (!query) {
    console.log('No query provided, returning all tasks');
    return db.query('SELECT * FROM tasks ORDER BY dueDate ASC', (err, results) => {
      if (err) {
        console.error('Error fetching all tasks:', err);
        return res.status(500).json({ error: 'Error fetching tasks' });
      }
      console.log('Returning all tasks:', results);
      res.json(results);
    });
  }

  const searchQuery = `SELECT * FROM tasks WHERE title LIKE ? OR description LIKE ? ORDER BY dueDate ASC`;
  db.query(searchQuery, [`%${query}%`, `%${query}%`], (err, results) => {
    if (err) {
      console.error('Error searching tasks:', err);
      return res.status(500).json({ error: 'Error searching tasks' });
    }
    console.log('Search results:', results);
    res.json(results);
  });
});

app.post('/api/tasks', (req, res) => {
  const { title, description, dueDate } = req.body;
  const query = 'INSERT INTO tasks (title, description, dueDate) VALUES (?, ?, ?)';
  db.query(query, [title, description, dueDate], (err, result) => {
    if (err) {
      console.error('Error creating task:', err);
      res.status(500).json({ error: 'Error creating task' });
    } else {
      res.status(201).json({ id: result.insertId, message: 'Task created successfully' });
    }
  });
});

app.get('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM tasks WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error retrieving task:', err);
      res.status(500).json({ error: 'Error retrieving task' });
    } else if (results.length === 0) {
      res.status(404).json({ error: 'Task not found' });
    } else {
      res.json(results[0]);
    }
  });
});

app.put('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { title, description, dueDate } = req.body;
  const query = 'UPDATE tasks SET title = ?, description = ?, dueDate = ? WHERE id = ?';
  db.query(query, [title, description, dueDate, id], (err, result) => {
    if (err) {
      console.error('Error updating task:', err);
      res.status(500).json({ error: 'Error updating task' });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ error: 'Task not found' });
    } else {
      res.json({ message: 'Task updated successfully' });
    }
  });
});

app.delete('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM tasks WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Error deleting task:', err);
      res.status(500).json({ error: 'Error deleting task' });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ error: 'Task not found' });
    } else {
      res.json({ message: 'Task deleted successfully' });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
