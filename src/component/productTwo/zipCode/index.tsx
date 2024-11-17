import React from "react";
import { Text, View } from "react-native";
import colors from "../../../theme/colors";
import PincodeContainer from "../../productDetails/pincod";
import DeliveryTypeTwo from "../deliveryTypeTwo";
import { useValues } from "../../../../App";
import { commonStyles } from "../../../styles/commonStyle";
import { external } from "../../../styles/external.css";

const ZipCode: React.FC = () => {
  const { isDark, textRTLStyle, t } = useValues();
  const colorText = isDark ? colors.screenBg : colors.primary;
  const border = isDark ? colors.primary : colors.layoutBg;
  return (
    <View style={[external.mt_15, { backgroundColor: border }]}>
      <View style={[external.mv_15, external.mh_20]}>
        <Text
          style={[
            commonStyles.fontsizeFiveHund,
            { color: colorText },
            { textAlign: textRTLStyle },
          ]}
        >
          {t("transData.checkDelivery")}
        </Text>
        <Text
          style={[commonStyles.textsizeFiveHund, { textAlign: textRTLStyle }]}
        >
          {t("transData.pincodeCheck")}
        </Text>
        <PincodeContainer />
      </View>
      <DeliveryTypeTwo />
    </View>
  );
};

export default ZipCode;
