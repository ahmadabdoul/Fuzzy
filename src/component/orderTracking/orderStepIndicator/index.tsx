import React, { useState } from "react";
import { Text, View } from "react-native";
import colors from "../../../theme/colors";
import { Box, CorrectMark, ParcelDelivered, Truck } from "../../../utils/icon";
import { trackerData } from "../../../data/orderTracker";
import { styles } from "./style.css";
import StepIndicator from "react-native-step-indicator";
import { useValues } from "../../../../App";
import { windowHeight } from "../../../theme/appConstant";
import { commonStyles } from "../../../styles/commonStyle";
const stepIndicatorStyles = {
  stepIndicatorSize: 50,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 5,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: colors.lightText,
  stepStrokeWidth: 5,
  stepStrokeFinishedColor: colors.lightText,
  stepStrokeUnFinishedColor: colors.screenBg,
  separatorFinishedColor: colors.textinputBG,
  separatorUnFinishedColor: colors.lightText,
  stepIndicatorFinishedColor: colors.primary,
  stepIndicatorUnFinishedColor: colors.screenBg,
  stepIndicatorCurrentColor: colors.screenBg,
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: "pink",
  stepIndicatorLabelFinishedColor: colors.screenBg,
  stepIndicatorLabelUnFinishedColor: colors.lightText,
  labelColor: colors.lightText,
  labelSize: 13,
};
const OrderStepIndicator = () => {
  const [currentPage, setCurrentPage] = useState(2);
  const { isDark, textRTLStyle, imageRTLStyle, t, isRTL } = useValues();
  const colorText = isDark ? colors.screenBg : colors.primary;
  const color = isDark ? colors.primary : colors.layoutBg;
  const labels = [
    "Cart",
    "Delivery Address",
    "Order Summary",
    "Payment Method",
    "Track",
  ];
  const icons = [
    <CorrectMark />,
    <CorrectMark />,
    <Box />,
    <Truck color={colors.lightText} colorWhite={colors.lightText} />,
    <ParcelDelivered />,
  ];
  return (
    <View>
      <View
        style={[
          styles.container,
          { backgroundColor: color },
          { transform: [{ scale: imageRTLStyle }] },
        ]}
      >
        <View style={styles.stepIndicator}>
          <StepIndicator
            customStyles={stepIndicatorStyles}
            stepCount={5}
            direction="vertical"
            currentPosition={currentPage}
            labels={labels}
            renderStepIndicator={({ position }) => icons[position]}
            renderLabel={({ position }) => {
              return (
                <View
                  style={[
                    styles.lableContainer,
                    isRTL
                      ? {
                          paddingRight: windowHeight(15),
                        }
                      : {
                          paddingLeft: windowHeight(15),
                        },
                    { transform: [{ scale: imageRTLStyle }] },
                  ]}
                >
                  <Text
                    style={[
                      commonStyles.fontsizeFiveHund,
                      { color: colorText },
                      { textAlign: textRTLStyle },
                    ]}
                  >
                    {t(trackerData[position].label)}
                  </Text>
                  <Text
                    style={[
                      commonStyles.textsizeFourHund,
                      { textAlign: textRTLStyle },
                    ]}
                  >
                    {t(trackerData[position].status)}
                  </Text>
                </View>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default OrderStepIndicator;
