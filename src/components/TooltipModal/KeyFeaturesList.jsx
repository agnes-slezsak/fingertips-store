import { renderKeyFeatureRows } from "./renderKeyFeatureRows";
import { StyledModalHeading, StyledModalTable } from "./TooltipModal.styles";
import {
  TOOLTIP_MODAL_HEADING_KEY_FEATURES,
  TOOLTIP_MODAL_NO_KEY_FEATURES,
} from "../../utils/consts";

const KeyFeaturesList = ({ keyFeatures }) => {
  const keyFeaturesRows = renderKeyFeatureRows(keyFeatures);
  return (
    <div>
      <StyledModalHeading>
        {TOOLTIP_MODAL_HEADING_KEY_FEATURES}
      </StyledModalHeading>
      {keyFeaturesRows.length > 0 ? (
        <StyledModalTable>
          <tbody>{keyFeaturesRows}</tbody>
        </StyledModalTable>
      ) : (
        <p>{TOOLTIP_MODAL_NO_KEY_FEATURES}</p>
      )}
    </div>
  );
};

export default KeyFeaturesList;
