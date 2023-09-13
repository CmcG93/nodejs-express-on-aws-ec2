const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`<h1>Express Demo App</h1> <h2> Message: Successful Launch</h2> <h2>This will deploy across 3 instances on commit</h2> <p>Authors: Craig & Joao</p> <a href="products">Products</a>`);
})

app.get('/products', (req, res) => {
  res.send([
    {
      productId: '101',
      price: 100
    },
    {
      productId: '102',
      price: 150
    }
  ])
})

app.listen(port, ()=> {
  console.log(`Demo app is up and listening to port: ${port}`);
})
 
