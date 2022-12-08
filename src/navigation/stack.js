import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsCity from "../screens/DetailsCity";
import Cities from "../screens/Cities";

const StackNav = createNativeStackNavigator();

export default function Stack() {
  return (
    <StackNav.Navigator>
      <StackNav.Screen name="Our Places" component={Cities} />
      <StackNav.Screen name="Details City" component={DetailsCity} />
       </StackNav.Navigator>
  );
}
