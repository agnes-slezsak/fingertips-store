import styled from "styled-components";

import { useStore } from "../../store/store";
import ProductCard from "../ProductCard/ProductCard";

const StyledProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1em;
  padding: 1em;
`;

const ProductList = ({ isLoading }) => {
  const { productItems = [] } = useStore();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <StyledProductList>
      {productItems.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </StyledProductList>
  );
};

export default ProductList;
