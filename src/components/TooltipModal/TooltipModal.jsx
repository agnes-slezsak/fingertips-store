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
import {
  TOOLTIP_MODAL_HEADING_DESCRIPTION,
  TOOLTIP_MODAL_HEADING_KEY_FEATURES,
  TOOLTIP_MODAL_NO_KEY_FEATURES,
} from "../../utils/consts";
import ModalPortal from "../ModalPortal/ModalPortal";

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
                {TOOLTIP_MODAL_HEADING_DESCRIPTION}
              </StyledModalHeading>
              <StyledModalDescription>{description}</StyledModalDescription>
            </>
          )}
          {keyFeaturesRows.length > 0 ? (
            <KeyFeatures>
              <StyledModalHeading>
                {TOOLTIP_MODAL_HEADING_KEY_FEATURES}
              </StyledModalHeading>
              <StyledModalTable>
                <tbody>{keyFeaturesRows}</tbody>
              </StyledModalTable>
            </KeyFeatures>
          ) : (
            <KeyFeatures>
              <StyledModalHeading>
                {TOOLTIP_MODAL_HEADING_KEY_FEATURES}
              </StyledModalHeading>
              <p>{TOOLTIP_MODAL_NO_KEY_FEATURES}</p>
            </KeyFeatures>
          )}
        </ModalContent>
      </StyledTooltipModal>
    </ModalPortal>
  );
});

export default TooltipModal;
