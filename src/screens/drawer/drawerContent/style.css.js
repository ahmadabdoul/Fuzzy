import { StyleSheet } from "react-native";

import { windowHeight, windowWidth } from "../../../theme/appConstant";
import colors from "../../../theme/colors";
import { external } from "../../../styles/external.css";

const style = StyleSheet.create({
  container: {
    ...external.mt_15,
    ...external.fd_row,
    ...external.ai_center,
  },
  containerView: {
    borderWidth: windowHeight(0.2),
    borderColor: colors.lightText,
    width: windowWidth(55),
    height: windowHeight(35),
    borderRadius: windowHeight(20),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.screenBg,
    overflow: "hidden",
  },
  baseImage: {
    width: windowWidth(66),
    height: windowHeight(35),
    borderRadius: windowHeight(16),
  },
});

export { style };
