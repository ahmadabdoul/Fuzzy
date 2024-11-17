import { StyleSheet } from "react-native";
import {
  fontSizes,
  windowHeight,
  windowWidth,
} from "../../../theme/appConstant";
import colors from "../../../theme/colors";
import { external } from "../../../styles/external.css";
import { commonStyles } from "../../../styles/commonStyle";

const style = StyleSheet.create({
  viewProfileContainer: {
    ...external.mh_5,
    ...external.fd_row,
    paddingHorizontal: windowHeight(15),
    marginVertical: windowHeight(10),
  },
  ProfileInnerText: {
    width: windowWidth(59),
    height: windowHeight(39),
    backgroundColor: colors.layoutBg,
    borderRadius: 8,
    ...external.ai_center,
    ...external.js_center,
  },
  title: {
    marginHorizontal: windowHeight(10),
    color: colors.primary,
    fontSize: fontSizes.FONT19,
    fontFamily: "Poppins-SemiBold",
  },
  subtitile: {
    marginHorizontal: windowHeight(10),
    ...commonStyles.textsizeFourHund,
  },
  scrollView: {
    marginTop: windowHeight(35),
  },
});

export { style };
