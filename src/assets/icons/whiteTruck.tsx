import React from "react";
import Svg, { Path } from "react-native-svg";
import colors from "../../theme/colors";
import { useValues } from "../../../App";

export function WhiteTruck() {
  const { isDark } = useValues();
  const bgColor = isDark ? colors.screenBg : colors.primary;
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M10.0001 11.6667H10.8335C11.7501 11.6667 12.5001 10.9167 12.5001 10V1.66669H5.00012C3.75012 1.66669 2.65846 2.35834 2.0918 3.37501"
        stroke={bgColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1.6665 14.1667C1.6665 15.55 2.78317 16.6667 4.1665 16.6667H4.99984C4.99984 15.75 5.74984 15 6.6665 15C7.58317 15 8.33317 15.75 8.33317 16.6667H11.6665C11.6665 15.75 12.4165 15 13.3332 15C14.2498 15 14.9998 15.75 14.9998 16.6667H15.8332C17.2165 16.6667 18.3332 15.55 18.3332 14.1667V11.6667H15.8332C15.3748 11.6667 14.9998 11.2917 14.9998 10.8334V8.33335C14.9998 7.87502 15.3748 7.50002 15.8332 7.50002H16.9082L15.4832 5.00836C15.1832 4.4917 14.6332 4.16669 14.0332 4.16669H12.4998V10C12.4998 10.9167 11.7498 11.6667 10.8332 11.6667H9.99984"
        stroke={bgColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.66667 18.3333C7.58714 18.3333 8.33333 17.5871 8.33333 16.6667C8.33333 15.7462 7.58714 15 6.66667 15C5.74619 15 5 15.7462 5 16.6667C5 17.5871 5.74619 18.3333 6.66667 18.3333Z"
        stroke={bgColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.3332 18.3333C14.2536 18.3333 14.9998 17.5871 14.9998 16.6667C14.9998 15.7462 14.2536 15 13.3332 15C12.4127 15 11.6665 15.7462 11.6665 16.6667C11.6665 17.5871 12.4127 18.3333 13.3332 18.3333Z"
        stroke={bgColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.3333 10V11.6667H15.8333C15.375 11.6667 15 11.2917 15 10.8333V8.33333C15 7.875 15.375 7.5 15.8333 7.5H16.9083L18.3333 10Z"
        stroke={bgColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1.6665 6.66669H6.6665"
        stroke={bgColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1.6665 9.16669H4.99984"
        stroke={bgColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1.6665 11.6667H3.33317"
        stroke={bgColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
