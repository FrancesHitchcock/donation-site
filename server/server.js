const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());

const products = require("./library/products");

app.get("/", (request, response) =>
  response.status(200).json("This is the root.")
);

app.get("/products", products);

app.listen(PORT, () => console.log(`App is running on port: ${PORT}`));
