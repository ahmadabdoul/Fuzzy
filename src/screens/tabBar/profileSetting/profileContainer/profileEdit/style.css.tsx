import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../../../../../theme/appConstant";
import colors from "../../../../../theme/colors";
import { external } from "../../../../../styles/external.css";

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: colors.layoutBg,
    height: windowHeight(93),
    gap: windowHeight(7),
  },
  SafeContainer: {
    ...external.fx_1,
    backgroundColor: colors.screenBg,
  },
  headingView: {
    ...external.mh_20,
  },
  userLogo: {
    height: windowHeight(70),
    width: windowWidth(108),
    ...external.as_center,
    ...external.rm_contain,
    borderRadius: windowHeight(12),
  },
  leftsideStyle: {
    width: windowWidth(195),
    height: windowHeight(35),
    ...external.ai_center,
    ...external.js_center,
    backgroundColor: colors.layoutBg,
    borderRadius: windowHeight(8),
    ...external.mh_20,
  },
  rightsideStyle: {
    width: windowWidth(195),
    height: windowHeight(35),
    ...external.js_center,
    ...external.ai_center,
    ...external.js_center,
    backgroundColor: colors.primary,
    borderRadius: windowHeight(8),
    ...external.mh_20,
  },
  userView: {
    height: windowHeight(90),
    width: windowWidth(120),
    borderRadius: windowHeight(14),
    ...external.as_center,
    backgroundColor: colors.screenBg,
    borderWidth: windowHeight(4),
    borderColor: colors.screenBg,
  },
  editView: {
    position: "absolute",
    bottom: 0,
    ...external.as_end,
    right: windowHeight(-12),
  },
});

export { styles };
