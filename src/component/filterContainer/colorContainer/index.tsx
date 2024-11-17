import React, { useState } from "react";
import {
  Pressable,
  Text,
  View,
  ViewStyle,
  TextStyle,
  StyleSheet,
} from "react-native";
import { colorData } from "../../../data/filterScreenData";
import { styles } from "./style.css";

import TickMark from "../../../commonComponent/tickMark";
import { useValues } from "../../../../App";
import colors from "../../../theme/colors";
import { external } from "../../../styles/external.css";
import { commonStyles } from "../../../styles/commonStyle";

interface ColorDataItem {
  color: string;
  title: string;
  number: string;
}

const ColorContainer: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [done, setDone] = useState<boolean>(false);
  const { isDark, textRTLStyle, viewRTLStyle, t } = useValues();

  const colorBg = isDark ? colors.primary : colors.layoutBg;
  const colorBgImg = isDark ? colors.bgColordark : colors.screenBg;
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

  const toggleSelectAll = () => {
    if (done) {
      setSelectedItems([]);
    } else {
      setSelectedItems(colorData.map((_, id) => id));
    }
    setDone(!done);
  };

  return (
    <View style={[external.mt_15, external.mh_15]}>
      <Pressable
        style={[
          styles.selectAllView,
          { backgroundColor: colorBg },
          { flexDirection: viewRTLStyle },
        ]}
        onPress={toggleSelectAll}
      >
        <View
          style={[
            external.fd_row,
            external.ai_center,
            { flexDirection: viewRTLStyle },
          ]}
        >
          <TickMark onPress={toggleSelectAll} checked={done} />
          <Text
            style={[
              commonStyles.fontsizeFiveHund,
              external.ph_13,
              styles.title,
              { color: colorText },
            ]}
          >
            {t("transData.selectAll")}
          </Text>
        </View>
      </Pressable>
      {colorData.map((item: any, id: number) => {
        const isSelected = selectedItems.includes(id);
        return (
          <Pressable
            key={id}
            style={[
              external.fd_row,
              external.ai_center,
              external.mt_10,
              { flexDirection: viewRTLStyle },
            ]}
            onPress={() => toggleSelection(id)}
          >
            <View
              style={[
                styles.coreContainer,
                { backgroundColor: colorBg },
                { flexDirection: viewRTLStyle },
              ]}
            >
              <View style={[external.mh_5, { elevation: 0.1 }]}>
                <TickMark
                  onPress={() => toggleSelection(id)}
                  checked={isSelected}
                />
              </View>
              <View style={[styles.colorBorder, { borderColor: item.color }]}>
                <View
                  style={[styles.container, { backgroundColor: item.color }]}
                />
              </View>
              <Text
                style={[
                  commonStyles.PrimarysizeFourHund,
                  external.mt_3,
                  external.fg_9,
                  styles.title,
                  { color: colorText },
                  { textAlign: textRTLStyle },
                ]}
              >
                {t(item.title)}
              </Text>
              <Text
                style={[
                  commonStyles.PrimarysizeFourHund,
                  external.mt_2,
                  { color: colorText },
                ]}
              >
                {item.number}
              </Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};

export default ColorContainer;
