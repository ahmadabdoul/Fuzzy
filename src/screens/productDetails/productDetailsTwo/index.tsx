import React from "react";
import {
  Alert,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import { styles } from "./style.css";
import Scalling from "../../../component/productTwo/scallingContainer";
import ZipCode from "../../../component/productTwo/zipCode";
import DetailScreen from "../../../component/productTwo/detailScreen";
import BottomBar from "../../../component/productDetails/bottomBar";
import H3HeadingCategory from "../../../commonComponent/headingCategory/H3HeadingCategory";
import NewArrival from "../../../component/homeScreenContainer/newArrival";
import RatingContainer from "../../../component/productTwo/ratingContainer";
import CarouselSliderContainer from "../../../component/productTwo/carouselSlider";
import { useValues } from "../../../../App";
import colors from "../../../theme/colors";
import { windowHeight } from "../../../theme/appConstant";
import { chairColors } from "../../../data/productOne";
import { commonStyles } from "../../../styles/commonStyle";
import { external } from "../../../styles/external.css";
import Images from "../../../utils/images";

type ProductDetailsTwoProps = {
  navigation: StackNavigationProp<any, any>;
};

const ProductDetailsTwo: React.FC<ProductDetailsTwoProps> = ({
  navigation,
}) => {
  const handleChange = (screenName: string) => {
    navigation.navigate(screenName);
  };

  const { isDark, textRTLStyle, viewRTLStyle, t, currSymbol, currPrice } =
    useValues();
  const colorText = isDark ? colors.screenBg : colors.primary;

  return (
    <View style={[external.fx_1]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[
          commonStyles.flexBgContainer,
          external.mb_60,
          { backgroundColor: isDark ? colors.darkScreenBg : colors.screenBg },
        ]}
      >
        <View
          style={[
            styles.viewSlider,
            {
              backgroundColor: isDark ? colors.primary : colors.layoutBg,
            },
          ]}
        >
          <ImageBackground
            resizeMode="contain"
            style={styles.productCircle}
            source={Images.productCircle}
          >
            <CarouselSliderContainer />
          </ImageBackground>
          <View
            style={[
              styles.colorView,
              {
                backgroundColor: isDark ? colors.primary : colors.layoutBg,
              },
            ]}
          >
            {chairColors.map((item) => (
              <TouchableOpacity
                onPress={() => Alert.alert("only one color left")}
                key={item.color}
                style={[
                  styles.chairColors,
                  {
                    backgroundColor: item.color,
                  },
                ]}
              />
            ))}
          </View>
        </View>
        <View style={[external.mh_20, { marginTop: windowHeight(30) }]}>
          <View
            style={[
              external.fd_row,
              external.js_space,
              external.ai_center,
              { flexDirection: viewRTLStyle },
            ]}
          >
            <Text
              style={[
                commonStyles.primaryfontSixHund,
                external.mt_5,
                { color: colorText },
              ]}
            >
              {t("transData.buddyChair")}
            </Text>
            <ImageBackground
              style={styles.sideBookMark}
              source={Images.sideBookMark}
            >
              <Text style={styles.offText}>20% {t("transData.off")}</Text>
            </ImageBackground>
          </View>
          <Text
            style={[commonStyles.textsizeFiveHund, { textAlign: textRTLStyle }]}
          >
            {t("transData.arm")}
          </Text>
          <View
            style={[
              external.fd_row,
              external.ai_center,
              external.mv_8,
              { flexDirection: viewRTLStyle },
            ]}
          >
            <Text style={[styles.price, { color: colorText }]}>
              {currSymbol}
              {(currPrice * 102.25).toFixed(2)}
            </Text>
            <Text style={styles.underPrice}>
              {" "}
              {currSymbol}
              {(currPrice * 102.25).toFixed(2)}
            </Text>
          </View>
          <Scalling />
        </View>
        <ZipCode />
        <DetailScreen />
        <RatingContainer />
        <View
          style={{
            backgroundColor: isDark ? colors.darkScreenBg : colors.screenBg,
          }}
        >
          <View style={[external.ph_20]}>
            <H3HeadingCategory
              value={"transData.similarProducts"}
              seeall={"transData.viewAll"}
              onPress={() => handleChange("SearchScreen")}
              search={true}
            />
          </View>
          <NewArrival />
        </View>
      </ScrollView>
      <BottomBar onPress={() => handleChange("Checkout")} />
    </View>
  );
};

export default ProductDetailsTwo;
