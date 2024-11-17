import { StyleSheet } from "react-native";
import { windowHeight } from "../../../theme/appConstant";
import colors from "../../../theme/colors";
import { external } from "../../../styles/external.css";

const styles = StyleSheet.create({
  reviewView: {
    backgroundColor: colors.screenBg,
    ...external.mv_10,
    ...external.p_10,
    borderRadius: windowHeight(8),
  },
  imgs: {
    width: "18%",
    height: "90%",
    ...external.rm_contain,
  },
  rating: {
    marginHorizontal: windowHeight(2),
    marginTop: windowHeight(3),
  },
});

export { styles };
