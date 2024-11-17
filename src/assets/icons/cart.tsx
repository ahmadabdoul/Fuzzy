import React from "react";
import Svg, { G, Path } from "react-native-svg";
import colors from "../../theme/colors";

export function CartIcon() {
  return (
    <Svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <Path
        d="M8.75 8.94834V7.81668C8.75 5.19168 10.8617 2.61334 13.4867 2.36834C16.6133 2.06501 19.25 4.52668 19.25 7.59501V9.20501"
        stroke={colors.subtitle}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10.4998 25.6667H17.4998C22.1898 25.6667 23.0298 23.7884 23.2748 21.5017L24.1498 14.5017C24.4648 11.655 23.6481 9.33337 18.6665 9.33337H9.33313C4.35146 9.33337 3.5348 11.655 3.8498 14.5017L4.7248 21.5017C4.9698 23.7884 5.8098 25.6667 10.4998 25.6667Z"
        stroke={colors.subtitle}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M18.0779 14H18.0884"
        stroke={colors.subtitle}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9.91042 14H9.9209"
        stroke={colors.subtitle}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
