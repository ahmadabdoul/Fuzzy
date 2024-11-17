import React from "react";
import Svg, { G, Path } from "react-native-svg";
import colors from "../../theme/colors";

export function Cross({ color, width, height }) {
  return (
    <Svg
      width={width || 30}
      height={height || 30}
      viewBox="0 0 24 24"
      fill="none"
    >
      <G id="Other Icon/Close">
        <G id="vuesax/linear/add">
          <G id="add">
            <Path
              id="Vector"
              d="M7 7L16.9999 16.9999"
              stroke={color || colors.lightText}
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              id="Vector_2"
              d="M7.00008 16.9999L17 7"
              stroke={color || colors.lightText}
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
}
