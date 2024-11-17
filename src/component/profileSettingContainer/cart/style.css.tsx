import { StyleSheet } from "react-native";
import {
  fontSizes,
  windowHeight,
  windowWidth,
} from "../../../theme/appConstant";
import colors from "../../../theme/colors";
import { external } from "../../../styles/external.css";
import { commonStyles } from "../../../styles/commonStyle";

const style = StyleSheet.create({
  whishlitstViewContainer: {
    backgroundColor: colors.layoutBg,
    width: "100%",

    ...external.mv_8,
    borderRadius: windowHeight(5),
    padding: windowHeight(10),
  },
  imageView: {
    backgroundColor: colors.screenBg,
    width: "25%",
    borderRadius: windowHeight(8),
    ...external.js_center,
    ...external.fd_row,
    ...external.ai_center,
  },
  img: {
    width: windowWidth(66),
    height: windowHeight(55),
    ...external.rm_contain,
  },
  layoutMain: {
    ...external.fd_row,
  },
  title: {
    ...commonStyles.fontsizeFiveHund,
    fontSize: fontSizes.FONT18,
  },
  underLinePrice: {
    textDecorationLine: "line-through",
    color: colors.lightText,
    fontSize: fontSizes.FONT17,
    fontFamily: "Poppins-Regular",
    marginTop: windowHeight(-6),
  },
  underView: {
    ...external.fd_row,
    width: "100%",
    ...external.js_space,
  },
  bag: {
    width: windowHeight(78),
    height: windowHeight(26),
    backgroundColor: colors.screenBg,
    borderRadius: windowHeight(14),
    ...external.fd_row,
    alignItems: "center",
    ...external.js_space,
    elevation: 0.5,
    marginHorizontal: windowWidth(4),
  },
  price: {
    color: colors.primary,
    fontSize: fontSizes.FONT22,
    fontFamily: "Poppins-SemiBold",
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
  viewContainer: {
    ...external.js_center,
    width: "71%",
    marginHorizontal: windowWidth(20),
  },
  textStyle: {
    color: colors.lightText,
    fontFamily: "Poppins-Regular",
    fontSize: fontSizes.FONT18,
  },
  minus: {
    width: windowHeight(20),
    height: windowHeight(20),
    backgroundColor: colors.layoutBg,
    borderRadius: windowHeight(10),
    ...external.ai_center,
    ...external.js_center,
    marginLeft: windowHeight(4),
  },
  plus: {
    width: windowHeight(20),
    height: windowHeight(20),
    backgroundColor: colors.primary,
    borderRadius: windowHeight(10),
    ...external.ai_center,
    ...external.js_center,
    marginRight: windowHeight(4),
  },
  count: {
    ...commonStyles.fontsizeFiveHund,
    ...external.mh_10,
  },
  blueRound: {
    width: windowHeight(13),
    height: windowHeight(13),
    borderRadius: windowHeight(20),
    backgroundColor: colors.primary,
    marginRight: windowHeight(3),
  },
  blueText: {
    color: colors.lightText,
    fontSize: fontSizes.FONT18,
  },
  verticleLine: {
    height: "70%",
    width: 1.2,
    backgroundColor: "rgba(0, 0, 0, 0.07)",
    marginHorizontal: windowHeight(8),
  },
});

export { style };
