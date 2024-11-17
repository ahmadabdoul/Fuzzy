import { Dimensions, StyleSheet } from "react-native";

import {
  fontSizes,
  windowHeight,
  windowWidth,
} from "../../../theme/appConstant";
import colors from "../../../theme/colors";
import { external } from "../../../styles/external.css";
import { commonStyles } from "../../../styles/commonStyle";

const styles = StyleSheet.create({
  inputView: {
    width: "100%",
    backgroundColor: colors.screenBg,
    height: windowHeight(35),
    borderRadius: windowHeight(7),
    ...external.mt_10,
  },
  textInput: {
    ...external.ph_8,
    ...commonStyles.textsizeFiveHund,
    borderRadius: windowHeight(6.5),
  },
  checkView: {
    width: "35%",
    backgroundColor: colors.primary,
    height: windowHeight(35),
    borderRadius: windowHeight(7),
    position: "absolute",
    ...external.as_end,
    ...external.ai_center,
    ...external.js_center,
  },
});

export { styles };
