import React from "react";
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import { voucherData } from "../../data/voucherData";
import { styles } from "./style.css";
import SolidLine from "../../commonComponent/solidLine";
import { useValues } from "../../../App";
import colors from "../../theme/colors";
import Images from "../../utils/images";
import { useNavigation } from "@react-navigation/native";

interface VoucherItem {
  id: number; // Adjust type if necessary
  discountPrice: string;
  code: string;
  apply: string;
}

const VoucherContainer: React.FC = () => {
  const { isDark, textRTLStyle, viewRTLStyle, imageRTLStyle, t } = useValues();
  const darkGif = isDark ? Images.voucherDark : Images.voucher;
  const colorText = isDark ? colors.screenBg : colors.primary;
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {voucherData.map((item: VoucherItem) => (
        <ImageBackground
          style={[
            styles.couponBackground as StyleProp<ViewStyle>,
            { transform: [{ scale: imageRTLStyle }] },
          ]}
          resizeMode="stretch"
          source={darkGif}
          key={item.id}
        >
          <View style={styles.transformText as StyleProp<ViewStyle>}>
            <Text style={styles.couponOffer as StyleProp<TextStyle>}>
              {item.discountPrice}
            </Text>
            <Text style={styles.couponOfferOff as StyleProp<TextStyle>}>
              {t("transData.off")}
            </Text>
          </View>
          <View
            style={[
              styles.couponDetailsContainer as StyleProp<ViewStyle>,
              { transform: [{ scale: imageRTLStyle }] },
            ]}
          >
            <Text
              style={[
                styles.couponPayApp as StyleProp<TextStyle>,
                { color: colorText },
                { textAlign: textRTLStyle },
              ]}
            >
              {t("transData.gPay")}
            </Text>
            <Text
              style={[
                styles.couponPaying as StyleProp<TextStyle>,
                {
                  textAlign: textRTLStyle,
                  alignSelf: isDark ? "flex-start" : "flex-start",
                },
              ]}
            >
              {t("transData.phoneOff")}
            </Text>
            <SolidLine width={"93%"} marginVertical={10} />
            <View
              style={[
                styles.unlockOfferContainer as StyleProp<ViewStyle>,
                { flexDirection: viewRTLStyle },
              ]}
            >
              <Text style={styles.unlockOfferText as StyleProp<TextStyle>}>
                {t(item.code)}
              </Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text
                  style={[
                    styles.applyText as StyleProp<TextStyle>,
                    { color: colorText },
                  ]}
                >
                  {t(item.apply)}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      ))}
    </ScrollView>
  );
};

export default VoucherContainer;
