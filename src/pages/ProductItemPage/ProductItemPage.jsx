import { useNavigate, useParams } from "react-router-dom";

import {
  Container,
  BackButton,
  ImageWrapper,
  Image,
  DetailsWrapper,
} from "./ProductItemPage.styles";
import { useStore } from "../../store/store";
import {
  BACK_TO_LISTING_PAGE_BUTTON_TEXT,
  PRODUCT_NOT_FOUND_TEXT,
  ROUTES,
} from "../../utils/consts";

const ProductItem = () => {
  const { id } = useParams();
  const { productItems } = useStore();
  const navigate = useNavigate();
  const product = productItems.find((p) => String(p.id) === id);

  if (!product) {
    return (
      <>
        <div>{PRODUCT_NOT_FOUND_TEXT}</div>
        <BackButton onClick={() => navigate(ROUTES.HOME)}>
          {BACK_TO_LISTING_PAGE_BUTTON_TEXT}
        </BackButton>
      </>
    );
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
