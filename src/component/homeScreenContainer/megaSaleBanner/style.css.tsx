import { StyleSheet } from "react-native";
import { windowHeight } from "../../../theme/appConstant";
import colors from "../../../theme/colors";
import { external } from "../../../styles/external.css";

const style = StyleSheet.create({
  container: {
    height: windowHeight(130),
    ...external.width_100,
    paddingTop: windowHeight(8),
  },
  baseImage: {
    width: "50%",
    paddingTop: windowHeight(5),
  },
  imageStyle: {
    borderRadius: windowHeight(10),
  },
  textColor: {
    color: colors.screenBg,
  },
  viewText: {
    paddingTop: windowHeight(25),
  },
});

export { style };
