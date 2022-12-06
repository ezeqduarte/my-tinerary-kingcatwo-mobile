import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import cities from "../screens/Cities";

const StackNav = createNativeStackNavigator();

export default function Stack() {
  return (
    <StackNav.Navigator>
      <StackNav.Screen name="Cities" component={cities} />
    </StackNav.Navigator>
  );
}
