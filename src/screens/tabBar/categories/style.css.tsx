import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../../../theme/appConstant";
import colors from "../../../theme/colors";
import { commonStyles } from "../../../styles/commonStyle";
import { external } from "../../../styles/external.css";

const style = StyleSheet.create({
  container: {
    ...external.ti_center,
    ...external.fg_1,
    ...commonStyles.sixHundSizeLarge,
    left: windowHeight(10),
    fontFamily: "Poppins-Bold",
  },
  notificationContainer: {
    borderWidth: 0.2,
    padding: windowHeight(8),
    borderRadius: windowHeight(20),
  },
  viewContainer: {
    ...external.fd_row,
    ...external.ai_center,
    ...external.js_space,
    marginRight: windowHeight(1),
    marginTop: windowHeight(1),
  },
  cardHeight: {
    height: windowHeight(90),
    backgroundColor: colors.layoutBg,
    width: windowWidth(380),
    marginVertical: windowHeight(8),
    borderTopLeftRadius: windowHeight(8),
    borderBottomLeftRadius: windowHeight(8),
  },
  mainContainer: {
    ...external.fd_row,
    ...external.js_space,
    padding: windowHeight(10),
  },
  imgStyle: {
    width: windowWidth(120),
    height: windowHeight(65),
    left: windowHeight(50),
    ...external.rm_contain,
  },
  viewContainerBottom: {
    marginBottom: windowHeight(36),
  },
});

export { style };
