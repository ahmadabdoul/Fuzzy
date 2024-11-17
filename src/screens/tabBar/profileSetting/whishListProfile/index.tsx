import React from "react";
import { View } from "react-native";
import SafeContainer from "../../../../commonComponent/safeContainer";
import WhishlitstViewContainer from "../../../../component/profileSettingContainer/whishListContainer";
import HeadingContainer from "../../../../commonComponent/headingContainer";

interface WhishListProfileProps {
  navigation: {
    goBack: (key?: string) => void;
  };
}

const WhishListProfile: React.FC<WhishListProfileProps> = ({ navigation }) => {
  const handleBack = () => {
    navigation.goBack("");
  };

  return (
    <SafeContainer
      value={
        <View>
          <HeadingContainer
            value={"transData.wishLists"}
            onPress={handleBack}
          />
          <WhishlitstViewContainer />
        </View>
      }
    />
  );
};

export default WhishListProfile;
