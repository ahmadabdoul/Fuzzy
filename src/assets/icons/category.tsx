import React from "react";
import Svg, { Path } from "react-native-svg";
import colors from "../../theme/colors";

export function Category() {
  return (
    <Svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <Path
        d="M19.8335 11.6667H22.1668C24.5002 11.6667 25.6668 10.5 25.6668 8.16671V5.83337C25.6668 3.50004 24.5002 2.33337 22.1668 2.33337H19.8335C17.5002 2.33337 16.3335 3.50004 16.3335 5.83337V8.16671C16.3335 10.5 17.5002 11.6667 19.8335 11.6667Z"
        stroke={colors.lightText}
        strokeWidth="1.2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.8335 25.6667H8.16683C10.5002 25.6667 11.6668 24.5 11.6668 22.1667V19.8334C11.6668 17.5 10.5002 16.3334 8.16683 16.3334H5.8335C3.50016 16.3334 2.3335 17.5 2.3335 19.8334V22.1667C2.3335 24.5 3.50016 25.6667 5.8335 25.6667Z"
        stroke={colors.lightText}
        strokeWidth="1.2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.00016 11.6667C9.57749 11.6667 11.6668 9.57737 11.6668 7.00004C11.6668 4.42271 9.57749 2.33337 7.00016 2.33337C4.42283 2.33337 2.3335 4.42271 2.3335 7.00004C2.3335 9.57737 4.42283 11.6667 7.00016 11.6667Z"
        stroke={colors.lightText}
        strokeWidth="1.2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.0002 25.6667C23.5775 25.6667 25.6668 23.5774 25.6668 21C25.6668 18.4227 23.5775 16.3334 21.0002 16.3334C18.4228 16.3334 16.3335 18.4227 16.3335 21C16.3335 23.5774 18.4228 25.6667 21.0002 25.6667Z"
        stroke={colors.lightText}
        strokeWidth="1.2"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
