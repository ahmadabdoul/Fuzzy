import React, { useState, useRef } from "react";
import {
  View,
  Dimensions,
  Image,
  Animated,
  TouchableOpacity,
  Alert,
} from "react-native";
import Swiper from "react-native-swiper";
import { chairColors, productDetailsOneData } from "../../../data/productOne";
import colors from "../../../theme/colors";
import { useValues } from "../../../../App";
import { styles } from "./style.css";
import { external } from "../../../styles/external.css";

const { width, height } = Dimensions.get("window");
const cardWidth = width - 35;

const CarouselSliderTwo = () => {
  const { viewRTLStyle, isDark } = useValues();
  const barWidth = width - 160;
  const [progress, setProgress] = useState(new Animated.Value(0));
  const swiperRef = useRef(null);

  const handleIndexChanged = (index) => {
    const val =
      index === 0
        ? productDetailsOneData.length
        : productDetailsOneData.length === index + 1
        ? 1
        : index + 1;
    Animated.timing(progress, {
      toValue: barWidth / val,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Swiper
        ref={swiperRef}
        showsPagination={false}
        loop
        onIndexChanged={handleIndexChanged}
      >
        {productDetailsOneData.map((item, index) => (
          <View
            key={index}
            style={[
              styles.cardContainer,
              {
                width: cardWidth,
              },
            ]}
          >
            <View
              style={[
                styles.card,
                {
                  width: cardWidth,
                  height: height * 0.5,
                },
              ]}
            >
              <Image style={styles.cardText} source={item.img} />
            </View>
          </View>
        ))}
      </Swiper>
      <View
        style={[
          external.js_space,
          { flexDirection: viewRTLStyle, width: "100%" },
        ]}
      >
        <View
          style={[
            styles.barContainer,
            {
              width: barWidth,
              backgroundColor: isDark ? colors.darkScreenBg : colors.screenBg,
            },
          ]}
        >
          <Animated.View
            style={[
              styles.bar,
              {
                width: progress,
                backgroundColor: isDark ? colors.screenBg : colors.primary,
              },
            ]}
          />
        </View>
        <View style={[external.fd_row, external.ai_center]}>
          {chairColors.map((item, key) => (
            <TouchableOpacity
              onPress={() => Alert.alert("Only one color left")}
              key={key}
              style={[
                styles.chairColors,
                {
                  borderColor:
                    key === 0
                      ? colors.screenBg
                      : isDark
                      ? colors.primary
                      : colors.layoutBg,
                  backgroundColor: item.color,
                },
              ]}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default CarouselSliderTwo;
