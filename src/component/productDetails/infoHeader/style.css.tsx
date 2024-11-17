import { StyleSheet } from "react-native";
import {
  fontSizes,
  windowHeight,
  windowWidth,
} from "../../../theme/appConstant";
import colors from "../../../theme/colors";
import { external } from "../../../styles/external.css";
import { commonStyles } from "../../../styles/commonStyle";

const styles = StyleSheet.create({
  sideBookMark: {
    height: windowHeight(20),
    width: windowWidth(90),
    ...external.ai_center,
    ...external.js_center,
  },
  offText: {
    color: colors.red,
    fontFamily: "Poppins-SemiBold",
  },
  price: {
    fontSize: fontSizes.FONT30,
    // fontFamily: commonfonts.large,
    color: colors.primary,
  },
  underPrice: {
    textDecorationLine: "line-through",
    color: colors.lightText,
    marginHorizontal: windowHeight(2),
    ...external.fg_1,
  },
  bag: {
    width: windowHeight(78),
    height: windowHeight(26),
    backgroundColor: colors.screenBg,
    borderRadius: windowHeight(14),
    ...external.fd_row,
    alignItems: "center",
    ...external.js_space,
    elevation: 0.5,
  },
  minus: {
    width: windowHeight(20),
    height: windowHeight(20),
    backgroundColor: colors.layoutBg,
    borderRadius: windowHeight(10),
    ...external.ai_center,
    ...external.js_center,
    marginLeft: windowHeight(4),
  },
  plus: {
    width: windowHeight(20),
    height: windowHeight(20),
    backgroundColor: colors.primary,
    borderRadius: windowHeight(10),
    ...external.ai_center,
    ...external.js_center,
    marginRight: windowHeight(4),
  },
  count: {
    ...commonStyles.fontsizeFiveHund,
    ...external.mh_10,
  },
});

export { styles };
