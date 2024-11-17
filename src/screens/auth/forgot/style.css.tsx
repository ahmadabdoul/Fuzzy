import { StyleSheet } from "react-native";
import { windowHeight } from "../../../theme/appConstant";
import { external } from "../../../styles/external.css";

const style = StyleSheet.create({
  primaryContainer: {
    ...external.mh_20,
    ...external.mb_20,
  },
  inputView: {
    marginTop: windowHeight(30),
  },
});

export { style };
