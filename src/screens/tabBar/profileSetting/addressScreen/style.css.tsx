import { StyleSheet } from "react-native";
import { windowHeight } from "../../../../theme/appConstant";
import colors from "../../../../theme/colors";
import { external } from "../../../../styles/external.css";

const style = StyleSheet.create({
  container: {
    padding: 15,
    marginVertical: windowHeight(10),
    backgroundColor: colors.screenBg,
    elevation: 5,
    width: "99.5%",
    height: 126,
  },
  applyButton: {
    position: "absolute",
    bottom: windowHeight(16),
    left: 0,
    right: 0,
    ...external.js_end,
    ...external.mh_20,
  },
});

export { style };
