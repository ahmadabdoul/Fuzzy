import React from "react";
import Svg, { Path } from "react-native-svg";
import colors from "../../theme/colors";

export function ProfileDisable() {
  return (
    <Svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <Path
        d="M14.187 12.6817C14.0703 12.67 13.9303 12.67 13.802 12.6817C11.0253 12.5883 8.82031 10.3133 8.82031 7.51334C8.82031 4.655 11.1303 2.33334 14.0003 2.33334C16.8586 2.33334 19.1803 4.655 19.1803 7.51334C19.1686 10.3133 16.9636 12.5883 14.187 12.6817Z"
        stroke={colors.subtitle}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.35285 16.9867C5.52952 18.8767 5.52952 21.9567 8.35285 23.835C11.5612 25.9817 16.8229 25.9817 20.0312 23.835C22.8545 21.945 22.8545 18.865 20.0312 16.9867C16.8345 14.8517 11.5729 14.8517 8.35285 16.9867Z"
        stroke={colors.subtitle}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
