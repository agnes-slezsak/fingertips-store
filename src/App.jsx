import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import { fetchProducts } from "./api/fetchProducts";
import PageTitle from "./components/PageTitle/PageTitle";
import CartDropdown from "./components/ShoppingCart/CartDropdown";
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";
import MainContent from "./layout/MainContent/MainContent";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import ProductItemPage from "./pages/ProductItemPage/ProductItemPage";
import ProductListingPage from "./pages/ProductListingPage/ProductListingPage";
import { useStore } from "./store/store";
import { ROUTES, STORE_NAME } from "./utils/consts";
import "./App.css";

const AppContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  min-height: 100vh;
`;

const App = () => {
  const { setProductItems } = useStore();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const products = await fetchProducts();
        setProductItems(products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [setProductItems]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <AppContainer>
      <Header />
      <PageTitle>{STORE_NAME}</PageTitle>
      <MainContent>
        <Routes>
          <Route
            path={ROUTES.HOME}
            element={<ProductListingPage isLoading={loading} />}
          />
          <Route path={ROUTES.PRODUCT_DETAILS} element={<ProductItemPage />} />
          <Route path={ROUTES.CHECKOUT} element={<CheckoutPage />} />
          <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
        </Routes>
      </MainContent>
      <CartDropdown />
      <Footer />
    </AppContainer>
  );
};

export default App;
