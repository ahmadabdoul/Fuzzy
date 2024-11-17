import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import Splash from "../screens/intro/splash";
import SignIn from "../screens/auth/signIn";
import SignUp from "../screens/auth/signUp";
import Forgot from "../screens/auth/forgot";
import NewpassWord from "../screens/auth/newPassword";
import DrawerScreen from "../screens/drawer";
import OrderHistory from "../screens/tabBar/profileSetting/orderHistory";
import WhishListProfile from "../screens/tabBar/profileSetting/whishListProfile";
import PaymentScreen from "../screens/tabBar/profileSetting/paymentScreen";
import TearmsScreen from "../screens/tabBar/profileSetting/tearmsScreen";
import AddCard from "../screens/tabBar/profileSetting/paymentScreen/addCard";
import SavedAddressScreen from "../screens/tabBar/profileSetting/addressScreen";
import LanguageScreen from "../screens/tabBar/profileSetting/language";
import CurrencyScreen from "../screens/tabBar/profileSetting/currency";
import OrderTracker from "../screens/orderTracking";
import CustomerReview from "../screens/customerReview";
import FilterScreen from "../screens/FilterScreen";
import HelpScreen from "../screens/tabBar/profileSetting/help";
import Notifications from "../screens/tabBar/profileSetting/notification";
import Settings from "../screens/tabBar/profileSetting/settings";
import PaymentMethodScreen from "../screens/paymentMethod";
import NewAddress from "../screens/shippingAddress/newAddress";
import ShippingAddress from "../screens/shippingAddress";
import ShippingTypes from "../screens/shippingType";
import Checkout from "../screens/checkOut";
import VoucherScreen from "../screens/voucherScreen";
import ProductDetailsOne from "../screens/productDetails/productDetailsOne";
import EmptyWhishlist from "../screens/emptyScreen/emptyWhishlist";
import EmptySearch from "../screens/emptyScreen/emptySearch";
import EmptyOrder from "../screens/emptyScreen/emptyOrder";
import EmptyNotification from "../screens/emptyScreen/emptyNotification";
import EmptyCart from "../screens/emptyScreen/emptyCart";
import PageScreen from "../screens/pageScreen";
import SearchScreen from "../screens/searchScreen";
import ProductDetailsTwo from "../screens/productDetails/productDetailsTwo";
import ProfileEdit from "../screens/tabBar/profileSetting/profileContainer/profileEdit";
import Onbording from "../screens/intro/onBording";
import OtpVerification from "../screens/auth/otpVerification";
import MyTabs from "../screens/myTab";

type RootStackParamList = {
  Splash: undefined;
  Onbording: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Forgot: undefined;
  NewpassWord: undefined;
  ProductDetailsOne: undefined;
  DrawerScreen: undefined;
  ProfileEdit: undefined;
  OrderHistory: undefined;
  WhishListProfile: undefined;
  PaymentScreen: undefined;
  TearmsScreen: undefined;
  AddCard: undefined;
  SavedAddressScreen: undefined;
  LanguageScreen: undefined;
  CurrencyScreen: undefined;
  Settings: undefined;
  Notifications: undefined;
  HelpScreen: undefined;
  FilterScreen: undefined;
  CustomerReview: undefined;
  OrderTracker: undefined;
  PaymentMethodScreen: undefined;
  NewAddress: undefined;
  ShippingAddress: undefined;
  ShippingTypes: undefined;
  Checkout: undefined;
  Voucher: undefined;
  ProductDetailsTwo: undefined;
  SearchScreen: undefined;
  PageScreen: undefined;
  EmptyCart: undefined;
  EmptyNotification: undefined;
  EmptyOrder: undefined;
  EmptySearch: undefined;
  EmptyWhishlist: undefined;
  OtpVerification: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={
          {
            headerShown: false,
          } as NativeStackNavigationOptions
        }
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Onbording" component={Onbording} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="OtpVerification" component={OtpVerification} />
        <Stack.Screen name="NewpassWord" component={NewpassWord} />
        <Stack.Screen name="DrawerScreen" component={DrawerScreen} />
        <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
        <Stack.Screen name="OrderHistory" component={OrderHistory} />
        <Stack.Screen name="WhishListProfile" component={WhishListProfile} />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
        <Stack.Screen name="TearmsScreen" component={TearmsScreen} />
        <Stack.Screen name="AddCard" component={AddCard} />
        <Stack.Screen
          name="SavedAddressScreen"
          component={SavedAddressScreen}
        />
        <Stack.Screen name="LanguageScreen" component={LanguageScreen} />
        <Stack.Screen name="CurrencyScreen" component={CurrencyScreen} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="HelpScreen" component={HelpScreen} />
        <Stack.Screen name="FilterScreen" component={FilterScreen} />
        <Stack.Screen name="CustomerReview" component={CustomerReview} />
        <Stack.Screen name="OrderTracker" component={OrderTracker} />
        <Stack.Screen
          name="PaymentMethodScreen"
          component={PaymentMethodScreen}
        />
        <Stack.Screen name="NewAddress" component={NewAddress} />
        <Stack.Screen name="ShippingAddress" component={ShippingAddress} />
        <Stack.Screen name="ShippingTypes" component={ShippingTypes} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="Voucher" component={VoucherScreen} />
        <Stack.Screen name="ProductDetailsTwo" component={ProductDetailsTwo} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="PageScreen" component={PageScreen} />
        <Stack.Screen name="EmptyCart" component={EmptyCart} />
        <Stack.Screen name="EmptyNotification" component={EmptyNotification} />
        <Stack.Screen name="EmptyOrder" component={EmptyOrder} />
        <Stack.Screen name="EmptySearch" component={EmptySearch} />
        <Stack.Screen name="EmptyWhishlist" component={EmptyWhishlist} />
        <Stack.Screen name="ProductDetailsOne" component={ProductDetailsOne} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
