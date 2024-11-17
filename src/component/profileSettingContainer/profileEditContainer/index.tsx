import React from "react";
import { View, ViewStyle } from "react-native";
import ProfileTextInput from "../../../commonComponent/profileInputs";
import { Call, ProfileEdit, Sms } from "../../../utils/icon";
import colors from "../../../theme/colors";
import { useValues } from "../../../../App";
import { external } from "../../../styles/external.css";

const ProfileEditContainer: React.FC = () => {
  const { isDark } = useValues();
  const darkColor = isDark ? colors.linearCenter : colors.editColor;

  return (
    <View style={[external.mh_20] as ViewStyle}>
      <ProfileTextInput
        title={"transData.name"}
        icon={<ProfileEdit color={darkColor} />}
        placeHolder={"transData.martin"}
        icons={true}
        color={colors.layoutBg}
      />
      <ProfileTextInput
        title={"transData.email"}
        icon={<Sms color={darkColor} />}
        placeHolder={"transData.emailId"}
        icons={true}
        color={colors.layoutBg}
      />
      <ProfileTextInput
        title={"transData.phoneNumber"}
        icon={<Call color={colors.linearCenter} />}
        placeHolder={"transData.moNo"}
        icons={true}
        color={colors.layoutBg}
      />
    </View>
  );
};

export default ProfileEditContainer;
