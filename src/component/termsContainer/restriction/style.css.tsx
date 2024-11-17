import { StyleSheet } from "react-native";
import { commonStyles } from "../../../styles/commonStyle";
import { external } from "../../../styles/external.css";

const styles = StyleSheet.create({
  restriction: {
    ...commonStyles.textsizeFourHund,
    textAlign: "justify",
    ...external.mh_5,
  },
});
export { styles };
