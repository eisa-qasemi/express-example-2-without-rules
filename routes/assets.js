const express = require('express');
const path = require('path');
const fs = require('fs');

const router = express.Router();

// Serve CSS files with proper headers
router.get('/css/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, '../assets/css', filename);
  
  // Check if file exists
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ message: 'Style file not found' });
  }
  
  // Set proper headers for CSS files
  res.setHeader('Content-Type', 'text/css');
  res.setHeader('Cache-Control', 'public, max-age=86400'); // Cache for 24 hours
  
  // Send the file
  res.sendFile(filePath);
});

// Serve JS files with proper headers
router.get('/js/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, '../assets/js', filename);
  
  // Check if file exists 
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ message: 'Script file not found' });
  }
  
  // Set proper headers for JS files
  res.setHeader('Content-Type', 'application/javascript');  
  res.setHeader('Cache-Control', 'public, max-age=86400'); // Cache for 24 hours

  // Send the file
  res.sendFile(filePath);
}); 




// Serve images with proper headers
router.get('/images/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, '../assets/images', filename);
  
  // Check if file exists
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ message: 'Image file not found' });
  }
  
  // Get file extension for content type
  const ext = path.extname(filename).toLowerCase();
  const contentType = {
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.webp': 'image/webp'
  }[ext] || 'application/octet-stream';
  
  // Set proper headers for images
  res.setHeader('Content-Type', contentType);
  res.setHeader('Cache-Control', 'public, max-age=31536000'); // Cache for 1 year
  
  // Send the file
  res.sendFile(filePath);
});

// Serve fonts with proper headers
router.get('/fonts/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, '../assets/fonts', filename);
  
  // Check if file exists
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ message: 'Font file not found' });
  }
  
  // Get file extension for content type
  const ext = path.extname(filename).toLowerCase();
  const contentType = {
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.otf': 'font/otf',
    '.eot': 'application/vnd.ms-fontobject'
  }[ext] || 'application/octet-stream';
  
  // Set proper headers for fonts
  res.setHeader('Content-Type', contentType);
  res.setHeader('Cache-Control', 'public, max-age=31536000'); // Cache for 1 year
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow cross-origin for fonts
  
  // Send the file
  res.sendFile(filePath);
});

module.exports = router; 