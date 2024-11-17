import React, { memo } from "react";
import { TouchableOpacity, View, GestureResponderEvent } from "react-native";
import { Tick, UnTick } from "../../utils/icon";
import { external } from "../../styles/external.css";

interface TickMarkProps {
  onPress: (event: GestureResponderEvent) => void;
  checked: boolean;
}

const TickMark: React.FC<TickMarkProps> = ({ onPress, checked }) => {
  return (
    <View>
      <TouchableOpacity style={[external.fd_row]} onPress={onPress}>
        {checked ? <Tick /> : <UnTick />}
      </TouchableOpacity>
    </View>
  );
};

export default memo(TickMark);
