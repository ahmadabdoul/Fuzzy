import React from "react";
import Svg, { Rect } from "react-native-svg";

export function UnTick() {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Rect
        x="0.5"
        y="0.5"
        width="19"
        height="19"
        rx="3.5"
        fill="white"
        stroke="#EBEDEE"
      />
    </Svg>
  );
}
