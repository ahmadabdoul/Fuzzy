import React from "react";
import {
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { styles } from "./style.css";
import { useValues } from "../../../../App";
import colors from "../../../theme/colors";
import { commonStyles } from "../../../styles/commonStyle";
interface ProfileEditContainerBottomTabProps {
  LeftSideBottomSpace?: string;
  rightSideBottomSpace?: string;
  leftsideStyle?: StyleProp<ViewStyle>;
  rightsideStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
  left?: boolean;
  onPressLeft?: () => void;
}
const ProfileEditContainerBottomTab: React.FC<
  ProfileEditContainerBottomTabProps
> = ({
  LeftSideBottomSpace,
  rightSideBottomSpace,
  leftsideStyle,
  rightsideStyle,
  onPress,
  left,
  onPressLeft,
}) => {
  const { isDark, viewRTLStyle, t, currSymbol, currPrice } = useValues();
  return (
    <View
      style={[
        isDark ? styles.Darkcontainer : styles.container,
        { backgroundColor: isDark ? colors.darkScreenBg : colors.screenBg },
      ]}
    >
      <View>
        <View
          style={[styles.viewContainerHeight, { flexDirection: viewRTLStyle }]}
        >
          {left ? (
            <TouchableOpacity style={leftsideStyle} onPress={onPressLeft}>
              <Text style={[styles.leftSideTextColor]}>
                {t(LeftSideBottomSpace)}
              </Text>
            </TouchableOpacity>
          ) : (
            <View style={leftsideStyle}>
              <Text style={[commonStyles.textsizeFourHund]}>
                {t("transData.totalPrice")}
              </Text>
              <Text
                style={[
                  styles.price,
                  { color: isDark ? colors.screenBg : colors.primary },
                ]}
              >
                {currSymbol}
                {(currPrice * 304).toFixed(2)}
              </Text>
            </View>
          )}
          <TouchableOpacity style={rightsideStyle} onPress={onPress}>
            <Text
              style={[
                styles.rightSideTextColor,
                { color: isDark ? colors.primary : colors.screenBg },
              ]}
            >
              {t(rightSideBottomSpace)}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfileEditContainerBottomTab;
