import React from "react";
import Svg, { Path } from "react-native-svg";
import colors from "../../theme/colors";

export function Trash() {
  return (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <Path
        d="M15.75 4.48499C13.2525 4.23749 10.74 4.10999 8.235 4.10999C6.75 4.10999 5.265 4.18499 3.78 4.33499L2.25 4.48499"
        stroke={colors.primary}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.375 3.7275L6.54 2.745C6.66 2.0325 6.75 1.5 8.0175 1.5H9.9825C11.25 1.5 11.3475 2.0625 11.46 2.7525L11.625 3.7275"
        stroke={colors.primary}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.1373 6.85498L13.6498 14.4075C13.5673 15.585 13.4998 16.5 11.4073 16.5H6.5923C4.4998 16.5 4.4323 15.585 4.3498 14.4075L3.8623 6.85498"
        stroke={colors.primary}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.74756 12.375H10.2451"
        stroke={colors.primary}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.125 9.375H10.875"
        stroke={colors.primary}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
