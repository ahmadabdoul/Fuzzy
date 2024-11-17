import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import HeaderContainer from "../../component/homeScreenContainer/headerContainer";
import colors from "../../theme/colors";
import SeachContainer from "../../commonComponent/seachContainer";
import MegaSaleBanner from "../../component/homeScreenContainer/megaSaleBanner";
import Slider from "../../component/homeScreenContainer/slider";
import NewArrival from "../../component/homeScreenContainer/newArrival";
import TrendFurniture from "../../component/homeScreenContainer/trendFurniture";
import MegaSaleBannerTwo from "../../component/homeScreenContainer/megaSaleBannerTwo";
import Funniture from "../../component/homeScreenContainer/furniture";
import BottomBanner from "../../component/homeScreenContainer/bottomBanner";
import OfferZone from "../../component/homeScreenContainer/offerZone";
import { useValues } from "../../../App";
import { external } from "../../styles/external.css";

const HomeScreen = ({ navigation }) => {
  const { isDark } = useValues();
  return (
    <SafeAreaView
      style={[
        external.fx_1,
        external.pt_20,
        { backgroundColor: isDark ? colors.darkScreenBg : colors.screenBg },
      ]}
    >
      <ScrollView
        contentContainerStyle={[external.Pb_30]}
        showsVerticalScrollIndicator={false}
      >
        <HeaderContainer navigation={navigation} />
        <View style={[external.mh_20]}>
          <SeachContainer />
        </View>
        <MegaSaleBanner />
        <Slider />
        <NewArrival shows={true} />
        <TrendFurniture />
        <MegaSaleBannerTwo />
        <OfferZone />
        <Funniture />
        <BottomBanner />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
