import { StyleSheet } from "react-native";
import { fontSizes } from "../../../theme/appConstant";
import { commonStyles } from "../../../styles/commonStyle";

const styles = StyleSheet.create({
  introduction: {
    ...commonStyles.fontsizeFiveHund,
    fontSize: fontSizes.FONT20,
  },
  IntroductionWeb: {
    ...commonStyles.textsizeFourHund,
    fontSize: fontSizes.FONT17,
    textAlign: "justify",
    fontFamily: "Poppins-Regular",
  },
});
export { styles };
