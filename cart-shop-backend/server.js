const express = require('express');
const fs = require('fs');
const products = fs.readFileSync('./products.json', 'utf8');

const app = express();

app.get('/', (req, res) => {
  res.send(products);
});

app.listen(3001);
