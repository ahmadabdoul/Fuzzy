import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import H3HeadingCategory from "../../../commonComponent/headingCategory/H3HeadingCategory";
import { style } from "./style.css";
import { trendFurnitureData } from "../../../data/trendFurniture";

import PrimaryBegContain from "../../../commonComponent/primaryBag";
import { Star } from "../../../utils/icon";
import { useNavigation } from "@react-navigation/native";
import { useValues } from "../../../../App";
import colors from "../../../theme/colors";
import { external } from "../../../styles/external.css";
import { commonStyles } from "../../../styles/commonStyle";

const TrendFurniture = () => {
  const navigation = useNavigation();
  const { isDark, textRTLStyle, viewRTLStyle, currSymbol, t, currPrice } =
    useValues();

  return (
    <View style={[external.mh_20]}>
      <View style={[external.mv_8]}>
        <H3HeadingCategory
          value={"transData.trendinFurniture"}
          seeall={"transData.viewAll"}
        />
      </View>
      {trendFurnitureData.map((item, index) => (
        <Pressable
          key={index}
          style={[
            style.container,
            { backgroundColor: isDark ? colors.primary : colors.layoutBg },
            { flexDirection: viewRTLStyle },
          ]}
          onPress={() => navigation.navigate("ProductDetailsOne")}
        >
          <View
            style={[
              style.viewContainer,
              {
                backgroundColor: isDark ? colors.textinputBG : colors.screenBg,
              },
              { flexDirection: viewRTLStyle },
            ]}
          >
            <Image style={style.img} source={item.img} />
          </View>
          <View style={style.viewTextContainer}>
            <View
              style={[
                external.fd_row,
                external.js_space,
                style.viewChildContainer,
                { flexDirection: viewRTLStyle },
              ]}
            >
              <Text
                style={[
                  commonStyles.fontsizeFiveHund,
                  { color: isDark ? colors.screenBg : colors.primary },
                ]}
              >
                {t(item.title)}
              </Text>
              <View
                style={[external.fd_row, external.ai_center, external.mr_5]}
              >
                <View style={style.star}>
                  <Star />
                </View>
                <Text
                  style={[
                    style.rating,
                    { color: isDark ? colors.screenBg : colors.primary },
                  ]}
                >
                  {item.rating}
                </Text>
              </View>
            </View>
            <Text
              style={[
                commonStyles.textsizeFiveHund,
                { textAlign: textRTLStyle },
              ]}
            >
              {t(item.subtitle)}
            </Text>
            <View
              style={[
                external.fd_row,
                external.js_space,
                style.viewChildContainer,
                { flexDirection: viewRTLStyle },
              ]}
            >
              <View
                style={[
                  external.fd_row,
                  external.mt_5,
                  external.ai_center,
                  { flexDirection: viewRTLStyle },
                ]}
              >
                <Text
                  style={[
                    commonStyles.fontsizeLargeHund,
                    { color: isDark ? colors.screenBg : colors.primary },
                  ]}
                >
                  {currSymbol}
                  {(currPrice * item.price).toFixed(2)}
                </Text>
                {item.discount && (
                  <Text style={style.discount}>
                    {t("transData.save")} {currSymbol}
                    {(currPrice * item.discount).toFixed(2)}
                  </Text>
                )}
              </View>
              <PrimaryBegContain />
            </View>
          </View>
        </Pressable>
      ))}
    </View>
  );
};

export default TrendFurniture;
