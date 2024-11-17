import React, { useState } from "react";
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";

import CustomRatingBars from "../customRating";
import { styles } from "./style.css";
import { Minus, Plus } from "../../../utils/icon";
import { useValues } from "../../../../App";
import colors from "../../../theme/colors";
import { windowHeight } from "../../../theme/appConstant";
import { external } from "../../../styles/external.css";
import { commonStyles } from "../../../styles/commonStyle";
import Images from "../../../utils/images";

const InfoHeader: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const { isDark, textRTLStyle, viewRTLStyle, t, currSymbol, currPrice } =
    useValues();
  const colorText = isDark ? colors.screenBg : colors.primary;
  const colorBgImgs = isDark ? colors.darkScreenBg : colors.screenBg;

  return (
    <>
      <View
        style={[
          external.fd_row as StyleProp<ViewStyle>,
          external.js_space as StyleProp<ViewStyle>,
          external.ai_center as StyleProp<ViewStyle>,
          {
            flexDirection: viewRTLStyle as "row" | "column",
            marginTop: windowHeight(20),
          } as StyleProp<ViewStyle>,
        ]}
      >
        <Text
          style={[
            commonStyles.primaryfontSixHund as StyleProp<TextStyle>,
            { color: colorText },
          ]}
        >
          {t("transData.buddyChair")}
        </Text>
        <ImageBackground
          style={styles.sideBookMark as StyleProp<ViewStyle>}
          source={Images.sideBookMark}
        >
          <Text style={styles.offText as StyleProp<TextStyle>}>
            20% {t("transData.off")}
          </Text>
        </ImageBackground>
      </View>
      <View
        style={[
          external.fd_row as StyleProp<ViewStyle>,
          external.ai_center as StyleProp<ViewStyle>,
          {
            flexDirection: viewRTLStyle as "row" | "column",
          } as StyleProp<ViewStyle>,
        ]}
      >
        <Text
          style={[
            commonStyles.PrimarysizeFourHund as StyleProp<TextStyle>,
            external.mt_3 as StyleProp<TextStyle>,
            { color: colorText },
          ]}
        >
          {4.0}
        </Text>
        <CustomRatingBars />
        <Text
          style={[commonStyles.textsizeFourHund as StyleProp<TextStyle>]}
        >{` | ${t("transData.review")}`}</Text>
      </View>
      <View
        style={[
          external.fd_row as StyleProp<ViewStyle>,
          external.ai_center as StyleProp<ViewStyle>,
          external.mv_8 as StyleProp<ViewStyle>,
          {
            flexDirection: viewRTLStyle as "row" | "column",
          } as StyleProp<ViewStyle>,
        ]}
      >
        <Text
          style={[styles.price as StyleProp<TextStyle>, { color: colorText }]}
        >
          {currSymbol}
          {(currPrice * 102.25).toFixed(2)}
        </Text>
        <Text
          style={[
            styles.underPrice as StyleProp<TextStyle>,
            { textAlign: textRTLStyle },
          ]}
        >
          {currSymbol}
          {(currPrice * 102.25).toFixed(2)}
        </Text>
        <View
          style={[
            styles.bag as StyleProp<ViewStyle>,
            { backgroundColor: colorBgImgs },
          ]}
        >
          <TouchableOpacity
            style={styles.minus as StyleProp<ViewStyle>}
            onPress={decrement}
          >
            <Minus />
          </TouchableOpacity>
          <Text
            style={[styles.count as StyleProp<TextStyle>, { color: colorText }]}
          >
            {count}
          </Text>
          <TouchableOpacity
            style={styles.plus as StyleProp<ViewStyle>}
            onPress={increment}
          >
            <Plus />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={commonStyles.textsizeFiveHund as StyleProp<TextStyle>}>
        {t("transData.arms")}
      </Text>
    </>
  );
};

export default InfoHeader;
