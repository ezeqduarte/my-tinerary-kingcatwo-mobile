import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cities from "../screens/Cities";
import DetailsCity from "../screens/DetailsCity";

const StackNav = createNativeStackNavigator();

export default function Stack() {
  return (
    <StackNav.Navigator>
      <StackNav.Screen name="Our Places" component={Cities} />
      <StackNav.Screen name="Details City" component={DetailsCity} />
    </StackNav.Navigator>
  );
}
