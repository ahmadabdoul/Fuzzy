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
    width: "100%",
    borderRadius: windowHeight(7),
    padding: windowHeight(7),
    ...external.mv_5,
    ...external.fd_row,
  },
  viewContainer: {
    width: windowWidth(89),
    height: windowHeight(56),
    borderRadius: windowHeight(7),
    backgroundColor: colors.screenBg,
    ...external.fd_row,
    ...external.ai_center,
    ...external.js_center,
  },
  img: {
    height: windowHeight(50),
    width: windowWidth(70),
    ...external.rm_contain,
  },
  viewTextContainer: {
    width: "75%",
    ...external.mh_10,
  },
  viewChildContainer: {
    width: "100%",
  },
  discount: {
    color: colors.red,
    fontFamily: "Poppins-SemiBold",
    fontSize: fontSizes.FONT16,
    ...external.mh_8,
  },
  PrimaryBeg: {
    backgroundColor: colors.primary,
    width: windowWidth(34),
    height: windowHeight(21),
    borderRadius: windowHeight(11),
    ...external.ai_center,
    ...external.js_center,
  },
  rating: {
    color: colors.primary,
  },
  star: {
    marginHorizontal: windowHeight(2),
  },
});

export { style };
