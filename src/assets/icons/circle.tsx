import React from "react";
import Svg, { Circle } from "react-native-svg";
import colors from "../../theme/colors";
import { useValues } from "../../../App";

export function CircleIcon() {
  const { isDark } = useValues();
  return (
    <Svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <Circle
        cx="11"
        cy="11"
        r="10.5"
        fill="white"
        stroke={isDark ? colors.darkScreenBg : colors.lightText}
      />
    </Svg>
  );
}
