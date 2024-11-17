import React from "react";
import { ScrollView, Text, View } from "react-native";
import AuthContainer from "../../../commonComponent/authContainer";
import { style } from "./style.css";
import InputText from "../../../commonComponent/inputText";
import Input from "../../../commonComponent/input";
import LinearBorderOrText from "../../../component/linearBorderOrText";
import DontaccountText from "../../../component/dontAccoutText";
import { EmailDark, Password, ProfileDisable } from "../../../utils/icon";
import { useValues } from "../../../../App";

const SignUp = ({ navigation }) => {
  
  const handleChnage = (screenName) => {
    navigation.navigate(screenName);
  };
  
  const { textRTLStyle, t } = useValues();
  return (
    <AuthContainer
      title={"transData.letsYouIn"}
      value={
        <ScrollView
          style={style.primaryContainer}
          showsVerticalScrollIndicator={false}
        >
          <Text style={[style.YouhaveMissedText, { textAlign: textRTLStyle }]}>
            {t("transData.youHaveMissed")}
          </Text>
          <InputText
            title={"transData.name"}
            icon={<ProfileDisable />}
            placeholder={"transData.enterName"}
          />
          <InputText
            title={"transData.email"}
            icon={<EmailDark />}
            placeholder={"transData.enterMail"}
          />
          <InputText
            title={"transData.password"}
            icon={<Password />}
            placeholder={"transData.enterPassword"}
          />
          <View style={style.inputView}>
            <Input
              value={"transData.signUp"}
              buttonStyle
              onPress={() => handleChnage("SignIn")}
            />
          </View>
          <LinearBorderOrText />
          <DontaccountText
            onPress={() => handleChnage("SignIn")}
            singText={"transData.sign"}
          />
        </ScrollView>
      }
    />
  );
};

export default SignUp;
