import React, { memo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./style.css";
import { Back } from "../../utils/icon";
import { useValues } from "../../../App";
import colors from "../../theme/colors";
import { external } from "../../styles/external.css";

interface HeadingContainerProps {
  value: string;
  onPress: () => void;
}

const HeadingContainer: React.FC<HeadingContainerProps> = ({
  value,
  onPress,
}) => {
  const { isDark, viewRTLStyle, imageRTLStyle, t } = useValues();

  return (
    <View style={[styles.backTouch, { flexDirection: viewRTLStyle }]}>
      <TouchableOpacity
        onPress={onPress}
        style={[external.fg_half, { flexDirection: viewRTLStyle }]}
      >
        <View style={{ transform: [{ scale: imageRTLStyle }] }}>
          <Back color={isDark ? colors.screenBg : colors.primary} />
        </View>
      </TouchableOpacity>
      <Text
        style={[
          styles.headingText,
          { color: isDark ? colors.screenBg : colors.primary },
        ]}
      >
        {t(value)}
      </Text>
    </View>
  );
};

export default memo(HeadingContainer);
