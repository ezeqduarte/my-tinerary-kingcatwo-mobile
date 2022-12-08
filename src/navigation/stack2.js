import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsHotel from "../screens/DetailsHotel";
import Hotels from "../screens/Hotels";

const StackNav = createNativeStackNavigator();

export default function Stack2() {
  return (
    <StackNav.Navigator>
      <StackNav.Screen name="Our Hotels" component={Hotels} />
      <StackNav.Screen name="Details Hotel" component={DetailsHotel} />
       </StackNav.Navigator>
  );
}
