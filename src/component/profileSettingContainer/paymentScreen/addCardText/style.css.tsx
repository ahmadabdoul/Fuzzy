import { StyleSheet } from "react-native";

import { fontSizes } from "../../../../theme/appConstant";
import colors from "../../../../theme/colors";

const style = StyleSheet.create({
  textDecoration: {
    textDecorationLine: "underline",
    color: colors.primary,
    fontSize: fontSizes.FONT17,
    fontWeight: "500",
    // fontFamily: commonfonts.large,
  },
  textDecorationLine: {
    color: colors.primary,
    fontSize: fontSizes.FONT18,
    fontWeight: "500",
    fontFamily: "Poppins-SemiBold",
  },
});

export { style };
