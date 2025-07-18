import React from "react";
import Svg, { Path } from "react-native-svg";
import colors from "../../theme/colors";
import { useValues } from "../../../App";

export function Return() {
  const { isDark } = useValues();
  const colorText = isDark ? colors.screenBg : colors.primary;
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M6.7002 9.26001L12.0002 12.33L17.2602 9.28001"
        stroke={colorText}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 17.77V12.32"
        stroke={colorText}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.7603 6.29001L7.56024 8.07001C6.84024 8.47001 6.24023 9.48001 6.24023 10.31V13.7C6.24023 14.53 6.83024 15.54 7.56024 15.94L10.7603 17.72C11.4403 18.1 12.5602 18.1 13.2502 17.72L16.4503 15.94C17.1703 15.54 17.7702 14.53 17.7702 13.7V10.3C17.7702 9.47001 17.1803 8.46001 16.4503 8.06001L13.2502 6.28001C12.5602 5.90001 11.4403 5.90001 10.7603 6.29001Z"
        stroke={colorText}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25"
        stroke={colorText}
        strokeWidth="1.5"
        strokeLinecap="round"
        stroke-Linejoin="round"
      />
      <Path
        d="M2 9C2 5.13 5.13 2 9 2L7.95001 3.75"
        stroke={colorText}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
