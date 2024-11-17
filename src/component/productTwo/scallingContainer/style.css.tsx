import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../../../theme/appConstant";
import colors from "../../../theme/colors";
import { external } from "../../../styles/external.css";

const styles = StyleSheet.create({
  heightView: {
    backgroundColor: colors.screenBg,
    height: windowHeight(68),
    width: windowWidth(97),
    ...external.js_center,
    ...external.ai_center,
    borderRadius: windowHeight(7),
    borderWidth: 1.2,
    borderColor: colors.layoutBg,
    marginHorizontal: windowHeight(5),
  },
});
export { styles };
