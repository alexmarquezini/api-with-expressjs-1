const port = 3003;
const express = require("express");
const bodyParser = require("body-parser");
const bd = require("./database");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/products", (req, res, next) => {
  res.send(bd.getProducts());
});

app.get("/products/:id", (req, res, next) => {
  res.send(bd.getProduct(req.params.id));
});

app.post("/products", (req, res, next) => {
  const product = bd.saveProducts({
    name: req.body.name,
    price: req.body.price,
  });
  res.send(product);
});

app.put("/products/:id", (req, res, next) => {
  const product = bd.saveProducts({
    id: req.params.id,
    name: req.body.name,
    price: req.body.price,
  });
  res.send(product);
});

app.delete("/products/:id", (req, res, next) => {
    const product = bd.deleteProduct(req.params.id);
    res.send(product);
  });

app.listen(port, () => {
  console.log(`Servidor executando na porta ${port}`);
});
