import React from "react";
import { Text, View, Image } from "react-native";
import colors from "../../../theme/colors";
import SolidLine from "../../../commonComponent/solidLine";
import { CheckoutData } from "../../../data/checkOutData";
import { style } from "./style.css";
import { useValues } from "../../../../App";
import { external } from "../../../styles/external.css";
import Images from "../../../utils/images";
import { commonStyles } from "../../../styles/commonStyle";

interface OrderInfoContainerProps {
  show?: boolean;
  marginTop?: number;
}

const OrderInfoContainer: React.FC<OrderInfoContainerProps> = ({
  show,
  marginTop,
}) => {
  const { isDark, textRTLStyle, viewRTLStyle, t, currSymbol, currPrice } =
    useValues();
  const colorBg = isDark ? colors.primary : colors.layoutBg;
  const colorText = isDark ? colors.screenBg : colors.primary;

  return (
    <View
      style={[
        style.orderInfoView,
        { marginTop: marginTop || 10 },
        { backgroundColor: colorBg },
      ]}
    >
      {show && (
        <View>
          <View
            style={[
              external.fd_row,
              external.mh_20,
              { flexDirection: viewRTLStyle },
            ]}
          >
            <View
              style={[
                style.backgoundContainer,
                { backgroundColor: colorBg },
                { flexDirection: viewRTLStyle },
              ]}
            >
              <Image style={style.imgBuddyChair} source={Images.BuddyChair} />
            </View>
            <View
              style={[
                external.mt_5,
                external.ph_5,
                external.js_space,
                external.as_center,
                { width: "62%" },
              ]}
            >
              <Text
                style={[
                  commonStyles.fontsizeFiveHund,
                  { color: colorText },
                  { textAlign: textRTLStyle },
                ]}
              >
                {t("transData.buddyChair")}
              </Text>
              <Text
                style={[
                  commonStyles.textsizeFiveHund,
                  { textAlign: textRTLStyle },
                ]}
              >
                {t("transData.qty")}
              </Text>
            </View>
            <View style={[external.js_center]}>
              <Text style={[commonStyles.fontsizeFiveHund]}>
                {currSymbol}
                {(currPrice * 304).toFixed(2)}
              </Text>
            </View>
          </View>
          <View style={[external.mt_5, external.mh_20]}>
            <SolidLine color={isDark ? colors.textinputBG : colors.solidLine} />
          </View>
        </View>
      )}
      {CheckoutData.map((item, index) => (
        <View
          style={[style.viewContainer, { flexDirection: viewRTLStyle }]}
          key={index}
        >
          <Text style={[commonStyles.textsizeFiveHund]}>{t(item.title)}</Text>
          <Text style={[commonStyles.fontsizeFiveHund, { color: colorText }]}>
            {currSymbol}
            {(currPrice * item.price).toFixed(2)}
          </Text>
        </View>
      ))}
      <View style={[external.mh_20]}>
        <SolidLine color={colors.lightText} marginVertical={14} />
      </View>
      <View style={[style.titleAmountView, { flexDirection: viewRTLStyle }]}>
        <Text
          style={[
            commonStyles.fontsizeFiveHund,
            external.Pb_10,
            { color: colorText },
          ]}
        >
          {t("transData.totalAmount")}
        </Text>
        <Text style={[commonStyles.sixHundSizeLarge, { color: colorText }]}>
          {currSymbol}
          {(currPrice * 324).toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

export default OrderInfoContainer;
