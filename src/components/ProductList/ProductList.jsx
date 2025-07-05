import styled from "styled-components";
import ProductCard from "../ProductCard/ProductCard";

const StyledProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1em;
  padding: 1em;
`;

const ProductList = ({ products, onAddToCart }) => {
  return (
    <StyledProductList>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </StyledProductList>
  );
};

export default ProductList;
