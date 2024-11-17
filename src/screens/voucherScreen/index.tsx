import React from "react";
import { View } from "react-native";
import SafeContainer from "../../commonComponent/safeContainer";
import HeadingContainer from "../../commonComponent/headingContainer";
import VoucherContainer from "../../component/voucherContainer";

interface VoucherScreenProps {
  navigation: {
    goBack: () => void;
  };
}

const VoucherScreen: React.FC<VoucherScreenProps> = ({ navigation }) => {
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <SafeContainer
      value={
        <View>
          <HeadingContainer value={"transData.coupons"} onPress={handleBack} />
          <VoucherContainer />
        </View>
      }
    />
  );
};

export default VoucherScreen;
