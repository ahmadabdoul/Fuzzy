import { StyleSheet } from "react-native";
import colors from "../../theme/colors";
import { fontSizes, windowHeight, windowWidth } from "../../theme/appConstant";
import { external } from "../../styles/external.css";
import { commonStyles } from "../../styles/commonStyle";

const style = StyleSheet.create({
  viewContainer: {
    backgroundColor: colors.layoutBg,
    width: "100%",
    borderRadius: windowHeight(5),
    padding: windowHeight(10),
    marginVertical: windowHeight(10),
  },
  imageContainer: {
    backgroundColor: colors.screenBg,
    width: "22%",
    height: windowHeight(58),
    borderRadius: windowHeight(8),
    justifyContent: "center",
    ...external.fd_row,
    ...external.ai_center,
  },
  imageView: {
    height: windowHeight(36),
    width: windowWidth(66),
    ...external.rm_contain,
    ...external.fd_row,
  },
  title: {
    ...commonStyles.fontsizeFiveHund,
  },
  ongoingView: {
    backgroundColor: colors.dispatched,
    borderRadius: windowHeight(4),
    paddingHorizontal: windowHeight(6),
    ...external.ai_center,
    ...external.js_center,
  },
  qty: {
    ...commonStyles.textsizeFourHund,
    marginBottom: windowHeight(8),
  },
  viewDetails: {
    color: colors.lightText,
    fontSize: fontSizes.FONT17,
    fontFamily: "Poppins-SemiBold",
  },
  order: {
    ...commonStyles.PrimarysizeFourHund,
  },
  date: {
    ...commonStyles.textsizeFourHund,
  },
  dispatched: {
    ...commonStyles.PrimarysizeFourHund,
  },
  viewList: {
    ...external.mh_20,
    ...external.js_space,
    width: "80%",
  },
  lastOngoing: {
    backgroundColor: colors.ongoingBg,
  },
  ongoingText: {
    ...commonStyles.textsizeFourHund,
    color: colors.oliveGreen,
  },
  lastongoingText: {
    ...commonStyles.textsizeFourHund,
    color: colors.red,
  },
  ViewTitile: {
    ...external.fd_row,
    ...external.js_space,
    width: "92%",
  },
});

export { style };
