import { StyleSheet } from "react-native";
import colors from "../../theme/colors";
import { fontSizes, windowHeight, windowWidth } from "../../theme/appConstant";
import { external } from "../../styles/external.css";

const styles = StyleSheet.create({
  container: {
    ...external.fx_1,
    backgroundColor: colors.screenBg,
    paddingHorizontal: windowHeight(20),
  },
  viewContainer: {
    width: "100%",
    height: "100%",
    ...external.ai_center,
    ...external.js_center,
  },
  image: {
    width: windowWidth(250),
    height: windowHeight(160),
  },
  viewBottom: {
    marginTop: windowHeight(50),
  },
  textStyle: {
    color: colors.primary,
    fontWeight: "500",
    fontFamily: "Poppins-SemiBold",
    fontSize: fontSizes.FONT23,
  },
  subtitle: {
    width: windowWidth(370),
    paddingVertical: windowHeight(4),
  },
  inputView: {
    marginTop: windowHeight(25),
  },
});

export default styles;
