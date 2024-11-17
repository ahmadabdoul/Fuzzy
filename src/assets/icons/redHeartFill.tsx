import React from "react";
import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";
import colors from "../../theme/colors";

export function RedHeartFill({ size }) {
  return (
    <Svg
      width={size === "large" ? "21" : "17"}
      height={size === "large" ? "21" : "17"}
      viewBox="0 0 16 16"
      fill="none"
    >
      <Path
        d="M10.9602 2.06667C9.7535 2.06667 8.6735 2.65333 8.00016 3.55333C7.32683 2.65333 6.24683 2.06667 5.04016 2.06667C2.9935 2.06667 1.3335 3.73333 1.3335 5.79333C1.3335 6.58667 1.46016 7.32 1.68016 8C2.7335 11.3333 5.98016 13.3267 7.58683 13.8733C7.8135 13.9533 8.18683 13.9533 8.4135 13.8733C10.0202 13.3267 13.2668 11.3333 14.3202 8C14.5402 7.32 14.6668 6.58667 14.6668 5.79333C14.6668 3.73333 13.0068 2.06667 10.9602 2.06667Z"
        fill={colors.red}
        stroke={colors.red}
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_2147_1346"
          x1="5.50024"
          y1="13"
          x2="12.0002"
          y2="3"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stop-color="#E61E1E" />
          <Stop offset="1" stop-color="#F05151" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
