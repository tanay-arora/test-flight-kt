const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const path = require('path');
const fs = require('fs');

app.use(cors());
app.use(express.json()); 
app.use((req, res, next) => {
  if (req.url.endsWith('.html')) {
    res.sendFile(path.join(__dirname, 'expedia.php.html'));
  } else {
    next();
  }
});

app.use(express.static(path.join(__dirname, '')));

app.get('/', async(req, res) => {
  res.sendFile(path.join(__dirname, 'expedia.php.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'expedia.php.html'));
});

const port = 3030;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});