import { StyleSheet } from "react-native";
import colors from "../../theme/colors";
import { windowHeight } from "../../theme/appConstant";
import { external } from "../../styles/external.css";
import { commonStyles } from "../../styles/commonStyle";

const style = StyleSheet.create({
  searchContainer: {
    backgroundColor: colors.layoutBg,
    ...external.fd_row,
    ...external.ai_center,
    borderRadius: windowHeight(5),
    ...external.js_center,
  },
  input: {
    width: "80%",
    ...commonStyles.textsizeFiveHund,
    ...external.mt_3,
    height: windowHeight(40),
    ...external.ph_10,
  },
});

export { style };
