import React from "react";
import Svg, { Path } from "react-native-svg";
import colors from "../../theme/colors";

export function parcel() {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M16.6419 8.33333H3.30859V15C3.30859 17.5 4.14193 18.3333 6.64193 18.3333H13.3086C15.8086 18.3333 16.6419 17.5 16.6419 15V8.33333Z"
        stroke={colors.subtitle}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M17.9163 5.83333V6.66667C17.9163 7.58333 17.4747 8.33333 16.2497 8.33333H3.74967C2.47467 8.33333 2.08301 7.58333 2.08301 6.66667V5.83333C2.08301 4.91667 2.47467 4.16667 3.74967 4.16667H16.2497C17.4747 4.16667 17.9163 4.91667 17.9163 5.83333Z"
        stroke={colors.subtitle}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9.69998 4.16667H5.09998C4.81665 3.85833 4.82498 3.38333 5.12498 3.08333L6.30832 1.9C6.61665 1.59167 7.12498 1.59167 7.43332 1.9L9.69998 4.16667Z"
        stroke={colors.subtitle}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M14.892 4.16667H10.292L12.5587 1.9C12.867 1.59167 13.3753 1.59167 13.6837 1.9L14.867 3.08333C15.167 3.38333 15.1753 3.85833 14.892 4.16667Z"
        stroke={colors.subtitle}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M7.4502 8.33333V12.6167C7.4502 13.2833 8.18353 13.675 8.74186 13.3167L9.5252 12.8C9.80853 12.6167 10.1669 12.6167 10.4419 12.8L11.1835 13.3C11.7335 13.6667 12.4752 13.275 12.4752 12.6083V8.33333H7.4502Z"
        stroke={colors.subtitle}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
