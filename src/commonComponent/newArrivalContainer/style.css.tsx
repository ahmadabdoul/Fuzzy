import { StyleSheet } from "react-native";
import colors from "../../theme/colors";
import { fontSizes, windowHeight, windowWidth } from "../../theme/appConstant";
import { external } from "../../styles/external.css";

const style = StyleSheet.create({
  container: {
    width: windowWidth(210),
    borderRadius: windowHeight(8),
  },
  whiteContainer: {
    width: "90%",
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
    width: windowWidth(48),
    height: windowHeight(26),
    borderRadius: windowHeight(13),
    backgroundColor: colors.screenBg,
    ...external.ai_center,
    ...external.js_center,
    position: "absolute",
    bottom: windowHeight(-14),
    right: 0,
  },
  textViewContainer: {
    ...external.mh_10,
  },
  priceView: {
    ...external.ai_center,
    ...external.js_space,
  },
  underlineText: {
    textDecorationLine: "line-through",
    marginTop: windowHeight(-6),
    marginBottom: windowHeight(3),
  },
  ratingText: {
    marginHorizontal: windowHeight(2),
    color: colors.primary,
  },
  priceViewSpaceTwo: {
    ...external.fd_row,
    ...external.ai_center,
  },
  price: {
    color: colors.primary,
    fontSize: fontSizes.FONT22,
    // fontFamily: commonfonts.large,
    fontFamily: "Poppins-SemiBold",
  },
});

export { style };
