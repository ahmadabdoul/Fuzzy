import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../../../theme/appConstant";
import colors from "../../../theme/colors";
import { external } from "../../../styles/external.css";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.screenBg,
    height: windowHeight(85),
    width: windowWidth(122),
    ...external.mh_8,
    ...external.mb_15,
    borderRadius: windowHeight(7),
    justifyContent: "center",
    ...external.ai_center,
  },
  title: {
    width: "60%",
    ...external.ti_center,
    ...external.mt_3,
  },
});
export { styles };
