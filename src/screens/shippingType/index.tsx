import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import SafeContainer from "../../commonComponent/safeContainer";
import HeadingContainer from "../../commonComponent/headingContainer";
import styles from "./style.css";
import { shippingData } from "../../data/shippingData";
import RadioButton from "../../commonComponent/radioButton";
import Input from "../../commonComponent/input";
import { useValues } from "../../../App";
import colors from "../../theme/colors";
import { commonStyles } from "../../styles/commonStyle";
import { external } from "../../styles/external.css";

interface ShippingTypesProps {
  navigation: {
    navigate: (screenName: string) => void;
    goBack: (screenName?: string) => void;
  };
}

const ShippingTypes: React.FC<ShippingTypesProps> = ({ navigation }) => {
  const [Data, setData] = useState<number>(0);

  const paymentData = (id: number) => {
    setData(id === Data ? -1 : id);
  };

  const handleChange = () => {
    navigation.navigate("PaymentMethodScreen");
  };

  const { isDark, textRTLStyle, viewRTLStyle, t, currSymbol, currPrice } =
    useValues();
  const colorText = isDark ? colors.screenBg : colors.primary;
  const bgColor = isDark ? colors.primary : colors.layoutBg;
  const imgColor = isDark ? colors.textinputBG : colors.screenBg;
  const borderColor = isDark ? colors.textinputBG : colors.screenBg;

  return (
    <View style={[external.fx_1]}>
      <SafeContainer
        value={
          <View>
            <HeadingContainer
              value={"transData.chooseShipping"}
              onPress={() => navigation.goBack("")}
            />
            {shippingData.map((item, id) => (
              <Pressable
                key={id}
                style={[
                  styles.viewContainer,
                  { backgroundColor: bgColor },
                  { borderTopColor: borderColor },
                  { flexDirection: viewRTLStyle },
                ]}
                onPress={() => {
                  paymentData(id);
                }}
              >
                <View style={[styles.iconView, { backgroundColor: imgColor }]}>
                  {item.icon}
                </View>
                <View
                  style={[external.js_center, external.mh_8, { width: "50%" }]}
                >
                  <Text
                    style={[
                      commonStyles.fontsizeLargeHund,
                      { color: colorText },
                      { textAlign: textRTLStyle },
                    ]}
                  >
                    {t(item.title)}
                  </Text>
                  <Text
                    style={[
                      commonStyles.textsizeFiveHundMed,
                      {
                        textAlign: textRTLStyle,
                      },
                    ]}
                  >
                    {t(item.subtitle)}
                  </Text>
                </View>
                <View
                  style={[
                    external.ai_center,
                    external.fd_row,
                    { flexDirection: viewRTLStyle },
                  ]}
                >
                  <Text style={[commonStyles.fontsizeLargeHund, external.mr_8]}>
                    {currSymbol}
                    {(currPrice * item.price).toFixed(2)}
                  </Text>
                  <RadioButton
                    onPress={() => {
                      paymentData(id);
                    }}
                    checked={Data === id}
                  />
                </View>
              </Pressable>
            ))}
          </View>
        }
      />
      <View style={styles.applyButton}>
        <Input value={"transData.placeOrder"} onPress={handleChange} />
      </View>
    </View>
  );
};

export default ShippingTypes;
