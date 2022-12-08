import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Cities from "../screens/Cities";
import Home from "../screens/Home";
import Hotels from "../screens/Hotels";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsCity from "../screens/DetailsCity";
import Stack from "./stack";
import Stack2 from "./stack2";
import SignUp from "../screens/SignUp";
import { Button } from "react-native";

const StackNav = createNativeStackNavigator();

const DrawerNav = createDrawerNavigator();

export default function Drawer() {
  return (
    <DrawerNav.Navigator initialRouteName="Home">
      {true ? <DrawerNav.Screen name="Sign In" component={SignUp} /> : null}
      {true ? <DrawerNav.Screen name="Sign Up" component={SignUp} /> : null}
      {true ? <DrawerNav.Screen name="Home" component={Home} /> : null}
      {true ? <DrawerNav.Screen name="Cities" component={Stack} /> : null}
      {true ? <DrawerNav.Screen name="Hotels" component={Stack2} /> : null}
    </DrawerNav.Navigator>
  );
}
