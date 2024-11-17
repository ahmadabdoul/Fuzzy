import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { style } from "./style.css";
import { useValues } from "../../../../../App";
import colors from "../../../../theme/colors";
import { external } from "../../../../styles/external.css";

const AddCardText: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  const { isDark, t } = useValues();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("AddCard")}
      style={[
        external.ai_center,
        external.fd_row,
        external.as_end,
        external.mv_13,
      ]}
    >
      <Text
        style={[
          style.textDecorationLine,
          { color: isDark ? colors.screenBg : colors.primary },
        ]}
      >
        +
      </Text>
      <Text
        style={[
          style.textDecoration,
          { color: isDark ? colors.screenBg : colors.primary },
        ]}
      >
        {" "}
        {t("transData.addNewCard")}
      </Text>
    </TouchableOpacity>
  );
};

export default AddCardText;
