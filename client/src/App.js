import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import Products from "./components/Products/Products";

function App() {
  const [productsToDisplay, setProductsToDisplay] = useState([]);
  // const [filterTerm, setFilterTerm] = useState("");

  useEffect(() => {
    getAllProducts();
  }, []);

  async function getAllProducts() {
    const res = await axios.get("https://donation-site.onrender.com/products");
    setProductsToDisplay(res.data);
  }

  async function handleChange(term) {
    // setFilterTerm("electrical");

    const res = await axios.get(
      `https://donation-site.onrender.com/products?type=${term}`
    );
    setProductsToDisplay(res.data);
  }

  return (
    <div className="App">
      <h1>Choose your products</h1>
      {/* {productsToDisplay && ( */}
      <Products
        productsToDisplay={productsToDisplay}
        handleChange={handleChange}
      />
      {/* )} */}
    </div>
  );
}

export default App;

// https://donation-site.onrender.com/
