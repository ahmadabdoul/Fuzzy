import React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import colors from "../../theme/colors";
import { useValues } from "../../../App";

export function NotificationIcon() {
  const { isDark } = useValues();
  const color = isDark ? colors.screenBg : colors.primary;
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M10.0165 2.42499C7.25816 2.42499 5.0165 4.66665 5.0165 7.42499V9.83332C5.0165 10.3417 4.79983 11.1167 4.5415 11.55L3.58316 13.1417C2.9915 14.125 3.39983 15.2167 4.48316 15.5833C8.07483 16.7833 11.9498 16.7833 15.5415 15.5833C16.5498 15.25 16.9915 14.0583 16.4415 13.1417L15.4832 11.55C15.2332 11.1167 15.0165 10.3417 15.0165 9.83332V7.42499C15.0165 4.67499 12.7665 2.42499 10.0165 2.42499Z"
        stroke={color}
        strokeWidth="1.2"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <Path
        d="M11.5584 2.66664C11.3001 2.59164 11.0334 2.5333 10.7584 2.49997C9.95843 2.39997 9.19176 2.4583 8.4751 2.66664C8.71676 2.04997 9.31676 1.61664 10.0168 1.61664C10.7168 1.61664 11.3168 2.04997 11.5584 2.66664Z"
        stroke={color}
        strokeWidth="1.2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.5166 15.8834C12.5166 17.2584 11.3916 18.3834 10.0166 18.3834C9.33327 18.3834 8.69993 18.1 8.24993 17.65C7.79993 17.2 7.5166 16.5667 7.5166 15.8834"
        stroke={color}
        strokeWidth="1.2"
        strokeMiterlimit="10"
      />
      <Circle cx="14.5" cy="4.5" r="2.5" fill={colors.red} />
    </Svg>
  );
}
