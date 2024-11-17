import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../../theme/appConstant";
import colors from "../../theme/colors";
import { external } from "../../styles/external.css";
const style = StyleSheet.create({
  applyButton: {
    position: "absolute",
    bottom: windowHeight(16),
    left: 0,
    right: 0,
    ...external.js_end,
    ...external.mh_20,
  },
  addButton: {
    backgroundColor: colors.layoutBg,
    borderWidth: windowHeight(0.5),
    borderColor: colors.layoutBg,
    borderRadius: windowHeight(8),
    height: windowHeight(46),
    width: windowWidth(437),
    justifyContent: "center",
    ...external.mv_10,
  },
});

export { style };
