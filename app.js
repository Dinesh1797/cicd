const express = require('express');
const app = express();

// Route for the main path
app.get('/', (req, res) => {
  res.send('Hello, this is the main page');
});

// Route for an additional path
app.get('/path1', (req, res) => {
  res.send('This is path 1');
});

// Another path
app.get('/path2', (req, res) => {
  res.send('This is path 2');
});

app.get('/path3', (req, res) => {
  res.send('New path is working');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
