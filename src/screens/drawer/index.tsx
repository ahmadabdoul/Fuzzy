import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MyTabs from "../myTab";
import DrawerContent from "./drawerContent/drawerContent";
import { useValues } from "../../../App";

const Drawer = createDrawerNavigator();

interface DrawerScreenProps {}

const DrawerScreen: React.FC<DrawerScreenProps> = () => {
  const { isRTL } = useValues();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        drawerPosition: isRTL ? "right" : "left",
        headerShown: false,
      }}
    >
      <Drawer.Screen name="MyTabs" component={MyTabs} />
    </Drawer.Navigator>
  );
};

export default DrawerScreen;
