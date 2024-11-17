import { StyleSheet } from "react-native";
import {
  fontSizes,
  windowHeight,
  windowWidth,
} from "../../../../theme/appConstant";
import colors from "../../../../theme/colors";
import { external } from "../../../../styles/external.css";

const style = StyleSheet.create({
  ProfileInnerText: {
    width: windowWidth(59),
    height: windowHeight(39),
    backgroundColor: colors.layoutBg,
    borderRadius: 8,
    ...external.ai_center,
    ...external.js_center,
  },
  icon: {
    color: colors.primary,
    fontFamily: "Poppins-Regular",
    fontSize: fontSizes.FONT22,
  },
});

export { style };
