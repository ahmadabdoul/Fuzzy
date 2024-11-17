import React, { useState } from "react";
import {
  Modal,
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import PaymentScreen from "../tabBar/profileSetting/paymentScreen";
import ProfileEditContainerBottomTab from "../../component/profileSettingContainer/profileEditContainerBottomTab";
import { styles } from "./style.css";
import { Cross } from "../../utils/icon";
import { useNavigation } from "@react-navigation/native";
import colors from "../../theme/colors";
import { useValues } from "../../../App";
import HeadingContainer from "../../commonComponent/headingContainer";
import { external } from "../../styles/external.css";
import Images from "../../utils/images";

type NavigationProp = {
  reset: (state: { index: number; routes: { name: string }[] }) => void;
  navigate: (screen: string) => void;
  goBack: (screen?: string) => void;
};

const PaymentMethodScreen: React.FC = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const navigation = useNavigation<NavigationProp>();

  const stackNavigation = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "DrawerScreen" }],
    });
  };

  const handleChange = () => {
    navigation.navigate("OrderTracker");
  };

  const handleBackChange = () => {
    navigation.goBack();
  };

  const { isDark, t } = useValues();
  const darkGif = isDark ? Images.paymentDoneDark : Images.paymentDone;
  const dark = isDark ? colors.darkScreenBg : colors.screenBg;

  return (
    <View style={[external.fx_1, { backgroundColor: dark }]}>
      <View style={[external.mh_20]}>
        <HeadingContainer
          value={"transData.paymentMethod"}
          onPress={handleBackChange}
        />
      </View>
      <PaymentScreen show={true} />
      <ProfileEditContainerBottomTab
        LeftSideBottomSpace={"transData.cancel"}
        rightSideBottomSpace={"transData.payNow"}
        leftsideStyle={styles.leftsideStyle as StyleProp<ViewStyle>}
        rightsideStyle={[
          styles.rightsideStyle as StyleProp<ViewStyle>,
          { backgroundColor: isDark ? colors.yellowColor : colors.primary },
        ]}
        onPress={() => setModalVisible(true)}
      />
      {modalVisible && (
        <View style={styles.centeredView as StyleProp<ViewStyle>}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView as StyleProp<ViewStyle>}>
              <View
                style={[
                  styles.modalView as StyleProp<ViewStyle>,
                  {
                    backgroundColor: isDark
                      ? colors.darkScreenBg
                      : colors.screenBg,
                  },
                ]}
              >
                <TouchableOpacity
                  style={[
                    external.as_end as StyleProp<ViewStyle>,
                    external.mh_20,
                  ]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Cross color={colors.lightText} />
                </TouchableOpacity>
                <Image
                  style={styles.paymentDone as StyleProp<ViewStyle>}
                  source={darkGif}
                />
                <View style={[external.mh_5 as StyleProp<ViewStyle>]}>
                  <Text
                    style={[
                      styles.modalText as StyleProp<TextStyle>,
                      { color: isDark ? colors.screenBg : colors.primary },
                    ]}
                  >
                    {t("transData.Congratulations")}
                  </Text>
                  <Text style={styles.modalSubtitle as StyleProp<TextStyle>}>
                    {t("transData.modelSubtitle")}
                  </Text>
                  <View style={[external.mv_10 as StyleProp<ViewStyle>]}>
                    <TouchableOpacity
                      style={styles.firstButton as StyleProp<ViewStyle>}
                      onPress={handleChange}
                    >
                      <Text
                        style={styles.modalShoppingText as StyleProp<TextStyle>}
                      >
                        {t("transData.trackOrder")}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    style={[
                      styles.startbutton as StyleProp<ViewStyle>,
                      {
                        backgroundColor: isDark
                          ? colors.yellowColor
                          : colors.layoutBg,
                      },
                      {
                        borderColor: isDark
                          ? colors.yellowColor
                          : colors.layoutBg,
                      },
                    ]}
                    onPress={stackNavigation}
                  >
                    <Text style={styles.modalShopping as StyleProp<TextStyle>}>
                      {t("transData.continueShopping")}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      )}
    </View>
  );
};

export default PaymentMethodScreen;
