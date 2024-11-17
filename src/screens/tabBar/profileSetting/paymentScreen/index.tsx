import React from "react";
import { Text, View, StyleProp, TextStyle, ViewStyle } from "react-native";
import SafeContainer from "../../../../commonComponent/safeContainer";
import SolidLine from "../../../../commonComponent/solidLine";
import HeadingContainer from "../../../../commonComponent/headingContainer";
import YourCardContainer from "../../../../component/profileSettingContainer/paymentScreen/yourCard";
import AddCardText from "../../../../component/profileSettingContainer/paymentScreen/addCardText";
import PaymentMode from "../../../../component/profileSettingContainer/paymentScreen/paymentMode";
import { useValues } from "../../../../../App";
import colors from "../../../../theme/colors";
import { useNavigation } from "@react-navigation/native";
import { external } from "../../../../styles/external.css";
import { commonStyles } from "../../../../styles/commonStyle";

interface PaymentScreenProps {
  show: boolean;
}

const PaymentScreen: React.FC<PaymentScreenProps> = ({ show }) => {
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.goBack();
  };

  const { isDark, textRTLStyle, t } = useValues();

  return (
    <SafeContainer
      value={
        <View>
          {show ? (
            <View />
          ) : (
            <HeadingContainer
              value={"transData.paymentMethod"}
              onPress={handleBack}
            />
          )}
          <View>
            <Text
              style={[
                commonStyles.sixHundSizeLarge,
                external.mt_15,
                external.mh_5,
                {
                  color: isDark ? colors.screenBg : colors.primary,
                } as StyleProp<TextStyle>,
                { textAlign: textRTLStyle } as StyleProp<TextStyle>,
              ]}
            >
              {t("transData.yourCard")}
            </Text>
            <YourCardContainer />
            <AddCardText />
            <SolidLine
              marginVertical={external.mv_5}
              color={isDark ? colors.textinputBG : colors.solidLine}
            />
            <Text
              style={[
                commonStyles.sixHundSizeLarge,
                external.mv_15,
                {
                  color: isDark ? colors.screenBg : colors.primary,
                } as StyleProp<TextStyle>,
                { textAlign: textRTLStyle } as StyleProp<TextStyle>,
              ]}
            >
              {t("transData.wallets")}
            </Text>
            <PaymentMode />
          </View>
        </View>
      }
    />
  );
};

export default PaymentScreen;
