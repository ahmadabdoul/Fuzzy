import React from "react";
import { Alert, Image, SafeAreaView, View } from "react-native";
import HeadingContainer from "../../../../../commonComponent/headingContainer";
import { styles } from "./style.css";
import ProfileEditContainer from "../../../../../component/profileSettingContainer/profileEditContainer";
import ProfileEditContainerBottomTab from "../../../../../component/profileSettingContainer/profileEditContainerBottomTab";
import EditIcon from "../../../../../component/editIcon";
import { useValues } from "../../../../../../App";
import colors from "../../../../../theme/colors";
import { windowHeight } from "../../../../../theme/appConstant";
import Images from "../../../../../utils/images";

const ProfileEdit = ({ navigation }) => {
  const handleBack = () => {
    navigation.goBack("");
  };
  const { isRTL, isDark } = useValues();
  const handlChange = () => {
    Alert.alert("Successfully Edit ");
  };
  return (
    <SafeAreaView
      style={[
        styles.SafeContainer,
        { backgroundColor: isDark ? colors.primary : colors.screenBg },
      ]}
    >
      <View
        style={[
          styles.viewContainer,
          { backgroundColor: isDark ? colors.textinputBG : colors.layoutBg },
        ]}
      >
        <View style={styles.headingView}>
          <HeadingContainer
            value={"transData.profileSetting"}
            onPress={handleBack}
          />
        </View>
        <View
          style={[
            styles.userView,
            { backgroundColor: isDark ? colors.primary : colors.screenBg },
            { borderColor: isDark ? colors.primary : colors.screenBg },
          ]}
        >
          <Image source={Images.userFull} style={styles.userLogo} />
          <View
            style={[
              styles.editView,
              { left: isRTL ? windowHeight(-12) : null },
            ]}
          >
            <EditIcon onPress={handlChange} />
          </View>
        </View>
        <View style={styles.inputContrainer}>
          <ProfileEditContainer />
        </View>
      </View>
      <ProfileEditContainerBottomTab
        onPressLeft={() => navigation.goBack()}
        onPress={() => navigation.goBack()}
        LeftSideBottomSpace={"transData.cancel"}
        rightSideBottomSpace={"transData.save"}
        leftsideStyle={[
          styles.leftsideStyle,
          { backgroundColor: isDark ? colors.textinputBG : colors.layoutBg },
        ]}
        rightsideStyle={[
          styles.rightsideStyle,
          { backgroundColor: isDark ? colors.yellowColor : colors.primary },
        ]}
        left={true}
      />
    </SafeAreaView>
  );
};

export default ProfileEdit;
