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
  uploadBox: {
    borderRadius: windowHeight(8),
    borderWidth: 1,
    borderStyle: "dashed",
    height: windowHeight(80),
    borderColor: colors.subtitle,
    marginVertical: windowHeight(5),
    ...external.js_center,
  },
  plusFont: {
    ...external.ti_center,
    fontSize: fontSizes.FONT45,
    color: colors.lightText,
  },
  reviewBox: {
    borderRadius: windowHeight(8),
    height: windowHeight(80),
    borderColor: colors.subtitle,
    marginVertical: windowHeight(5),
    backgroundColor: colors.layoutBg,
    ...external.ph_5,
  },
  textInptStyle: {
    ...commonStyles.textsizeFiveHund,
  },
});

export { styles };
