import ItemCard from "./ItemCard";
import useHTTP from "../hooks/useHTTP";
import Error from "./Error";

const requestConfig = {};

export default function Products() {
  const { data: products, isLoading, error } = useHTTP("http://localhost:3000/meals", requestConfig, []);

  console.log(products);

  if (isLoading) {
    return <p className="center">Fetching products...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch products" message={error}></Error>;
  }

  return (
    <ul id="meals">
      {products.map((product) => (
        <ItemCard key={product.id} product={product} />
      ))}
    </ul>
  );
}
