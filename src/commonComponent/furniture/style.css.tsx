import { StyleSheet } from "react-native";
import colors from "../../theme/colors";
import { windowHeight, windowWidth } from "../../theme/appConstant";
import { external } from "../../styles/external.css";

const style = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.layoutBg,
    borderRadius: windowHeight(8),
  },
  whiteContainer: {
    width: windowWidth(187),
    height: windowHeight(115),
    backgroundColor: colors.screenBg,
    margin: windowHeight(8),
    borderRadius: windowHeight(6),
    ...external.js_center,
  },
  card: {
    backgroundColor: colors.screenBg,
    alignSelf: "flex-end",
    marginHorizontal: windowHeight(5),
    width: windowHeight(19),
    height: windowHeight(19),
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: windowWidth(116),
    height: windowHeight(85),
    ...external.as_center,
    ...external.rm_contain,
  },
  cartWhiteConainer: {
    width: windowWidth(50),
    height: windowHeight(32),
    borderRadius: windowHeight(15),
    backgroundColor: colors.screenBg,
    ...external.ai_center,
    ...external.js_center,
    position: "absolute",
    bottom: windowHeight(-12),
    right: 0,
  },
  textViewContainer: {
    ...external.mh_10,
    ...external.mv_8,
  },
});

export { style };
