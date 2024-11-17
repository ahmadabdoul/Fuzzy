import React from "react";
import {
  Image,
  View,
  Text,
  SafeAreaView,
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from "react-native";
import { style } from "./style.css";
import EditIcon from "../../../component/editIcon";
import ProfileContainer from "../../../component/editIcon/profileContainer";
import { useValues } from "../../../../App";
import colors from "../../../theme/colors";
import { windowHeight } from "../../../theme/appConstant";
import Images from "../../../utils/images";

interface ProfileSettingProps {
  navigation: {
    navigate: (screen: string) => void;
  };
}

const ProfileSetting: React.FC<ProfileSettingProps> = ({ navigation }) => {
  const handleChange = () => {
    navigation.navigate("ProfileEdit");
  };

  const { isRTL, isDark, textRTLStyle, viewRTLStyle, t } = useValues();

  return (
    <SafeAreaView
      style={[
        style.viewContainer,
        {
          backgroundColor: isDark ? colors.darkScreenBg : colors.screenBg,
        } as ViewStyle,
      ]}
    >
      <View style={style.parentView}>
        <View
          style={[
            style.container,
            {
              backgroundColor: isDark ? colors.primary : colors.layoutBg,
            } as ViewStyle,
          ]}
        >
          <Text
            style={[
              style.headertext,
              { color: isDark ? colors.screenBg : colors.primary } as TextStyle,
            ]}
          >
            {t("transData.profile")}
          </Text>
          <View
            style={[
              style.viewText,
              { flexDirection: viewRTLStyle } as ViewStyle,
            ]}
          >
            <View style={style.userLogoView} />
            <Text
              style={[
                style.marlinText,
                {
                  color: isDark ? colors.screenBg : colors.primary,
                } as TextStyle,
                { textAlign: textRTLStyle } as TextStyle,
              ]}
            >
              {t("transData.marlinWatkin")}
            </Text>
            <EditIcon onPress={handleChange} />
          </View>
        </View>
        <Image
          source={Images.user}
          style={[
            style.userLogo,
            { right: isRTL ? windowHeight(15) : undefined } as ImageStyle,
            { left: isRTL ? undefined : windowHeight(15) } as ImageStyle,
          ]}
        />
      </View>
      <ProfileContainer />
    </SafeAreaView>
  );
};

export default ProfileSetting;
