import { StyleSheet } from "react-native";
import colors from "../../../theme/colors";
import { windowHeight, windowWidth } from "../../../theme/appConstant";
import { external } from "../../../styles/external.css";

const style = StyleSheet.create({
  orderInfoView: {
    backgroundColor: colors.layoutBg,

    borderRadius: windowHeight(8),
  },
  viewContainer: {
    ...external.js_space,
    ...external.fd_row,
    ...external.ai_center,
    ...external.mh_20,
    ...external.mt_5,
  },
  solidLine: {
    marginVertical: windowHeight(5),
  },
  titleAmountView: {
    ...external.js_space,
    ...external.fd_row,
    ...external.ai_center,
    ...external.mh_20,
    ...external.mv_5,
  },
  backgoundContainer: {
    backgroundColor: colors.screenBg,
    height: windowHeight(40),
    width: "16%",
    borderRadius: windowHeight(6),
    ...external.fd_row,
    ...external.ai_center,
    ...external.js_center,
    ...external.mt_10,
  },
  imgBuddyChair: {
    height: windowHeight(30),
    width: windowWidth(40),
  },
});

export { style };
