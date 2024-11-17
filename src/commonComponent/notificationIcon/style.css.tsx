import { StyleSheet } from "react-native";
import { windowHeight } from "../../theme/appConstant";
import colors from "../../theme/colors";
import { external } from "../../styles/external.css";

const styles = StyleSheet.create({
  notificationContainer: {
    borderColor: colors.lightText,
    width: windowHeight(35),
    height: windowHeight(35),
    borderRadius: windowHeight(23),
    ...external.ai_center,
    ...external.js_center,
    backgroundColor: colors.screenBg,
    elevation: 0.3,
  },
});

export { styles };
