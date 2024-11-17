import React from "react";
import Svg, { Path } from "react-native-svg";
import colors from "../../theme/colors";

export function SearchNormal() {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M9.58464 17.5001C13.9569 17.5001 17.5013 13.9557 17.5013 9.58341C17.5013 5.21116 13.9569 1.66675 9.58464 1.66675C5.21238 1.66675 1.66797 5.21116 1.66797 9.58341C1.66797 13.9557 5.21238 17.5001 9.58464 17.5001Z"
        stroke={colors.lightText}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.3346 18.3334L16.668 16.6667"
        stroke={colors.lightText}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
