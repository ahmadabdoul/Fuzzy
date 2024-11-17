import { StyleSheet } from "react-native";
import { windowHeight } from "../../../../theme/appConstant";
import colors from "../../../../theme/colors";
import { external } from "../../../../styles/external.css";
import { commonStyles } from "../../../../styles/commonStyle";
const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  row: {
    ...external.fd_row,
    ...external.ai_center,
  },
  title: {
    ...commonStyles.fontsizeFiveHund,
  },
  viewContainer: {
    ...external.fd_row,
    ...external.js_space,
    ...external.ai_center,
    ...external.mh_20,
    marginTop: windowHeight(12),
  },
  linearStyle: {
    backgroundColor: colors.screenBg,
    ...external.mt_10,
  },
});
export { styles };
