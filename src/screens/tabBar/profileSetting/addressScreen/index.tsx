import React from "react";
import { View } from "react-native";
import SafeContainer from "../../../../commonComponent/safeContainer";
import HeadingContainer from "../../../../commonComponent/headingContainer";
import Input from "../../../../commonComponent/input";
import { style } from "./style.css";
import SavedAddressContainer from "../../../../component/profileSettingContainer/saveAddressContain";
import { external } from "../../../../styles/external.css";

interface SavedAddressScreenProps {
  navigation: {
    goBack: (value?: string) => void;
  };
}

const SavedAddressScreen: React.FC<SavedAddressScreenProps> = ({
  navigation,
}) => {
  const handleBack = () => {
    navigation.goBack("");
  };

  return (
    <View style={[external.fx_1]}>
      <SafeContainer
        value={
          <View>
            <HeadingContainer
              value={"transData.savedAddress"}
              onPress={handleBack}
            />
            <SavedAddressContainer shipping={true} />
          </View>
        }
      />
      <View style={style.applyButton}>
        <Input value={"transData.applySmall"} onPress={handleBack} />
      </View>
    </View>
  );
};

export default SavedAddressScreen;
