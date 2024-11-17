import React from "react";
import {
  Image,
  Pressable,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import { categoryData } from "../../data/categoryData";
import { style } from "./styler.css";
import { RightArow } from "../../utils/icon";
import { useNavigation } from "@react-navigation/native";
import { useValues } from "../../../App";
import colors from "../../theme/colors";
import { commonStyles } from "../../styles/commonStyle";
import { external } from "../../styles/external.css";

interface CategoryItem {
  title: string;
  img: ImageSourcePropType;
}

const CategoryContainer: React.FC = () => {
  const navigation = useNavigation();
  const handleChange = () => {
    navigation.navigate("SearchScreen");
  };

  const { isRTL, isDark, textRTLStyle, imageRTLStyle, t } = useValues();

  return (
    <Pressable
      style={[
        style.viewContainerBottom,
        { transform: [{ scale: imageRTLStyle }] },
      ]}
      onPress={handleChange}
    >
      {categoryData.map((item: CategoryItem, index: number) => (
        <View
          style={[
            style.cardHeight,
            { backgroundColor: isDark ? colors.textinputBG : colors.layoutBg },
          ]}
          key={index}
        >
          <View style={[style.mainContainer]}>
            <View style={{ transform: [{ scale: imageRTLStyle }] }}>
              <Text
                style={[
                  commonStyles.fontsizeLargeHund,
                  { color: isDark ? colors.screenBg : colors.primary },
                  { textAlign: textRTLStyle },
                ]}
              >
                {t(item.title)}
              </Text>
              <Text style={style.totalavailable}>
                {t("transData.totalAvailable")}
              </Text>
              <View
                style={[
                  external.mt_15,
                  { alignSelf: isRTL ? "flex-end" : undefined },
                  { transform: [{ scale: imageRTLStyle }] },
                ]}
              >
                <RightArow />
              </View>
            </View>
            <View>
              <Image
                style={[
                  style.imgStyle,
                  { transform: [{ scale: imageRTLStyle }] },
                ]}
                source={item.img}
              />
            </View>
          </View>
        </View>
      ))}
    </Pressable>
  );
};

export default CategoryContainer;
