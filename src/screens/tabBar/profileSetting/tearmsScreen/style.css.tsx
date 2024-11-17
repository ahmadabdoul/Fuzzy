import { StyleSheet } from "react-native";
import { fontSizes, windowHeight } from "../../../../theme/appConstant";
import { commonStyles } from "../../../../styles/commonStyle";
import { external } from "../../../../styles/external.css";

const style = StyleSheet.create({
  tearmFuzzyText: {
    ...commonStyles.primaryfontSixHund,
    paddingTop: windowHeight(18),
    // fontFamily: commonfonts.bold,
  },
  introduction: {
    ...commonStyles.PrimarysizeFourHundMed,
    ...external.pt_10,
  },
  IntroductionWeb: {
    ...commonStyles.textsizeFourHund,
    fontSize: fontSizes.FONT17,
    textAlign: "justify",
  },
  IntellectualRights: {
    ...commonStyles.fontsizeFiveHund,
    fontSize: fontSizes.FONT20,
  },
  restriction: {
    ...commonStyles.textsizeFourHund,
    ...external.ti_center,
    ...external.mh_5,
  },
  scrollView: {
    marginBottom: windowHeight(130),
    paddingBottom: windowHeight(200),
  },
});

export { style };
