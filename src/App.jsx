import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

import ProductList from "./components/ProductList/ProductList";
import CartDropdown from "./components/ShoppingCart/CartDropdown";
import { useProducts } from "./hooks/useProducts";
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";
import MainContent from "./layout/MainContent/MainContent";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import ProductItemPage from "./pages/ProductItemPage/ProductItemPage";
import { useStore } from "./store/store";

import "./App.css";

const AppContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr auto; /* header, title, main, footer */
  min-height: 100vh;
`;

const StyledPageTitle = styled.h1`
  width: 240px;
  font-size: 2.5rem;
  padding-top: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primaryDark};
  margin: auto;
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
    <AppContainer>
      <Header />
      <StyledPageTitle>{STORE_NAME}</StyledPageTitle>
      <MainContent>
        <Routes>
          <Route path="/" element={<ProductList isLoading={loading} />} />
          <Route path="/product/:id" element={<ProductItemPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </MainContent>
      <CartDropdown />
      <Footer />
    </AppContainer>
  );
};

export default App;
