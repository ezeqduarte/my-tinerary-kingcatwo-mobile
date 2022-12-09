import * as React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useDispatch, useSelector } from "react-redux";
import userActions from "../redux/actions/userActions";

import Home from "../screens/Home";
import Stack from "./stack";
import Stack2 from "./stack2";
import SignUp from "../screens/SignUp";
import SignIn from "../screens/SignIn";
import Profile from "../screens/Profile";
import MyReactions from "../screens/MyReactions";

const DrawerNav = createDrawerNavigator();

export default function Drawer() {
  let { logged } = useSelector((store) => store.userReducer);
  const { reIngress } = userActions;
  const dispatch = useDispatch();

  async function getToken() {
    try {
      let token = await AsyncStorage.getItem("token");
      token = JSON.parse(token);
      if (token) {
        dispatch(reIngress(token.token.user));
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  React.useEffect(() => {
    getToken();
  }, []);

  return (
    <DrawerNav.Navigator initialRouteName="Home">
      {!logged ? <DrawerNav.Screen name="Sign In" component={SignIn} /> : null}
      {!logged ? <DrawerNav.Screen name="Sign Up" component={SignUp} /> : null}
      {logged ? <DrawerNav.Screen name="Home" component={Home} /> : null}
      {logged ? <DrawerNav.Screen name="Cities" component={Stack} /> : null}
      {logged ? <DrawerNav.Screen name="Hotels" component={Stack2} /> : null}
      {logged ? <DrawerNav.Screen name="Profile" component={Profile} /> : null}
      {logged ? (
        <DrawerNav.Screen name="My reactions" component={MyReactions} />
      ) : null}
    </DrawerNav.Navigator>
  );
}
