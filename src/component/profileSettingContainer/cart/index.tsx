import React, { useState } from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  ImageSourcePropType,
  Alert,
} from "react-native";
import { cartData } from "../../../data/cartData";
import { style } from "./style.css";
import { Bin, Minus, Plus } from "../../../utils/icon";
import { useValues } from "../../../../App";
import colors from "../../../theme/colors";
import { external } from "../../../styles/external.css";

type CartItem = {
  image: ImageSourcePropType;
  title: string;
  subtitle: string;
  price: number;
};

const CartContainer: React.FC = () => {
  const initialCounts = cartData.map(() => 0);
  const [counts, setCounts] = useState<number[]>(initialCounts);
  const { isDark, viewRTLStyle, t, currSymbol, currPrice, textRTLStyle } =
    useValues();

  const increment = (id: number) => {
    const newCounts = [...counts];
    newCounts[id] = newCounts[id] + 1;
    setCounts(newCounts);
  };

  const decrement = (id: number) => {
    if (counts[id] > 0) {
      const newCounts = [...counts];
      newCounts[id] = newCounts[id] - 1;
      setCounts(newCounts);
    }
  };

  return (
    <View>
      {cartData.map((item: CartItem, id: number) => (
        <View
          key={id}
          style={[
            style.whishlitstViewContainer,
            { backgroundColor: isDark ? colors.textinputBG : colors.layoutBg },
          ]}
        >
          <View style={[style.layoutMain, { flexDirection: viewRTLStyle }]}>
            <View
              style={[
                style.imageView,
                { backgroundColor: isDark ? colors.primary : colors.screenBg },
              ]}
            >
              <Image style={style.img} source={item.image} />
            </View>
            <View style={style.viewContainer}>
              <View style={[style.underView, { flexDirection: viewRTLStyle }]}>
                <Text
                  style={[
                    style.title,
                    { color: isDark ? colors.screenBg : colors.primary },
                  ]}
                >
                  {t(item.title)}
                </Text>
                <TouchableOpacity
                  onPress={() => Alert.alert("Successfully deleted")}
                >
                  <Bin />
                </TouchableOpacity>
              </View>
              <View
                style={[
                  external.fd_row,
                  external.ai_center,
                  { flexDirection: viewRTLStyle },
                ]}
              >
                <Text style={style.textStyle}>{t(item.subtitle)}</Text>
                <View style={style.verticleLine} />
                <View style={style.blueRound} />
                <Text style={style.blueText}>{t("transData.blue")}</Text>
              </View>
              <View
                style={[style.underContainer, { flexDirection: viewRTLStyle }]}
              >
                <View>
                  <Text
                    style={[
                      style.price,
                      { color: isDark ? colors.screenBg : colors.primary },
                    ]}
                  >
                    {currSymbol}
                    {(currPrice * item.price).toFixed(2)}
                  </Text>
                  <Text
                    style={[
                      style.underLinePrice,
                      {
                        textAlign: textRTLStyle,
                      },
                    ]}
                  >
                    {currSymbol}
                    {(currPrice * 130).toFixed(2)}
                  </Text>
                </View>
                <View
                  style={[
                    style.bag,
                    {
                      backgroundColor: isDark
                        ? colors.primary
                        : colors.screenBg,
                    },
                  ]}
                >
                  <TouchableOpacity
                    style={style.minus}
                    onPress={() => {
                      decrement(id);
                    }}
                  >
                    <Minus />
                  </TouchableOpacity>
                  <Text
                    style={[
                      style.count,
                      { color: isDark ? colors.screenBg : colors.primary },
                    ]}
                  >
                    {counts[id]}
                  </Text>
                  <TouchableOpacity
                    style={[
                      style.plus,
                      {
                        backgroundColor: isDark
                          ? colors.textinputBG
                          : colors.primary,
                      },
                    ]}
                    onPress={() => increment(id)}
                  >
                    <Plus />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default CartContainer;
