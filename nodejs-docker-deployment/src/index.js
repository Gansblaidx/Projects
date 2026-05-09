require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const SECRET_MESSAGE = process.env.SECRET_MESSAGE;
const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;

// Public route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Protected route — Basic Auth
app.get('/secret', (req, res) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Basic ')) {
    res.setHeader('WWW-Authenticate', 'Basic realm="Secret Area"');
    return res.status(401).send('Authentication required.');
  }

  const base64 = authHeader.split(' ')[1];
  const [user, pass] = Buffer.from(base64, 'base64').toString().split(':');

  if (user === USERNAME && pass === PASSWORD) {
    return res.send(SECRET_MESSAGE);
  }

  res.setHeader('WWW-Authenticate', 'Basic realm="Secret Area"');
  return res.status(401).send('Invalid credentials.');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
