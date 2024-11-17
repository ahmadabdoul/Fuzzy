import React from "react";
import { View, Text, Image, FlatList, Pressable } from "react-native";
import { sliderData } from "../../../data/homeData";
import { style } from "./style.css";
import { useNavigation } from "@react-navigation/native";
import { useValues } from "../../../../App";
import colors from "../../../theme/colors";
import { external } from "../../../styles/external.css";

const Slider = () => {
  const navigation = useNavigation("");
  const handleChange = () => {
    navigation.navigate("SearchScreen");
  };
  const { isRTL, isDark, t } = useValues();
  const color = isDark ? colors.layoutBg : colors.primary;
  const colorId = isDark ? colors.primary : colors.screenBg;
  const colorText = isDark ? colors.screenBg : colors.primary;
  const colorsBorder = isDark ? colors.textinputBG : colors.sliderColor;
  const renderItem = ({ item }) => (
    <Pressable
      onPress={handleChange}
      style={[
        style.itemContainer,
        { backgroundColor: colorId },
        { borderColor: colorsBorder },

        item.id === 0 && style.itemContainerSpecial,
        item.id === 0 && { backgroundColor: color },
      ]}
    >
      {item.img ? (
        <Image
          style={[style.sofaImg, { tintColor: colorId }]}
          source={item.img}
        />
      ) : (
        <View style={style.placeholderImage} />
      )}
      <Text
        style={[
          style.itemText,
          { color: colorText },
          item.id === 0 && style.itemTextSpecial,
          item.id === 0 && { color: colorId },
        ]}
      >
        {t(item.title)}
      </Text>
    </Pressable>
  );

  return (
    <FlatList
      data={sliderData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      decelerationRate="fast"
      contentContainerStyle={[external.ph_10, style.container]}
      inverted={isRTL ? true : false}
    />
  );
};

export default Slider;
