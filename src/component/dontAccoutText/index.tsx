import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  GestureResponderEvent,
} from "react-native";
import { styles } from "./style.css";
import { dontAccount, sign } from "../../constant";
import { useValues } from "../../../App";

interface DontaccountTextProps {
  onPress: (event: GestureResponderEvent) => void;
  singText?: string;
}

const DontaccountText: React.FC<DontaccountTextProps> = ({
  onPress,
  singText,
}) => {
  const { t } = useValues();

  return (
    <View style={styles.signUp}>
      <Text style={styles.dontText}>{dontAccount}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.signText}>{t(singText)}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DontaccountText;
