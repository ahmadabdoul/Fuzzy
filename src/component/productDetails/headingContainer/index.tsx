import React from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

import { UpArrow } from "../../../utils/icon";
import SolidLine from "../../../commonComponent/solidLine";
import colors from "../../../theme/colors";
import { useValues } from "../../../../App";
import { external } from "../../../styles/external.css";
import { commonStyles } from "../../../styles/commonStyle";

const HeadingContainer = ({ title }) => {
  const { t, isDark, viewRTLStyle } = useValues();
  const colorText = isDark ? colors.screenBg : colors.primary;
  return (
    <>
      <View
        style={[
          external.mt_15,
          external.fd_row,
          external.ai_center,
          external.js_space,
          external.ph_5,
          { flexDirection: viewRTLStyle },
        ]}
      >
        <Text style={[commonStyles.fontsizeFiveHund, { color: colorText }]}>
          {t(title)}
        </Text>
        <TouchableOpacity
          onPress={() => Alert.alert("You have two step left for checkout")}
        >
          <UpArrow />
        </TouchableOpacity>
      </View>
      <View style={[external.mt_3]}>
        <SolidLine
          marginVertical={0.5}
          color={isDark ? colors.textinputBG : colors.layoutBg}
        />
      </View>
    </>
  );
};

export default HeadingContainer;
