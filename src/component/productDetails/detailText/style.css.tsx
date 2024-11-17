import { StyleSheet } from "react-native";

import { windowHeight, windowWidth } from "../../../theme/appConstant";
import colors from "../../../theme/colors";
import { external } from "../../../styles/external.css";
import { commonStyles } from "../../../styles/commonStyle";

const styles = StyleSheet.create({
  detailsView: {
    height: windowHeight(90),
    backgroundColor: colors.screenBg,
    borderRadius: windowHeight(8),
    ...external.mv_10,
    ...external.ph_10,
    ...external.pt_10,
  },
  detailText: {
    ...commonStyles.textsizeFourHund,
    width: windowWidth(400),
    lineHeight: 22,
  },
});

export { styles };
