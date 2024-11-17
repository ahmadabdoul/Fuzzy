import React from "react";
import { TouchableOpacity, StyleProp, ViewStyle } from "react-native";
import { styles } from "./style.css";
import { Edit } from "../../utils/icon";
import { useValues } from "../../../App";
import colors from "../../theme/colors";

interface EditIconProps {
  onPress: () => void;
}

const EditIcon: React.FC<EditIconProps> = ({ onPress }) => {
  const { isDark } = useValues();

  return (
    <TouchableOpacity
      style={[
        styles.editText,
        {
          backgroundColor: isDark ? colors.textinputBG : colors.screenBg,
        } as ViewStyle,
      ]}
      onPress={onPress}
    >
      <Edit color={isDark ? colors.solidLine : colors.editColor} />
    </TouchableOpacity>
  );
};

export default EditIcon;
