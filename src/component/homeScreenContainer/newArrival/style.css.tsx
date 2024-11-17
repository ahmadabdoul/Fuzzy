import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../../../theme/appConstant";
import colors from "../../../theme/colors";
import { external } from "../../../styles/external.css";

const style = StyleSheet.create({
  container: {
    width: "45%",
    height: windowHeight(190),
    backgroundColor: colors.layoutBg,
    borderRadius: windowHeight(8),
  },
  whiteContainer: {
    width: windowWidth(180),
    height: windowHeight(105),
    backgroundColor: colors.screenBg,
    margin: windowHeight(7),
    borderRadius: windowHeight(6),
    ...external.js_center,
  },
});

export { style };
