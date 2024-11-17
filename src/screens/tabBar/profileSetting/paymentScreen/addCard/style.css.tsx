import { StyleSheet } from "react-native";
import colors from "../../../../../theme/colors";
import { windowHeight } from "../../../../../theme/appConstant";
import { external } from "../../../../../styles/external.css";
import { commonStyles } from "../../../../../styles/commonStyle";

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.layoutBg,
    height: windowHeight(45),
    borderRadius: windowHeight(6),
  },
  textInput: {
    ...commonStyles.textsizeFourHund,
    ...external.ai_center,
    ...external.js_center,
    ...external.mh_8,
    marginVertical: windowHeight(4),
  },

  label: {
    ...commonStyles.fontsizeFiveHund,
  },
  inputWrap: {
    ...external.fx_1,
    justifyContent: "space-between",
    flexDirection: "column",
    ...external.mh_5,
  },
  inputDate: {
    ...external.fx_1,
    backgroundColor: colors.layoutBg,
    borderRadius: windowHeight(6),
    ...commonStyles.textsizeFourHund,
    paddingHorizontal: windowHeight(8),
  },
  inputCvv: {
    ...external.fx_1,
    backgroundColor: colors.layoutBg,
    borderRadius: windowHeight(6),
    ...commonStyles.textsizeFourHund,
    paddingHorizontal: windowHeight(8),
  },
  inputWrapView: {
    flexDirection: "row",
    alignItems: "flex-start",
    height: windowHeight(60),
    marginTop: windowHeight(6),
  },
  addCardButton: {
    ...external.js_end,
    marginTop: windowHeight(35),
  },
});

export { style };
