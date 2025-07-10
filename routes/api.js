const express = require('express');
const router = express.Router();

// API status endpoint
router.get('/status', (req, res) => {
  res.json({
    status: 'success',
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// Example API endpoint for user data
router.get('/users', (req, res) => {
  res.json({
    users: [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
    ]
  });
});

// Example API endpoint for posts
router.get('/posts', (req, res) => {
  res.json({
    posts: [
      { id: 1, title: 'First Post', content: 'This is the first post content.' },
      { id: 2, title: 'Second Post', content: 'This is the second post content.' }
    ]
  });
});

module.exports = router; 