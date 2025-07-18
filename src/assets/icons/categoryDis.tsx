import React from "react";
import Svg, { Path } from "react-native-svg";
import { useValues } from "../../../App";
import colors from "../../theme/colors";

export function CategoryDis() {
  const { isDark } = useValues();
  const colorText = isDark ? colors.screenBg : colors.primary;
  return (
    <Svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <Path
        d="M21.7818 2.33333H19.5652C17.0218 2.33333 15.6802 3.67499 15.6802 6.21833V8.435C15.6802 10.9783 17.0218 12.32 19.5652 12.32H21.7818C24.3252 12.32 25.6668 10.9783 25.6668 8.435V6.21833C25.6668 3.67499 24.3252 2.33333 21.7818 2.33333Z"
        fill={colorText}
      />
      <Path
        d="M8.44683 15.6683H6.23016C3.67516 15.6683 2.3335 17.01 2.3335 19.5533V21.77C2.3335 24.325 3.67516 25.6667 6.2185 25.6667H8.43516C10.9785 25.6667 12.3202 24.325 12.3202 21.7817V19.565C12.3318 17.01 10.9902 15.6683 8.44683 15.6683Z"
        fill={colorText}
      />
      <Path
        d="M7.3385 12.3433C10.1027 12.3433 12.3435 10.1025 12.3435 7.33833C12.3435 4.57414 10.1027 2.33333 7.3385 2.33333C4.57431 2.33333 2.3335 4.57414 2.3335 7.33833C2.3335 10.1025 4.57431 12.3433 7.3385 12.3433Z"
        fill={colorText}
      />
      <Path
        d="M20.6617 25.6667C23.4259 25.6667 25.6667 23.4258 25.6667 20.6617C25.6667 17.8975 23.4259 15.6567 20.6617 15.6567C17.8976 15.6567 15.6567 17.8975 15.6567 20.6617C15.6567 23.4258 17.8976 25.6667 20.6617 25.6667Z"
        fill={colorText}
      />
    </Svg>
  );
}
