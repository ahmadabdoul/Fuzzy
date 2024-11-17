import { StyleSheet } from "react-native";
import {
  fontSizes,
  windowHeight,
  windowWidth,
} from "../../../theme/appConstant";
import colors from "../../../theme/colors";
import { external } from "../../../styles/external.css";

const style = StyleSheet.create({
  whishlitstViewContainer: {
    backgroundColor: colors.layoutBg,
    width: "100%",

    borderRadius: windowHeight(9),
    padding: windowHeight(10),
    marginVertical: windowHeight(6),
  },
  imageView: {
    backgroundColor: colors.screenBg,
    width: "28%",
    borderRadius: windowHeight(8),
    ...external.js_center,
    ...external.fd_row,
    ...external.ai_center,
  },
  img: {
    height: windowHeight(60),
    width: windowWidth(64),
    ...external.rm_contain,
  },
  layoutMain: {
    ...external.fd_row,
  },
  title: {
    color: colors.primary,
    fontSize: fontSizes.FONT18,
    fontFamily: "Poppins-SemiBold",
  },
  subtitle: {
    color: colors.subTitleText,
    fontSize: fontSizes.FONT18,
    fontFamily: "Poppins-Regular",
  },
  underLinePrice: {
    marginHorizontal: windowHeight(4),
    fontSize: fontSizes.FONT17,
    textDecorationLine: "line-through",
    color: colors.underLinePrice,
    fontFamily: "Poppins-Regular",
  },
  underView: {
    ...external.fd_row,
    width: "100%",
    ...external.js_space,
  },
  bag: {
    ...external.as_end,
    width: windowHeight(24),
    height: windowHeight(24),
    backgroundColor: colors.screenBg,
    ...external.ai_center,
    ...external.js_center,
    borderRadius: windowHeight(5),
    elevation: 1,
    borderWidth: 1,
  },
  price: {
    color: colors.primary,
    fontSize: fontSizes.FONT22,
    // fontFamily: commonfonts.large,
  },
  crossContainer: {
    ...external.js_end,
    ...external.ai_center,
  },

  crossIcon: {
    ...external.fd_row,
    ...external.js_end,
  },
  underContainer: {
    ...external.fd_row,
    width: "100%",
    ...external.ai_center,
    ...external.js_space,
    ...external.mt_10,
  },
  ViewContainer: {
    ...external.js_center,
    width: "68%",
    marginHorizontal: windowWidth(20),
  },
});

export { style };
