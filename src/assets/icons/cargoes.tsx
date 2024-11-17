import React from "react";
import Svg, { Path } from "react-native-svg";
import colors from "../../theme/colors";
import { useValues } from "../../../App";

export function Cargoes() {
  const { isDark } = useValues();
  const bgColor = isDark ? colors.screenBg : colors.primary;
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M12.4998 1.66669V10C12.4998 10.9167 11.7498 11.6667 10.8332 11.6667H1.6665V5.00002C1.6665 3.15835 3.15817 1.66669 4.99984 1.66669H12.4998Z"
        stroke={bgColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.3332 11.6667V14.1667C18.3332 15.55 17.2165 16.6667 15.8332 16.6667H14.9998C14.9998 15.75 14.2498 15 13.3332 15C12.4165 15 11.6665 15.75 11.6665 16.6667H8.33317C8.33317 15.75 7.58317 15 6.6665 15C5.74984 15 4.99984 15.75 4.99984 16.6667H4.1665C2.78317 16.6667 1.6665 15.55 1.6665 14.1667V11.6667H10.8332C11.7498 11.6667 12.4998 10.9167 12.4998 10V4.16669H14.0332C14.6332 4.16669 15.1832 4.4917 15.4832 5.00836L16.9082 7.50002H15.8332C15.3748 7.50002 14.9998 7.87502 14.9998 8.33335V10.8334C14.9998 11.2917 15.3748 11.6667 15.8332 11.6667H18.3332Z"
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
    </Svg>
  );
}
