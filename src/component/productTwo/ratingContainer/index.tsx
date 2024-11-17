import React from "react";
import { DimensionValue, Text, View } from "react-native";
import { styles } from "./style.css";
import CustomRatingBars from "../../productDetails/customRating";
import { Star } from "../../../utils/icon";
import { RatingContainerData } from "../../../data/ratingContainerData";
import SolidLine from "../../../commonComponent/solidLine";
import { useValues } from "../../../../App";
import colors from "../../../theme/colors";
import { windowHeight } from "../../../theme/appConstant";
import { external } from "../../../styles/external.css";
import { commonStyles } from "../../../styles/commonStyle";

interface RatingItem {
  ratingRate?: number;
  width?: DimensionValue;
  totalRate?: number;
}

const RatingContainer: React.FC = () => {
  const { isRTL, isDark, viewRTLStyle, t } = useValues();
  const colorText = isDark ? colors.screenBg : colors.primary;
  const bgColor = isDark ? colors.layoutBg : colors.primary;
  const border = isDark ? colors.primary : colors.layoutBg;

  return (
    <>
      <View
        style={[
          styles.ridesFriends,
          { backgroundColor: isDark ? colors.darkScreenBg : colors.screenBg },
          { flexDirection: viewRTLStyle },
          { marginHorizontal: isRTL ? null : windowHeight(15) },
        ]}
      >
        <View style={styles.viewContainer}>
          <Text style={[styles.ratingNumber, { color: colorText }]}>5.0</Text>
          <CustomRatingBars />
          <Text style={styles.totalRating}>
            {t("transData.totalRatingPeople")}{" "}
          </Text>
          <Text style={[styles.forReviews, { color: colorText }]}>
            {t("transData.forReviews")}
          </Text>
        </View>
        <View style={styles.verticleLine} />
        <View style={[external.mh_8]}>
          {RatingContainerData.map((item: RatingItem, index: number) => (
            <View style={[external.fd_row]} key={index}>
              <Text style={[styles.number, { color: colorText }]}>
                {item.ratingRate}
              </Text>
              <View style={[external.fd_row, external.mt_3, external.mh_5]}>
                <Star />
                <View style={[styles.progressBar, { backgroundColor: border }]}>
                  <View
                    style={[
                      styles.progressBarPrimary,
                      { width: item.width },
                      { backgroundColor: bgColor },
                    ]}
                  />
                </View>
              </View>
              <Text style={[commonStyles.textsizeFourHund, external.mt_2]}>
                {item.totalRate}
              </Text>
            </View>
          ))}
        </View>
      </View>
      <View style={[external.mh_20, external.mv_10]}>
        <SolidLine />
      </View>
    </>
  );
};

export default RatingContainer;
