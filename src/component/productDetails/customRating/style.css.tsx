import { StyleSheet } from "react-native";
import { windowHeight } from "../../../theme/appConstant";
import { external } from "../../../styles/external.css";

const styles = StyleSheet.create({
  customRatingBarStyle: {
    ...external.fd_row,
    ...external.js_center,
    ...external.ai_center,
    marginHorizontal: windowHeight(3),
  },
  touchableStar: {
    paddingHorizontal: windowHeight(1),
  },
});

export { styles };
