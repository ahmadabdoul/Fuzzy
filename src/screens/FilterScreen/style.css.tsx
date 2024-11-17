import { StyleSheet } from "react-native";
import colors from "../../theme/colors";
import { fontSizes, windowHeight, windowWidth } from "../../theme/appConstant";
import { commonStyles } from "../../styles/commonStyle";
import { external } from "../../styles/external.css";

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    flex: 1,
  },
  menuColumn: {
    flexDirection: "column",
    borderRightColor: colors.layoutBg,
    borderRightWidth: 1,
    backgroundColor: colors.layoutBg,
    bottom: windowHeight(1),
  },
  menuItem: {
    width: windowHeight(90),
    height: windowHeight(50),
    justifyContent: "center",
    alignItems: "center",
  },
  selectedMenuItem: {
    borderRightWidth: 2,
  },
  menuItemText: {
    ...commonStyles.textsizeFiveHund,
    alignSelf: "flex-start",
    ...external.mh_10,
  },
  menuItemTextSelect: {
    ...commonStyles.fontsizeFiveHund,
    ...external.mh_10,
  },
  rightSideTextColor: {
    fontFamily: "Poppins-Regular",
    color: colors.screenBg,
    fontSize: fontSizes.FONT20,
    fontWeight: "500",
    ...external.as_center,
  },
  price: {
    // fontFamily: commonfonts.large,
    color: colors.primary,
    fontSize: fontSizes.FONT23,
    fontWeight: "500",
    ...external.as_center,
  },
  leftsideStyle: {
    width: windowWidth(200),
    height: windowHeight(42),
    ...external.ai_center,
    ...external.js_center,
    backgroundColor: colors.layoutBg,
    borderRadius: windowHeight(8),
    ...external.mh_20,
  },
  rightsideStyle: {
    width: windowWidth(200),
    height: windowHeight(42),
    ...external.js_center,
    ...external.ai_center,
    ...external.js_center,
    backgroundColor: colors.primary,
    borderRadius: windowHeight(8),
    ...external.mh_20,
  },
  settingsColumn: {
    marginTop: windowHeight(17),
    ...external.mh_20,
  },
});

export { styles };
