import React, { useState } from "react";
import {
  Image,
  Pressable,
  Text,
  View,
  ImageSourcePropType,
  ViewStyle,
} from "react-native";
import RadioButton from "../../../../commonComponent/radioButton";
import { style } from "./style.css";
import { useValues } from "../../../../../App";
import colors from "../../../../theme/colors";
import { commonStyles } from "../../../../styles/commonStyle";
import { external } from "../../../../styles/external.css";

interface CardItem {
  img: ImageSourcePropType;
  imgs: ImageSourcePropType;
  title: string;
  subtitle: string;
}

const YourCardContainer: React.FC = () => {
  const [checkedData, setCheckedData] = useState<number>(0);
  const { isDark, viewRTLStyle, t } = useValues();

  const valData = (index: number) => {
    setCheckedData(index === checkedData ? -1 : index);
  };

  const marginButton = isDark ? 12 : undefined;
  const widthFull = isDark ? "100%" : "97%";

  const cardData: CardItem[] = [];

  return (
    <View>
      {cardData.map((item, index) => (
        <Pressable
          key={index}
          style={
            [
              style.container,
              {
                backgroundColor: isDark ? colors.textinputBG : colors.screenBg,
              },
              { borderTopColor: isDark ? colors.textinputBG : colors.screenBg },
            ] as ViewStyle
          }
          onPress={() => valData(index)}
        >
          <View
            style={
              [
                style.containerView,
                { flexDirection: viewRTLStyle },
                { width: widthFull },
              ] as ViewStyle
            }
          >
            <View
              style={
                [external.fd_row, { flexDirection: viewRTLStyle }] as ViewStyle
              }
            >
              <Image style={style.img} source={isDark ? item.imgs : item.img} />
              <View>
                <Text
                  style={[
                    commonStyles.fontsizeFiveHund,
                    { color: isDark ? colors.screenBg : colors.primary },
                  ]}
                >
                  {t(item.title)}
                </Text>
                <Text style={commonStyles.textsizeFourHund}>
                  {t(item.subtitle)}
                </Text>
              </View>
            </View>
            <View style={{ marginHorizontal: marginButton }}>
              <RadioButton
                onPress={() => valData(index)}
                checked={checkedData === index}
              />
            </View>
          </View>
        </Pressable>
      ))}
    </View>
  );
};

export default YourCardContainer;
