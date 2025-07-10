const express = require('express');
const router = express.Router();

// Home page route
router.get('/', (req, res) => {
  res.render('home', {
    title: 'Welcome to Our Express App',
    message: 'This is a beautiful home page built with Express.js!'
  });
});

module.exports = router; 