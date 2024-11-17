import React from "react";
import Svg, { Path } from "react-native-svg";
import colors from "../../theme/colors";

export function RightSideArrow() {
  return (
    <Svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <Path
        d="M7.50045 3.4001L12.9338 8.83343C13.5755 9.4751 13.5755 10.5251 12.9338 11.1668L7.50046 16.6001"
        stroke={colors.lightText}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
