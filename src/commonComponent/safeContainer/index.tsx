import React, { memo } from "react";
import { SafeAreaView, View } from "react-native";
import colors from "../../theme/colors";
import { useValues } from "../../../App";
import { external } from "../../styles/external.css";

interface SafeContainerProps {
  value: any;
}

const SafeContainer: React.FC<SafeContainerProps> = ({ value }) => {
  const { isDark } = useValues();

  return (
    <SafeAreaView
      style={[
        external.fx_1,
        {
          backgroundColor: isDark ? colors.darkScreenBg : colors.screenBg,
        },
      ]}
    >
      <View style={[external.mh_20]}>{value}</View>
    </SafeAreaView>
  );
};

export default memo(SafeContainer);
