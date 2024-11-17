import { StyleSheet } from "react-native";
import { windowHeight } from "../../theme/appConstant";
import colors from "../../theme/colors";
import { external } from "../../styles/external.css";

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.layoutBg,
    width: "100%",
    height: windowHeight(42),
    borderRadius: windowHeight(10),
    justifyContent: "center",
    marginVertical: windowHeight(8),
  },
  scrollView: {
    marginBottom: windowHeight(80),
    paddingBottom: windowHeight(40),
  },
  pageListView: {
    ...external.fd_row,
    ...external.ai_center,
    ...external.js_space,
    marginTop: windowHeight(2),
  },
});

export { style };
