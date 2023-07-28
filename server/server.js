const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());

const data = require("./data/products.json");

app.get("/", (request, response) =>
  response.status(200).json("This is the root.")
);

app.get("/products", (request, response) => {
  try {
    if (request.query.type) {
      const type = request.query.type;

      const filteredProducts = data.filter((product) => {
        return product.type === type;
      });
      response.status(200).json(filteredProducts);
    } else {
      response.status(200).json(data);
    }
  } catch (error) {
    response.status(404).json(error);
  }
});

app.listen(PORT, () => console.log(`App is running on port: ${PORT}`));
