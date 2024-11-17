import { StyleSheet } from "react-native";
import { fontSizes } from "../theme/appConstant";
import colors from "../theme/colors";

const commonStyles = StyleSheet.create({
  fontsizeFiveHund: {
    color: colors.primary,
    fontSize: fontSizes.FONT18,
    fontWeight: "500",
    fontFamily: "Poppins-Medium",
  },
  textsizeFourHund: {
    color: colors.lightText,
    fontSize: fontSizes.FONT16,
    fontFamily: "Poppins-Regular",
  },
  textsizeFiveHund: {
    color: colors.lightText,
    fontSize: fontSizes.FONT17,
    fontWeight: "500",
  },
  textsizeFiveHundMed: {
    color: colors.lightText,
    fontSize: fontSizes.FONT16,
    fontWeight: "400",
    fontFamily: "Poppins-Medium",
  },
  PrimarysizeFourHund: {
    color: colors.primary,
    fontSize: fontSizes.FONT16,
    fontWeight: "400",
    fontFamily: "Poppins-Regular",
  },
  PrimarysizeFourHundMed: {
    color: colors.primary,
    fontSize: fontSizes.FONT16,
    fontWeight: "400",
    fontFamily: "Poppins-Regular",
  },
  sixHundSize: {
    color: colors.primary,
    fontSize: fontSizes.FONT20,
    fontWeight: "600",
    fontFamily: "Poppins-SemiBold",
  },
  sixHundSizeLarge: {
    color: colors.primary,
    fontSize: fontSizes.FONT20,
    fontWeight: "600",
    fontFamily: "Poppins-SemiBold",
  },
  h1primary: {
    color: colors.lightText,
    fontSize: fontSizes.FONT18,
    fontWeight: "500",
    fontFamily: "Poppins-Medium",
  },
  whitefontSixHund: {
    color: colors.screenBg,
    fontSize: fontSizes.FONT20,
    fontWeight: "600",
    fontFamily: "Poppins-Medium",
  },
  whitefontThreeHund: {
    color: colors.screenBg,
    fontSize: fontSizes.FONT17,

    fontWeight: "300",
  },
  fontsizeLargeHund: {
    color: colors.primary,
    fontSize: fontSizes.FONT18,
    fontFamily: "Poppins-SemiBold",
  },
  primaryfontSixHund: {
    color: colors.primary,
    fontSize: fontSizes.FONT20,
    fontFamily: "Poppins-SemiBold",
  },
  whitefontSixHundLarge: {
    color: colors.screenBg,
    fontSize: fontSizes.FONT28,
    fontFamily: "Poppins-Medium",
  },
  whitefontThreeHundsize: {
    color: colors.screenBg,
    fontSize: fontSizes.FONT17,

    fontWeight: "500",
    fontFamily: "Poppins-Medium",
  },
  flexBgContainer: {
    backgroundColor: colors.screenBg,
    flex: 1,
  },
});
export { commonStyles };
