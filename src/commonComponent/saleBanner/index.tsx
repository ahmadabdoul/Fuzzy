import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { style } from "./style.css";
import { useNavigation } from "@react-navigation/native";
import { WhiteLeftArrow } from "../../utils/icon";
import { useValues } from "../../../App";
import { commonStyles } from "../../styles/commonStyle";
import { external } from "../../styles/external.css";

const SaleBanner = ({ img, paddingTop }) => {
  const navigation = useNavigation("");
  const handleChnage = () => {
    navigation.navigate("SearchScreen");
  };
  const { t } = useValues();
  return (
    <ImageBackground
      style={style.container}
      imageStyle={style.imageStyle}
      source={img}
    >
      <View style={[external.mh_20]}>
        <Text style={commonStyles.whitefontSixHund}>
          {t("transData.bestSelling")}
        </Text>
        <Text style={[commonStyles.whitefontThreeHund, style.baseImage]}>
          {t("transData.comfortsSofa")}
        </Text>
        <TouchableOpacity
          style={[style.viewText, { paddingTop: paddingTop }]}
          onPress={handleChnage}
        >
          <Text style={[commonStyles.fontsizeFiveHund, style.textColor]}>
            {t("transData.viewMore")}
          </Text>
          <View style={external.mh_5}>
            <WhiteLeftArrow />
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default SaleBanner;
