import { useProducts } from "./hooks/useProducts";
import Header from "./layout/Header/Header";

import "./App.css";

const App = () => {
  const { products, loading, error } = useProducts();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      <Header />
      <h1>Fingertips Store</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
