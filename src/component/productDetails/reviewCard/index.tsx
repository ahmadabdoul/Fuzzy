import React from "react";
import { Image, Text, View, ImageSourcePropType } from "react-native";
import { Star } from "../../../utils/icon";
import { styles } from "./style.css";
import { useValues } from "../../../../App";
import colors from "../../../theme/colors";
import { external } from "../../../styles/external.css";
import { commonStyles } from "../../../styles/commonStyle";

interface ReviewCardProps {
  data: Array<{
    img: ImageSourcePropType;
    name: string;
    time: string;
    rating: number;
    title: string;
  }>;
  backgroundColor: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ data, backgroundColor }) => {
  const { isDark, viewRTLStyle, t, textRTLStyle } = useValues();
  const colorText = isDark ? colors.screenBg : colors.primary;

  return (
    <View>
      {data.map((item, index) => (
        <View key={index} style={[styles.reviewView, { backgroundColor }]}>
          <View style={[external.fd_row, { flexDirection: viewRTLStyle }]}>
            <Image style={styles.imgs} source={item.img} />
            <View
              style={[
                external.fd_row,
                external.js_space,
                { width: "82%" },
                { flexDirection: viewRTLStyle },
              ]}
            >
              <View style={[external.mh_5]}>
                <Text
                  style={[commonStyles.fontsizeFiveHund, { color: colorText }]}
                >
                  {t(item.name)}
                </Text>
                <Text style={[commonStyles.textsizeFiveHund]}>
                  {t(item.time)}
                </Text>
              </View>
              <View
                style={[
                  external.ai_center,
                  external.fd_row,
                  external.js_space,
                  { flexDirection: viewRTLStyle },
                ]}
              >
                <Star />
                <Text
                  style={[
                    commonStyles.fontsizeFiveHund,
                    styles.rating,
                    { color: colorText },
                  ]}
                >
                  {item.rating}
                </Text>
              </View>
            </View>
          </View>
          <Text
            style={[
              commonStyles.textsizeFiveHund,
              external.ph_5,
              external.pt_10,
              { textAlign: textRTLStyle },
            ]}
          >
            {t(item.title)}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default ReviewCard;
