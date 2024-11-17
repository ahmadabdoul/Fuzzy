import React from "react";
import {
  Image,
  Text,
  View,
  ViewStyle,
  TextStyle,
  ImageStyle,
  TouchableOpacity,
} from "react-native";
import SolidLine from "../../commonComponent/solidLine";
import { orderHistorydata } from "../../data/orderHistory";
import { style } from "./style.css";
import { useValues } from "../../../App";
import colors from "../../theme/colors";
import { RightArow } from "../../utils/icon";
import { external } from "../../styles/external.css";
import { useNavigation } from "@react-navigation/native";

interface OrderHistoryItem {
  img: any;
  titile: string;
  ongoing: string;
  qty: string;
  location: string;
  order: string;
  date: string;
  delivered?: boolean;
}

const OrderHistoryList: React.FC = () => {
  const { isRTL, isDark, textRTLStyle, viewRTLStyle, t } = useValues();
  const colorBg = isDark ? colors.textinputBG : colors.layoutBg;
  const colorBgImg = isDark ? colors.primary : colors.screenBg;
  const navigation = useNavigation();
  return (
    <View>
      {orderHistorydata.map((item: OrderHistoryItem, index: number) => (
        <TouchableOpacity
          onPress={() => navigation.navigate("Checkout")}
          style={
            [style.viewContainer, { backgroundColor: colorBg }] as ViewStyle
          }
          key={index}
        >
          <View
            style={
              [external.fd_row, { flexDirection: viewRTLStyle }] as ViewStyle
            }
          >
            <View
              style={
                [
                  style.imageContainer,
                  { backgroundColor: colorBgImg },
                  { flexDirection: viewRTLStyle },
                ] as ViewStyle
              }
            >
              <Image
                style={
                  [
                    style.imageView,
                    { flexDirection: viewRTLStyle },
                  ] as ImageStyle
                }
                source={item.img}
              />
            </View>
            <View
              style={
                [style.viewList, { width: isRTL ? "74%" : "80%" }] as ViewStyle
              }
            >
              <View
                style={
                  [
                    style.ViewTitile,
                    { flexDirection: viewRTLStyle },
                    { width: isRTL ? "100%" : "92%" },
                  ] as ViewStyle
                }
              >
                <Text
                  style={
                    [
                      style.title,
                      { color: isDark ? colors.screenBg : colors.primary },
                      { textAlign: textRTLStyle },
                    ] as TextStyle
                  }
                >
                  {t(item.titile)}
                </Text>
                <View
                  style={
                    [
                      style.ongoingView,
                      item.delivered && style.lastOngoing,
                    ] as ViewStyle
                  }
                >
                  <Text
                    style={
                      [
                        style.ongoingText,
                        item.delivered && style.lastongoingText,
                        { textAlign: textRTLStyle },
                      ] as TextStyle
                    }
                  >
                    {t(item.ongoing)}
                  </Text>
                </View>
              </View>
              <View>
                <Text
                  style={[style.qty, { textAlign: textRTLStyle }] as TextStyle}
                >
                  {t(item.qty)}
                </Text>
                <View
                  style={
                    [
                      external.fd_row,
                      external.ai_center,
                      { flexDirection: viewRTLStyle },
                    ] as ViewStyle
                  }
                >
                  <Text
                    style={
                      [
                        style.viewDetails,
                        { textAlign: textRTLStyle },
                      ] as TextStyle
                    }
                  >
                    •
                  </Text>
                  <Text
                    style={
                      [
                        style.viewDetails,
                        external.ph_5,
                        { textAlign: textRTLStyle },
                      ] as TextStyle
                    }
                  >
                    {t(item.location)}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <SolidLine
            marginVertical={8}
            color={isDark ? colors.primary : colors.solidLine}
          />
          <View
            style={
              [
                external.fd_row,
                external.js_space,
                external.ai_center,
                { flexDirection: viewRTLStyle },
              ] as ViewStyle
            }
          >
            <View
              style={
                [external.fd_row, { flexDirection: viewRTLStyle }] as ViewStyle
              }
            >
              <Text
                style={
                  [
                    style.order,
                    { color: isDark ? colors.screenBg : colors.primary },
                  ] as TextStyle
                }
              >
                {t(item.order)}
              </Text>
              <Text
                style={
                  [
                    style.date,
                    { textAlign: textRTLStyle },
                    external.ph_5,
                  ] as TextStyle
                }
              >
                :
              </Text>
              <Text
                style={[style.date, { textAlign: textRTLStyle }] as TextStyle}
              >
                {t(item.date)}
              </Text>
            </View>
            <Text
              style={
                [
                  style.dispatched,
                  { color: isDark ? colors.screenBg : colors.primary },
                  { textAlign: textRTLStyle },
                ] as TextStyle
              }
            >
              <RightArow />
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default OrderHistoryList;
