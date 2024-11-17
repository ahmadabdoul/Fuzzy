import React from "react";
import { ScrollView, Text, View } from "react-native";
import SafeContainer from "../../commonComponent/safeContainer";
import HeadingContainer from "../../commonComponent/headingContainer";
import CartContainer from "../../component/profileSettingContainer/cart";
import SolidLine from "../../commonComponent/solidLine";
import { styles } from "./style.css";
import Input from "../../commonComponent/input";
import PromoCode from "../../component/checkOut/promoCode";
import OrderInfoContainer from "../../component/checkOut/orderInfo";
import { useValues } from "../../../App";
import colors from "../../theme/colors";
import { commonStyles } from "../../styles/commonStyle";
import { external } from "../../styles/external.css";

interface CheckoutProps {
  navigation: {
    navigate: (screenName: string) => void;
    goBack: (screenName?: string) => void;
  };
}

const Checkout: React.FC<CheckoutProps> = ({ navigation }) => {
  const handleChange = () => {
    navigation.navigate("ShippingAddress");
  };

  const { isDark, textRTLStyle, t } = useValues();

  return (
    <SafeContainer
      value={
        <ScrollView
          style={[external.mt_5, external.Pb_30]}
          showsVerticalScrollIndicator={false}
        >
          <HeadingContainer
            value={"transData.checkout"}
            onPress={() => navigation.goBack("")}
          />
          <CartContainer />
          <View style={[external.mv_5]}>
            <SolidLine />
          </View>
          <Text
            style={[
              commonStyles.primaryfontSixHund,
              { color: isDark ? colors.screenBg : colors.primary },
            ]}
          >
            {t("transData.promoCode")}
          </Text>
          <PromoCode />
          <Text
            style={[
              commonStyles.primaryfontSixHund,
              styles.orderInfo,
              { color: isDark ? colors.screenBg : colors.primary },
              { textAlign: textRTLStyle },
            ]}
          >
            {t("transData.orderInfo")}
          </Text>
          <OrderInfoContainer />
          <View style={[external.mv_15]}>
            <Input
              value={"transData.continuetoPayment"}
              onPress={handleChange}
            />
          </View>
        </ScrollView>
      }
    />
  );
};

export default Checkout;
