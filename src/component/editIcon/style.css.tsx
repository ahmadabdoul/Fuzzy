import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../../theme/appConstant";
import colors from "../../theme/colors";
import { external } from "../../styles/external.css";
const styles = StyleSheet.create({
  editText: {
    backgroundColor: colors.screenBg,
    width: windowWidth(33),
    height: windowHeight(23),
    ...external.m_5,
    borderRadius: windowHeight(6),
    ...external.ai_center,
    ...external.js_center,
  },
});
export { styles };
