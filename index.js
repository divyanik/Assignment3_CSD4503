const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, '/views')));

// API routes
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.get('/api/goodbye', (req, res) => {
  res.json({ message: 'Goodbye World!' });
});

app.get('/api/data', (req, res) => {
  res.json({ data: [1, 2, 3, 4, 5] });
});

app.get('/api/user', (req, res) => {
  res.json({ user: { name: 'John Doe', age: 30 } });
});

app.get('/api/product', (req, res) => {
  res.json({ product: { id: 1, name: 'Laptop', price: 999.99 } });
});

// Start the server
app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
