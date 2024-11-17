import React from "react";
import {
  Text,
  TextInput,
  View,
  StyleProp,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
  Alert,
} from "react-native";
import colors from "../../../theme/colors";
import { styles } from "./style.css";
import { useValues } from "../../../../App";
import { commonStyles } from "../../../styles/commonStyle";

const PincodeContainer: React.FC = () => {
  const { isDark, textRTLStyle, viewSelfRTLStyle, t } = useValues();
  const colorBg = isDark ? colors.textinputBG : colors.screenBg;
  const colorBgImg = isDark ? colors.primary : colors.screenBg;
  const colorText = isDark ? colors.screenBg : colors.primary;

  return (
    <View style={styles.inputView as StyleProp<ViewStyle>}>
      <TextInput
        placeholder={t("transData.pincode")}
        placeholderTextColor={colors.lightText}
        style={[
          styles.textInput as StyleProp<TextStyle>,
          { backgroundColor: colorBg },
          { textAlign: textRTLStyle },
        ]}
      />
      <TouchableOpacity
        onPress={() => Alert.alert("you just need to add to cart")}
        style={[
          styles.checkView as StyleProp<ViewStyle>,
          { backgroundColor: colorText },
          { alignSelf: viewSelfRTLStyle },
        ]}
      >
        <Text
          style={[
            commonStyles.whitefontThreeHund as StyleProp<TextStyle>,
            { color: colorBgImg },
          ]}
        >
          {t("transData.Check")}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PincodeContainer;
