import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import RadioButton from "../../../commonComponent/radioButton";
import { savedAddressData } from "../../../data/savedAddressData";
import { style } from "./style.css";
import { Card } from "react-native-paper";
import { Bin, EditLight } from "../../../utils/icon";
import colors from "../../../theme/colors";
import { useValues } from "../../../../App";
import { external } from "../../../styles/external.css";
import { commonStyles } from "../../../styles/commonStyle";

interface SavedAddressContainerProps {
  shipping: boolean;
}

const SavedAddressContainer: React.FC<SavedAddressContainerProps> = ({
  shipping,
}) => {
  const [checkedData, setCheckedData] = useState<number>(0);

  const valData = (index: number) => {
    setCheckedData(index === checkedData ? -1 : index);
  };

  const { isDark, textRTLStyle, viewRTLStyle, t } = useValues();

  return (
    <View>
      {savedAddressData.map((item, index) => (
        <Pressable
          key={index}
          onPress={() => {
            valData(index);
          }}
        >
          <Card
            style={[
              index === checkedData ? style.containerBorder : style.container,
              { backgroundColor: isDark ? colors.primary : colors.screenBg },
              { borderColor: isDark ? colors.screenBg : colors.primary },
            ]}
            elevation={1}
          >
            <View style={[external.fd_row, { flexDirection: viewRTLStyle }]}>
              <View style={[external.mt_2]}>
                <RadioButton
                  onPress={() => {
                    valData(index);
                  }}
                  checked={checkedData === index}
                />
              </View>
              {shipping ? (
                <View>
                  <Text
                    style={[
                      external.mh_8,
                      commonStyles.fontsizeLargeHund,
                      { color: isDark ? colors.screenBg : colors.primary },
                    ]}
                  >
                    {t(item.title)}
                  </Text>
                </View>
              ) : (
                <View
                  style={[
                    external.fd_row,
                    external.ai_center,
                    external.js_space,
                    { width: "95%" },
                    { flexDirection: viewRTLStyle },
                  ]}
                >
                  <Text
                    style={[
                      external.mh_8,
                      commonStyles.fontsizeLargeHund,
                      { color: isDark ? colors.screenBg : colors.primary },
                    ]}
                  >
                    {t(item.title)}
                  </Text>
                  <View
                    style={[
                      external.fd_row,
                      external.ai_center,
                      { flexDirection: viewRTLStyle },
                    ]}
                  >
                    <View
                      style={[
                        style.editContainer,
                        external.mh_8,
                        {
                          backgroundColor: isDark
                            ? colors.textinputBG
                            : colors.screenBg,
                        },
                      ]}
                    >
                      <EditLight />
                    </View>
                    <View
                      style={[
                        style.editContainer,
                        {
                          backgroundColor: isDark
                            ? colors.textinputBG
                            : colors.screenBg,
                        },
                      ]}
                    >
                      <Bin />
                    </View>
                  </View>
                </View>
              )}
            </View>
            <View style={[external.mh_20]}>
              <Text
                style={[
                  external.mh_10,
                  commonStyles.PrimarysizeFourHund,
                  external.mv_5,
                  { color: isDark ? colors.screenBg : colors.primary },
                  { textAlign: textRTLStyle },
                ]}
              >
                {t(item.subtitle)}
              </Text>
              <View
                style={[
                  external.fd_row,
                  external.mh_10,
                  { flexDirection: viewRTLStyle },
                ]}
              >
                <Text
                  style={[
                    commonStyles.PrimarysizeFourHund,
                    { color: isDark ? colors.screenBg : colors.primary },
                  ]}
                >
                  {t("transData.phoneNo")}
                </Text>
                <Text
                  style={[
                    commonStyles.PrimarysizeFourHund,
                    { color: isDark ? colors.screenBg : colors.primary },
                  ]}
                >
                  :
                </Text>
                <Text style={[commonStyles.textsizeFourHund, external.mh_5]}>
                  12100 0023
                </Text>
              </View>
            </View>
          </Card>
        </Pressable>
      ))}
    </View>
  );
};

export default SavedAddressContainer;
