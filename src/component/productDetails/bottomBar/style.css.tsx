import { StyleSheet } from "react-native";
import { fontSizes, windowHeight } from "../../../theme/appConstant";
import colors from "../../../theme/colors";
import { external } from "../../../styles/external.css";

const styles = StyleSheet.create({
  bottomView: {
    paddingVertical: windowHeight(11),
    height: windowHeight(65),
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...external.js_end,
    elevation: 18,
    backgroundColor: colors.screenBg,
  },
  backColor: {
    backgroundColor: colors.primary,
    height: windowHeight(40),
    width: "90%",
    ...external.mh_20,
    borderRadius: windowHeight(8),
    ...external.ai_center,
    ...external.ph_10,
    ...external.js_space,
  },
  verticleLine: {
    height: "100%",
    width: 0.5,
    backgroundColor: colors.lightText,
    ...external.mh_10,
  },
  bag: {
    marginTop: windowHeight(1),
  },
  bottomPrice: {
    fontSize: fontSizes.FONT20,
  },
});

export { styles };
