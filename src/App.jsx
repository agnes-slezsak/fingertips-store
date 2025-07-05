import { useState } from "react";
import styled from "styled-components";

import ProductList from "./components/ProductList/ProductList";
import CartDropdown from "./components/ShoppingCart/CartDropdown";
import { useProducts } from "./hooks/useProducts";
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";
import MainContent from "./layout/MainContent/MainContent";

import "./App.css";

const StyledPageTitle = styled.h1`
  width: 240px;
  font-size: 2.5rem;
  font-weight: bold;
  color: #1e1c39;
`;

const cartItems = [
  { id: 1, name: "Nokia 3210", units: 1, price: 49.99 },
  { id: 2, name: "Poly Edge B30", units: 1, price: 21.99 },
];

const STORE_NAME = "Fingertips Store";

const App = () => {
  const { products, loading, error } = useProducts();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCheckout = () => {
    alert("Proceeding to checkout...");
  };

  const handleCartClick = () => {
    setIsCartOpen((prev) => !prev);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      <Header handleCartClick={handleCartClick} />
      <StyledPageTitle>{STORE_NAME}</StyledPageTitle>
      <MainContent>
        <ProductList
          products={products}
          onAddToCart={() => {
            console.log("Add to cart clicked");
          }}
        />
      </MainContent>
      <CartDropdown
        items={cartItems}
        onCheckout={handleCheckout}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
      />
      <Footer />
    </>
  );
};

export default App;
