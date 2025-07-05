import { StyledDataCell } from "./TooltipModal.styles";
import { keyFeatureLabels } from "../../utils/consts";
import { formatBooleanToText } from "../../utils/formatBooleanToText";

export const KeyFeatureRows = (keyFeatures = {}) => {
  return Object.entries(keyFeatures).map(([key, value]) => {
    const displayValue =
      key === "dual_sim" ? formatBooleanToText(value) : value;

    return (
      <tr key={`${key}-${value}`}>
        <StyledDataCell>{keyFeatureLabels[key]}</StyledDataCell>
        <StyledDataCell>{displayValue}</StyledDataCell>
      </tr>
    );
  });
};
