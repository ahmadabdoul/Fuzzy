import React from "react";
import Svg, { Path } from "react-native-svg";
import colors from "../../theme/colors";
import { useValues } from "../../../App";

export function HeartEnable() {
  const { isDark } = useValues();
  const colorText = isDark ? colors.screenBg : colors.primary;
  return (
    <Svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <Path
        d="M19.1797 3.61667C17.068 3.61667 15.178 4.64334 13.9997 6.21834C12.8213 4.64334 10.9313 3.61667 8.81967 3.61667C5.23801 3.61667 2.33301 6.53333 2.33301 10.1383C2.33301 11.5267 2.55467 12.81 2.93967 14C4.78301 19.8333 10.4647 23.3217 13.2763 24.2783C13.673 24.4183 14.3263 24.4183 14.723 24.2783C17.5347 23.3217 23.2163 19.8333 25.0597 14C25.4447 12.81 25.6663 11.5267 25.6663 10.1383C25.6663 6.53333 22.7613 3.61667 19.1797 3.61667Z"
        fill={colorText}
      />
    </Svg>
  );
}
