import { StyleSheet } from "react-native";

import {
  fontSizes,
  windowHeight,
  windowWidth,
} from "../../../theme/appConstant";
import colors from "../../../theme/colors";
import { external } from "../../../styles/external.css";
import { commonStyles } from "../../../styles/commonStyle";

const styles = StyleSheet.create({
  ridesFriends: {
    flexDirection: "row",
    width: "100%",
    ...external.mh_20,
    marginTop: windowHeight(7),
  },
  verticleLine: {
    height: "96%",
    borderStyle: "dashed",
    borderWidth: 0.6,
    borderColor: colors.sliderColor,
  },
  ratingNumber: {
    ...commonStyles.fontsizeLargeHund,
    fontSize: fontSizes.FONT23,
    ...external.ti_center,
  },
  totalRating: {
    ...commonStyles.textsizeFourHund,
    ...external.mt_5,
    ...external.ti_center,
  },
  forReviews: {
    ...commonStyles.PrimarysizeFourHundMed,
    ...external.ti_center,
  },
  number: {
    ...commonStyles.PrimarysizeFourHund,
  },
  viewContainer: {
    width: "35%",
    ...external.mt_15,
  },
  progressBar: {
    width: windowWidth(150),
    backgroundColor: colors.layoutBg,
    height: windowHeight(3),
    borderRadius: windowHeight(4),
    ...external.ai_center,
    ...external.mt_3,
    ...external.mh_5,
  },
  progressBarPrimary: {
    backgroundColor: colors.primary,
    height: windowHeight(3),
    borderRadius: windowHeight(4),
    ...external.ai_center,
    position: "absolute",
    alignSelf: "flex-start",
    width: windowWidth(150),
  },
});
export { styles };
