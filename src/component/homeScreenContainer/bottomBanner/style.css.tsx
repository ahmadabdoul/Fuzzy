import { StyleSheet } from "react-native";
import {
  fontSizes,
  windowHeight,
  windowWidth,
} from "../../../theme/appConstant";
import colors from "../../../theme/colors";
// import commonfonts from '../../../utils/helper/commonfonts';

const style = StyleSheet.create({
  img: {
    width: windowWidth(208),
    height: windowHeight(140),
    marginRight: windowHeight(10),
    borderRadius: windowHeight(10),
    overflow: "hidden",
  },
  textColor: {
    color: colors.screenBg,
    marginTop: windowHeight(5),
    fontSize: fontSizes.FONT16,
    fontFamily: "Poppins-SemiBold",
  },
  viewText: {
    marginTop: windowHeight(40),
  },
  chainr: {
    width: "70%",
  },
});

export { style };
