import { StyleSheet } from "react-native";
import { fontSizes, windowHeight, windowWidth } from "../../theme/appConstant";
import colors from "../../theme/colors";
import { external } from "../../styles/external.css";

const style = StyleSheet.create({
  cardHeight: {
    height: windowHeight(90),
    backgroundColor: colors.layoutBg,
    width: windowWidth(380),
    marginVertical: windowHeight(8),
    borderTopLeftRadius: windowHeight(8),
    borderBottomLeftRadius: windowHeight(8),
  },
  mainContainer: {
    ...external.fd_row,
    ...external.js_space,
    padding: windowHeight(10),
  },
  imgStyle: {
    width: windowWidth(120),
    height: windowHeight(65),
    left: windowHeight(50),
    ...external.rm_contain,
  },
  viewContainerBottom: {
    marginBottom: windowHeight(36),
    marginTop: windowHeight(10),
  },
  totalavailable: {
    color: colors.lightText,
    fontSize: fontSizes.FONT18,
    fontFamily: "Poppins-Regular",
  },
});

export { style };
