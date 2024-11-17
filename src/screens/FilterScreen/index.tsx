import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import { styles } from "./style.css";
import HeadingContainer from "../../commonComponent/headingContainer";
import SolidLine from "../../commonComponent/solidLine";
import { external } from "../../styles/external.css";
import colors from "../../theme/colors";
import { filterScreenData } from "../../data/filterScreenData";
import { windowHeight } from "../../theme/appConstant";
import SortByContainer from "../../component/filterContainer/sortContainer";
import ProfileEditContainerBottomTab from "../../component/profileSettingContainer/profileEditContainerBottomTab";
import ColorContainer from "../../component/filterContainer/colorContainer";
import Dimension from "../../component/filterContainer/dimensionContainer";
import PriceContainer from "../../component/filterContainer/priceContainer";
import { useValues } from "../../../App";
import { commonStyles } from "../../styles/commonStyle";

interface FilterScreenProps {
  navigation: {
    navigate: (screen: string) => void;
    goBack: (screen?: string) => void;
  };
}

interface FilterScreenItem {
  id: number;
  title: string;
}

const FilterScreen: React.FC<FilterScreenProps> = ({ navigation }) => {
  const [selectedItem, setSelectedItem] = useState<number>(0);
  const handleChange = () => {
    navigation.navigate("DrawerScreen");
  };
  const handleBack = () => {
    navigation.goBack("");
  };

  const { isRTL, isDark, viewRTLStyle, t } = useValues();
  const colorBg = isDark ? colors.primary : colors.layoutBg;
  const colorBgImg = isDark ? colors.bgColordark : colors.screenBg;
  const colorText = isDark ? colors.screenBg : colors.primary;
  const colorBorder = isDark ? colors.textinputBG : colors.paymentDashColor;
  const borderwidth = isRTL ? 2 : undefined;

  return (
    <View
      style={[commonStyles.flexBgContainer, { backgroundColor: colorBgImg }]}
    >
      <View style={[external.mh_20]}>
        <HeadingContainer value={"transData.filter"} onPress={handleBack} />
      </View>
      <View style={[external.mt_10]}>
        <SolidLine
          color={colorBorder}
          height={2}
          marginVertical={windowHeight(1)}
        />
      </View>
      <View style={[styles.content, { flexDirection: viewRTLStyle }]}>
        <View
          style={[
            styles.menuColumn,
            { backgroundColor: colorBg },
            { borderColor: colorBorder },
          ]}
        >
          {filterScreenData.map((item: FilterScreenItem) => (
            <View key={item.id}>
              <TouchableOpacity
                onPress={() => setSelectedItem(item.id)}
                style={[
                  styles.menuItem as StyleProp<ViewStyle>,
                  item.id === selectedItem
                    ? (styles.selectedMenuItem as StyleProp<ViewStyle>)
                    : null,
                  item.id === selectedItem && { borderRightColor: colorText },
                  item.id === selectedItem && { borderLeftWidth: borderwidth },
                ]}
              >
                <Text
                  style={[
                    styles.menuItemText as StyleProp<TextStyle>,
                    item.id === selectedItem
                      ? (styles.menuItemTextSelect as StyleProp<TextStyle>)
                      : null,
                    item.id === selectedItem && { color: colorText },
                  ]}
                >
                  {t(item.title)}
                </Text>
              </TouchableOpacity>
              <SolidLine
                color={colorBorder}
                height={2}
                marginVertical={windowHeight(1)}
              />
            </View>
          ))}
        </View>
        <View>{selectedItem === 0 && <SortByContainer />}</View>
        <View>{selectedItem === 1 && <ColorContainer />}</View>
        <View>{selectedItem === 2 && <PriceContainer />}</View>
        <View>{selectedItem === 3 && <Dimension />}</View>
      </View>
      <ProfileEditContainerBottomTab
        onPressLeft={handleChange}
        LeftSideBottomSpace={"transData.resetAll"}
        rightSideBottomSpace={"transData.applySmall"}
        leftsideStyle={[
          styles.leftsideStyle,
          { backgroundColor: isDark ? colors.primary : colors.layoutBg },
        ]}
        rightsideStyle={[
          styles.rightsideStyle,
          { backgroundColor: isDark ? colors.yellowColor : colors.primary },
        ]}
        left={true}
        onPress={handleChange}
      />
    </View>
  );
};

export default FilterScreen;
