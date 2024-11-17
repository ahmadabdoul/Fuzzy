import { StyleSheet } from "react-native";
import { fontSizes, windowHeight } from "../../../theme/appConstant";
import colors from "../../../theme/colors";
import { commonStyles } from "../../../styles/commonStyle";
import { external } from "../../../styles/external.css";

const style = StyleSheet.create({
  label: {
    ...commonStyles.fontsizeFiveHund,
    fontSize: fontSizes.FONT20,
  },
  inputWrap: {
    ...external.fx_1,
    ...external.js_space,
  },
  inputWrapSpace: {
    ...external.fx_1,
    ...external.js_space,
    marginLeft: windowHeight(14),
  },
  inputDate: {
    width: "100%",
    borderRadius: windowHeight(6),
    ...commonStyles.textsizeFourHund,
    ...external.mh_5,
    fontSize: fontSizes.FONT17,
  },
  inputCvv: {
    ...commonStyles.textsizeFourHund,
    ...external.mh_5,
    fontSize: fontSizes.FONT17,
    width: "100%",
  },
  inputWrapView: {
    ...external.fd_row,
    alignItems: "flex-start",
    height: windowHeight(60),
    marginTop: windowHeight(7),
  },
  addCardButton: {
    ...external.js_end,
    marginTop: windowHeight(35),
  },
  containerView: {
    backgroundColor: colors.screenBg,
    marginTop: windowHeight(2),
    borderRadius: windowHeight(6),
    ...external.fd_row,
    ...external.ai_center,
    elevation: 0.8,
    borderTopWidth: 0.5,
    borderTopColor: colors.layoutBg,
  },
});

export { style };
