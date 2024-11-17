import React from "react";
import Svg, { Path } from "react-native-svg";
import colors from "../../theme/colors";
import { useValues } from "../../../App";

export function UpArrow() {
  const { isDark } = useValues();
  return (
    <Svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <Path
        d="M18.2602 13.7958L12.2836 7.81917C11.5777 7.11333 10.4227 7.11333 9.7169 7.81917L3.74023 13.7958"
        stroke={isDark ? colors.layoutBg : colors.primary}
        strokeWidth="1.5"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
