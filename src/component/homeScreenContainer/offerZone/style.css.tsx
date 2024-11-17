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
  container: {
    backgroundColor: colors.layoutBg,
  },
  item: {
    width: windowWidth(340),
    ...external.mh_5,
    ...external.mv_8,
    padding: windowHeight(7),
    borderRadius: windowHeight(8),
    flexDirection: "row",
  },
  title: {
    ...commonStyles.fontsizeFiveHund,
    marginTop: windowHeight(1),
  },
  subttile: {
    ...commonStyles.textsizeFourHund,
  },
  underPrice: {
    ...commonStyles.textsizeFourHund,
    textDecorationLine: "line-through",
    marginTop: windowHeight(-4),
  },
  imgBackground: {
    width: windowWidth(110),
    backgroundColor: colors.layoutBg,
    ...external.ai_center,
    ...external.js_center,
    borderRadius: windowHeight(8),
  },
  imgStyle: {
    height: windowHeight(45),
    width: windowWidth(56),
  },
  viewWidth: {
    width: windowWidth(190),
    marginTop: windowHeight(4),
  },
  bookMark: {
    position: "absolute",
    width: windowWidth(33),
    ...external.rm_contain,
    top: windowHeight(-11),
  },
  twenty: {
    color: colors.screenBg,
    fontSize: fontSizes.FONT11,
    marginHorizontal: windowHeight(2),
    marginTop: windowHeight(3),
    ...external.ti_center,
    fontFamily: "Poppins-SemiBold",
  },
  off: {
    color: colors.screenBg,
    fontSize: fontSizes.FONT10,
    marginHorizontal: windowHeight(2),
    ...external.ti_center,
    fontFamily: "Poppins-Regular",
    top: windowHeight(-4),
  },
  price: {
    color: colors.primary,
    fontSize: fontSizes.FONT20,
    // fontFamily: commonfonts.large,
    marginTop: windowHeight(6),
    fontFamily: "Poppins-SemiBold",
  },
  yellowStar: {
    marginHorizontal: windowHeight(0.6),
    marginTop: windowHeight(4),
  },
});

export { styles };
