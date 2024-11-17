import { StyleSheet } from "react-native";
import { windowHeight } from "../../../theme/appConstant";
import colors from "../../../theme/colors";
import { external } from "../../../styles/external.css";
import { commonStyles } from "../../../styles/commonStyle";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.screenBg,
    borderRadius: windowHeight(8),
    ...external.mv_5,
    ...external.p_10,
    marginTop: windowHeight(10),
  },
  titleText: {
    ...commonStyles.fontsizeFiveHund,
    ...external.ti_center,

    width: "25%",
    ...external.pt_5,
    bottom: 1,
    borderRightColor: colors.lightText,
  },
  tableDataText: {
    ...commonStyles.textsizeFiveHund,
    ...external.ti_center,
    width: "25%",
    top: 1,
    ...external.Pb_5,
    borderRightColor: colors.lightText,
  },
  borderRight: {
    ...commonStyles.textsizeFiveHund,
    ...external.ti_center,
    borderRightWidth: 1,
    width: "25%",
    top: 1,
    ...external.Pb_5,
    borderRightColor: colors.lightText,
  },
});

export { styles };
