import React from "react";
import { View } from "react-native";
import CartContainer from "../../../component/profileSettingContainer/cart";
import { style } from "./style.css";
import ProfileEditContainerBottomTab from "../../../component/profileSettingContainer/profileEditContainerBottomTab";
import colors from "../../../theme/colors";
import HeadingContainer from "../../../commonComponent/headingContainer";
import { useValues } from "../../../../App";
import { external } from "../../../styles/external.css";
import { commonStyles } from "../../../styles/commonStyle";

const Cart: React.FC = ({ navigation }) => {
  const handleChnage = () => {
    navigation.navigate("Checkout");
  };
  const handleback = () => {
    navigation.goBack("");
  };
  const { isDark } = useValues();

  return (
    <View
      style={[
        commonStyles.flexBgContainer,
        { backgroundColor: isDark ? colors.primary : colors.screenBg },
      ]}
    >
      <View style={[external.mh_20]}>
        <HeadingContainer value={"transData.myCart"} onPress={handleback} />
        <CartContainer />
      </View>
      <ProfileEditContainerBottomTab
        rightSideBottomSpace={"transData.checkout"}
        leftsideStyle={style.leftsideStyle}
        rightsideStyle={[
          style.rightsideStyle,
          { backgroundColor: isDark ? colors.yellowColor : colors.primary },
        ]}
        left={false}
        onPress={handleChnage}
      />
    </View>
  );
};

export default Cart;
