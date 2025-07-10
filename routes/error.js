const express = require('express');
const router = express.Router();

// 404 handler - this should be the last route
router.use('*', (req, res) => {
  res.status(404).render('404', {
    title: 'Page Not Found',
    message: 'The page you are looking for does not exist.'
  });
});

// General error handler
router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('error', {
    title: 'Server Error',
    message: 'Something went wrong on our end.'
  });
});

module.exports = router; 