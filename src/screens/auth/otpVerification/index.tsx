import React from "react";
import { ScrollView, Text, View } from "react-native";
import AuthContainer from "../../../commonComponent/authContainer";
import { style } from "./style.css";
import Input from "../../../commonComponent/input";
import OtpTextInput from "react-native-text-input-otp";
import { useValues } from "../../../../App";

const OtpVerification: React.FC = ({ navigation }) => {
  const handleChange = () => {
    navigation.navigate("NewpassWord");
  };
  const [otp, setOtp] = React.useState("");
  const { t } = useValues();

  return (
    <AuthContainer
      title={"transData.otpVerify"}
      value={
        <ScrollView
          style={style.primaryContainer}
          showsVerticalScrollIndicator={false}
        >
          <Text style={style.YouhaveMissedText}>
            {t("transData.verificationCode")}
          </Text>
          <Text style={style.mobileNoText}>{t("transData.moNo")}</Text>
          <View style={style.viewOtp}>
            <OtpTextInput
              style={style.otpTextInput}
              otp={otp}
              setOtp={setOtp}
              digits={5}
              focusedStyle={style.focusStyle}
              fontStyle={style.fontStyle}
            />
            <View style={style.inputView}>
              <Input
                value={"transData.verify"}
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

export default OtpVerification;
