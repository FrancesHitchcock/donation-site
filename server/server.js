const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());

app.get("/", (request, response) =>
  response.status(200).json("This is the root.")
);

app.get("/products", (request, response) => {
  try {
    if (request.query.type) {
      const type = request.query.type;
      response.status(200).json(`You have selected ${type}`);
    } else {
      response.status(200).json("This is the products page");
    }
  } catch (error) {
    response.status(404).json(error);
  }
});

app.listen(PORT, () => console.log(`App is running on port: ${PORT}`));
