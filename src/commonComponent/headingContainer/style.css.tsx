import { StyleSheet } from "react-native";
import { fontSizes, windowHeight } from "../../theme/appConstant";
import colors from "../../theme/colors";
import { external } from "../../styles/external.css";
const styles = StyleSheet.create({
  headingText: {
    fontSize: fontSizes.FONT22,
    color: colors.primary,
    ...external.ti_center,
    fontFamily: "Poppins-Bold",
  },
  backTouch: {
    ...external.fd_row,
    ...external.ai_center,
    paddingTop: windowHeight(25),
  },
});

export default styles;
