const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

// Middleware

// JSON parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/ping', (req, res) => {
  // random endpoint so that the client can call something
  res.json({ msg: 'pong' });
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
