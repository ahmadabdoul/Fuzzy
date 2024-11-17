import { StyleSheet } from "react-native";
import {
  fontSizes,
  windowHeight,
  windowWidth,
} from "../../../theme/appConstant";
import colors from "../../../theme/colors";
import { external } from "../../../styles/external.css";
import { commonStyles } from "../../../styles/commonStyle";

const styles = StyleSheet.create({
  bookMark: {
    height: windowHeight(38),
    width: windowWidth(25),
    transform: [{ rotate: "90deg" }],
  },
  price: {
    fontSize: fontSizes.FONT30,
    // fontFamily: commonfonts.large,
    color: colors.primary,
  },
  underPrice: {
    textDecorationLine: "line-through",
    color: colors.lightText,
    marginHorizontal: windowHeight(4),
  },
  heightView: {
    backgroundColor: colors.screenBg,
    height: windowHeight(80),
    width: windowWidth(122),
    ...external.js_center,
    ...external.ai_center,
    borderRadius: windowHeight(7),
    borderWidth: 1,
    borderColor: colors.layoutBg,
  },
  productCircle: {
    height: windowHeight(280),
    width: windowWidth(380),
  },
  viewSlider: {
    ...external.ai_center,
  },
  sideBookMark: {
    height: windowHeight(20),
    width: windowWidth(90),
    ...external.ai_center,
    ...external.js_center,
  },
  offText: {
    ...commonStyles.PrimarysizeFourHund,
    color: colors.red,
  },
  colorView: {
    height: windowHeight(30),
    position: "absolute",
    width: "60%",
    bottom: windowHeight(-20),
    borderRadius: windowHeight(6),
    paddingHorizontal: windowHeight(20),
    ...external.js_space,
    ...external.fd_row,
    ...external.ai_center,
  },
  chairColors: {
    width: windowHeight(16),
    height: windowHeight(16),
    borderRadius: windowHeight(8),
  },
});

export { styles };
