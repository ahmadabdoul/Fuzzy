import React from "react";
import Svg, { G, Path } from "react-native-svg";
import colors from "../../theme/colors";

export function Select() {
  return (
    <Svg width="800px" height="800px" viewBox="0 0 24 24" fill="none">
      <G id="Interface / Check">
        <Path
          id="Vector"
          d="M6 12L10.2426 16.2426L18.727 7.75732"
          stroke={colors.screenBg}
          stroke-width="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
}
