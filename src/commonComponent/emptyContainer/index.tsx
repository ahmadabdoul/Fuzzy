import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./style.css";
import HeadingContainer from "../headingContainer";
import Input from "../input";
import { useNavigation } from "@react-navigation/native";
import { useValues } from "../../../App";
import colors from "../../theme/colors";
import { windowHeight, windowWidth } from "../../theme/appConstant";
import { commonStyles } from "../../styles/commonStyle";
import { external } from "../../styles/external.css";

const EmptyContainer = ({
  img,
  subtitle,
  value,
  title,
  buttonText,
  inputs,
  height,
  width,
}) => {
  const navigation = useNavigation();
  const handleChnage = () => {
    navigation.goBack();
  };
  const { t, isDark } = useValues();
  const colorText = isDark ? colors.screenBg : colors.primary;
  const colorBgdark = isDark ? colors.darkScreenBg : colors.screenBg;
  return (
    <View style={[styles.container, { backgroundColor: colorBgdark }]}>
      <HeadingContainer value={value} onPress={handleChnage} />
      <View style={styles.viewContainer}>
        <Image
          source={img}
          style={[
            styles.image,
            { height: height || windowHeight(160) },
            { width: width || windowWidth(250) },
          ]}
        />
        <View style={styles.viewBottom}>
          <Text
            style={[styles.textStyle, external.ti_center, { color: colorText }]}
          >
            {t(title)}
          </Text>
          <Text
            style={[
              styles.subtitle,
              commonStyles.textsizeFiveHund,
              external.ti_center,
            ]}
          >
            {t(subtitle)}
          </Text>
        </View>

        {inputs && (
          <View style={[external.width_100, styles.inputView]}>
            <Input value={buttonText} onPress={() => navigation.goBack()} />
          </View>
        )}
      </View>
    </View>
  );
};

export default EmptyContainer;
