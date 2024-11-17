import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  GestureResponderEvent,
} from "react-native";
import { profileSettingData } from "../../../data/profileSettingData";
import SolidLine from "../../../commonComponent/solidLine";
import { style } from "./style.css";
import { useNavigation } from "@react-navigation/native";
import { windowHeight, windowWidth } from "../../../theme/appConstant";
import colors from "../../../theme/colors";
import { useValues } from "../../../../App";
import { external } from "../../../styles/external.css";

type NavigationProp = {
  navigate: (screenName: string) => void;
};

const ProfileContainer: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const { isDark, textRTLStyle, viewRTLStyle, t } = useValues();

  return (
    <ScrollView style={style.scrollView} showsVerticalScrollIndicator={false}>
      {profileSettingData.map((item: any, index: number) => (
        <View key={index}>
          <TouchableOpacity
            style={[
              style.viewProfileContainer,
              { flexDirection: viewRTLStyle },
            ]}
            onPress={() => navigation.navigate(item.screename)}
          >
            <View
              style={[
                style.ProfileInnerText,
                {
                  backgroundColor: isDark
                    ? colors.textinputBG
                    : colors.layoutBg,
                },
              ]}
            >
              {item.icon}
            </View>
            <View style={[external.js_center]}>
              <Text
                style={[
                  style.title,
                  { color: isDark ? colors.screenBg : colors.primary },
                  { textAlign: textRTLStyle },
                ]}
              >
                {t(item.title)}
              </Text>
              <Text style={[style.subtitile, { textAlign: textRTLStyle }]}>
                {t(item.subTitle)}
              </Text>
            </View>
          </TouchableOpacity>
          {index !== profileSettingData.length - 1 && (
            <View style={[external.mh_20]}>
              <SolidLine
                marginVertical={windowHeight(2)}
                width={windowWidth(430)}
                color={isDark ? colors.textinputBG : colors.solidLine}
              />
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

export default ProfileContainer;
