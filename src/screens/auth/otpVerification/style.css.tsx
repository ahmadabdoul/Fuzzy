import { StyleSheet } from "react-native";
import colors from "../../../theme/colors";
import {
  fontSizes,
  windowHeight,
  windowWidth,
} from "../../../theme/appConstant";
import { external } from "../../../styles/external.css";

const style = StyleSheet.create({
  YouhaveMissedText: {
    color: colors.subtitle,
    fontFamily: "Poppins-Regular",
    fontSize: fontSizes.FONT18,
    marginTop: windowHeight(20),
  },
  mobileNoText: {
    color: colors.screenBg,
    fontFamily: "Poppins-Regular",
    fontSize: fontSizes.FONT18,
    marginTop: windowHeight(3),
  },
  primaryContainer: {
    ...external.mh_20,
    ...external.mb_20,
  },
  inputView: {
    marginTop: windowHeight(20),
  },
  viewOtp: {
    marginTop: windowHeight(25),
  },
  otpTextInput: {
    backgroundColor: colors.textinputBG,
    borderColor: colors.textinputBG,
    borderWidth: 0.5,
    borderRadius: 6,
    width: windowWidth(76),
    height: windowHeight(38),
    borderBottomWidth: 0.5,
    color: colors.lightText,
    textAlign: "center",
    fontSize: fontSizes.FONT22,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 2,
    marginVertical: windowHeight(10),
    height: windowHeight(40),
    width: windowHeight(40),
    borderRadius: 11,
    borderColor: colors.textinputBG,
    alignItems: "center",
    justifyContent: "center",
    color: "red",
  },
  focusStyle: {
    borderColor: colors.textinputBG,
  },
  fontStyle: {
    color: "white",
  },
});

export { style };
