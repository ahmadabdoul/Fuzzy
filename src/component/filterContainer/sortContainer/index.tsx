import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  ViewStyle,
  TextStyle,
  StyleProp,
} from "react-native";
import { useValues } from "../../../../App";
import RadioButton from "../../../commonComponent/radioButton";
import { sortByData } from "../../../data/filterScreenData";

import colors from "../../../theme/colors";
import { style } from "./style.css";
import { external } from "../../../styles/external.css";
import { commonStyles } from "../../../styles/commonStyle";

interface SortByDataItem {
  title: string;
}

const SortByContainer: React.FC = () => {
  const [data, setData] = useState<number>(0);

  const paymentData = (id: number) => {
    setData(id === data ? -1 : id);
  };

  const { isDark, viewRTLStyle, t } = useValues();
  const colorText = isDark ? colors.screenBg : colors.primary;

  return (
    <View style={[external.mt_15, external.mh_20]}>
      {sortByData.map((item: SortByDataItem, id: number) => (
        <Pressable
          key={id}
          onPress={() => {
            paymentData(id);
          }}
          style={[
            external.fd_row,
            external.ai_center,
            external.mb_15,
            { flexDirection: viewRTLStyle } as ViewStyle,
          ]}
        >
          <RadioButton
            onPress={() => {
              paymentData(id);
            }}
            checked={data === id}
          />
          <Text
            style={[
              commonStyles.PrimarysizeFourHund,
              external.ph_10,
              external.mt_2,
              style.title,
              { color: colorText } as TextStyle,
            ]}
          >
            {t(item.title)}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default SortByContainer;
