import React from "react";
import { View } from "react-native";
import SaleBanner from "../../../commonComponent/saleBanner";

import { windowHeight } from "../../../theme/appConstant";
import Images from "../../../utils/images";
import { external } from "../../../styles/external.css";

const MegaSaleBanner = () => {
  const bannerImage = Images.banner;
  return (
    <View style={[external.mh_20]}>
      <SaleBanner img={bannerImage} paddingTop={windowHeight(26)} />
    </View>
  );
};

export default MegaSaleBanner;
