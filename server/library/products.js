const data = require("../data/products.json");

const products = (request, response) => {
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
};

module.exports = products;
