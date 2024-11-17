import React from "react";
import { View, Text, ScrollView } from "react-native";
import colors from "../../theme/colors";
import HeadingContainer from "../../commonComponent/headingContainer";
import SolidLine from "../../commonComponent/solidLine";
import OrderInfoContainer from "../../component/checkOut/orderInfo";
import Input from "../../commonComponent/input";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import OrderStepIndicator from "../../component/orderTracking/orderStepIndicator";
import { useValues } from "../../../App";
import { commonStyles } from "../../styles/commonStyle";
import { external } from "../../styles/external.css";

const OrderTracker: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  const stackNavigation = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "DrawerScreen" }],
    });
  };

  const { isDark, textRTLStyle, viewRTLStyle, t, currSymbol, currPrice } =
    useValues();
  const colorText = isDark ? colors.screenBg : colors.primary;

  return (
    <>
      <ScrollView
        style={[
          commonStyles.flexBgContainer,
          { backgroundColor: isDark ? colors.darkScreenBg : colors.screenBg },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View style={[external.mh_20]}>
          <HeadingContainer
            value={"transData.orderTracker"}
            onPress={() => navigation.goBack()}
          />
          <View style={[external.mt_10]}>
            <Text
              style={[
                commonStyles.h1primary,
                { color: colorText },
                { textAlign: textRTLStyle },
              ]}
            >
              {t("transData.date")}
            </Text>
            <View
              style={[
                external.js_space,
                external.fd_row,
                external.ai_center,
                { flexDirection: viewRTLStyle },
              ]}
            >
              <Text
                style={[commonStyles.primaryfontSixHund, { color: colorText }]}
              >
                {t("transData.order")}
              </Text>
              <View style={[external.fd_row]}>
                <Text
                  style={[
                    commonStyles.fontsizeFiveHund,
                    { color: isDark ? colors.lightText : colors.lightText },
                  ]}
                >
                  {t("transData.amt")}
                </Text>
                <Text
                  style={[commonStyles.sixHundSizeLarge, { color: colorText }]}
                >
                  {currSymbol}
                  {(currPrice * 324).toFixed(2)}
                </Text>
              </View>
            </View>
            <View style={[external.mv_10]}>
              <SolidLine color={colors.lightText} />
            </View>
          </View>
        </View>
        <OrderStepIndicator />
        <View style={[external.mh_20]}>
          <OrderInfoContainer />
        </View>
        <View style={[external.mv_15, external.mh_20]}>
          <Input
            value={"transData.continueShopping"}
            onPress={stackNavigation}
          />
        </View>
      </ScrollView>
    </>
  );
};
export default OrderTracker;
