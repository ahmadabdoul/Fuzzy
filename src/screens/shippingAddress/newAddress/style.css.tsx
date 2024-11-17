import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../../../theme/appConstant";
import colors from "../../../theme/colors";
import { external } from "../../../styles/external.css";

const style = StyleSheet.create({
  leftsideStyle: {
    width: windowWidth(200),
    height: windowHeight(42),
    ...external.ai_center,
    ...external.js_center,
    backgroundColor: colors.layoutBg,
    borderRadius: windowHeight(8),
    ...external.mh_20,
  },
  rightsideStyle: {
    width: windowWidth(200),
    height: windowHeight(42),
    ...external.js_center,
    ...external.ai_center,
    ...external.js_center,
    backgroundColor: colors.primary,
    borderRadius: windowHeight(8),
    ...external.mh_20,
  },
});

export { style };
