import { useEffect } from "react";
import styled from "styled-components";

import ProductList from "./components/ProductList/ProductList";
import CartDropdown from "./components/ShoppingCart/CartDropdown";
import { useProducts } from "./hooks/useProducts";
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";
import MainContent from "./layout/MainContent/MainContent";
import { useStore } from "./store/store";

import "./App.css";

const StyledPageTitle = styled.h1`
  width: 240px;
  font-size: 2.5rem;
  font-weight: bold;
  color: #1e1c39;
`;

const STORE_NAME = "Fingertips Store";

const App = () => {
  const { products, loading, error } = useProducts();
  const { setProductItems } = useStore();

  useEffect(() => {
    if (products?.length > 0) {
      setProductItems(products);
    }
  }, [products, setProductItems]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Header />
      <StyledPageTitle>{STORE_NAME}</StyledPageTitle>
      <MainContent>
        <ProductList isLoading={loading} />
      </MainContent>
      <CartDropdown />
      <Footer />
    </>
  );
};

export default App;
