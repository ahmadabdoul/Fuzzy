import React, { useState } from "react";
import {
  Pressable,
  Text,
  View,
  ViewStyle,
  TextStyle,
  StyleSheet,
} from "react-native";
import { dimensionData } from "../../../data/filterScreenData";
import TickMark from "../../../commonComponent/tickMark";
import { style } from "./style.css";
import { useValues } from "../../../../App";
import colors from "../../../theme/colors";
import { external } from "../../../styles/external.css";
import { commonStyles } from "../../../styles/commonStyle";

interface DimensionDataItem {
  title: string;
}

const Dimension: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const { isDark, viewRTLStyle, t } = useValues();
  const colorText = isDark ? colors.screenBg : colors.primary;

  const toggleSelection = (id: number) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(id)) {
        return prevSelectedItems.filter((item) => item !== id);
      } else {
        return [...prevSelectedItems, id];
      }
    });
  };

  return (
    <View style={[external.mt_15, external.mh_20]}>
      {dimensionData.map((item: DimensionDataItem, id: number) => {
        const isSelected = selectedItems.includes(id);
        return (
          <Pressable
            key={id}
            onPress={() => toggleSelection(id)}
            style={[
              external.fd_row,
              external.ai_center,
              external.mb_15,
              { flexDirection: viewRTLStyle },
            ]}
          >
            <View>
              <TickMark
                onPress={() => toggleSelection(id)}
                checked={isSelected}
              />
            </View>

            <Text
              style={[
                commonStyles.PrimarysizeFourHund,
                external.ph_10,
                external.mt_3,
                style.title,
                { color: colorText },
              ]}
            >
              {t(item.title)}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default Dimension;
