import React, { useState } from "react";
import { Image, Pressable, Text, View, ImageSourcePropType, ViewStyle } from "react-native";
import RadioButton from "../../../../commonComponent/radioButton";
import { style } from "./style.css";
import { wallet } from "../../../../data/cardData";
import { useValues } from "../../../../../App";
import colors from "../../../../theme/colors";
import { windowHeight } from "../../../../theme/appConstant";
import { external } from "../../../../styles/external.css";

interface WalletItem {
  id: number;
  title: string;
  img: ImageSourcePropType;
  imgs: ImageSourcePropType;
}

const PaymentMode: React.FC = () => {
  const [data, setData] = useState<number>(0);
  const { isRTL, isDark, viewRTLStyle, t } = useValues();

  const paymentData = (id: number) => {
    setData(id === data ? -1 : id);
  };

  return (
    <View>
      <View
        style={[
          style.containerWallet,
          { backgroundColor: isDark ? colors.textinputBG : colors.screenBg },
          { borderTopColor: isDark ? colors.textinputBG : colors.screenBg },
        ]}
        elevation={1.6}
      >
        {wallet.map((item: WalletItem, id: number) => (
          <Pressable
            key={id}
            onPress={() => paymentData(id)}
          >
            <View
              style={[
                style.containerViewwallet,
                { flexDirection: viewRTLStyle },
                { width: isRTL ? "100%" : "96%" },
                { marginHorizontal: isRTL ? windowHeight(10) : undefined },
              ] as ViewStyle}
            >
              <View
                style={[
                  external.fd_row,
                  external.ai_center,
                  { flexDirection: viewRTLStyle },
                ] as ViewStyle}
              >
                <View style={style.viewIcon}>
                  <Image
                    style={style.img}
                    source={item.id === 1 && isDark ? item.imgs : item.img}
                  />
                </View>
                <Text
                  style={[
                    style.flegrow,
                    { color: isDark ? colors.screenBg : colors.primary },
                  ]}
                >
                  {t(item.title)}
                </Text>
              </View>
              <RadioButton
                onPress={() => paymentData(id)}
                checked={data === id}
              />
            </View>
            {id !== wallet.length - 1 && (
              <View style={style.separator}>
                <View
                  style={[
                    style.separatorLine,
                    { borderColor: isDark ? colors.primary : colors.solidLine },
                  ]}
                />
              </View>
            )}
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default PaymentMode;
