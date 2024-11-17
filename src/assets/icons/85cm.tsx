import React from "react";
import Svg, { Path } from "react-native-svg";
import colors from "../../theme/colors";

export function EightyFiveCm() {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M19 7L5 7C3 7 2 8 2 10L2 14C2 16 3 17 5 17L19 17C21 17 22 16 22 14L22 10C22 8 21 7 19 7Z"
        stroke={colors.lightText}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <Path
        d="M6 17L6 12"
        stroke={colors.lightText}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <Path
        d="M18 17L18 13"
        stroke={colors.lightText}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <Path
        d="M13.95 17L14 12"
        stroke={colors.lightText}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <Path
        d="M10 17L10 14"
        stroke={colors.lightText}
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </Svg>
  );
}
