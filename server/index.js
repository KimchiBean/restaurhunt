// Node.js server (e.g., server.js)
const express = require('express');
const path = require('path');
const cors = require('cors'); // For handling CORS issues

const app = express();
const port = 8080;

app.use(cors()); // Enable CORS for all origins
app.use(express.json()); // Parse JSON request bodies
app.use(express.static(path.join(__dirname, 'build')));

app.post('/echo', (req, res) => {
  const { input } = req.body;
  res.json({ echoedInput: input }); // Echo the received input
});

app.get('/{*any}', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

