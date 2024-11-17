import React from "react";
import { styles } from "./style.css";
import { TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { NotificationIcon } from "../../utils/icon";
import { useValues } from "../../../App";
import colors from "../../theme/colors";

const NotificationIcons = () => {
  const navigation = useNavigation("");
  const handleChnage = () => {
    navigation.navigate("Notifications");
  };
  const { isDark } = useValues();
  const color = isDark ? colors.primary : colors.screenBg;
  const border = isDark ? colors.primary : colors.layoutBg;
  const borderWidth = isDark ? 0.15 : null;
  return (
    <Card
      style={[
        styles.notificationContainer,
        { backgroundColor: color },
        { borderColor: border },
        { borderWidth: borderWidth },
      ]}
    >
      <TouchableOpacity
        style={[
          styles.notificationContainer,
          { backgroundColor: color },
          { borderWidth: borderWidth },
        ]}
        onPress={handleChnage}
      >
        <NotificationIcon />
      </TouchableOpacity>
    </Card>
  );
};

export default NotificationIcons;
