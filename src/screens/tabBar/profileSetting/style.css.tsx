import { StyleSheet } from "react-native";
import {
  fontSizes,
  windowHeight,
  windowWidth,
} from "../../../theme/appConstant";
import colors from "../../../theme/colors";
import { external } from "../../../styles/external.css";
const style = StyleSheet.create({
  container: {
    backgroundColor: colors.layoutBg,
    height: windowHeight(93),
    paddingHorizontal: windowWidth(15),
  },
  viewContainer: {
    ...external.fx_1,
    backgroundColor: colors.screenBg,
  },
  parentView: {
    height: windowHeight(93),
  },
  userLogo: {
    height: windowHeight(80),
    width: windowWidth(100),
    border: windowHeight(4),
    position: "absolute",
    bottom: windowHeight(-35),
  },
  userLogoView: {
    width: windowWidth(100),
  },
  marlinText: {
    color: colors.primary,
    marginHorizontal: windowHeight(13),
    fontSize: fontSizes.FONT19,
    fontWeight: "500",
    letterSpacing: 0.2,
    flexGrow: 1,
  },
  editText: {
    backgroundColor: colors.screenBg,
    width: windowWidth(40),
    height: windowHeight(24),
    ...external.m_5,
    borderRadius: windowHeight(5),
    ...external.ai_center,
    ...external.js_center,
  },
  viewText: {
    ...external.fd_row,
    ...external.ai_center,
    ...external.js_space,
    marginTop: windowHeight(25),
  },
  headertext: {
    fontSize: fontSizes.FONT22,
    color: colors.primary,
    ...external.ti_center,
    // fontFamily: commonfonts.large,
    ...external.pt_20,
    fontFamily: "Poppins-Bold",
  },
});

export { style };
