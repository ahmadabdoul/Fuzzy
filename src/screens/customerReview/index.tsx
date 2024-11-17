import React from "react";
import { ScrollView, View } from "react-native";
import ReviewCard from "../../component/productDetails/reviewCard";
import SafeContainer from "../../commonComponent/safeContainer";
import colors from "../../theme/colors";
import { cutomerReviewData } from "../../data/cutomerReviewData";
import HeadingContainer from "../../commonComponent/headingContainer";
import { useValues } from "../../../App";
import { external } from "../../styles/external.css";

interface CustomerReviewProps {
  navigation: {
    goBack: (route?: string) => void;
  };
}

const CustomerReview: React.FC<CustomerReviewProps> = ({ navigation }) => {
  const { isDark } = useValues();
  const colorBgImg = isDark ? colors.primary : colors.layoutBg;

  return (
    <SafeContainer
      value={
        <View>
          <HeadingContainer
            value={"transData.customerReview"}
            onPress={() => navigation.goBack("")}
          />
          <ScrollView contentContainerStyle={[external.Pb_80]}>
            <ReviewCard data={cutomerReviewData} backgroundColor={colorBgImg} />
          </ScrollView>
        </View>
      }
    />
  );
};

export default CustomerReview;
