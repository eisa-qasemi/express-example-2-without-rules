const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const cors = require('cors');

// Import routes
const routes = require('./routes');
const errorRoutes = require('./routes/error');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Set up view engine (EJS for templating)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Use express-ejs-layouts
app.use(expressLayouts);
app.set('layout', 'layout');

// Use routes
app.use(routes);

// Use error routes (must be last)
app.use(errorRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Press Ctrl+C to stop the server`);
}); 