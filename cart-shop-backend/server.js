const express = require('express');
const fs = require('fs');
const cors = require('cors');
const products = fs.readFileSync('./products.json', 'utf8');

const app = express();
app.use(cors());

app.get('/api/products', (req, res) => {
  res.send(products);
});

app.listen(3001);
