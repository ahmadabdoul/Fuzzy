import React, { useState } from "react";
import {
  Image,
  Modal,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Back, Cross, SearchNormal } from "../../../utils/icon";
import colors from "../../../theme/colors";
import NewArrival from "../../../component/homeScreenContainer/newArrival";
import HeadingContainer from "../../../component/productDetails/headingContainer";
import ReviewCard from "../../../component/productDetails/reviewCard";
import CarouselSlide from "../../../component/productDetails/carouselSlide";
import SolidLine from "../../../commonComponent/solidLine";
import Input from "../../../commonComponent/input";
import H3HeadingCategory from "../../../commonComponent/headingCategory/H3HeadingCategory";
import { reviewData } from "../../../data/productOne";
import ModelView from "../../../component/productDetails/modelView";
import PincodeContainer from "../../../component/productDetails/pincod";
import DeliveryType from "../../../component/productDetails/deliveryType";
import DetailText from "../../../component/productDetails/detailText";
import CustomTable from "../../../component/productDetails/customTable";
import BottomBar from "../../../component/productDetails/bottomBar";
import InfoHeader from "../../../component/productDetails/infoHeader";
import { useValues } from "../../../../App";
import RedHeartContainer from "../../../commonComponent/redHeartContainer";
import Images from "../../../utils/images";
import { external } from "../../../styles/external.css";
import { commonStyles } from "../../../styles/commonStyle";
import { styles } from "./style.css";
import CarouselSlider from "../../../component/productDetails/carouselSlide";
import CarouselSliderTwo from "../../../component/productDetails/carouselSlide";

type NavigationProp = {
  navigate: (screenName: string) => void;
  goBack: () => void;
};

const ProductDetailsOne: React.FC<{ navigation: NavigationProp }> = ({
  navigation,
}) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const handleChange = (screenName: string) => {
    navigation.navigate(screenName);
  };

  const { isDark, viewRTLStyle, imageRTLStyle, t } = useValues();
  const colorBgImg = isDark ? colors.primary : colors.layoutBg;
  const colorText = isDark ? colors.screenBg : colors.primary;
  const colorBgImgs = isDark ? colors.darkScreenBg : colors.screenBg;

  return (
    <View style={[external.fx_1]}>
      <ScrollView
        contentContainerStyle={[
          external.Pb_80,
          { backgroundColor: colorBgImgs },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View style={[external.fx_1, { backgroundColor: colorBgImg }]}>
          <Image style={styles.img} source={Images.headerBg} />
          <View style={[external.mt_10]}>
            <View
              style={[
                external.fd_row,
                external.js_space,
                external.mt_20,
                { flexDirection: viewRTLStyle },
              ]}
            >
              <Pressable
                onPress={() => navigation.goBack()}
                style={[
                  { transform: [{ scale: imageRTLStyle }] },
                  external.mh_20,
                ]}
              >
                <Back color={colors.screenBg} />
              </Pressable>
              <Text style={[commonStyles.whitefontSixHund, styles.chairText]}>
                {t("transData.chair")}
              </Text>
              <View
                style={[external.fd_row, external.ai_center, external.mh_20]}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate("SearchScreen")}
                  style={[external.mh_5]}
                >
                  <SearchNormal />
                </TouchableOpacity>
                <RedHeartContainer size={"large"} />
              </View>
            </View>
            <CarouselSliderTwo />
            <View style={[external.mh_20]}>
              <InfoHeader />
              <HeadingContainer title={"transData.dimensions"} />
              <CustomTable />
              <HeadingContainer title={"transData.checkDelivery"} />
              <PincodeContainer />
              <DeliveryType />
              <HeadingContainer title={"transData.details"} />
              <DetailText />
              <HeadingContainer title={"transData.Reviews"} />
              <View style={[external.mt_10]}>
                <H3HeadingCategory
                  value={"transData.review"}
                  seeall={"transData.viewAll"}
                  onPress={() => handleChange("CustomerReview")}
                  search={true}
                />
              </View>
              <ReviewCard data={reviewData} backgroundColor={colorBgImgs} />
              <Pressable onPress={() => setModalVisible(true)}>
                <Text
                  style={[commonStyles.fontsizeFiveHund, { color: colorText }]}
                >
                  {t("transData.writeYourReview")}
                </Text>
              </Pressable>
            </View>
          </View>
          <View style={[styles.viewList, { backgroundColor: colorBgImgs }]}>
            <View style={[external.mt_10, external.ph_20]}>
              <H3HeadingCategory
                value={"transData.similarProducts"}
                seeall={"transData.viewAll"}
                onPress={() => handleChange("SearchScreen")}
                search={true}
              />
            </View>
            <NewArrival />
          </View>
          <View
            style={[
              styles.centeredView,
              {
                backgroundColor: isDark ? colors.primary : colors.modelBgColor,
              },
            ]}
          >
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View
                  style={[styles.modalView, { backgroundColor: colorBgImgs }]}
                >
                  <Pressable onPress={() => setModalVisible(!modalVisible)}>
                    <View style={[external.fd_row, external.js_space]}>
                      <Text
                        style={[
                          commonStyles.fontsizeFiveHund,
                          { color: colorText },
                        ]}
                      >
                        {t("transData.createReview")}
                      </Text>
                      <Cross />
                    </View>
                    <SolidLine
                      color={isDark ? colors.textinputBG : colors.layoutBg}
                    />
                    <ScrollView>
                      <ModelView />
                      <SolidLine
                        marginVertical={15}
                        color={isDark ? colors.textinputBG : colors.layoutBg}
                      />
                      <Input
                        value={"transData.submitReview"}
                        onPress={() => setModalVisible(!modalVisible)}
                      />
                    </ScrollView>
                  </Pressable>
                </View>
              </View>
            </Modal>
          </View>
        </View>
      </ScrollView>
      <BottomBar onPress={() => handleChange("Checkout")} />
    </View>
  );
};

export default ProductDetailsOne;
