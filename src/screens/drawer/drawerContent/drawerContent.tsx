import React from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { style } from "./style.css";
import SolidLine from "../../../commonComponent/solidLine";
import SwitchComponent from "../../../component/switchComponent";
import { Cross } from "../../../utils/icon";
import { useValues } from "../../../../App";
import colors from "../../../theme/colors";
import { setValue } from "../../../utils/helper/localStorage";
import Images from "../../../utils/images";
import { external } from "../../../styles/external.css";
import { commonStyles } from "../../../styles/commonStyle";

const DrawerContent = ({ navigation }) => {
  const { isDark, viewRTLStyle, t, isRTL, setIsDark, setIsRTL } = useValues();
  const colorBgImg = isDark ? colors.screenBg : colors.primary;
  const colorText = isDark ? colors.darkScreenBg : colors.screenBg;
  const drawerContentData = [
    {
      id: 0,
      title: "transData.rtl",
      isSwitch: true,
      switch: isRTL,
    },
    {
      id: 1,
      title: "transData.dark",
      isSwitch: true,
      switch: isDark,
    },
    {
      id: 2,
      title: "transData.pageList",
      screenName: "PageScreen",
    },
    {
      id: 3,
      title: "transData.setting",
      screenName: "Settings",
    },
    {
      id: 4,
      title: "transData.logOut",
      screenName: "",
    },
  ];

  const handleToggle = (toggleId) => {
    if (toggleId === 0) {
      setIsRTL((prevIsRTL) => !prevIsRTL);
      const rtl = isRTL.toString();
      setValue("isRtl", rtl);
    }
    if (toggleId === 1) {
      setIsDark((prevIsDark) => !prevIsDark);
      const dark = isDark.toString();
      setValue("isDark", dark);
    }
  };

  const handlePress = (item) => {
    if (item.id === 4) {
      navigation.navigate("SignIn");
    } else if (item.screenName) {
      navigation.navigate(item.screenName);
    }
  };

  return (
    <SafeAreaView
      style={[external.fx_1, external.mt_12, { backgroundColor: colorText }]}
    >
      <View style={[external.mh_10]}>
        <View style={[style.container, { flexDirection: viewRTLStyle }]}>
          <View style={[style.containerView]}>
            <Image style={style.baseImage} source={Images.based} />
          </View>
          <Text
            style={[
              commonStyles.fontsizeLargeHund,
              external.fg_1,
              external.mh_8,
              { color: colorBgImg },
            ]}
          >
            {t("transData.hello")},{t("transData.agasya")}
          </Text>
        </View>
        <View style={[external.mt_15, external.pt_10]}>
          {drawerContentData.map((item) => (
            <View key={item.id}>
              <View
                style={[
                  external.mv_5,
                  external.fd_row,
                  external.js_space,
                  { flexDirection: viewRTLStyle },
                ]}
              >
                <TouchableOpacity onPress={() => handlePress(item)}>
                  <Text
                    style={[
                      commonStyles.fontsizeFiveHund,
                      external.mh_8,
                      { color: colorBgImg },
                    ]}
                  >
                    {t(item.title)}
                  </Text>
                </TouchableOpacity>
                {item.isSwitch && (
                  <SwitchComponent
                    Enable={item.switch}
                    onPress={() => handleToggle(item.id)}
                  />
                )}
              </View>
              <SolidLine
                color={isDark ? colors.textinputBG : colors.layoutBg}
              />
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DrawerContent;
