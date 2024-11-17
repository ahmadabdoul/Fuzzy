import React from "react";
import Svg, { G, Path } from "react-native-svg";
import colors from "../../theme/colors";
import { useValues } from "../../../App";

export function Bag() {
  const { isDark } = useValues();
  return (
    <Svg width="18" height="18" viewBox="0 0 16 16" fill="none">
      <Path
        d="M5 5.11334V4.46667C5 2.96667 6.20667 1.49334 7.70667 1.35334C9.49333 1.18001 11 2.58667 11 4.34001V5.26001"
        stroke={isDark ? colors.layoutBg : colors.primary}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.99988 14.6667H9.99988C12.6799 14.6667 13.1599 13.5933 13.2999 12.2867L13.7999 8.28668C13.9799 6.66001 13.5132 5.33334 10.6666 5.33334H5.33322C2.48655 5.33334 2.01988 6.66001 2.19988 8.28668L2.69988 12.2867C2.83988 13.5933 3.31988 14.6667 5.99988 14.6667Z"
        stroke={isDark ? colors.layoutBg : colors.primary}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.3306 7.99999H10.3366"
        stroke={isDark ? colors.layoutBg : colors.primary}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.66268 7.99999H5.66867"
        stroke={isDark ? colors.layoutBg : colors.primary}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
