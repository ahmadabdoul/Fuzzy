import React from "react";
import { ImageBackground, Pressable, Text, View } from "react-native";

import { style } from "./style.css";
import { bottomData } from "../../../data/bottomData";
import { WhiteLeftArrowThree } from "../../../utils/icon";
import { useNavigation } from "@react-navigation/native";
import { useValues } from "../../../../App";
import { external } from "../../../styles/external.css";
import { commonStyles } from "../../../styles/commonStyle";

const BottomBanner = () => {
  const navigation = useNavigation("");
  const { viewRTLStyle, t } = useValues();
  return (
    <Pressable
      style={[
        external.fd_row,
        external.mh_20,
        external.mt_12,
        { flexDirection: viewRTLStyle },
      ]}
      onPress={() => navigation.navigate("SearchScreen")}
    >
      {bottomData.map((item, id) => (
        <ImageBackground
          key={id}
          resizeMode="stretch"
          style={style.img}
          source={item.img}
        >
          <View style={[external.mh_8, external.mt_12]}>
            <Text style={[commonStyles.whitefontSixHund, style.chainr]}>
              {t("transData.wingbackChair")}
            </Text>
            <View style={[style.viewText]}>
              <WhiteLeftArrowThree />
              <Text style={[style.textColor]}>{t("transData.viewMore")}</Text>
            </View>
          </View>
        </ImageBackground>
      ))}
    </Pressable>
  );
};

export default BottomBanner;
