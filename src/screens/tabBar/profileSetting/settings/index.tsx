import React, { useState } from "react";
import { View, Text } from "react-native";
import HeadingContainer from "../../../../commonComponent/headingContainer";
import SafeContainer from "../../../../commonComponent/safeContainer";
import SwitchComponent from "../../../../component/switchComponent";
import SolidLine from "../../../../commonComponent/solidLine";
import { styles } from "./style.css";
import { Card } from "react-native-paper";
import { useValues } from "../../../../../App";
import colors from "../../../../theme/colors";
import { setValue } from "../../../../utils/helper/localStorage";
import { external } from "../../../../styles/external.css";

interface Toggle {
  id: string;
  title: string;
  value: boolean;
}

interface SettingsProps {
  navigation: {
    goBack: (value?: string) => void;
  };
}

const Settings: React.FC<SettingsProps> = ({ navigation }) => {
  const handleBack = () => {
    navigation.goBack("");
  };

  const { isRTL, setIsRTL, isDark, setIsDark, viewRTLStyle, t } = useValues();
  const [toggles, setToggles] = useState<Toggle[]>([
    { id: "toggle1", title: "transData.darkLight", value: isDark },
    { id: "toggle2", title: "transData.rtl", value: isRTL },
    { id: "toggle3", title: "transData.notification", value: false },
  ]);

  const handleToggle = (toggleId: string) => {
    if (toggleId === "toggle1") {
      setIsDark((prevIsDark) => !prevIsDark);
      const dark = isDark.toString();
      setValue("isDark", dark);
    }
    if (toggleId === "toggle2") {
      setIsRTL((prevIsRTL) => !prevIsRTL);
      const rtl = isRTL.toString();
      setValue("isRtl", rtl);
    }

    setToggles((prevToggles) =>
      prevToggles.map((toggle) =>
        toggle.id === toggleId ? { ...toggle, value: !toggle.value } : toggle
      )
    );
  };

  return (
    <SafeContainer
      value={
        <View>
          <HeadingContainer value={"transData.setting"} onPress={handleBack} />
          <Card
            style={[
              styles.linearStyle,
              {
                backgroundColor: isDark ? colors.textinputBG : colors.screenBg,
              },
            ]}
          >
            <View style={styles.container}>
              {toggles.map((toggle, index) => (
                <View key={toggle.id}>
                  <View
                    style={[
                      styles.viewContainer,
                      { flexDirection: viewRTLStyle },
                    ]}
                  >
                    <Text
                      style={[
                        styles.title,
                        { color: isDark ? colors.screenBg : colors.primary },
                      ]}
                    >
                      {t(toggle.title)}
                    </Text>
                    <SwitchComponent
                      Enable={toggle.value}
                      onPress={() => handleToggle(toggle.id)}
                    />
                  </View>
                  <View style={[external.mh_10, external.mt_10]}>
                    {index !== toggles.length - 1 && (
                      <SolidLine
                        color={isDark ? colors.primary : colors.solidLine}
                      />
                    )}
                  </View>
                </View>
              ))}
            </View>
          </Card>
        </View>
      }
    />
  );
};

export default Settings;
