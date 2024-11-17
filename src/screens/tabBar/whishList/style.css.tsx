import { StyleSheet } from "react-native";
import { fontSizes } from "../../../theme/appConstant";
import colors from "../../../theme/colors";
import { external } from "../../../styles/external.css";

const style = StyleSheet.create({
  headingText: {
    fontSize: fontSizes.FONT22,
    color: colors.primary,
    ...external.ti_center,
    fontFamily: "Poppins-Bold",
    // fontFamily: commonfonts.large,
  },
});

export { style };
