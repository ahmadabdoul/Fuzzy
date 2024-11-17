import React, { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import SafeContainer from "../../../../commonComponent/safeContainer";
import HeadingContainer from "../../../../commonComponent/headingContainer";
import { currencyData } from "../../../../data/currencyData";
import SolidLine from "../../../../commonComponent/solidLine";
import RadioButton from "../../../../commonComponent/radioButton";
import { useValues } from "../../../../../App";
import colors from "../../../../theme/colors";
import { fontSizes, windowWidth } from "../../../../theme/appConstant";
import { style } from "./style.css";
import { getValue, setValue } from "../../../../utils/helper/localStorage";
import { external } from "../../../../styles/external.css";
import { commonStyles } from "../../../../styles/commonStyle";

interface CurrencyItem {
  icon: string;
  value: number;
  tile: string;
}

interface CurrencyScreenProps {
  navigation: {
    goBack: (value?: string) => void;
  };
}

const CurrencyScreen: React.FC<CurrencyScreenProps> = ({ navigation }) => {
  const [checkedData, setCheckedData] = useState<string>("$");

  const { isDark, viewRTLStyle, t, setCurrSymbol, setCurrPrice } = useValues();

  const valData = (index: number, symbol: string, price: number) => {
    setCheckedData(symbol);
    setCurrSymbol(symbol);
    setCurrPrice(price);
    setValue("curr", symbol);
    setValue("currPrice", price.toString());
  };

  useEffect(() => {
    getValues();
  }, []);

  const getValues = async () => {
    const currSymbol = await getValue("curr");
    if (currSymbol != null) {
      setCheckedData(currSymbol);
    }
  };

  return (
    <SafeContainer
      value={
        <View>
          <HeadingContainer
            value={"transData.currency"}
            onPress={() => navigation.goBack("")}
          />
          {currencyData.map((item: CurrencyItem, index: number) => (
            <Pressable
              key={index}
              onPress={() => {
                valData(index, item.icon, item.value);
              }}
            >
              <View
                style={[
                  external.fd_row,
                  external.js_space,
                  external.mv_10,
                  { flexDirection: viewRTLStyle },
                  external.ai_center,
                ]}
              >
                <View style={[external.fd_row, external.ai_center]}>
                  <View
                    style={[
                      style.ProfileInnerText,
                      {
                        backgroundColor: isDark
                          ? colors.textinputBG
                          : colors.layoutBg,
                      },
                    ]}
                  >
                    <Text style={style.icon}>{item.icon}</Text>
                  </View>
                  <Text
                    style={[
                      commonStyles.fontsizeFiveHund,
                      {
                        color: isDark ? colors.screenBg : colors.primary,
                        marginLeft: windowWidth(10),
                      },
                    ]}
                  >
                    {t(item.tile)}
                  </Text>
                </View>
                <RadioButton
                  onPress={() => {
                    valData(index, item.icon, item.value);
                  }}
                  checked={checkedData === item.icon}
                />
              </View>
              {index !== currencyData.length - 1 && <SolidLine />}
            </Pressable>
          ))}
        </View>
      }
    />
  );
};

export default CurrencyScreen;
