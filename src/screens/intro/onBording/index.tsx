import React, { useEffect } from "react";
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  cancelAnimation,
  Easing,
} from "react-native-reanimated";
import Swiper from "react-native-swiper";
import colors from "../../../theme/colors";
import { LineJs, RightArow } from "../../../utils/icon";
import { onBordingSwiperData } from "../../../data/onBordingSwiper";
import { style } from "./style.css";
import { useValues } from "../../../../App";
import { LinearGradient } from "expo-linear-gradient";
import Images from "../../../utils/images";
import { external } from "../../../styles/external.css";
import { commonStyles } from "../../../styles/commonStyle";

type OnboardingProps = {
  navigation: {
    navigate: (screen: string) => void;
  };
};

const Onbording: React.FC<OnboardingProps> = ({ navigation }) => {
  const { t } = useValues();
  const rotateValue = useSharedValue(0);
  const rotation = useSharedValue(0);

  useEffect(() => {
    rotateValue.value = withTiming(
      1000,
      { duration: 10000, easing: Easing.linear },
      () => {
        rotateValue.value = 0;
      }
    );
  }, [rotateValue]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateZ: `${rotation.value}deg`,
        },
      ],
    };
  }, [rotation.value]);

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, {
        duration: 6000,
        easing: Easing.linear,
      }),
      200
    );
    return () => cancelAnimation(rotation);
  }, [rotation]);

  const handleChange = () => {
    navigation.navigate("SignIn");
  };

  return (
    <Swiper
      scrollEnabled={true}
      removeClippedSubviews={false}
      hardwareAccelerated={true}
      paginationStyle={style.pagination}
      activeDotStyle={style.activityDot}
      activeDotColor={colors.screenBg}
      dotColor={"#41515E"}
    >
      {onBordingSwiperData.map((item, key) => (
        <ImageBackground
          key={key}
          resizeMode="cover"
          style={style.imgBg}
          source={Images.onBording}
        >
          <View style={[external.ai_center, external.mt_15]}>
            <View style={style.viewRotation}>
              <Animated.View style={[style.animationView, animatedStyles]} />
            </View>
            <Image style={style.logoImage} source={Images.logo} />

            <View style={{ marginTop: item.marginTop }}>
              <Image
                style={[style.img, { height: item.height, width: item.width }]}
                source={item.img}
              />
            </View>
            <View style={[style.viewContainer, { marginTop: item.top }]}>
              <Text
                style={[
                  commonStyles.whitefontThreeHundsize,
                  external.ti_center,
                  style.titletext,
                  { fontFamily: "Poppins-Medium" },
                ]}
              >
                {t(item.title)}
              </Text>
              <LineJs />
              <Text
                style={[
                  commonStyles.textsizeFiveHund,
                  external.ti_center,
                  style.subtitleText,
                  { fontFamily: "Poppins-Medium" },
                ]}
              >
                {t("transData.OnBordingText")}
              </Text>
              <TouchableOpacity
                style={style.bottomArrow}
                onPress={handleChange}
              >
                <LinearGradient
                  start={{ x: 1.0, y: 0.0 }}
                  end={{ x: 1.0, y: 1.0 }}
                  style={style.linearBorder}
                  colors={[
                    colors.lightText,
                    colors.linearCenter,
                    colors.textinputBG,
                  ]}
                >
                  <View style={style.container}>
                    <RightArow changeColor />
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      ))}
    </Swiper>
  );
};

export default Onbording;
