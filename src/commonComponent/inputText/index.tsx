import React from "react";
import {
  Text,
  TextInput,
  View,
  ViewStyle,
  TextStyle,
  TextInputProps,
  KeyboardAvoidingView,
} from "react-native";
import { style } from "./style.css";
import colors from "../../theme/colors";
import { useValues } from "../../../App";
import { external } from "../../styles/external.css";

interface InputTextProps {
  title?: string;
  icon?: React.ReactNode;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  validateEmail?: () => void;
  secureTextEntry?: boolean;
}

const InputText: React.FC<InputTextProps> = ({
  title,
  icon,
  placeholder,
  onChangeText,
  validateEmail,
  secureTextEntry,
}) => {
  const { textRTLStyle, viewRTLStyle, t } = useValues();
  const textInputStyle: TextStyle = { textAlign: textRTLStyle };
  const containerStyle: ViewStyle = { flexDirection: viewRTLStyle };

  return (
    <KeyboardAvoidingView style={style.container}>
      <Text style={[style.title, textInputStyle]}>{t(title)}</Text>
      <View style={[style.textInputConainer, containerStyle]}>
        <View style={[external.mh_5]}>{icon}</View>
        <TextInput
          style={[style.textInputColor, textInputStyle]}
          placeholder={t(placeholder)}
          placeholderTextColor={colors.subtitle}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          onBlur={validateEmail}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default InputText;
