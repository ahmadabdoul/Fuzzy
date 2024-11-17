import React from "react";
import { View } from "react-native";
import ProfileTextInput from "../../../../commonComponent/profileInputs";
import colors from "../../../../theme/colors";

const AddCardNumberContainer: React.FC = () => {
  return (
    <View>
      <ProfileTextInput
        title={"transData.cardNumber"}
        placeHolder={"transData.cardNumberplace"}
        color={colors.layoutBg}
      />
      <ProfileTextInput
        title={"transData.cardName"}
        placeHolder={"transData.cardHolderName"}
        color={colors.layoutBg}
      />
    </View>
  );
};

export default AddCardNumberContainer;
