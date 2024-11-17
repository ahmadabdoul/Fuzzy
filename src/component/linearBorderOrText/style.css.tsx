import { StyleSheet } from "react-native";
import { fontSizes, windowHeight } from "../../theme/appConstant";
// import commonfonts from "../../utils/helper/commonfonts";
import colors from "../../theme/colors";
import { external } from "../../styles/external.css";

const styles = StyleSheet.create({
  linearView: {
    ...external.fd_row,
    ...external.js_center,
    ...external.ai_center,
    marginVertical: windowHeight(5),
  },
  linearBorderStyle: {
    width: 130,
    height: 0.4,
  },
  orText: {
    fontSize: fontSizes.FONT17,
    fontFamily: "Poppins-Regular",
    fontWeight: "600",
    ...external.m_10,
    color: colors.lightText,
  },
  orTextDark: {
    color: colors.screenBg,
  },
});
export { styles };
