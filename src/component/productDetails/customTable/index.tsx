import React from "react";
import { Text, View, StyleProp, ViewStyle, TextStyle } from "react-native";
import SolidLine from "../../../commonComponent/solidLine";
import { windowWidth } from "../../../theme/appConstant";
import colors from "../../../theme/colors";
import { styles } from "./style.css";
import { tableData, tableDataTwo } from "../../../data/cutstomTableData";
import { useValues } from "../../../../App";
import { external } from "../../../styles/external.css";

// Define types for table data items
interface TableDataItem {
  title: string;
}

// Define component props
const CustomTable: React.FC = () => {
  const { isDark, viewRTLStyle, t } = useValues();

  const colorText = isDark ? colors.screenBg : colors.primary;
  const colorBgImgs = isDark ? colors.darkScreenBg : colors.screenBg;

  return (
    <View style={[styles.container, { backgroundColor: colorBgImgs }]}>
      <View
        style={[
          external.fd_row,
          external.ai_center,
          { flexDirection: viewRTLStyle } as StyleProp<ViewStyle>,
        ]}
      >
        {tableData.map((item: TableDataItem, index: number) => (
          <Text
            key={index}
            style={[
              styles.tableDataText as StyleProp<TextStyle>,
              index !== tableData.length - 1 && styles.borderRight,
            ]}
          >
            {t(item.title)}
          </Text>
        ))}
      </View>
      <SolidLine marginVertical={windowWidth(1)} color={colors.lightText} />
      <View
        style={[
          external.fd_row,
          external.ai_center,
          { flexDirection: viewRTLStyle } as StyleProp<ViewStyle>,
        ]}
      >
        {tableDataTwo.map((item: TableDataItem, index: number) => (
          <Text
            key={index}
            style={[
              styles.titleText as StyleProp<TextStyle>,
              { color: colorText },
              index !== tableDataTwo.length - 1 && styles.borderRight,
            ]}
          >
            {t(item.title)}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default CustomTable;
