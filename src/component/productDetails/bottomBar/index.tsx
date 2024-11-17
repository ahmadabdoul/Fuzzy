import React from "react";
import { Pressable, Text, View, PressableProps } from "react-native";
import { PrimaryBag } from "../../../utils/icon";
import { styles } from "./style.css";
import { useValues } from "../../../../App";
import colors from "../../../theme/colors";
import { commonStyles } from "../../../styles/commonStyle";
import { external } from "../../../styles/external.css";

interface BottomBarProps extends PressableProps {
  onPress?: () => void;
}

const BottomBar: React.FC<BottomBarProps> = ({ onPress }) => {
  const { isDark, t, currSymbol, currPrice, viewRTLStyle } = useValues();
  const colorBg = isDark ? colors.darkScreenBg : colors.layoutBg;

  return (
    <Pressable
      style={[styles.bottomView, { backgroundColor: colorBg }]}
      onPress={onPress}
    >
      <View style={[styles.backColor, { flexDirection: viewRTLStyle }]}>
        <View style={[external.fd_row]}>
          <View style={styles.bag}>
            <PrimaryBag />
          </View>
          <Text style={[commonStyles.whitefontThreeHund, external.mh_5]}>
            {t("transData.addToCart")}
          </Text>
        </View>
        <View>
          <View style={[external.fd_row]}>
            <View style={styles.verticleLine} />
            <Text style={[commonStyles.whitefontThreeHund]}>
              {currSymbol}
              {(currPrice * 102.25).toFixed(2)}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default BottomBar;
