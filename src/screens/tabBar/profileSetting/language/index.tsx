import React, { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import SafeContainer from "../../../../commonComponent/safeContainer";
import HeadingContainer from "../../../../commonComponent/headingContainer";
import { languageData } from "../../../../data/languageData";
import SolidLine from "../../../../commonComponent/solidLine";
import RadioButton from "../../../../commonComponent/radioButton";
import { useValues } from "../../../../../App";
import colors from "../../../../theme/colors";
import { useTranslation } from "react-i18next";
import { getValue, setValue } from "../../../../utils/helper/localStorage";
import { external } from "../../../../styles/external.css";
import { commonStyles } from "../../../../styles/commonStyle";

interface LanguageItem {
  code: string;
  tile: string;
}

interface LanguageScreenProps {
  navigation: {
    goBack: (value?: string) => void;
  };
}

const LanguageScreen: React.FC<LanguageScreenProps> = ({ navigation }) => {
  const [checkedData, setCheckedData] = useState<string>("en");

  const { i18n } = useTranslation();
  const { isDark, viewRTLStyle, t, setIsRTL } = useValues();

  const valData = (code: string) => {
    setCheckedData(code);
  };

  const changeLan = (language: string) => {
    i18n.changeLanguage(language);
    if (language != null) {
      setValue("language", language);
    }
    if (language === "ar") {
      setIsRTL(true);
    } else {
      setIsRTL(false);
    }
  };

  useEffect(() => {
    const getValues = async () => {
      const language = await getValue("language");
      setCheckedData(language || "en");
    };

    getValues();
  }, []);

  return (
    <SafeContainer
      value={
        <View>
          <HeadingContainer
            value={"transData.language"}
            onPress={() => navigation.goBack("")}
          />
          {languageData.map((item: LanguageItem, index: number) => (
            <Pressable
              key={item.code}
              onPress={() => {
                valData(item.code);
                changeLan(item.code);
              }}
            >
              <View
                style={[
                  external.fd_row,
                  external.js_space,
                  external.mv_15,
                  { flexDirection: viewRTLStyle },
                ]}
              >
                <Text
                  style={[
                    commonStyles.fontsizeFiveHund,
                    { color: isDark ? colors.screenBg : colors.primary },
                  ]}
                >
                  {t(item.tile)}
                </Text>
                <RadioButton
                  onPress={() => {
                    valData(item.code);
                    changeLan(item.code);
                  }}
                  checked={checkedData === item.code}
                />
              </View>
              {index !== languageData.length - 1 && <SolidLine />}
            </Pressable>
          ))}
        </View>
      }
    />
  );
};

export default LanguageScreen;
