export default function Product({ product }) {
  return (
    <div>
      <h2>For sale: {product.name}</h2>
      <p>{product.description}</p>
      <p>Price: £{product.price}</p>
      <hr />
    </div>
  );
}
