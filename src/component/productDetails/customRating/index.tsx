import React, { useState } from "react";
import { TouchableOpacity, View, StyleProp, ViewStyle } from "react-native";
import { Star, UnCheckedStar } from "../../../utils/icon";
import { styles } from "./style.css";

type Rating = 1 | 2 | 3 | 4 | 5;

const CustomRatingBars: React.FC = () => {
  const [defaultRating, setDefaultRating] = useState<Rating>(0);
  const [maxRating] = useState<Rating[]>([1, 2, 3, 4, 5]);

  return (
    <View>
      <View style={styles.customRatingBarStyle as StyleProp<ViewStyle>}>
        {maxRating.map((item) => (
          <TouchableOpacity
            style={styles.touchableStar as StyleProp<ViewStyle>}
            activeOpacity={0.7}
            key={item}
            onPress={() => setDefaultRating(item)}
          >
            {item >= defaultRating ? <UnCheckedStar /> : <Star />}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default CustomRatingBars;
