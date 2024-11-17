import { StyleSheet } from "react-native";

import { fontSizes, windowHeight, windowWidth } from "../../theme/appConstant";
import colors from "../../theme/colors";
import { external } from "../../styles/external.css";
import { commonStyles } from "../../styles/commonStyle";

const styles = StyleSheet.create({
  couponBackground: {
    width: "100%",
    height: windowHeight(113),
    marginTop: windowHeight(6),
    ...external.js_center,
  },
  couponOffer: {
    width: windowWidth(87),
    left: windowHeight(10),
    color: colors.yellowColor,
    fontFamily: "Poppins-SemiBold",
    fontSize: fontSizes.FONT30,
  },
  couponOfferOff: {
    color: colors.screenBg,
    fontFamily: "Poppins-Regular",
    right: windowHeight(4),
  },
  couponDetailsContainer: {
    marginLeft: "26%",
    ...external.mv_8,
  },
  couponPayApp: {
    color: colors.primary,
    fontSize: fontSizes.FONT20,
    fontWeight: "600",
    fontFamily: "Poppins-SemiBold",
  },
  couponPaying: {
    ...commonStyles.textsizeFourHund,
    width: windowWidth(220),
  },
  couponSubtitle: {
    ...commonStyles.textsizeFourHund,
  },
  unlockOfferContainer: {
    ...external.fd_row,
    ...external.js_space,
    ...external.ai_center,
    ...external.mr_15,
  },
  unlockOfferText: {
    ...commonStyles.textsizeFourHund,
  },
  applyText: {
    ...commonStyles.PrimarysizeFourHundMed,
  },
  transformText: {
    position: "absolute",
    top: windowHeight(40),
    transform: [{ rotate: "270deg" }],
    ...external.fd_row,
    ...external.ai_center,
  },
});

export { styles };
