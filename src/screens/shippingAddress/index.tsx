import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import SafeContainer from "../../commonComponent/safeContainer";
import HeadingContainer from "../../commonComponent/headingContainer";
import SavedAddressContainer from "../../component/profileSettingContainer/saveAddressContain";
import Input from "../../commonComponent/input";
import { style } from "./style.css";
import { useValues } from "../../../App";
import colors from "../../theme/colors";
import { commonStyles } from "../../styles/commonStyle";
import { external } from "../../styles/external.css";

interface ShippingAddressProps {
  navigation: {
    navigate: (screenName: string) => void;
    goBack: (screenName?: string) => void;
  };
}

const ShippingAddress: React.FC<ShippingAddressProps> = ({ navigation }) => {
  const handleChange = (screenName: string) => {
    navigation.navigate(screenName);
  };

  const { isDark, t } = useValues();

  return (
    <View style={[external.fx_1]}>
      <SafeContainer
        value={
          <View>
            <HeadingContainer
              value={"transData.shippingDetails"}
              onPress={() => navigation.goBack("")}
            />
            <SavedAddressContainer shipping={false} />
            <TouchableOpacity
              style={[
                style.addButton,
                {
                  backgroundColor: isDark
                    ? colors.textinputBG
                    : colors.layoutBg,
                },
                {
                  borderColor: isDark ? colors.textinputBG : colors.layoutBg,
                },
              ]}
              onPress={() => handleChange("NewAddress")}
            >
              <Text
                style={[
                  external.ti_center,
                  commonStyles.fontsizeFiveHund,
                  { color: isDark ? colors.screenBg : colors.primary },
                ]}
              >
                {t("transData.addNewAddress")}
              </Text>
            </TouchableOpacity>
          </View>
        }
      />
      <View style={style.applyButton}>
        <Input
          value={"transData.applySmall"}
          onPress={() => handleChange("ShippingTypes")}
        />
      </View>
    </View>
  );
};

export default ShippingAddress;
