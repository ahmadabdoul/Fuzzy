import React, { memo } from "react";
import { TouchableOpacity, View, GestureResponderEvent } from "react-native";
import { CircleIcon, CircleFillIcon } from "../../utils/icon";
import { external } from "../../styles/external.css";

interface RadioButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  checked: boolean;
}

const RadioButton: React.FC<RadioButtonProps> = ({ onPress, checked }) => {
  return (
    <View>
      <TouchableOpacity style={[external.fd_row]} onPress={onPress}>
        {checked ? <CircleFillIcon /> : <CircleIcon />}
      </TouchableOpacity>
    </View>
  );
};

export default memo(RadioButton);
