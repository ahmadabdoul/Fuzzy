import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../../../theme/appConstant";
import colors from "../../../theme/colors";
import { external } from "../../../styles/external.css";

const style = StyleSheet.create({
  container: {
    padding: windowHeight(12),
    marginVertical: windowHeight(10),
    backgroundColor: colors.screenBg,
    elevation: 1,
    width: "99.5%",
  },
  editContainer: {
    backgroundColor: colors.screenBg,
    width: windowWidth(33),
    height: windowHeight(22),
    borderRadius: windowHeight(6),
    ...external.ai_center,
    ...external.js_center,
    elevation: 1,
  },
  containerBorder: {
    borderWidth: 0.5,
    borderColor: colors.primary,
    padding: windowHeight(12),
    marginVertical: windowHeight(10),
    backgroundColor: colors.screenBg,
    elevation: 1,
    width: "99.5%",
  },
});

export { style };
