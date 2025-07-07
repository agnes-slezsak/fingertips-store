import { StyledDataCell } from "./TooltipModal.styles";
import { KeyFeatureLabels } from "../../utils/consts";
import { formatBooleanToText } from "../../utils/formatBooleanToText";

export const renderKeyFeatureRows = (keyFeatures = {}) => {
  return Object.entries(keyFeatures).map(([key, value]) => {
    const displayValue =
      key === "dual_sim" ? formatBooleanToText(value) : value;

    return (
      <tr key={key}>
        <StyledDataCell>{KeyFeatureLabels[key]}</StyledDataCell>
        <StyledDataCell>{displayValue}</StyledDataCell>
      </tr>
    );
  });
};
