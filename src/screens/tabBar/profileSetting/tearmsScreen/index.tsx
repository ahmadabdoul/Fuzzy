import React from "react";
import {
  ScrollView,
  Text,
  View,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import SafeContainer from "../../../../commonComponent/safeContainer";
import HeadingContainer from "../../../../commonComponent/headingContainer";
import { style } from "./style.css";
import SolidLine from "../../../../commonComponent/solidLine";
import Introductions from "../../../../component/termsContainer/introduction";
import PropertyRight from "../../../../component/termsContainer/propertyRights";
import Restriction from "../../../../component/termsContainer/restriction";
import { windowHeight } from "../../../../theme/appConstant";
import { useValues } from "../../../../../App";
import colors from "../../../../theme/colors";

interface TearmsScreenProps {
  navigation: {
    goBack: (routeName?: string) => void;
  };
}

const TearmsScreen: React.FC<TearmsScreenProps> = ({ navigation }) => {
  const handleBack = () => {
    navigation.goBack();
  };

  const { isDark, textRTLStyle, t } = useValues();

  return (
    <SafeContainer
      value={
        <View>
          <HeadingContainer
            value={"transData.termsCondition"}
            onPress={handleBack}
          />
          <ScrollView
            style={style.scrollView}
            showsVerticalScrollIndicator={false}
          >
            <Text
              style={[
                style.tearmFuzzyText,
                {
                  color: isDark ? colors.screenBg : colors.primary,
                } as StyleProp<TextStyle>,
                { textAlign: textRTLStyle } as StyleProp<TextStyle>,
              ]}
            >
              {t("transData.termsFuzzy")}
            </Text>
            <Introductions />
            <SolidLine marginVertical={windowHeight(12)} />
            <PropertyRight />
            <SolidLine marginVertical={windowHeight(12)} />
            <Text
              style={[
                style.IntellectualRights,
                {
                  color: isDark ? colors.screenBg : colors.primary,
                } as StyleProp<TextStyle>,
                { textAlign: textRTLStyle } as StyleProp<TextStyle>,
              ]}
            >
              {t("transData.restrictions")}
            </Text>
            <Text
              style={[
                style.IntroductionWeb,
                { textAlign: textRTLStyle } as StyleProp<TextStyle>,
              ]}
            >
              {t("transData.restrictionsDescription")}
            </Text>
            <Restriction />
            <Text
              style={[
                style.IntroductionWeb,
                { textAlign: textRTLStyle } as StyleProp<TextStyle>,
              ]}
            >
              {t("transData.certainArea")}
            </Text>
            <SolidLine marginVertical={windowHeight(12)} />
            <Text
              style={[
                style.IntellectualRights,
                {
                  color: isDark ? colors.screenBg : colors.primary,
                } as StyleProp<TextStyle>,
                { textAlign: textRTLStyle } as StyleProp<TextStyle>,
              ]}
            >
              {t("transData.intellectualRights")}
            </Text>
            <Text
              style={[
                style.IntroductionWeb,
                { textAlign: textRTLStyle } as StyleProp<TextStyle>,
              ]}
            >
              {t("transData.ownPropertyRights")}
            </Text>
          </ScrollView>
        </View>
      }
    />
  );
};

export default TearmsScreen;
