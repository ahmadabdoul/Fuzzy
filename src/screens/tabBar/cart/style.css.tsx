import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../../../theme/appConstant";
import colors from "../../../theme/colors";
import { external } from "../../../styles/external.css";

const style = StyleSheet.create({
  rightsideStyle: {
    width: windowWidth(195),
    height: windowHeight(40),
    ...external.js_center,
    ...external.ai_center,
    ...external.js_center,
    backgroundColor: colors.primary,
    borderRadius: windowHeight(10),
    elevation: 3,
    ...external.mh_10,
  },
  leftsideStyle: {
    ...external.mh_20,
    ...external.ph_10,
    height: windowHeight(35),
    ...external.ai_center,
    ...external.js_center,
    borderRadius: windowHeight(8),
  },
});

export { style };
