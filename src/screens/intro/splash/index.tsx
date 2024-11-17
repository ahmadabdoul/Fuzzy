import React, { useEffect } from "react";
import { Image, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import images from "../../../utils/images";
import { style } from "./style.css";

type SplashProps = {
  navigation: StackNavigationProp<any, any>;
};

const Splash: React.FC<SplashProps> = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Onbording");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={style.container}>
      <Image style={style.fuzzyLogo} source={images.logo} />
    </View>
  );
};

export default Splash;
