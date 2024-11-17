import React, { memo } from "react";
import { TouchableOpacity, View } from "react-native";
import { CheckMark, UncheckMark } from "../../utils/icon";
import { external } from "../../styles/external.css";

interface CheckBoxProps {
  onPress: () => void;
  checked: boolean;
}

const CheckBox: React.FC<CheckBoxProps> = ({ onPress, checked }) => {
  return (
    <View>
      <TouchableOpacity style={[external.fd_row]} onPress={onPress}>
        {checked ? <CheckMark /> : <UncheckMark />}
      </TouchableOpacity>
    </View>
  );
};

export default memo(CheckBox);
