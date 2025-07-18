import React from "react";
import Svg, { G, Path } from "react-native-svg";
import colors from "../../theme/colors";

export function Sms({ color }) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <G id="sms">
        <G id="vuesax/linear/sms">
          <G id="sms_2">
            <Path
              id="Vector"
              d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
              stroke={color || colors.editColor}
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              id="Vector_2"
              d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
              stroke={color || colors.editColor}
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
}
