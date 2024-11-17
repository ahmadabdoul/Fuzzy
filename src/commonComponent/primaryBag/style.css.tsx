import { StyleSheet } from "react-native";
import colors from "../../theme/colors";
import { windowHeight } from "../../theme/appConstant";
import { external } from "../../styles/external.css";

const styles = StyleSheet.create({
  primaryBegView: {
    backgroundColor: colors.primary,
    width: windowHeight(23),
    height: windowHeight(23),
    borderRadius: windowHeight(12.5),
    ...external.ai_center,
    ...external.js_center,
  },
});

export { styles };
