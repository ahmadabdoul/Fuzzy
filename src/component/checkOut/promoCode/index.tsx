import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { style } from "./style.css";
import { useNavigation } from "@react-navigation/native";
import { useValues } from "../../../../App";
import colors from "../../../theme/colors";
import { commonStyles } from "../../../styles/commonStyle";
import { external } from "../../../styles/external.css";

const PromoCode = () => {
  const navigation = useNavigation("");
  const handleChnage = () => {
    navigation.navigate("Voucher");
  };
  const { isDark, textRTLStyle, viewRTLStyle, t } = useValues();

  return (
    <TouchableOpacity
      style={[
        style.dashBorder,
        { flexDirection: viewRTLStyle },
        { backgroundColor: isDark ? colors.primary : colors.screenBg },
        { borderColor: isDark ? colors.textinputBG : colors.dashedBorder },
      ]}
      onPress={handleChnage}
    >
      <Text
        style={[
          commonStyles.fontsizeFiveHund,
          external.fg_1,
          { color: isDark ? colors.screenBg : colors.primary },
          { textAlign: textRTLStyle },
        ]}
      >
        {t("transData.codeOne")}
      </Text>
      <View style={style.verticleLine} />
      <Text
        style={[
          commonStyles.fontsizeLargeHund,
          { color: isDark ? colors.screenBg : colors.primary },
        ]}
      >
        {t("transData.apply")}
      </Text>
    </TouchableOpacity>
  );
};

export default PromoCode;
