import React from "react";
import { Text, View, TextStyle, ViewStyle, StyleProp } from "react-native";
import { styles } from "./style.css";
import { useValues } from "../../../../App";
import colors from "../../../theme/colors";

const Introductions: React.FC = () => {
  const { isDark, textRTLStyle, t } = useValues();

  const textColor = isDark ? colors.screenBg : colors.primary;

  return (
    <View>
      <Text
        style={[
          styles.introduction as StyleProp<TextStyle>,
          { color: textColor },
          { textAlign: textRTLStyle },
        ]}
      >
        {t("transData.introduction")}
      </Text>
      <Text
        style={[
          styles.IntroductionWeb as StyleProp<TextStyle>,
          { textAlign: textRTLStyle },
        ]}
      >
        {t("transData.introductionWeb")}
        {"\n"}
        {"\n"}
        {t("transData.introductionDescription")}
      </Text>
    </View>
  );
};

export default Introductions;
