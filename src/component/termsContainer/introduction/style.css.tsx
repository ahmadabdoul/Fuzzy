import { StyleSheet } from "react-native";

import { fontSizes } from "../../../theme/appConstant";
import { commonStyles } from "../../../styles/commonStyle";
import { external } from "../../../styles/external.css";

const styles = StyleSheet.create({
  introduction: {
    ...commonStyles.fontsizeFiveHund,
    ...external.pt_10,
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
