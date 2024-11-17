import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { style } from "./style.css";
import { addressType } from "../../../data/addressType";
import RadioButton from "../../../commonComponent/radioButton";
import { useValues } from "../../../../App";
import colors from "../../../theme/colors";
import { commonStyles } from "../../../styles/commonStyle";
import { external } from "../../../styles/external.css";

const AddressType = () => {
  const [Data, setData] = useState(0);
  const paymentData = (id) => {
    setData(id === Data ? -1 : id);
  };
  const { isDark, t } = useValues();
  const colorText = isDark ? colors.screenBg : colors.primary;
  const bgColor = isDark ? colors.primary : colors.layoutBg;
  return (
    <View style={[external.mv_10, external.mt_15]}>
      <Text style={[commonStyles.fontsizeFiveHund, { color: colorText }]}>
        {t("transData.addresses")}
      </Text>
      <View style={[style.container, { backgroundColor: bgColor }]}>
        {addressType.map((item, id) => (
          <Pressable
            key={id}
            onPress={() => {
              paymentData(id);
            }}
          >
            <View style={style.title}>
              <RadioButton
                onPress={() => {
                  paymentData(id);
                }}
                checked={Data === id}
              />
              <Text
                style={[
                  commonStyles.fontsizeFiveHund,
                  external.mh_5,
                  { color: colorText },
                ]}
              >
                {t(item.title)}
              </Text>
              {id !== addressType.length - 1 && (
                <View style={style.verticleLine} />
              )}
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default AddressType;
