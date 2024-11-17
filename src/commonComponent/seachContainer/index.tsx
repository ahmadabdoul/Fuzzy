import React from "react";
import { TouchableOpacity, View } from "react-native";
import SearchComponent from "../searchComponent";
import { style } from "./style.css";
import { FilterIcon } from "../../utils/icon";
import { useNavigation } from "@react-navigation/native";
import { useValues } from "../../../App";
import colors from "../../theme/colors";
import { external } from "../../styles/external.css";

const SeachContainer = () => {
  const navigation = useNavigation("");
  const handleChange = () => {
    navigation.navigate("FilterScreen");
  };
  const { isDark, viewRTLStyle } = useValues();
  const color = isDark ? colors.primary : colors.layoutBg;
  return (
    <View
      style={[
        external.fd_row,
        external.ai_center,
        { flexDirection: viewRTLStyle },
      ]}
    >
      <SearchComponent width={"83%"} />
      <TouchableOpacity
        style={[style.searchContainer, { backgroundColor: color }]}
        onPress={handleChange}
      >
        <FilterIcon />
      </TouchableOpacity>
    </View>
  );
};

export default SeachContainer;
