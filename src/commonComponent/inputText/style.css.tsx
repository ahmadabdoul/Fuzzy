import { StyleSheet } from "react-native";
import colors from "../../theme/colors";
import { fontSizes, windowHeight } from "../../theme/appConstant";
import { external } from "../../styles/external.css";
import { commonStyles } from "../../styles/commonStyle";

const style = StyleSheet.create({
  container: {
    ...commonStyles.textsizeFiveHund,
    color: colors.screenBg,
    marginTop: windowHeight(16),
  },
  title: {
    color: colors.screenBg,
    fontFamily: "Poppins-SemiBold",
    fontSize: fontSizes.FONT19,
  },
  textInputConainer: {
    backgroundColor: colors.textinputBG,
    height: windowHeight(44),
    borderLeftColor: colors.yellowColor,
    borderLeftWidth: windowHeight(2),
    borderTopLeftRadius: windowHeight(4),
    borderBottomLeftRadius: windowHeight(4),
    ...external.fd_row,
    ...external.ai_center,
    marginVertical: windowHeight(2),
  },
  textInputColor: {
    color: colors.subtitle,
    fontFamily: "Poppins-Regular",
    width: "85%",
    fontSize: fontSizes.FONT17,
    marginTop: windowHeight(3),
  },
});

export { style };
