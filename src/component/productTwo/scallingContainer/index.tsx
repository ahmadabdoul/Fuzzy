import React from "react";
import { Text, View } from "react-native";
import { styles } from "./style.css";
import { scaleData } from "../../../data/productTwoData";
import colors from "../../../theme/colors";
import { useValues } from "../../../../App";
import { external } from "../../../styles/external.css";
import { commonStyles } from "../../../styles/commonStyle";

const Scalling: React.FC = () => {
  const { isDark, viewRTLStyle, t } = useValues();
  const colorText = isDark ? colors.screenBg : colors.primary;
  const bgColor = isDark ? colors.darkScreenBg : colors.screenBg;
  const border = isDark ? colors.primary : colors.layoutBg;
  return (
    <View style={[external.fd_row, { flexDirection: viewRTLStyle }]}>
      {scaleData.map((item, index) => (
        <View
          style={[
            styles.heightView,
            { backgroundColor: bgColor },
            { borderColor: border },
          ]}
          key={index}
        >
          <View>{item.icon}</View>
          <Text
            style={[commonStyles.PrimarysizeFourHund, { color: colorText }]}
          >
            {t(item.title)}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default Scalling;
