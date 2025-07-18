import React from "react";
import Svg, { Path } from "react-native-svg";
import colors from "../../theme/colors";
import { useValues } from "../../../App";

export function ProfileEnable() {
  const { isDark } = useValues();
  const colorText = isDark ? colors.screenBg : colors.primary;
  return (
    <Svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <Path
        d="M13.9997 2.33333C10.943 2.33333 8.45801 4.81833 8.45801 7.875C8.45801 10.8733 10.803 13.3 13.8597 13.405C13.953 13.3933 14.0463 13.3933 14.1163 13.405C14.1397 13.405 14.1513 13.405 14.1747 13.405C14.1863 13.405 14.1863 13.405 14.198 13.405C17.1847 13.3 19.5297 10.8733 19.5413 7.875C19.5413 4.81833 17.0563 2.33333 13.9997 2.33333Z"
        fill={colorText}
      />
      <Path
        d="M19.9271 16.5083C16.6721 14.3383 11.3638 14.3383 8.08544 16.5083C6.60378 17.5 5.78711 18.8417 5.78711 20.2767C5.78711 21.7117 6.60378 23.0417 8.07378 24.0217C9.70711 25.1183 11.8538 25.6667 14.0004 25.6667C16.1471 25.6667 18.2938 25.1183 19.9271 24.0217C21.3971 23.03 22.2138 21.7 22.2138 20.2533C22.2021 18.8183 21.3971 17.4883 19.9271 16.5083Z"
        fill={colorText}
      />
    </Svg>
  );
}
