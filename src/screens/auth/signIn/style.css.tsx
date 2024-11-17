import { StyleSheet } from "react-native";
import { commonStyles } from "../../../styles/commonStyle";
import { external } from "../../../styles/external.css";
import { fontSizes, windowHeight } from "../../../theme/appConstant";
import colors from "../../../theme/colors";

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: windowHeight(210),
  },
  viewContainer: {
    ...external.fx_1,
    backgroundColor: colors.primary,
  },
  bottomText: {
    position: "absolute",
    bottom: windowHeight(-3),
    ...commonStyles.whitefontSixHundLarge,
    ...external.mh_20,
  },
  YouhaveMissedText: {
    color: colors.subtitle,
    fontFamily: "Poppins-Regular",
    fontSize: fontSizes.FONT18,
    marginTop: windowHeight(5),
  },
  primaryContainer: {
    ...external.mh_20,
    ...external.mb_20,
  },
  checkView: {
    ...external.fd_row,
    ...external.ai_center,
    ...external.mt_10,
  },
  rememberText: {
    ...external.fg_1,
    ...external.mh_5,
    color: colors.subtitle,
    fontFamily: "Poppins-Regular",
    marginTop: windowHeight(2),
    fontSize: fontSizes.FONT16,
  },
  forgetText: {
    color: colors.red,
    fontFamily: "Poppins-Regular",
    fontSize: fontSizes.FONT16,
  },
  inputView: {
    marginTop: windowHeight(50),
  },
  signUp: {
    ...external.fd_row,
    ...external.ai_center,
    ...external.as_center,
    marginTop: windowHeight(15),
  },
  dontText: {
    color: colors.subtitle,
    fontFamily: "Poppins-Regular",
    fontSize: fontSizes.FONT16,
  },
  signText: {
    color: colors.screenBg,
    fontFamily: "Poppins-Regular",
    fontSize: fontSizes.FONT16,
  },
  sociallogin: {
    ...external.fd_row,
    ...external.ai_center,
    ...external.js_space,
  },
  errorMessage: {
    color: colors.red,
    fontFamily: "Poppins-Bold",
  },
  password: {
    position: "absolute",
    bottom: windowHeight(14),
  },
});

export { style };
