import { StyleSheet } from "react-native";
import colors from "../../../theme/colors";
import { fontSizes, windowHeight } from "../../../theme/appConstant";
// import commonfonts from "../../../utils/helper/commonfonts";
import { external } from "../../../styles/external.css";

const style = StyleSheet.create({
  YouhaveMissedText: {
    color: colors.subtitle,
    fontFamily: "Poppins-Regular",
    fontSize: fontSizes.FONT18,
    marginTop: windowHeight(5),
  },
  primaryContainer: {
    ...external.mh_20,
    ...external.mb_20,
  },
  inputView: {
    marginTop: windowHeight(30),
  },
});

export { style };
