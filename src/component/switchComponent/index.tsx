import React, { memo } from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import SwitchToggle from "react-native-switch-toggle";
import { styles } from "./style.css";
import colors from "../../theme/colors";

interface SwitchComponentProps {
  Enable: boolean;
  onPress: () => void;
}

const SwitchComponent: React.FC<SwitchComponentProps> = ({
  Enable,
  onPress,
}) => {
  return (
    <View>
      <SwitchToggle
        circleColorOff={colors.lightText}
        circleColorOn={colors.primary}
        backgroundColorOn={colors.lightText}
        backgroundColorOff={colors.primary}
        switchOn={Enable}
        onPress={onPress}
        circleStyle={styles.circle}
        containerStyle={styles.container}
      />
    </View>
  );
};

export default memo(SwitchComponent);
