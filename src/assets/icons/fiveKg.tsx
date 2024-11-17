import React from "react";
import Svg, { G, Path } from "react-native-svg";
import colors from "../../theme/colors";

export function FiveKg() {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M17.1802 18C19.5802 18 20.1802 16.65 20.1802 15V9C20.1802 7.35 19.5802 6 17.1802 6C14.7802 6 14.1802 7.35 14.1802 9V15C14.1802 16.65 14.7802 18 17.1802 18Z"
        stroke={colors.lightText}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M6.81982 18C4.41982 18 3.81982 16.65 3.81982 15V9C3.81982 7.35 4.41982 6 6.81982 6C9.21982 6 9.81982 7.35 9.81982 9V15C9.81982 16.65 9.21982 18 6.81982 18Z"
        stroke={colors.lightText}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9.81982 12H14.1798"
        stroke={colors.lightText}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M22.5 14.5V9.5"
        stroke={colors.lightText}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M1.5 14.5V9.5"
        stroke={colors.lightText}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
