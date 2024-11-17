import { StyleSheet } from "react-native";
import { external } from "../../styles/external.css";
import { fontSizes, windowHeight } from "../../theme/appConstant";
import colors from "../../theme/colors";

const styles = StyleSheet.create({
  signUp: {
    ...external.fd_row,
    ...external.ai_center,
    ...external.as_center,
    marginTop: windowHeight(2),
  },
  dontText: {
    color: colors.subtitle,
    fontFamily: "Poppins-Regular",
    fontSize: fontSizes.FONT16,
  },
  signText: {
    color: colors.screenBg,
    fontFamily: "Poppins-Regular",
    fontSize: fontSizes.FONT16,
  },
});
export { styles };
