import React from "react";
import Svg, { Path } from "react-native-svg";
import colors from "../../theme/colors";
import { useValues } from "../../../App";

export function Drawer() {
  const { isDark } = useValues();
  const bgColor = isDark ? colors.screenBg : colors.primary;
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill={bgColor}>
      <Path
        d="M17.5 6.45831H2.5C2.15833 6.45831 1.875 6.17498 1.875 5.83331C1.875 5.49165 2.15833 5.20831 2.5 5.20831H17.5C17.8417 5.20831 18.125 5.49165 18.125 5.83331C18.125 6.17498 17.8417 6.45831 17.5 6.45831Z"
        fill={bgColor}
      />
      <Path
        d="M17.5 10.625H2.5C2.15833 10.625 1.875 10.3417 1.875 10C1.875 9.65833 2.15833 9.375 2.5 9.375H17.5C17.8417 9.375 18.125 9.65833 18.125 10C18.125 10.3417 17.8417 10.625 17.5 10.625Z"
        fill={bgColor}
      />
      <Path
        d="M17.5 14.7917H2.5C2.15833 14.7917 1.875 14.5084 1.875 14.1667C1.875 13.825 2.15833 13.5417 2.5 13.5417H17.5C17.8417 13.5417 18.125 13.825 18.125 14.1667C18.125 14.5084 17.8417 14.7917 17.5 14.7917Z"
        fill={bgColor}
      />
    </Svg>
  );
}
