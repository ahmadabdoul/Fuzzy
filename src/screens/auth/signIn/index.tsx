import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { style } from "./style.css";
import InputText from "../../../commonComponent/inputText";
import Input from "../../../commonComponent/input";
import LinearBorderOrText from "../../../component/linearBorderOrText";
import SocialLogin from "../../../component/socialLogin";
import AuthContainer from "../../../commonComponent/authContainer";
import DontaccountText from "../../../component/dontAccoutText";
import CheckBox from "../../../commonComponent/checkBox";
import {
  EmailDark,
  Password,
  HidePassword,
  ShowPassword,
} from "../../../utils/icon";
import { useValues } from "../../../../App";
import { windowHeight, windowWidth } from "../../../theme/appConstant";
import { external } from "../../../styles/external.css";
import Images from "../../../utils/images";

const SignIn = ({ navigation }) => {
  const [checkedData, setCheckedData] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(true);

  const valData = () => {
    setCheckedData(!checkedData);
  };

  const handleChange = (screenName) => {
    navigation.navigate(screenName);
  };

  const handleReplace = () => {
    if (emailInput.length > 0 && passwordInput.length > 0) {
      if (emailInput.trim() !== "" && !validateEmailFormat(emailInput)) {
        setEmailError("Invalid email address");
      } else {
        setEmailError("");
        navigation.replace("DrawerScreen");
      }
    } else {
      if (emailInput.trim() === "") {
        setEmailError("Email is required");
      } else {
        setEmailError("");
      }
      if (passwordInput.trim() === "") {
        setPasswordError("Password is required");
      } else {
        setPasswordError("");
      }
    }
  };

  const handleEmailChange = (email) => {
    setEmailInput(email);
    setEmailError("");
  };

  const handlePasswordChange = (password) => {
    setPasswordInput(password);
    setPasswordError("");
  };

  const validateEmailFormat = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const showPass = (email) => {
    setPasswordVisible(!passwordVisible);
  };

  const { textRTLStyle, t, isRTL } = useValues();

  return (
    <AuthContainer
      title={"transData.letsYouIn"}
      value={
        <View style={style.primaryContainer}>
          <Text style={[style.YouhaveMissedText, { textAlign: textRTLStyle }]}>
            {t("transData.youHaveMissed")}
          </Text>
          <InputText
            title={"transData.email"}
            icon={<EmailDark />}
            placeholder={"transData.enterMail"}
            value={emailInput}
            onChangeText={handleEmailChange}
            errorMessage={emailError}
            onBlur={() => {
              validateEmailFormat(emailInput);
            }}
          />
          {emailError && (
            <Text style={[style.errorMessage, { textAlign: textRTLStyle }]}>
              {emailError}
            </Text>
          )}
          <View style={[external.js_center]}>
            <InputText
              title={"transData.password"}
              secureTextEntry={passwordVisible}
              icon={<Password />}
              placeholder={"transData.enterPassword"}
              value={passwordInput}
              onChangeText={handlePasswordChange}
              errorMessage={passwordError}
            />
            <TouchableOpacity
              onPress={showPass}
              style={[
                isRTL
                  ? {
                      left: windowWidth(14),
                    }
                  : {
                      right: windowWidth(14),
                    },
                style.password,
              ]}
            >
              {passwordVisible ? <HidePassword /> : <ShowPassword />}
            </TouchableOpacity>
          </View>
          {passwordError && (
            <Text style={[style.errorMessage, { textAlign: textRTLStyle }]}>
              {passwordError}
            </Text>
          )}

          <View style={style.checkView}>
            <CheckBox onPress={valData} checked={checkedData} />
            <Text style={style.rememberText}>{t("transData.remember")}</Text>
            <TouchableOpacity onPress={() => handleChange("Forgot")}>
              <Text style={style.forgetText}>{t("transData.forget")}</Text>
            </TouchableOpacity>
          </View>
          <View style={style.inputView}>
            <Input
              value={"transData.sign"}
              buttonStyle
              onPress={handleReplace}
            />
          </View>
          <LinearBorderOrText />
          <DontaccountText
            onPress={() => handleChange("SignUp")}
            singText={"transData.signUp"}
          />
        </View>
      }
    />
  );
};

export default SignIn;
