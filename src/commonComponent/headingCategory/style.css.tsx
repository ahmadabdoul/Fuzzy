import { StyleSheet } from "react-native";
import { external } from "../../styles/external.css";
import { commonStyles } from "../../styles/commonStyle";

const styles = StyleSheet.create({
  container: {
    ...external.ai_center,
  },
  valueText: {
    ...commonStyles.sixHundSizeLarge,
  },
  seeAllText: {
    ...commonStyles.textsizeFiveHundMed,
  },
});

export default styles;
