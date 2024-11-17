import React from "react";
import { Text, TextInput, View, ViewStyle, TextStyle, TextInputProps } from "react-native";
import colors from "../../theme/colors";
import { styles } from "./style.css";
import { useValues } from "../../../App";
import { external } from "../../styles/external.css";

// Define props type
interface ProfileTextInputProps {
  title: string;
  icon?: React.ReactNode;
  placeHolder: string;
  icons?: boolean;
  AddCard?: boolean;
  color?: string;
}

const ProfileTextInput: React.FC<ProfileTextInputProps> = ({
  title,
  icon,
  placeHolder,
  icons,
  AddCard,
  color,
}) => {
  const { isDark, textRTLStyle, viewRTLStyle, t } = useValues();
  const colorTextColor = isDark ? colors.screenBg : colors.primary;

  return (
    <View style={[external.mt_10]}>
      <View style={[external.mb_5]}>
        <Text
          style={[
            styles.headingContainer,
            { color: colorTextColor },
            { textAlign: textRTLStyle } as TextStyle,
          ]}
        >
          {t(title)}
        </Text>
        <View
          style={[
            AddCard ? styles.textInputstyle : styles.textInputView,
            { backgroundColor: isDark ? colors.textinputBG : color },
            { borderTopColor: isDark ? colors.primary : colors.layoutBg },
            { flexDirection: viewRTLStyle } as ViewStyle,
          ]}
        >
          {icons && <View style={[styles.iconView]}>{icon}</View>}
          <TextInput
            style={[styles.textInput, { textAlign: textRTLStyle } as TextStyle]}
            placeholder={t(placeHolder)}
            placeholderTextColor={colors.lightText}
          />
        </View>
      </View>
    </View>
  );
};

export default ProfileTextInput;
