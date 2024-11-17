import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { style } from "./style.css";
import PrimaryBegContain from "../primaryBag";
import { useNavigation } from "@react-navigation/native";
import { Card } from "react-native-paper";
import RedHeartContainer from "../redHeartContainer";
import { useValues } from "../../../App";
import colors from "../../theme/colors";
import { windowHeight } from "../../theme/appConstant";
import { commonStyles } from "../../styles/commonStyle";

const FurnitureContainer = ({ chairName, price, img, subtitle }) => {
  const navigation = useNavigation("");
  const handleChnage = () => {
    navigation.navigate("SearchScreen");
  };

  const {
    isRTL,
    currPrice,
    currSymbol,
    isDark,
    textRTLStyle,
    viewSelfRTLStyle,
    t,
  } = useValues();

  return (
    <Pressable
      style={[
        style.container,
        { backgroundColor: isDark ? colors.primary : colors.layoutBg },
      ]}
      onPress={handleChnage}
    >
      <View
        style={[
          style.whiteContainer,
          { backgroundColor: isDark ? colors.textinputBG : colors.screenBg },
        ]}
      >
        <Pressable>
          <Card
            style={[
              style.card,
              { backgroundColor: isDark ? colors.primary : colors.screenBg },
              { alignSelf: viewSelfRTLStyle },
            ]}
          >
            <RedHeartContainer />
          </Card>
        </Pressable>
        <Image style={style.img} source={img} />
        <View
          style={[
            style.cartWhiteConainer,
            { backgroundColor: isDark ? colors.primary : colors.screenBg },
            { right: isRTL ? null : 0 },
          ]}
        >
          <PrimaryBegContain />
        </View>
      </View>
      <View style={style.textViewContainer}>
        <Text
          style={[
            commonStyles.fontsizeFiveHund,
            { color: isDark ? colors.screenBg : colors.primary },
            { textAlign: textRTLStyle },
          ]}
        >
          {t(chairName) || t("transData.buddyChair")}
        </Text>
        <View>
          <Text
            style={[
              commonStyles.textsizeFourHund,
              { textAlign: textRTLStyle, marginTop: windowHeight(-3) },
            ]}
          >
            {subtitle || t("transData.modernSaddle")}
          </Text>
          <Text
            style={[
              commonStyles.primaryfontSixHund,
              {
                color: isDark ? colors.screenBg : colors.primary,
                textAlign: textRTLStyle,
              },
            ]}
          >
            {currSymbol}
            {(currPrice * (price || 14)).toFixed(2)}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default FurnitureContainer;
