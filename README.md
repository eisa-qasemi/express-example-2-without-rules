# Express.js Homepage Application

A beautiful, modern homepage built with Express.js featuring a responsive design, interactive elements, and multiple pages.

## Features

- 🎨 **Modern Design**: Clean, responsive layout with beautiful gradients and animations
- 📱 **Mobile-First**: Fully responsive design that works on all devices
- ⚡ **Fast Performance**: Optimized for speed with efficient loading
- 🔧 **Interactive Elements**: Smooth animations, form validation, and dynamic content
- 📄 **Multiple Pages**: Home, About, Contact, and error pages
- 🎯 **SEO Friendly**: Proper meta tags and semantic HTML structure
- 🗂️ **Organized Routes**: Clean separation of routes by functionality

## Pages

- **Home**: Hero section with call-to-action buttons and feature highlights
- **About**: Company information with statistics and technology stack
- **Contact**: Contact form with validation and contact information
- **404/Error**: Custom error pages with helpful navigation

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Templating**: EJS (Embedded JavaScript)
- **Styling**: Custom CSS with modern design patterns
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Inter)

## Installation

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd express-homepage
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## Available Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server with nodemon (auto-restart on file changes)

## Project Structure

```
express-homepage/
├── app.js                 # Main Express application file
├── package.json           # Project dependencies and scripts
├── README.md             # Project documentation
├── routes/               # Route modules
│   ├── index.js          # Main router that combines all routes
│   ├── home.js           # Home page routes
│   ├── about.js          # About page routes
│   ├── contact.js        # Contact page routes
│   ├── api.js            # API endpoints
│   └── error.js          # Error handling routes
├── views/                # EJS template files
│   ├── layout.ejs        # Base layout template
│   ├── home.ejs          # Home page template
│   ├── about.ejs         # About page template
│   ├── contact.ejs       # Contact page template
│   ├── 404.ejs           # 404 error page
│   └── error.ejs         # General error page
└── public/               # Static assets
    ├── css/
    │   └── style.css     # Main stylesheet
    └── js/
        └── main.js       # Client-side JavaScript
```

## API Endpoints

### Page Routes
- `GET /` - Home page
- `GET /about` - About page
- `GET /contact` - Contact page

### API Routes
- `GET /api/status` - API status endpoint (returns server status)
- `GET /api/users` - Get user data (example endpoint)
- `GET /api/posts` - Get posts data (example endpoint)

## Route Organization

The application uses a modular route structure for better organization:

### `routes/index.js`
- Main router that combines all route modules
- Imports and uses individual route files

### `routes/home.js`
- Handles the home page route (`/`)

### `routes/about.js`
- Handles the about page route (`/about`)

### `routes/contact.js`
- Handles the contact page route (`/contact`)

### `routes/api.js`
- Contains all API endpoints (`/api/*`)
- Includes status, users, and posts endpoints

### `routes/error.js`
- Handles 404 errors and general error handling
- Must be used last in the middleware chain

## Customization

### Adding New Routes

1. **Create a new route file** in the `routes/` directory:
   ```javascript
   // routes/newpage.js
   const express = require('express');
   const router = express.Router();
   
   router.get('/', (req, res) => {
     res.render('newpage', { title: 'New Page' });
   });
   
   module.exports = router;
   ```

2. **Add the route to `routes/index.js`**:
   ```javascript
   const newPageRoutes = require('./newpage');
   router.use('/newpage', newPageRoutes);
   ```

3. **Create the corresponding view** in the `views/` directory

### Adding New API Endpoints

1. **Add to `routes/api.js`**:
   ```javascript
   router.get('/new-endpoint', (req, res) => {
     res.json({ message: 'New endpoint' });
   });
   ```

### Styling
The main stylesheet is located at `public/css/style.css`. You can customize:
- Colors and gradients
- Typography
- Layout and spacing
- Animations and transitions

### Content
Update the content by modifying the EJS template files in the `views/` directory:
- `views/home.ejs` - Home page content
- `views/about.ejs` - About page content
- `views/contact.ejs` - Contact page content

### Configuration
Modify `app.js` to:
- Change the port number
- Add new middleware
- Configure additional settings

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- Optimized CSS with efficient selectors
- Minimal JavaScript with modern ES6+ features
- Responsive images and icons
- Smooth animations with hardware acceleration
- Efficient DOM manipulation
- Modular route structure for better maintainability

## Development

### Adding New Pages

1. Create a new EJS template in the `views/` directory
2. Create a new route file in the `routes/` directory
3. Add the route to `routes/index.js`
4. Update the navigation menu in `views/layout.ejs`

### Adding New Features

1. Add client-side JavaScript to `public/js/main.js`
2. Add corresponding styles to `public/css/style.css`
3. Update templates as needed

## Deployment

### Local Development
```bash
npm run dev
```

### Production
```bash
npm start
```

### Environment Variables
- `PORT` - Set the port number (default: 3000)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

If you have any questions or need help, please:
1. Check the documentation
2. Look at the code comments
3. Open an issue on GitHub

---

**Built with ❤️ and Express.js** 