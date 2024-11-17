import React from "react";
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Text,
  View,
} from "react-native";
import styles from "./style.css";
import { useValues } from "../../../App";
import Images from "../../utils/images";

const AuthContainer = ({ title, value }) => {
  const { textRTLStyle, t } = useValues();
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Image
        style={{ position: "absolute", height: 287, width: "100%" }}
        source={require("../../assets/images/one.png")}
      ></Image>
      <View style={styles.viewMargin}>
        <Text style={[styles.bottomText, { textAlign: textRTLStyle }]}>
          {t(title)}
        </Text>
        {value}
      </View>
    </KeyboardAvoidingView>
  );
};

export default AuthContainer;
