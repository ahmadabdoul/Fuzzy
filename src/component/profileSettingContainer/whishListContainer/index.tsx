import React from "react";
import {
  Image,
  Text,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageSourcePropType,
  TouchableOpacity,
  Alert,
} from "react-native";
import { whishlistData } from "../../../data/whislist";
import { Bag, Cross } from "../../../utils/icon";
import { useValues } from "../../../../App";
import colors from "../../../theme/colors";
import { external } from "../../../styles/external.css";
import { style } from "./style.css";
import { useNavigation } from "@react-navigation/native";

interface WishlistItem {
  image?: ImageSourcePropType;
  title?: string;
  subtitle?: string;
  price?: number;
  underLinePrice?: number;
}

const WhishlitstViewContainer: React.FC = () => {
  const { isDark, textRTLStyle, t, viewRTLStyle, currSymbol, currPrice } =
    useValues();
  const handleChange = () => {
    Alert.alert("Remove Item");
  };
  const navigation = useNavigation();
  return (
    <View>
      {whishlistData.map((item: WishlistItem, index: number) => (
        <View
          style={[
            style.whishlitstViewContainer as StyleProp<ViewStyle>,
            { backgroundColor: isDark ? colors.primary : colors.layoutBg },
          ]}
          key={index}
        >
          <View
            style={[
              style.layoutMain as StyleProp<ViewStyle>,
              { flexDirection: viewRTLStyle },
            ]}
          >
            <View
              style={[
                style.imageView as StyleProp<ViewStyle>,
                {
                  backgroundColor: isDark
                    ? colors.textinputBG
                    : colors.screenBg,
                },
                { flexDirection: viewRTLStyle },
              ]}
            >
              <Image
                style={style.img as StyleProp<ImageSourcePropType>}
                source={item.image}
              />
            </View>
            <View style={style.ViewContainer as StyleProp<ViewStyle>}>
              <View
                style={[
                  style.underView as StyleProp<ViewStyle>,
                  { flexDirection: viewRTLStyle },
                ]}
              >
                <Text
                  style={[
                    style.title as StyleProp<TextStyle>,
                    { color: isDark ? colors.screenBg : colors.primary },
                  ]}
                >
                  {t(item.title)}
                </Text>
                <TouchableOpacity onPress={handleChange}>
                  <Cross width={27} height={27} />
                </TouchableOpacity>
              </View>
              <Text
                style={[
                  style.subtitle as StyleProp<TextStyle>,
                  { textAlign: textRTLStyle },
                ]}
              >
                {t(item.subtitle)}
              </Text>
              <View
                style={[
                  style.underContainer as StyleProp<ViewStyle>,
                  { flexDirection: viewRTLStyle },
                ]}
              >
                <View
                  style={[
                    external.fd_row as StyleProp<ViewStyle>,
                    external.ai_center as StyleProp<ViewStyle>,
                    { flexDirection: viewRTLStyle },
                  ]}
                >
                  <Text
                    style={[
                      style.price as StyleProp<TextStyle>,
                      { color: isDark ? colors.screenBg : colors.primary },
                    ]}
                  >
                    {currSymbol}
                    {(currPrice * item.price).toFixed(2)}
                  </Text>
                  <Text style={style.underLinePrice as StyleProp<TextStyle>}>
                    {currSymbol}
                    {(currPrice * item.underLinePrice).toFixed(2)}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() =>
                    Alert.alert("Successfully checked your wishlist container ")
                  }
                  style={[
                    style.bag as StyleProp<ViewStyle>,
                    {
                      backgroundColor: isDark
                        ? colors.primary
                        : colors.screenBg,
                    },
                    {
                      borderColor: isDark
                        ? colors.textinputBG
                        : colors.screenBg,
                    },
                  ]}
                >
                  <Bag />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default WhishlitstViewContainer;
