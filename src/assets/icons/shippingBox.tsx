import React from "react";
import Svg, { Path } from "react-native-svg";
import colors from "../../theme/colors";
import { useValues } from "../../../App";

export function ShippingBox() {
  const { isDark } = useValues();
  const bgColor = isDark ? colors.screenBg : colors.primary;
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M2.6416 6.20001L9.99992 10.4583L17.3082 6.22499"
        stroke={bgColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 18.0084V10.45"
        stroke={bgColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.27501 2.06669L3.82502 4.54171C2.81668 5.10005 1.9917 6.50003 1.9917 7.65003V12.3584C1.9917 13.5084 2.81668 14.9084 3.82502 15.4667L8.27501 17.9417C9.22501 18.4667 10.7833 18.4667 11.7333 17.9417L16.1834 15.4667C17.1917 14.9084 18.0167 13.5084 18.0167 12.3584V7.65003C18.0167 6.50003 17.1917 5.10005 16.1834 4.54171L11.7333 2.06669C10.775 1.53335 9.22501 1.53335 8.27501 2.06669Z"
        stroke={bgColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.1666 11.0333V7.98333L6.2583 3.41663"
        stroke={bgColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
