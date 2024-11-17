import React from "react";
import Svg, { Path } from "react-native-svg";
import colors from "../../theme/colors";

export function Minus() {
  return (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <Path
        d="M4.5 9H13.5"
        stroke={colors.primary}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
