import React from "react";
import Svg, { Path } from "react-native-svg";
import colors from "../../theme/colors";

export function EmailDark() {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M14.1665 17.0833H5.83317C3.33317 17.0833 1.6665 15.8333 1.6665 12.9166V7.08329C1.6665 4.16663 3.33317 2.91663 5.83317 2.91663H14.1665C16.6665 2.91663 18.3332 4.16663 18.3332 7.08329V12.9166C18.3332 15.8333 16.6665 17.0833 14.1665 17.0833Z"
        stroke={colors.subtitle}
        strokeWidth="1.2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.1668 7.5L11.5585 9.58333C10.7002 10.2667 9.29183 10.2667 8.43349 9.58333L5.8335 7.5"
        stroke={colors.subtitle}
        strokeWidth="1.2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
