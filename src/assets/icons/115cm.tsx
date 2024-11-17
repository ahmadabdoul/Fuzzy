import React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";
import colors from "../../theme/colors";

export function OneOneFiveCm() {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <G clip-path="url(#clip0_184_3075)">
        <Path
          d="M7 5L7 19C7 21 8 22 10 22L14 22C16 22 17 21 17 19L17 5C17 3 16 2 14 2L10 2C8 2 7 3 7 5Z"
          stroke={colors.lightText}
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <Path
          d="M17 18L12 18"
          stroke={colors.lightText}
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <Path
          d="M17 6L13 6"
          stroke={colors.lightText}
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <Path
          d="M17 10.05L12 10"
          stroke={colors.lightText}
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <Path
          d="M17 14L14 14"
          stroke={colors.lightText}
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_184_3075">
          <Rect
            width="24"
            height="24"
            fill="white"
            transform="translate(24) rotate(90)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
