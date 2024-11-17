import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import SafeContainer from "../../commonComponent/safeContainer";
import HeadingContainer from "../../commonComponent/headingContainer";
import { style } from "./style.css";
import { pageListData } from "../../data/pageList";
import { RightSideArrow } from "../../utils/icon";
import { useValues } from "../../../App";
import colors from "../../theme/colors";
import { commonStyles } from "../../styles/commonStyle";
import { external } from "../../styles/external.css";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type PageScreenNavigationProp = NativeStackNavigationProp<any, any>;

interface PageScreenProps {
  navigation: PageScreenNavigationProp;
}

const PageScreen: React.FC<PageScreenProps> = ({ navigation }) => {
  const { isDark, textRTLStyle, viewRTLStyle, imageRTLStyle, t } = useValues();
  const colorBg = isDark ? colors.primary : colors.layoutBg;
  const colorText = isDark ? colors.screenBg : colors.primary;

  return (
    <SafeContainer
      value={
        <View>
          <HeadingContainer
            value={"transData.pageLists"}
            onPress={() => navigation.goBack()}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={style.scrollView}
            style={style.scrollView}
          >
            {pageListData.map((page) => (
              <View key={page.name}>
                <View style={[style.container, { backgroundColor: colorBg }]}>
                  <Text
                    style={[
                      commonStyles.sixHundSizeLarge,
                      external.mh_8,
                      { color: colorText },
                      { textAlign: textRTLStyle },
                    ]}
                  >
                    {t(page.name)}
                  </Text>
                </View>
                {page.pageList.map((item) => (
                  <TouchableOpacity
                    key={item.id}
                    onPress={() => navigation.navigate(item.screenName)}
                  >
                    <View
                      style={[
                        style.pageListView,
                        { flexDirection: viewRTLStyle },
                      ]}
                    >
                      <Text style={[commonStyles.h1primary, external.mh_8]}>
                        {t(item.title)}
                      </Text>
                      <View style={{ transform: [{ scale: imageRTLStyle }] }}>
                        <RightSideArrow />
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            ))}
          </ScrollView>
        </View>
      }
    />
  );
};

export default PageScreen;
