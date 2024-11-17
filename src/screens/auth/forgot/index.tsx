import React from "react";
import { ScrollView, View } from "react-native";
import AuthContainer from "../../../commonComponent/authContainer";
import { style } from "./style.css";
import InputText from "../../../commonComponent/inputText";
import Input from "../../../commonComponent/input";
import { EmailDark } from "../../../utils/icon";
import { external } from "../../../styles/external.css";

const Forgot: React.FC = ({ navigation }) => {
  const handleChange = () => {
    navigation.navigate("OtpVerification");
  };
  return (
    <AuthContainer
      title={"transData.forget"}
      value={
        <ScrollView
          style={style.primaryContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={[external.mv_15]}>
            <InputText
              title={"transData.email"}
              icon={<EmailDark />}
              placeholder={"transData.enterMail"}
            />
            <View style={style.inputView}>
              <Input
                value={"transData.sendOtp"}
                buttonStyle
                onPress={handleChange}
              />
            </View>
          </View>
        </ScrollView>
      }
    />
  );
};

export default Forgot;
