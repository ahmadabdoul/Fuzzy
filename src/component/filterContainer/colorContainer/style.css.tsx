import { StyleSheet } from "react-native";
import { fontSizes, windowHeight } from "../../../theme/appConstant";
import colors from "../../../theme/colors";
import { external } from "../../../styles/external.css";

const styles = StyleSheet.create({
  container: {
    height: windowHeight(15),
    width: windowHeight(15),
    borderRadius: windowHeight(15),
  },
  coreContainer: {
    backgroundColor: colors.layoutBg,
    width: "82%",
    ...external.fd_row,
    paddingVertical: windowHeight(11),
    borderRadius: windowHeight(4),
    paddingHorizontal: windowHeight(6),
    alignItems: "center",
    borderColor: "#9BA3AA40",
    borderWidth: 1,
  },
  colorBorder: {
    borderWidth: 1,
    height: windowHeight(19),
    width: windowHeight(19),
    borderRadius: windowHeight(19),
    ...external.ai_center,
    ...external.js_center,
    ...external.mh_5,
  },

  selectAllView: {
    backgroundColor: colors.layoutBg,
    width: "82%",
    ...external.fd_row,
    paddingVertical: windowHeight(13),
    borderRadius: windowHeight(3),
    paddingHorizontal: windowHeight(13),
    alignItems: "center",
    borderColor: colors.subTitleText,
    borderWidth: 0.2,
  },
  title: { fontSize: fontSizes.FONT18 },
});
export { styles };
