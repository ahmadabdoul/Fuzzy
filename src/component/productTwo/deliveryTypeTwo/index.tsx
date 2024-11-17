import React from "react";
import { Text, View } from "react-native";
import { deliveryDataTwo } from "../../../data/productTwoData";
import { styles } from "./style.css";
import { useValues } from "../../../../App";
import colors from "../../../theme/colors";
import { external } from "../../../styles/external.css";
import { commonStyles } from "../../../styles/commonStyle";

const DeliveryTypeTwo: React.FC = () => {
  const { isDark, t } = useValues();
  const colorText = isDark ? colors.screenBg : colors.primary;
  const bgColor = isDark ? colors.darkScreenBg : colors.screenBg;

  return (
    <View style={[external.fd_row, external.mh_15]}>
      {deliveryDataTwo.map((item, index) => (
        <View
          style={[styles.container, { backgroundColor: bgColor }]}
          key={index}
        >
          <View>{item.icon}</View>
          <Text
            style={[
              commonStyles.PrimarysizeFourHund,
              styles.title,
              { color: colorText },
            ]}
          >
            {t(item.title)}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default DeliveryTypeTwo;
