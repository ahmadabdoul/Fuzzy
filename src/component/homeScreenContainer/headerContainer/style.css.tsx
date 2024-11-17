import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../../../theme/appConstant";
import colors from "../../../theme/colors";
import { external } from "../../../styles/external.css";

const style = StyleSheet.create({
  container: {
    borderColor: colors.lightText,
    width: windowHeight(35),
    height: windowHeight(35),
    borderRadius: windowHeight(23),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.screenBg,
    elevation: 0.2,
  },
  baseImage: {
    width: windowWidth(66),
    height: windowHeight(35),
    borderRadius: windowHeight(16),
  },
  containerView: {
    borderWidth: windowHeight(0.2),
    borderColor: colors.lightText,
    width: windowWidth(55),
    height: windowHeight(35),
    borderRadius: windowHeight(20),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.screenBg,
    overflow: "hidden",
    ...external.mh_5,
  },
});

export { style };
