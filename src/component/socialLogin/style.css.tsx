import { StyleSheet } from "react-native";
import colors from "../../theme/colors";
import { windowHeight, windowWidth } from "../../theme/appConstant";
import { external } from "../../styles/external.css";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.textinputBG,
    width: windowWidth(130),
    height: windowHeight(50),
    ...external.ai_center,
    ...external.js_center,
    borderRadius: windowHeight(5),
  },
  img: {
    width: windowWidth(53),
    height: windowHeight(28),
    ...external.rm_contain,
  },
});
export { styles };
