import { useNavigate, useParams } from "react-router-dom";

import {
  Container,
  BackButton,
  ImageWrapper,
  Image,
  DetailsWrapper,
} from "./ProductItemPage.styles";
import { useStore } from "../../store/store";

const ProductItem = () => {
  const { id } = useParams();
  const { productItems } = useStore();
  const navigate = useNavigate();
  const product = productItems.find((p) => String(p.id) === id);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <Container>
      <BackButton onClick={() => navigate(-1)}>← Back</BackButton>
      <ImageWrapper>
        <Image src={product.imgUrl} alt={product.name} />
      </ImageWrapper>
      <DetailsWrapper>Coming soon...</DetailsWrapper>
    </Container>
  );
};

export default ProductItem;
