import { StyleSheet } from "react-native";
import { fontSizes, windowHeight } from "../../theme/appConstant";
import colors from "../../theme/colors";
import { external } from "../../styles/external.css";
import { commonStyles } from "../../styles/commonStyle";

const styles = StyleSheet.create({
  textInputView: {
    backgroundColor: colors.layoutBg,
    marginTop: windowHeight(2),
    borderRadius: windowHeight(6),
    ...external.fd_row,
    ...external.ai_center,
  },
  textInputstyle: {
    backgroundColor: colors.screenBg,
    marginTop: windowHeight(2),
    borderRadius: windowHeight(6),
    ...external.fd_row,
    ...external.ai_center,
    elevation: 1,
    borderTopWidth: 0.4,
    borderTopColor: colors.layoutBg,
    marginHorizontal: windowHeight(1),
  },
  iconView: {
    ...external.mh_5,
  },
  textInput: {
    ...commonStyles.textsizeFourHund,
    width: "95%",
    ...external.mh_5,
    fontSize: fontSizes.FONT17,
    paddingVertical: 10,
  },
  headingContainer: {
    ...commonStyles.fontsizeFiveHund,
    fontSize: fontSizes.FONT20,
  },
});

export { styles };
