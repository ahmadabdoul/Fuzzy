import { StyleSheet } from "react-native";
import { windowHeight } from "../../../../theme/appConstant";
import colors from "../../../../theme/colors";
import { commonStyles } from "../../../../styles/commonStyle";

const style = StyleSheet.create({
  container: {
    height: windowHeight(41),
  },
  listSection: {
    backgroundColor: colors.screenBg,
  },
  imageSIze: {
    height: windowHeight(160),
    width: "100%",
  },
  verticalContainer: {
    backgroundColor: colors.screenBg,
    marginBottom: windowHeight(10),
  },
  listItemView: {
    marginLeft: 0,
    paddingLeft: 0,
    marginTop: windowHeight(-20),
  },
  descriptionStyle: {
    ...commonStyles.textsizeFourHund,
    textAlign: "justify",
    marginBottom: windowHeight(-3),
  },
});

export { style };
