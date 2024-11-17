import React, { memo } from "react";
import {
  Pressable,
  Text,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
} from "react-native";
import { style } from "./style.css";
import { useValues } from "../../../App";
import { external } from "../../styles/external.css";

interface InputButtonProps {
  value: string;
  onPress: () => void;
  buttonStyle?: StyleProp<ViewStyle> | any;
  width?: number | any;
}

const InputButton: React.FC<InputButtonProps> = ({
  value,
  onPress,
  buttonStyle,
  width,
}) => {
  const { isDark, t } = useValues();

  const buttonColorStyle: StyleProp<ViewStyle> = isDark
    ? buttonStyle
      ? style.darkYellowButton
      : style.darkButton
    : buttonStyle
    ? style.startYellowButton
    : style.startbutton;

  const buttonColorTextStyle: StyleProp<TextStyle> = isDark
    ? buttonStyle
      ? style.darkYellowText
      : style.darkButtonText
    : buttonStyle
    ? style.startedTextYellow
    : style.startedText;

  return (
    <View>
      <TouchableOpacity
        style={[buttonColorStyle, { width: width || external.width_100 }]}
        onPress={onPress}
      >
        <Text style={buttonColorTextStyle}>{t(value)}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default memo(InputButton);
