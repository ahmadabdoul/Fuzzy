import React from "react";
import Svg, { Path } from "react-native-svg";
import colors from "../../theme/colors";
import { useValues } from "../../../App";

export function Economy() {
  const { isDark } = useValues();
  const bgColor = isDark ? colors.screenBg : colors.primary;

  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M19.1666 14.925C19.1833 15.55 19.0166 16.1416 18.7166 16.65C18.55 16.95 18.325 17.225 18.075 17.45C17.5 17.9833 16.7416 18.3083 15.9 18.3333C14.6833 18.3583 13.6083 17.7333 13.0166 16.775C12.7 16.2833 12.5083 15.6917 12.5 15.0667C12.475 14.0167 12.9416 13.0666 13.6916 12.4416C14.2583 11.975 14.975 11.6833 15.7583 11.6666C17.6 11.625 19.125 13.0833 19.1666 14.925Z"
        stroke={bgColor}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.5332 15.025L15.3749 15.825L17.1165 14.1416"
        stroke={bgColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
        d="M18.0083 7.64169V12.3584C18.0083 12.4001 18.0084 12.4333 18 12.475C17.4167 11.9667 16.6667 11.6667 15.8334 11.6667C15.05 11.6667 14.325 11.9417 13.75 12.4C12.9834 13.0084 12.5 13.95 12.5 15C12.5 15.625 12.675 16.2167 12.9833 16.7167C13.0583 16.85 13.15 16.975 13.25 17.0917L11.725 17.9334C10.775 18.4667 9.22501 18.4667 8.27501 17.9334L3.82502 15.4667C2.81668 14.9084 1.9917 13.5084 1.9917 12.3584V7.64169C1.9917 6.49169 2.81668 5.09171 3.82502 4.53337L8.27501 2.06669C9.22501 1.53335 10.775 1.53335 11.725 2.06669L16.175 4.53337C17.1834 5.09171 18.0083 6.49169 18.0083 7.64169Z"
        stroke={bgColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
