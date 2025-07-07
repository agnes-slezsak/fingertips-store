import React from "react";

import KeyFeaturesList from "./KeyFeaturesList";
import {
  StyledTooltipModal,
  ModalImage,
  ModalContent,
  StyledModalHeading,
  StyledModalDescription,
} from "./TooltipModal.styles";
import { TOOLTIP_MODAL_HEADING_DESCRIPTION } from "../../utils/consts";
import ModalPortal from "../ModalPortal/ModalPortal";

const TooltipModal = React.memo(({ product, modalPosition }) => {
  const { imgUrl, name, description, key_features: keyFeatures = {} } = product;

  return (
    <ModalPortal>
      <StyledTooltipModal $modalPosition={modalPosition}>
        <ModalImage src={imgUrl} alt={name} />
        <ModalContent>
          {description && (
            <>
              <StyledModalHeading>
                {TOOLTIP_MODAL_HEADING_DESCRIPTION}
              </StyledModalHeading>
              <StyledModalDescription>{description}</StyledModalDescription>
            </>
          )}
          <KeyFeaturesList keyFeatures={keyFeatures} />
        </ModalContent>
      </StyledTooltipModal>
    </ModalPortal>
  );
});

export default TooltipModal;
