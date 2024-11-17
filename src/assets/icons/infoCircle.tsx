import React from "react";
import Svg, { G, Path } from "react-native-svg";
import colors from "../../theme/colors";
import { useValues } from "../../../App";

export function InfoCircle() {
  const { isDark } = useValues();
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <G id="info-circle">
        <G id="vuesax/linear/info-circle">
          <G id="info-circle_2">
            <Path
              id="Vector"
              d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
              stroke={isDark ? colors.screenBg : colors.primary}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              id="Vector_2"
              d="M12 8V13"
              stroke={isDark ? colors.screenBg : colors.primary}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              id="Vector_3"
              d="M11.9941 16H12.0031"
              stroke={isDark ? colors.screenBg : colors.primary}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
}
