import { StyleSheet } from "react-native";
import colors from "../../../theme/colors";
import { fontSizes, windowHeight } from "../../../theme/appConstant";
import { external } from "../../../styles/external.css";

const styles = StyleSheet.create({
  container: {
    paddingVertical: windowHeight(11),
    height: windowHeight(60),
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...external.js_end,
    elevation: 18,
    backgroundColor: colors.screenBg,
  },
  Darkcontainer: {
    paddingVertical: windowHeight(11),
    height: windowHeight(60),
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...external.js_end,
    elevation: 18,
    backgroundColor: colors.screenBg,
    overflow: "hidden",
    borderColor: colors.textinputBG,
    borderWidth: 1,
  },
  viewContainerHeight: {
    ...external.fd_row,
    ...external.js_space,
    ...external.ai_center,
    ...external.mt_5,
  },
  leftSideTextColor: {
    color: colors.lightText,
    fontSize: fontSizes.FONT18,
    fontWeight: "500",
    fontFamily: "Poppins-Regular",
  },
  rightSideTextColor: {
    fontFamily: "Poppins-Regular",
    color: colors.screenBg,
    fontSize: fontSizes.FONT20,
    fontWeight: "500",
    ...external.as_center,
  },
  price: {
    // fontFamily: commonfonts.large,
    color: colors.primary,
    fontSize: fontSizes.FONT23,
    fontWeight: "500",
    ...external.as_center,
  },
});

export { styles };
