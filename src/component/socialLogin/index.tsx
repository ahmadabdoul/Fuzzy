import React from "react";
import {
  Image,
  ImageSourcePropType,
  View,
  StyleProp,
  ViewStyle,
  ImageStyle,
} from "react-native";
import { styles } from "./style.css";

interface SocialLoginProps {
  img: ImageSourcePropType;
}

const SocialLogin: React.FC<SocialLoginProps> = ({ img }) => {
  return (
    <View style={styles.container as StyleProp<ViewStyle>}>
      <Image style={styles.img as StyleProp<ImageStyle>} source={img} />
    </View>
  );
};

export default SocialLogin;
