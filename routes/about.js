const express = require('express');
const router = express.Router();

// About page route
router.get('/', (req, res) => {
  res.render('about', {
    title: 'About Us',
    content: 'Learn more about our amazing Express.js application.'
  });
});

module.exports = router; 