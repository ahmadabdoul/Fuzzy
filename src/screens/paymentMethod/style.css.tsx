import { StyleSheet } from "react-native";
import colors from "../../theme/colors";
import { fontSizes, windowHeight, windowWidth } from "../../theme/appConstant";
import { external } from "../../styles/external.css";

const styles = StyleSheet.create({
  leftsideStyle: {
    ...external.mh_20,
    ...external.ph_10,
    height: windowHeight(35),
    ...external.ai_center,
    ...external.js_center,
    borderRadius: windowHeight(8),
  },
  rightsideStyle: {
    width: windowWidth(195),
    height: windowHeight(40),
    ...external.ai_center,
    ...external.js_center,
    backgroundColor: colors.primary,
    borderRadius: windowHeight(8),
    ...external.mh_20,
    ...external.ph_10,
  },
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingHorizontal: windowHeight(10),
  },
  modalView: {
    backgroundColor: colors.screenBg,
    borderRadius: 20,
    width: "95%",
    paddingVertical: windowHeight(14),
    elevation: 2,
  },
  modalText: {
    textAlign: "center",
    color: colors.primary,
    fontSize: fontSizes.FONT23,
    fontWeight: "600",
    // fontFamily: commonfonts.large,
  },
  modalSubtitle: {
    textAlign: "center",
    ...external.ph_10,
    ...external.mt_5,
    color: colors.lightText,
    fontSize: fontSizes.FONT18,
    fontWeight: "500",
    fontFamily: "Poppins-Regular",
  },
  paymentDone: {
    height: windowHeight(150),
    width: windowWidth(220),
    alignSelf: "center",
  },
  startbutton: {
    backgroundColor: colors.yellowColor,
    borderWidth: windowHeight(0.5),
    borderColor: colors.yellowColor,
    borderRadius: windowHeight(8),
    height: windowHeight(46),
    justifyContent: "center",
    ...external.mh_10,
    ...external.mv_5,
  },
  modalShopping: {
    fontFamily: "Poppins-Regular",
    color: colors.primary,
    fontSize: fontSizes.FONT23,
    fontWeight: "500",
    ...external.as_center,
  },
  modalShoppingText: {
    fontFamily: "Poppins-Regular",
    color: colors.screenBg,
    fontSize: fontSizes.FONT23,
    fontWeight: "500",
    ...external.as_center,
  },
  firstButton: {
    backgroundColor: colors.primary,
    borderWidth: windowHeight(0.5),
    borderColor: colors.primary,
    borderRadius: windowHeight(8),
    height: windowHeight(46),
    justifyContent: "center",
    ...external.mh_10,
    ...external.mt_10,
  },
});

export { styles };
