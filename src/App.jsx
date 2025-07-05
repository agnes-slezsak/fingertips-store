import styled from "styled-components";
import ProductList from "./components/ProductList/ProductList";
import MainContent from "./layout/MainContent/MainContent";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import { useProducts } from "./hooks/useProducts";

import "./App.css";

const StyledPageTitle = styled.h1`
  width: 240px;
  font-size: 2.5rem;
  font-weight: bold;
  color: #1e1c39;
`;

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
      <StyledPageTitle>Fingertips Store</StyledPageTitle>
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
