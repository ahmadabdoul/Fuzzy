import React from "react";
import { View, ViewStyle } from "react-native";
import HeadingContainer from "../../../../commonComponent/headingContainer";
import SafeContainer from "../../../../commonComponent/safeContainer";
import SeachContainer from "../../../../commonComponent/seachContainer";
import OrderHistoryList from "../../../../component/orderHistoryList";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {};

type OrderHistoryNavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface OrderHistoryProps {
  navigation: OrderHistoryNavigationProp;
}

const OrderHistory: React.FC<OrderHistoryProps> = ({ navigation }) => {
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <SafeContainer
      value={
        <View>
          <HeadingContainer
            value={"transData.orderHistorys"}
            onPress={handleBack}
          />
          <SeachContainer />
          <OrderHistoryList />
        </View>
      }
    />
  );
};

export default OrderHistory;
