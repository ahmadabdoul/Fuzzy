import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../../theme/appConstant";
import { fontSizes } from "../../theme/appConstant";
import colors from "../../theme/colors";
import { external } from "../../styles/external.css";

const style = StyleSheet.create({
  startedText: {
    fontFamily: "Poppins-Regular",
    color: colors.screenBg,
    fontSize: fontSizes.FONT22,
    fontWeight: "500",
    ...external.as_center,
  },
  startedTextYellow: {
    fontFamily: "Poppins-SemiBold",
    color: colors.primary,
    fontSize: fontSizes.FONT22,
    ...external.as_center,
    fontWeight: "500",
  },
  startbutton: {
    backgroundColor: colors.primary,
    borderWidth: windowHeight(0.5),
    borderColor: colors.primary,
    borderRadius: windowHeight(6),
    height: windowHeight(44),
    width: windowWidth(437),
    justifyContent: "center",
  },
  startYellowButton: {
    backgroundColor: colors.yellowColor,
    borderWidth: windowHeight(0.5),
    borderColor: colors.primary,
    borderRadius: windowHeight(8),
    padding: windowHeight(12),
  },
  darkYellowButton: {
    backgroundColor: colors.yellowColor,
    borderWidth: windowHeight(0.5),
    borderColor: colors.primary,
    borderRadius: windowHeight(8),
    padding: windowHeight(12),
  },
  darkButton: {
    backgroundColor: colors.yellowColor,
    borderWidth: windowHeight(0.5),
    borderColor: colors.primary,
    borderRadius: windowHeight(6),
    height: windowHeight(44),
    width: windowWidth(437),
    justifyContent: "center",
  },
  darkYellowText: {
    fontFamily: "Poppins-SemiBold",
    color: colors.primary,
    fontSize: fontSizes.FONT22,
    ...external.as_center,
    fontWeight: "500",
  },
  darkButtonText: {
    fontFamily: "Poppins-SemiBold",
    color: colors.primary,
    fontSize: fontSizes.FONT22,
    fontWeight: "500",
    ...external.as_center,
  },
});

export { style };
