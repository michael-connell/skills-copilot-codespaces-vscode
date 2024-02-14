// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const comments = require('./comments');
const port = 3000;

// Parse JSON (content-type: application/json)
app.use(bodyParser.json());

// GET /comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// POST /comments
app.post('/comments', (req, res) => {
  const { name, email, comment } = req.body;
  comments.push({ name, email, comment });
  res.json({ message: 'OK' });
});

// Start web server
app.listen(port, () => {
  console.log('Server is running on port', port);
});
 
 The  comments.js  file exports an array of comments. The  app.js  file creates a web server and uses the  express  package. The  GET /comments  route returns the comments array as a JSON response. The  POST /comments  route adds a new comment to the comments array. 
 Run the web server by running the following command: 
 node app.js
 
 The server will be running on port 3000. 
 Now, you can use the  fetch  API to send a POST request to the server. 
 const comment = {
  name: 'John Doe',
  email: '