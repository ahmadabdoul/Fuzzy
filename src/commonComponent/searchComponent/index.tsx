import React from "react";
import { TextInput, View } from "react-native";
import { style } from "./style.css";
import colors from "../../theme/colors";
import { SearchNormal } from "../../utils/icon";
import { useValues } from "../../../App";

const SearchComponent = ({ width }) => {
  const { isDark, textRTLStyle, viewRTLStyle, t } = useValues();
  const color = isDark ? colors.primary : colors.layoutBg;
  return (
    <View
      style={[
        style.searchContainer,
        { flexDirection: viewRTLStyle },
        { backgroundColor: color },
        { width: width },
      ]}
    >
      <SearchNormal />
      <TextInput
        style={[style.input, { textAlign: textRTLStyle }]}
        placeholder={t("transData.searchHere")}
        placeholderTextColor={colors.lightText}
      />
    </View>
  );
};

export default SearchComponent;
