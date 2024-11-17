import { StyleSheet } from "react-native";

import { windowHeight } from "../../../../theme/appConstant";
import colors from "../../../../theme/colors";
import { commonStyles } from "../../../../styles/commonStyle";
import { external } from "../../../../styles/external.css";

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.layoutBg,
    height: windowHeight(45),
    borderRadius: windowHeight(6),
  },
  textInput: {
    ...commonStyles.textsizeFourHund,
    ...external.ai_center,
    ...external.js_center,
    ...external.mh_8,
    marginVertical: 5,
  },
});

export { style };
