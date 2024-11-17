import React from "react";
import { ScrollView, Text, View } from "react-native";
import SafeContainer from "../../../commonComponent/safeContainer";
import { style } from "./style.css";
import SearchComponent from "../../../commonComponent/searchComponent";
import CategoryContainer from "../../../component/category";
import NotificationIcons from "../../../commonComponent/notificationIcon";
import { useValues } from "../../../../App";
import colors from "../../../theme/colors";
import { external } from "../../../styles/external.css";

const Categories = ({ navigation }) => {
  const { isDark, viewRTLStyle, t } = useValues();
  return (
    <SafeContainer
      value={
        <ScrollView
          style={[external.mt_20]}
          showsVerticalScrollIndicator={false}
        >
          <View style={[style.viewContainer, { flexDirection: viewRTLStyle }]}>
            <Text
              style={[
                style.container,
                { color: isDark ? colors.screenBg : colors.primary },
              ]}
            >
              {t("transData.categoriesCons")}
            </Text>
            <NotificationIcons />
          </View>
          <View style={[external.mt_15]}>
            <SearchComponent width={"100%"} />
          </View>
          <CategoryContainer />
        </ScrollView>
      }
    />
  );
};

export default Categories;
