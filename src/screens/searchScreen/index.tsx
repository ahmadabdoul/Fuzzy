import React from "react";
import {
  FlatList,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import { styles } from "./style.css";
import NewArrivalContainer from "../../commonComponent/newArrivalContainer";
import { Back } from "../../utils/icon";
import NotificationIcons from "../../commonComponent/notificationIcon";
import SeachContainer from "../../commonComponent/seachContainer";
import { searchscreenData } from "../../data/searchScreenData";
import { useValues } from "../../../App";
import colors from "../../theme/colors";
import { commonStyles } from "../../styles/commonStyle";
import { external } from "../../styles/external.css";

type SearchScreenNavigationProp = StackNavigationProp<any, any>;

interface SearchScreenProps {
  navigation: SearchScreenNavigationProp;
}

const SearchScreen: React.FC<SearchScreenProps> = ({ navigation }) => {
  const handleBack = () => {
    navigation.goBack();
  };

  const { isDark, t } = useValues();

  const renderItem = ({ item }: { item: { id: number; img: any } }) => {
    return (
      <Pressable
        style={[external.mh_5, external.mv_5]}
        onPress={() => navigation.navigate("ProductDetailsOne")}
      >
        <NewArrivalContainer
          img={item.img}
          showstart
          onPress={() => navigation.navigate("ProductDetailsOne")}
        />
      </Pressable>
    );
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDark ? colors.darkScreenBg : colors.screenBg },
      ]}
    >
      <View style={[external.mh_20, external.mt_15]}>
        <View style={[external.fd_row, external.js_space, external.ai_center]}>
          <TouchableOpacity onPress={handleBack}>
            <Back color={isDark ? colors.screenBg : colors.primary} />
          </TouchableOpacity>
          <Text
            style={[
              commonStyles.fontsizeLargeHund,
              styles.chiarText,
              { color: isDark ? colors.screenBg : colors.primary },
            ]}
          >
            {t("transData.chair")}
          </Text>
          <NotificationIcons />
        </View>
        <SeachContainer />
      </View>
      <FlatList
        data={searchscreenData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[external.mh_10, external.Pb_30]}
      />
    </View>
  );
};

export default SearchScreen;
