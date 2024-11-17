import { StyleSheet } from "react-native";
import { commonStyles } from "../../styles/commonStyle";
import { external } from "../../styles/external.css";
import { windowHeight } from "../../theme/appConstant";
import colors from "../../theme/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  bottomText: {
    bottom: windowHeight(-3),
    ...commonStyles.whitefontSixHundLarge,
    ...external.mh_20,
  },
  viewMargin: {
    marginTop: windowHeight(180),
  },
});

export default styles;
