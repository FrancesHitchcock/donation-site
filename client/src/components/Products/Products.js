import Product from "../Product/Product";

export default function Products({ productsToDisplay, handleChange }) {
  let productsHTML = productsToDisplay.map((product) => {
    return <Product key={product._id} product={product} />;
  });

  return (
    <section>
      <form>
        <select onChange={(e) => handleChange(e.target.value)}>
          <option value="">all products</option>
          <option value="electrical">electrical</option>
          <option value="clothing">clothing</option>
          <option value="books">books</option>
        </select>
      </form>
      {productsHTML}
    </section>
  );
}
