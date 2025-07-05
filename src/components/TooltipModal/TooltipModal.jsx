import React from "react";

import { KeyFeatureRows } from "./KeyFeatureRows";
import {
  StyledTooltipModal,
  ModalImage,
  ModalContent,
  KeyFeatures,
  StyledModalHeading,
  StyledModalDescription,
  StyledModalTable,
} from "./TooltipModal.styles";
import ModalPortal from "../ModalPortal/ModalPortal";

const MODAL_HEADING_DESCRIPTION = "Description";
const MODAL_HEADING_KEY_FEATURES = "Key Features";
const MODAL_NO_KEY_FEATURES = "No key features available.";

const TooltipModal = React.memo(({ product, modalPosition }) => {
  const { imgUrl, name, description, key_features: keyFeatures = {} } = product;
  const keyFeaturesRows = KeyFeatureRows(keyFeatures);

  return (
    <ModalPortal>
      <StyledTooltipModal $modalPosition={modalPosition}>
        <ModalImage src={imgUrl} alt={name} />
        <ModalContent>
          {description && (
            <>
              <StyledModalHeading>
                {MODAL_HEADING_DESCRIPTION}
              </StyledModalHeading>
              <StyledModalDescription>{description}</StyledModalDescription>
            </>
          )}
          {keyFeaturesRows.length > 0 ? (
            <KeyFeatures>
              <StyledModalHeading>
                {MODAL_HEADING_KEY_FEATURES}
              </StyledModalHeading>
              <StyledModalTable>
                <tbody>{keyFeaturesRows}</tbody>
              </StyledModalTable>
            </KeyFeatures>
          ) : (
            <KeyFeatures>
              <StyledModalHeading>
                {MODAL_HEADING_KEY_FEATURES}
              </StyledModalHeading>
              <p>{MODAL_NO_KEY_FEATURES}</p>
            </KeyFeatures>
          )}
        </ModalContent>
      </StyledTooltipModal>
    </ModalPortal>
  );
});

export default TooltipModal;
