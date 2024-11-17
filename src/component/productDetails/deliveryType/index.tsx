import React from "react";
import { Text, View, StyleProp, ViewStyle, TextStyle } from "react-native";
import { deliveryData } from "../../../data/productOne";
import { styles } from "./style.css";
import { useValues } from "../../../../App";
import colors from "../../../theme/colors";
import { windowHeight } from "../../../theme/appConstant";
import { external } from "../../../styles/external.css";

interface DeliveryDataItem {
  icon: JSX.Element;
  title: string;
}

const DeliveryType: React.FC = () => {
  const { isRTL, isDark, viewRTLStyle, t, textRTLStyle } = useValues();
  const colorText = isDark ? colors.screenBg : colors.primary;
  const colorBgImgs = isDark ? colors.darkScreenBg : colors.screenBg;

  return (
    <View
      style={[
        styles.delivery as StyleProp<ViewStyle>,
        {
          backgroundColor: colorBgImgs,
          flexDirection: viewRTLStyle,
        } as StyleProp<ViewStyle>,
      ]}
    >
      {deliveryData.map((item: DeliveryDataItem, index: number) => (
        <View key={index}>
          <View
            style={[
              external.fd_row,
              external.ai_center,
              { flexDirection: viewRTLStyle } as StyleProp<ViewStyle>,
              {
                marginHorizontal: isRTL ? undefined : windowHeight(5),
              } as StyleProp<ViewStyle>,
            ]}
          >
            {item.icon}
            <Text
              style={[
                styles.deliveryText as StyleProp<TextStyle>,
                {
                  color: colorText,
                  textAlign: textRTLStyle,
                } as StyleProp<TextStyle>,
              ]}
            >
              {t(item.title)}
            </Text>
            {index !== deliveryData.length - 1 && (
              <View style={styles.verticleLine as StyleProp<ViewStyle>} />
            )}
          </View>
        </View>
      ))}
    </View>
  );
};

export default DeliveryType;
