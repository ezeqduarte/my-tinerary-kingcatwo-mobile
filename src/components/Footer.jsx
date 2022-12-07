import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Footer() {
  return (
    <View style={styles.footer}>
      {/* <Image/> */}
      <Text  style={styles.footertext}>© 2022-2023 My Tinerary. All rights reserved.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    color: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 35,
    height: 50,
    backgroundColor: "#1a1919",
  },
  footertext: {
    color: "white",
    fontSize: 10,
   
  },
});
