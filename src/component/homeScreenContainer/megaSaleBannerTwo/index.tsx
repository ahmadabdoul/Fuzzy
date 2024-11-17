import React from "react";
import { View } from "react-native";
import SaleBanner from "../../../commonComponent/saleBanner";
import { windowHeight } from "../../../theme/appConstant";
import { external } from "../../../styles/external.css";
import Images from "../../../utils/images";

const MegaSaleBannerTwo = () => {
  return (
    <View style={[external.mh_20, external.mv_15]}>
      <SaleBanner img={Images.bannerTwo} paddingTop={windowHeight(32)} />
    </View>
  );
};

export default MegaSaleBannerTwo;
