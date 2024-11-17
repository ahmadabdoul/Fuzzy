import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../../../../theme/appConstant";
import colors from "../../../../theme/colors";
import { external } from "../../../../styles/external.css";
import { commonStyles } from "../../../../styles/commonStyle";

const style = StyleSheet.create({
  containerWallet: {
    backgroundColor: colors.screenBg,
    borderRadius: windowHeight(7),
    borderTopWidth: 1,
    borderTopColor: colors.layoutBg,
  },
  containerViewwallet: {
    paddingVertical: windowHeight(7),
    ...external.fd_row,
    ...external.ai_center,
    width: "96%",
    ...external.js_space,
    ...external.mt_5,
  },
  separator: {
    height: 1,
    overflow: "hidden",
    ...external.m_5,
    ...external.mh_10,
  },
  separatorLine: {
    height: 2,
    borderWidth: 1.6,
    borderColor: colors.solidLine,
    borderStyle: "dashed",
  },
  viewIcon: {
    marginHorizontal: windowHeight(15),
    width: windowWidth(50),
  },
  textDecoration: {
    textDecorationLine: "underline",
  },
  flegrow: {
    ...commonStyles.fontsizeFiveHund,
    ...external.ai_center,
  },
  img: {
    height: windowHeight(26),
    width: windowWidth(38),
    ...external.rm_contain,
  },
});

export { style };
