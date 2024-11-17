import React, { useState } from "react";
import {
  Image,
  FlatList,
  Text,
  View,
  ScrollView,
  ListRenderItem,
} from "react-native";
import SafeContainer from "../../../../commonComponent/safeContainer";
import HeadingContainer from "../../../../commonComponent/headingContainer";
import { List } from "react-native-paper";
import { helpData } from "../../../../data/helpData";
import { style } from "./style.css";
import { DownArrow } from "../../../../utils/icon";
import { useValues } from "../../../../../App";
import colors from "../../../../theme/colors";
import Images from "../../../../utils/images";
import { commonStyles } from "../../../../styles/commonStyle";
import { external } from "../../../../styles/external.css";

interface HelpScreenProps {
  navigation: {
    goBack: (routeName?: string) => void;
  };
}

interface HelpItem {
  title: string;
  items: { title: string }[];
}

const HelpScreen: React.FC<HelpScreenProps> = ({ navigation }) => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const handlePress = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  const { isDark, textRTLStyle, t } = useValues();
  const colorBg = isDark ? colors.textinputBG : colors.layoutBg;
  const colorBgImg = isDark ? colors.primary : colors.layoutBg;
  const colorText = isDark ? colors.screenBg : colors.primary;

  const renderAccordionItem: ListRenderItem<HelpItem> = ({ item, index }) => (
    <View style={[style.verticalContainer, { backgroundColor: colorBg }]}>
      <List.Accordion
        title={t(item.title)}
        left={() => null}
        right={() => <DownArrow />}
        expanded={expanded === index}
        onPress={() => handlePress(index)}
        titleStyle={[commonStyles.fontsizeFiveHund, { color: colorText }]}
        style={[style.container, { backgroundColor: colorBgImg }]}
        theme={{
          colors: {
            primary: undefined,
          },
        }}
      >
        {item.items.map((subItem, subItemIndex) => (
          <ScrollView key={subItemIndex} style={style.listItemView}>
            <List.Item
              key={subItemIndex}
              description={t(subItem.title)}
              descriptionStyle={[
                style.descriptionStyle,
                { textAlign: textRTLStyle },
              ]}
              descriptionNumberOfLines={10}
            />
          </ScrollView>
        ))}
      </List.Accordion>
    </View>
  );

  return (
    <SafeContainer
      value={
        <ScrollView showsVerticalScrollIndicator={false}>
          <HeadingContainer
            value={"transData.helpCenter"}
            onPress={() => navigation.goBack("")}
          />
          <View style={[external.mv_15]}>
            <Image style={style.imageSIze} source={Images.helppic} />
          </View>
          <Text
            style={[
              commonStyles.fontsizeFiveHund,
              { color: colorText },
              { textAlign: textRTLStyle },
            ]}
          >
            {t("transData.helpCenter")}
          </Text>
          <Text
            style={[
              commonStyles.textsizeFourHund,
              external.mv_8,
              { textAlign: textRTLStyle },
            ]}
          >
            {t("transData.customerSupport")}
          </Text>
          <Text style={[commonStyles.fontsizeFiveHund, { color: colorText }]}>
            {t("transData.whatIssues")}
          </Text>

          <FlatList
            showsVerticalScrollIndicator={false}
            data={helpData}
            renderItem={renderAccordionItem}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={[external.mt_10]}
          />
        </ScrollView>
      }
    />
  );
};

export default HelpScreen;
