import React from "react";
import {
  Text,
  TextInput,
  View,
  ScrollView,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import SafeContainer from "../../../../../commonComponent/safeContainer";
import colors from "../../../../../theme/colors";
import { style } from "./style.css";
import Input from "../../../../../commonComponent/input";
import HeadingContainer from "../../../../../commonComponent/headingContainer";
import AddCardNumberContainer from "../../../../../component/profileSettingContainer/paymentScreen/addCardNumber";
import { useValues } from "../../../../../../App";

interface AddCardProps {
  navigation: {
    goBack: (routeName?: string) => void;
  };
}

const AddCard: React.FC<AddCardProps> = ({ navigation }) => {
  const handleBack = () => {
    navigation.goBack();
  };

  const { isDark, viewRTLStyle, t } = useValues();
  const darkColor = isDark ? colors.textinputBG : colors.layoutBg;
  const colorTextColor = isDark ? colors.screenBg : colors.primary;

  return (
    <SafeContainer
      value={
        <ScrollView>
          <View>
            <HeadingContainer
              value={"transData.addCards"}
              onPress={handleBack}
            />
            <AddCardNumberContainer />
            <View
              style={[
                style.inputWrapView,
                { flexDirection: viewRTLStyle } as StyleProp<ViewStyle>,
              ]}
            >
              <View style={style.inputWrap}>
                <Text
                  style={[
                    style.label,
                    { color: colorTextColor } as StyleProp<TextStyle>,
                  ]}
                >
                  {t("transData.cvv")}
                </Text>
                <TextInput
                  style={[
                    style.inputDate,
                    { backgroundColor: darkColor } as StyleProp<ViewStyle>,
                  ]}
                  placeholder={"transData.cvv"}
                  placeholderTextColor={colors.lightText}
                />
              </View>

              <View style={style.inputWrap}>
                <Text
                  style={[
                    style.label,
                    { color: colorTextColor } as StyleProp<TextStyle>,
                  ]}
                >
                  {"transData.expiration"}
                </Text>
                <TextInput
                  style={[
                    style.inputCvv,
                    { backgroundColor: darkColor } as StyleProp<ViewStyle>,
                  ]}
                  placeholder="DD/MM/YY"
                  maxLength={17}
                  placeholderTextColor={colors.lightText}
                />
              </View>
            </View>
          </View>
          <View style={style.addCardButton}>
            <Input value={"Add Card"} onPress={handleBack} />
          </View>
        </ScrollView>
      }
    />
  );
};

export default AddCard;
