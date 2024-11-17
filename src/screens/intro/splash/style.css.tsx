import { StyleSheet } from "react-native";
import colors from "../../../theme/colors";
import { windowHeight, windowWidth } from "../../../theme/appConstant";
import { external } from "../../../styles/external.css";

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    ...external.fx_1,
    justifyContent: "center",
    alignItems: "center",
  },
  fuzzyLogo: {
    height: windowHeight(100),
    width: windowWidth(300),
  },
});

export { style };
