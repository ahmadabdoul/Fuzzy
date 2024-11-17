import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Drawer } from "../../../utils/icon";
import { style } from "./style.css";

import NotificationIcons from "../../../commonComponent/notificationIcon";
import { Card } from "react-native-paper";
import { useValues } from "../../../../App";
import colors from "../../../theme/colors";
import { external } from "../../../styles/external.css";
import { commonStyles } from "../../../styles/commonStyle";
import Images from "../../../utils/images";

const HeaderContainer = ({ navigation }) => {
  const { isDark, viewRTLStyle, t, textRTLStyle } = useValues();
  const color = isDark ? colors.primary : colors.screenBg;
  const textColor = isDark ? colors.screenBg : colors.primary;
  const borderWidth = isDark ? 0.15 : null;
  return (
    <View
      style={[
        external.mh_20,
        external.mt_5,
        external.js_space,
        {
          flexDirection: viewRTLStyle,
        },
      ]}
    >
      <View style={{ flexDirection: viewRTLStyle }}>
        <Card
          style={[
            style.container,
            { backgroundColor: color },
            { borderWidth: borderWidth },
          ]}
        >
          <TouchableOpacity
            style={[
              style.container,
              { backgroundColor: color },
              { borderWidth: borderWidth },
            ]}
            onPress={() => navigation.openDrawer()}
          >
            <Drawer />
          </TouchableOpacity>
        </Card>
        <View style={style.containerView}>
          <Image style={style.baseImage} source={Images.based} />
        </View>
        <View>
          <Text style={[commonStyles.h1primary, { textAlign: textRTLStyle }]}>
            {t("transData.hello")}
          </Text>
          <Text style={[commonStyles.fontsizeFiveHund, { color: textColor }]}>
            {t("transData.agasya")}
          </Text>
        </View>
      </View>
      <NotificationIcons />
    </View>
  );
};

export default HeaderContainer;
