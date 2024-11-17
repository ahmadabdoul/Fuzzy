import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { style } from "./style.css";
import PrimaryBegContain from "../primaryBag";
import { Star } from "../../utils/icon";
import RedHeartContainer from "../redHeartContainer";
import { Card } from "react-native-paper";
import { useValues } from "../../../App";
import colors from "../../theme/colors";
import { commonStyles } from "../../styles/commonStyle";

const NewArrivalContainer = ({
  rating,
  price,
  chairName,
  img,
  underline,
  heatShow,
}) => {
  const {
    isRTL,
    isDark,
    textRTLStyle,
    viewRTLStyle,
    currPrice,
    currSymbol,
    viewSelfRTLStyle,
    t,
  } = useValues();

  return (
    <View
      style={[
        style.container,
        { backgroundColor: isDark ? colors.primary : colors.layoutBg },
      ]}
    >
      <View
        style={[
          style.whiteContainer,
          {
            backgroundColor: isDark ? colors.textinputBG : colors.screenBg,
          },
        ]}
      >
        {heatShow && (
          <Pressable>
            <Card
              style={[
                style.card,
                {
                  backgroundColor: isDark ? colors.primary : colors.screenBg,
                  alignSelf: viewSelfRTLStyle,
                },
              ]}
            >
              <RedHeartContainer />
            </Card>
          </Pressable>
        )}
        <Image style={style.img} source={img} />
        <View
          style={[
            style.cartWhiteConainer,
            {
              backgroundColor: isDark ? colors.primary : colors.screenBg,
              right: isRTL ? null : 0,
            },
          ]}
        >
          <PrimaryBegContain />
        </View>
      </View>
      <Pressable style={style.textViewContainer}>
        <Text
          style={[
            commonStyles.fontsizeFiveHund,
            { color: isDark ? colors.screenBg : colors.primary },
            { textAlign: textRTLStyle },
          ]}
        >
          {chairName || t("transData.buddyChair")}
        </Text>
        <Text
          style={[commonStyles.textsizeFourHund, { textAlign: textRTLStyle }]}
        >
          {t("transData.modern")}
        </Text>
        <View
          style={[
            style.priceView,
            {
              flexDirection: viewRTLStyle,
            },
          ]}
        >
          <Text
            style={[
              style.price,
              { color: isDark ? colors.screenBg : colors.primary },
            ]}
          >
            {currSymbol}
            {(currPrice * (price || 14)).toFixed(2)}
          </Text>
          <View style={style.priceViewSpaceTwo}>
            <Star />
            <Text
              style={[
                style.ratingText,
                { color: isDark ? colors.screenBg : colors.primary },
              ]}
            >
              {rating || 4.5}
            </Text>
          </View>
        </View>
        <Text
          style={[
            commonStyles.textsizeFourHund,
            style.underlineText,
            {
              textAlign: textRTLStyle,
            },
          ]}
        >
          {currSymbol}
          {(currPrice * (underline || 20)).toFixed(2)}
        </Text>
      </Pressable>
    </View>
  );
};

export default NewArrivalContainer;
