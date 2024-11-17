import React from "react";
import { Text, View } from "react-native";
import { styles } from "./style.css";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../../theme/colors";
import { oR } from "../../constant";

const LinearBorderOrText: React.FC = () => {
  return (
    <View style={[styles.linearView]}>
      <LinearGradient
        start={{ x: 0.0, y: 3.0 }}
        end={{ x: 1.0, y: 5.0 }}
        style={styles.linearBorderStyle}
        colors={[colors.textinputBG, colors.linearCenter, colors.lightText]}
      />
      <Text style={[styles.orText]}>{oR}</Text>
      <LinearGradient
        start={{ x: 0.0, y: 3.0 }}
        end={{ x: 1.0, y: 5.0 }}
        style={styles.linearBorderStyle}
        colors={[colors.lightText, colors.linearCenter, colors.textinputBG]}
      />
    </View>
  );
};

export default LinearBorderOrText;
