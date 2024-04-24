const express = require("express");
const app = express();
const { products } = require("./data.js");
app.get("/", (req, res) => {
  //res.json(products);
  res.send('<h2>Home page </h2><a href="/api/products">products</a>');
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

app.get("/api/products/:productID", (req, res) => {
  const { productID } = req.params;
  console.log(req.params);
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
    //return {product}
  );
  if (!singleProduct) {
    res.status(404).send("Product does not exist");
  }
  res.json(singleProduct);
});

app.get("/api/v1/query", (req, res) => {
  console.log(req.query);
  const { search, limit } = req.query;
  let sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
    if (sortedProducts.length < 1) {
      res.status(200).send('no products match your search')
    }
     // return sortedProducts;
    }
  
  res.status(200).json(sortedProducts);
  //res.send("hello world");
});

app.all("*", (req, res) => {
  res.send("sorry we cant get that for you right now");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
