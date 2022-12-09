import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Cities from "../screens/Cities";
import Home from "../screens/Home";
import Hotels from "../screens/Hotels";
import SignIn from "../screens/SignIn";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsCity from "../screens/DetailsCity";
import Stack from "./stack";
import Stack2 from "./stack2";
import SignUp from "../screens/SignUp";
import { Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import userActions from "../redux/actions/userActions";

const StackNav = createNativeStackNavigator();

const DrawerNav = createDrawerNavigator();

export default function Drawer() {
  let { logged, role, name, photo } = useSelector((store) => store.userReducer);
  const { reIngress } = userActions;
  const dispatch = useDispatch();
  return (
    <DrawerNav.Navigator initialRouteName="Home">
      {!logged ? <DrawerNav.Screen name="Sign In" component={SignIn} /> : null}
      {!logged ? <DrawerNav.Screen name="Sign Up" component={SignUp} /> : null}
      {logged ? <DrawerNav.Screen name="Home" component={Home} /> : null}
      {logged ? <DrawerNav.Screen name="Cities" component={Stack} /> : null}
      {logged ? <DrawerNav.Screen name="Hotels" component={Stack2} /> : null}
    </DrawerNav.Navigator>
  );
}
