import React from "react";
import Svg, { Path, Rect } from "react-native-svg";

export function Tick() {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Rect width="20" height="20" rx="4" fill="#122636" />
      <Path
        d="M15.2498 7.08333L8.24984 14.0833L5.0415 10.875L5.864 10.0525L8.24984 12.4325L14.4273 6.26083L15.2498 7.08333Z"
        fill="white"
      />
    </Svg>
  );
}
