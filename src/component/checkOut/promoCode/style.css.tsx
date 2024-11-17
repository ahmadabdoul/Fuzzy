import { StyleSheet } from "react-native";
import { windowHeight } from "../../../theme/appConstant";
import colors from "../../../theme/colors";
import { external } from "../../../styles/external.css";

const style = StyleSheet.create({
  dashBorder: {
    borderStyle: "dashed",
    borderRadius: windowHeight(8),
    borderWidth: 1.5,
    height: windowHeight(42),
    ...external.ai_center,
    ...external.fd_row,
    ...external.mt_5,
    ...external.ph_10,
    borderColor: colors.dashedBorder,
    ...external.mb_10,
    backgroundColor: colors.layoutBg,
  },
  verticleLine: {
    height: "50%",
    width: 0.2,
    backgroundColor: colors.backgroungVoucher,
    ...external.mh_8,
  },
});

export { style };
