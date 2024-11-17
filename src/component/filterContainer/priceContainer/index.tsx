import React, { useState } from "react";
import { View, Text, ViewStyle, TextStyle, StyleProp } from "react-native";
import MultiSlider from "@ptomasroos/react-native-multi-slider";

import { style } from "./style.css";
import colors from "../../../theme/colors";
import { useValues } from "../../../../App";
import { external } from "../../../styles/external.css";
import { commonStyles } from "../../../styles/commonStyle";

// Define types for the MultiSlider component values
type MultiSliderValues = number[];

const PriceContainer: React.FC = () => {
  const [values, setValues] = useState<MultiSliderValues>([0, 1000]);

  const handleValuesChange = (newValues: MultiSliderValues) => {
    setValues(newValues);
  };

  const { isDark, viewRTLStyle, currSymbol, t } = useValues();
  const colorText = isDark ? colors.screenBg : colors.primary;

  return (
    <View style={[external.mt_10, external.fx_1]}>
      <View
        style={[
          external.fd_row,
          external.js_space,
          external.mh_20,
          { flexDirection: viewRTLStyle } as ViewStyle,
        ]}
      >
        <Text
          style={[
            commonStyles.fontsizeFiveHund,
            external.ph_5,
            { color: colorText } as TextStyle,
          ]}
        >
          {t("transData.priceRange")}
        </Text>
        <Text
          style={[
            commonStyles.fontsizeFiveHund,
            external.ti_center,
            external.ph_10,
            { color: colorText } as TextStyle,
          ]}
        >
          {values[0]}
          {currSymbol} - {values[1]}
          {currSymbol}
        </Text>
      </View>
      <MultiSlider
        values={values}
        sliderLength={210}
        onValuesChange={handleValuesChange}
        min={0}
        max={1000}
        step={1}
        allowOverlap
        snapped
        trackStyle={style.trackStyle}
        selectedStyle={{
          backgroundColor: colors.primary,
        }}
        markerStyle={style.markerStyle}
        containerStyle={style.containerStyle}
      />
    </View>
  );
};

export default PriceContainer;
