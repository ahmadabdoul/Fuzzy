import React from "react";
import { ScrollView, View } from "react-native";
import { style } from "./style.css";
import AuthContainer from "../../../commonComponent/authContainer";
import InputText from "../../../commonComponent/inputText";
import Input from "../../../commonComponent/input";
import { Password } from "../../../utils/icon";

const NewpassWord: React.FC = ({ navigation }) => {
  const handleChange = () => {
    navigation.navigate("SignIn");
  };
  return (
    <AuthContainer
      title={"transData.createPassword"}
      value={
        <ScrollView
          style={style.primaryContainer}
          showsVerticalScrollIndicator={false}
        >
          <InputText
            title={"transData.password"}
            icon={<Password />}
            placeholder={"transData.enterPassword"}
          />
          <InputText
            title={"transData.password"}
            icon={<Password />}
            placeholder={"transData.enterConfirm"}
          />
          <View style={style.inputView}>
            <Input
              value={"transData.ResetPassword"}
              buttonStyle
              onPress={handleChange}
            />
          </View>
        </ScrollView>
      }
    />
  );
};

export default NewpassWord;
