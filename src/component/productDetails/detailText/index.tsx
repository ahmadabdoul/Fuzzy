import React from "react";
import { Text, View, StyleProp, ViewStyle, TextStyle } from "react-native";
import { styles } from "./style.css";
import { useValues } from "../../../../App";
import colors from "../../../theme/colors";
import { windowHeight } from "../../../theme/appConstant";
import { commonStyles } from "../../../styles/commonStyle";

const DetailText: React.FC = () => {
  const { isRTL, isDark, textRTLStyle, t } = useValues();

  const colorBgImg = isDark ? colors.darkScreenBg : colors.screenBg;

  return (
    <View
      style={[
        styles.detailsView as StyleProp<ViewStyle>,
        { backgroundColor: colorBgImg } as StyleProp<ViewStyle>,
      ]}
    >
      <Text
        style={[
          styles.detailText as StyleProp<TextStyle>,
          { textAlign: textRTLStyle } as StyleProp<TextStyle>,
        ]}
      >
        {t("transData.detailsText")}
      </Text>
      <Text
        style={[
          commonStyles.h1primary as StyleProp<TextStyle>,
          { textAlign: textRTLStyle } as StyleProp<TextStyle>,
        ]}
      >
        {t("transData.readMore")}
      </Text>
    </View>
  );
};

export default DetailText;
