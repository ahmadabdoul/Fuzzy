import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../homScreen";
import ProfileSetting from "../tabBar/profileSetting";
import Cart from "../tabBar/cart";
import WhishList from "../tabBar/whishList";
import Categories from "../tabBar/categories";
import {
  CartIcon,
  Category,
  CategoryDis,
  HeartDis,
  HeartEnable,
  HomeDisable,
  HomeIcon,
  ProfileDisable,
  ProfileEnable,
} from "../../utils/icon";
import { useValues } from "../../../App";
import colors from "../../theme/colors";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  const { isDark } = useValues();
  const colorBgImg = isDark ? colors.primary : colors.screenBg;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          height: 65,
          paddingBottom: 8,
          paddingTop: 8,
          backgroundColor: colorBgImg,
        },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          switch (route.name) {
            case "Home":
              return focused ? <HomeIcon /> : <HomeDisable />;
            case "Categories":
              return focused ? <CategoryDis /> : <Category />;
            case "Cart":
              return focused ? <CartIcon /> : <CartIcon />;
            case "WhishList":
              return focused ? <HeartEnable /> : <HeartDis />;
            case "ProfileSetting":
              return focused ? <ProfileEnable /> : <ProfileDisable />;
            default:
              return null;
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Categories" component={Categories} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="WhishList" component={WhishList} />
      <Tab.Screen name="ProfileSetting" component={ProfileSetting} />
    </Tab.Navigator>
  );
};

export default MyTabs;
