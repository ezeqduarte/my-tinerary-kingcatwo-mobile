import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React, { useRef, useState } from "react";
import Footer from "../components/Footer";
import FormSignUp from "../components/FormSignUp";

export default function SignUp(props) {

  return (
    <View style={styles.signUp}>
      <FormSignUp props={props.navigation} />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  signUp: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
