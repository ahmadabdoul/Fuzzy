import React from "react";
import Svg, { Path } from "react-native-svg";
import colors from "../../theme/colors";
import { useValues } from "../../../App";

export function HomeIcon() {
  const { isDark } = useValues();
  const colorText = isDark ? colors.screenBg : colors.primary;

  return (
    <Svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <Path
        d="M23.3801 7.95663L16.6601 3.25497C14.8284 1.97163 12.0168 2.04163 10.2551 3.40663L4.41011 7.9683C3.24344 8.8783 2.32178 10.745 2.32178 12.215V20.265C2.32178 23.24 4.73678 25.6666 7.71178 25.6666H20.2884C23.2634 25.6666 25.6784 23.2516 25.6784 20.2766V12.3666C25.6784 10.7916 24.6634 8.85497 23.3801 7.95663ZM14.8751 21C14.8751 21.4783 14.4784 21.875 14.0001 21.875C13.5218 21.875 13.1251 21.4783 13.1251 21V17.5C13.1251 17.0216 13.5218 16.625 14.0001 16.625C14.4784 16.625 14.8751 17.0216 14.8751 17.5V21Z"
        fill={colorText}
      />
    </Svg>
  );
}
