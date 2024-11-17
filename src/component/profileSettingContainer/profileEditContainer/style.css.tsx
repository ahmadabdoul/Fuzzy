import { StyleSheet } from "react-native";
import { windowHeight } from "../../../theme/appConstant";
import colors from "../../../theme/colors";
import { external } from "../../../styles/external.css";
import { commonStyles } from "../../../styles/commonStyle";

const styles = StyleSheet.create({
  textInputView: {
    backgroundColor: colors.layoutBg,
    marginVertical: windowHeight(8),
    borderRadius: windowHeight(6),
    ...external.fd_row,
    ...external.ai_center,
  },
  iconView: {
    ...external.mh_5,
  },
  textInput: {
    ...commonStyles.textsizeFourHund,
    width: "100%",
  },
  headingContainer: {
    ...commonStyles.fontsizeFiveHund,
  },
});

export { styles };
