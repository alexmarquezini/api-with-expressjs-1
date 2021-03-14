const port = 3003;
const express = require("express");
const app = express();

app.get("/products", (req, res, next) => {
  res.send({ nome: "notebook", preco: 123.45 });
});

app.listen(port, () => {
  console.log(`Servidor executando na porta ${port}`);
});
