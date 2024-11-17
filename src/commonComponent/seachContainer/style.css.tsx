import { StyleSheet } from "react-native";
import { windowHeight } from "../../theme/appConstant";
import colors from "../../theme/colors";
import { external } from "../../styles/external.css";

const style = StyleSheet.create({
  searchContainer: {
    backgroundColor: colors.layoutBg,
    height: windowHeight(42),
    ...external.fd_row,
    ...external.ai_center,
    paddingHorizontal: windowHeight(10),
    marginVertical: windowHeight(12),
    borderRadius: windowHeight(5),
    width: windowHeight(40),
    ...external.mh_8,
  },
});

export { style };
