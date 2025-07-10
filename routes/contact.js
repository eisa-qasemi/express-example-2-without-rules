const express = require('express');
const router = express.Router();

// Contact page route
router.get('/', (req, res) => {
  res.render('contact', {
    title: 'Contact Us',
    email: 'contact@example.com',
    phone: '+1 (555) 123-4567'
  });
});

module.exports = router; 