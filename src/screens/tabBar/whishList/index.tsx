import React from "react";
import { Text, View, StyleProp, TextStyle, ViewStyle } from "react-native";
import SafeContainer from "../../../commonComponent/safeContainer";
import WhishlitstViewContainer from "../../../component/profileSettingContainer/whishListContainer";
import { style } from "./style.css";
import { useValues } from "../../../../App";
import colors from "../../../theme/colors";
import { external } from "../../../styles/external.css";

interface WhishListProps {
  navigation?: any;
}

const WhishList: React.FC<WhishListProps> = ({ navigation }) => {
  const { isDark, t } = useValues();

  return (
    <SafeContainer
      value={
        <View style={[external.mt_20]}>
          <Text
            style={[
              style.headingText as StyleProp<TextStyle>,
              { color: isDark ? colors.screenBg : colors.primary },
            ]}
          >
            {t("transData.wishLists")}
          </Text>
          <WhishlitstViewContainer />
        </View>
      }
    />
  );
};

export default WhishList;
