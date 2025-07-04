import ProductList from "./components/ProductList";
import MainContent from "./layout/MainContent/MainContent";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import { useProducts } from "./hooks/useProducts";

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
      <MainContent>
        <ProductList
          products={products}
          onAddToCart={() => {
            console.log("Add to cart clicked");
          }}
        />
      </MainContent>
      <Footer />
    </>
  );
};

export default App;
