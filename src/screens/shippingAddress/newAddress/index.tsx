import React from "react";
import { View } from "react-native";
import SafeContainer from "../../../commonComponent/safeContainer";
import HeadingContainer from "../../../commonComponent/headingContainer";
import { style } from "./style.css";
import AddNewInput from "../../../component/newAddress/addNewInput";
import RowInput from "../../../component/newAddress/rowInput";
import AddressType from "../../../component/newAddress/addressType";
import ProfileEditContainerBottomTab from "../../../component/profileSettingContainer/profileEditContainerBottomTab";
import { useValues } from "../../../../App";
import colors from "../../../theme/colors";
import { external } from "../../../styles/external.css";

interface NewAddressProps {
  navigation: {
    goBack: (screenName?: string) => void;
  };
}

const NewAddress: React.FC<NewAddressProps> = ({ navigation }) => {
  const handleChange = () => {
    navigation.goBack("");
  };

  const { isDark } = useValues();

  return (
    <View style={[external.fx_1]}>
      <SafeContainer
        value={
          <View>
            <HeadingContainer
              value={"transData.addNew"}
              onPress={handleChange}
            />
            <AddNewInput />
            <RowInput />
            <AddressType />
          </View>
        }
      />
      <ProfileEditContainerBottomTab
        LeftSideBottomSpace={"transData.cancel"}
        rightSideBottomSpace={"transData.add"}
        leftsideStyle={[
          style.leftsideStyle,
          { backgroundColor: isDark ? colors.textinputBG : colors.layoutBg },
        ]}
        rightsideStyle={[
          style.rightsideStyle,
          { backgroundColor: isDark ? colors.yellowColor : colors.primary },
        ]}
        left={true}
        onPressLeft={handleChange}
        onPress={handleChange}
      />
    </View>
  );
};

export default NewAddress;
