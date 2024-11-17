import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../../../theme/appConstant";
import colors from "../../../theme/colors";
import { external } from "../../../styles/external.css";
import { commonStyles } from "../../../styles/commonStyle";

const style = StyleSheet.create({
  container: {
    ...external.fd_row,
    marginVertical: windowHeight(20),
  },
  itemContainer: {
    height: windowHeight(27),
    backgroundColor: colors.layoutBg,
    ...external.mh_5,
    borderRadius: windowHeight(4),
    borderWidth: 1,
    borderColor: colors.sliderColor,
    ...external.js_center,
    ...external.fd_row,
    ...external.ai_center,
    ...external.ph_10,
  },
  itemText: {
    ...commonStyles.PrimarysizeFourHundMed,
  },
  itemContainerSpecial: {
    backgroundColor: colors.primary,
    ...external.ai_center,
    paddingTop: windowHeight(1),
  },
  sofaImg: {
    width: windowWidth(24),
    height: windowHeight(11),
    ...external.rm_contain,
    position: "absolute",
    left: 0,
    marginHorizontal: windowHeight(4),
  },
  contentContainer: {
    ...external.ai_center,
  },
  itemTextSpecial: {
    color: colors.screenBg,
    ...commonStyles.whitefontThreeHund,
    left: windowHeight(12),
    top: windowHeight(1),
    marginHorizontal: windowHeight(4),
    fontFamily: "Poppins-SemiBold",
    paddingRight: windowHeight(10),
  },
});

export { style };
