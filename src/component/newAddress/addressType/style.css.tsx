import { StyleSheet } from "react-native";
import { windowHeight } from "../../../theme/appConstant";
import colors from "../../../theme/colors";
import { external } from "../../../styles/external.css";

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.layoutBg,
    borderRadius: windowHeight(8),
    ...external.mt_10,
    height: windowHeight(42),
    ...external.fd_row,
    ...external.ai_center,
    ...external.ph_10,
  },
  title: {
    ...external.fd_row,
  },
  verticleLine: {
    height: "80%",
    width: 1,
    backgroundColor: colors.verticalLine,
    marginHorizontal: windowHeight(19),
  },
});

export { style };
