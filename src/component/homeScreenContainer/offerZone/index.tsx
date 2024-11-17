import React from "react";
import {
  View,
  FlatList,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  Pressable,
} from "react-native";
import { offerData } from "../../../data/offerZoneData";
import PrimaryBegContain from "../../../commonComponent/primaryBag";
import { SafeAreaView } from "react-native-safe-area-context";
import H3HeadingCategory from "../../../commonComponent/headingCategory/H3HeadingCategory";
import { styles } from "./style.css";
import { Star } from "../../../utils/icon";
import { useNavigation } from "@react-navigation/native";
import { useValues } from "../../../../App";
import colors from "../../../theme/colors";
import { windowHeight } from "../../../theme/appConstant";
import { external } from "../../../styles/external.css";
import Images from "../../../utils/images";

const OfferZone = () => {
  const navigation = useNavigation("");
  const {
    isRTL,
    isDark,
    textRTLStyle,
    viewRTLStyle,
    t,
    currSymbol,
    currPrice,
  } = useValues();
  const colorText = isDark ? colors.screenBg : colors.primary;

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: isDark ? colors.primary : colors.layoutBg },
      ]}
    >
      <View style={[external.mh_20, external.mv_8]}>
        <H3HeadingCategory
          value={"transData.offerZones"}
          seeall={"transData.viewAll"}
        />
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <FlatList
          data={offerData}
          inverted={isRTL ? true : false}
          numColumns={Math.ceil(offerData.length / 2)}
          renderItem={({ item }) => (
            <Pressable
              style={[
                styles.item,
                {
                  backgroundColor: isDark
                    ? colors.textinputBG
                    : colors.screenBg,
                },
                { flexDirection: viewRTLStyle },
              ]}
              onPress={() => navigation.navigate("ProductDetailsOne")}
            >
              <View
                style={[
                  styles.imgBackground,
                  {
                    backgroundColor: isDark ? colors.primary : colors.layoutBg,
                  },
                ]}
              >
                <ImageBackground
                  resizeMode="contain"
                  style={[
                    styles.bookMark,
                    isRTL
                      ? {
                          right: windowHeight(5),
                        }
                      : {
                          left: windowHeight(5),
                        },
                  ]}
                  source={Images.bookMark}
                >
                  <Text style={styles.twenty}>{t("transData.twenty")}</Text>
                  <Text style={styles.off}>{t("transData.off")}</Text>
                </ImageBackground>
                <Image style={styles.imgStyle} source={item.img} />
              </View>
              <View style={[external.mh_8]}>
                <Text
                  style={[
                    styles.title,
                    { color: colorText },
                    { textAlign: textRTLStyle },
                  ]}
                >
                  {t(item.title)}
                </Text>
                <Text style={[styles.subttile, { textAlign: textRTLStyle }]}>
                  {t(item.subttile)}
                </Text>
                <View
                  style={[external.fd_row, { flexDirection: viewRTLStyle }]}
                >
                  {offerData.map(
                    (item, index) =>
                      item.yellowstar && (
                        <View style={styles.yellowStar} key={index}>
                          <Star />
                        </View>
                      )
                  )}
                </View>
                <View
                  style={[
                    external.js_space,
                    external.ai_center,
                    styles.viewWidth,
                    {
                      flexDirection: viewRTLStyle,
                    },
                  ]}
                >
                  <View>
                    <Text
                      style={[
                        styles.price,
                        {
                          color: isDark ? colors.screenBg : colors.primary,
                        },
                      ]}
                    >
                      {currSymbol}
                      {(currPrice * item.price).toFixed(2)}
                    </Text>
                    {item.underPrice && (
                      <Text style={styles.underPrice}>
                        {currSymbol}
                        {(currPrice * item.underPrice).toFixed(2)}
                      </Text>
                    )}
                  </View>
                  <PrimaryBegContain />
                </View>
              </View>
            </Pressable>
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={[external.mh_10]}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default OfferZone;
