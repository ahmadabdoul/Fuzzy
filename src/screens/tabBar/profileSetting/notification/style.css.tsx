import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../../../../theme/appConstant";
import colors from "../../../../theme/colors";
import { external } from "../../../../styles/external.css";
import { commonStyles } from "../../../../styles/commonStyle";

const styles = StyleSheet.create({
  ViewContainer: {
    width: "100%",
    backgroundColor: colors.layoutBg,
    marginTop: windowHeight(13),
    borderRadius: 12,
    padding: windowHeight(6),
    flexDirection: "row",
  },
  whiteContainer: {
    width: windowWidth(67),
    height: windowHeight(43),
    backgroundColor: colors.screenBg,
    borderRadius: 14,
    ...external.ai_center,
    ...external.js_center,
  },
  title: {
    ...commonStyles.fontsizeFiveHund,
  },
  subtitle: {
    ...commonStyles.textsizeFourHund,
  },
});

export { styles };
