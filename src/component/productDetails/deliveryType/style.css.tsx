import { StyleSheet } from "react-native";

import { windowHeight, windowWidth } from "../../../theme/appConstant";
import colors from "../../../theme/colors";
import { external } from "../../../styles/external.css";
import { commonStyles } from "../../../styles/commonStyle";

const styles = StyleSheet.create({
  deliveryText: {
    ...external.ph_5,
    width: windowWidth(95),
    ...commonStyles.PrimarysizeFourHund,
  },
  verticleLine: {
    height: "80%",
    width: 1,
    backgroundColor: colors.layoutBg,
    marginHorizontal: windowHeight(2),
  },
  delivery: {
    height: windowHeight(42),
    backgroundColor: colors.screenBg,
    ...external.mv_13,
    borderRadius: windowHeight(7),
    ...external.fd_row,
    ...external.ai_center,
    ...external.ph_10,
  },
});

export { styles };
