import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Cities from "../screens/Cities";
import Home from "../screens/Home";
import Hotels from "../screens/Hotels";


const DrawerNav = createDrawerNavigator();

export default function Drawer() {
  return (
    <DrawerNav.Navigator initialRouteName="Home">     
      <DrawerNav.Screen name="Home" component={Home} color={"red"} />
      <DrawerNav.Screen name="Cities" component={Cities} />
      <DrawerNav.Screen name="Hotels" component={Hotels} />
    </DrawerNav.Navigator>
  );
}
