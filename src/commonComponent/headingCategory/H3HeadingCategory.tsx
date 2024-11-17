import React, { memo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./style.css";
import { useNavigation } from "@react-navigation/native";
import { useValues } from "../../../App";
import colors from "../../theme/colors";
import { external } from "../../styles/external.css";

const H3HeadingCategory = ({ value, seeall, search, onPress }) => {
  const navigation = useNavigation("");
  const handleChnage = () => {
    navigation.navigate("SearchScreen");
  };
  const { isDark, viewRTLStyle, t } = useValues();
  const textColor = isDark ? colors.screenBg : colors.primary;

  return (
    <View
      style={[
        styles.container,
        external.fd_row,
        external.js_space,
        { flexDirection: viewRTLStyle },
      ]}
    >
      <Text style={[styles.valueText, { color: textColor }]}>{t(value)}</Text>
      {search ? (
        <TouchableOpacity onPress={onPress}>
          <Text style={[styles.seeAllText, { color: textColor }]}>
            {t(seeall)}
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={handleChnage}>
          <Text style={[styles.seeAllText, { color: textColor }]}>
            {t(seeall)}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default memo(H3HeadingCategory);
