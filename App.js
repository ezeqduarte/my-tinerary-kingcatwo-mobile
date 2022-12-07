import 'react-native-gesture-handler'
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./src/navigation/stack";
import Drawer from './src/navigation/drawer';

export default function App() {
  return (
    <NavigationContainer>
      {/* NavigationContainer es el contenedor de cada ruta */}
      <Drawer/> 
      {/* El Drawer es cada ruta*/}
    </NavigationContainer>
  );
}


