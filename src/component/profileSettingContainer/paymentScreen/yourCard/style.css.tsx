import { StyleSheet } from "react-native";
import colors from "../../../../theme/colors";
import { windowHeight, windowWidth } from "../../../../theme/appConstant";
import { external } from "../../../../styles/external.css";

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.screenBg,
    height: windowHeight(56),
    ...external.mt_10,
    ...external.fd_row,
    ...external.ai_center,
    ...external.mb_5,
    elevation: 1,
    borderRadius: windowHeight(8),
    borderTopWidth: 0.6,
    borderTopColor: colors.layoutBg,
  },
  containerView: {
    ...external.fd_row,
    ...external.js_space,
    width: "97%",
    ...external.ai_center,
  },
  img: {
    width: windowWidth(50),
    height: windowHeight(20),
    ...external.rm_contain,
    marginTop: windowHeight(7),
    ...external.mh_8,
  },
});

export { style };
