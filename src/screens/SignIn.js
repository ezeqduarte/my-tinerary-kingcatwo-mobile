import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import Footer from "../components/Footer";

export default function SignUp() {
  return (
    <View style={styles.signUp}>
      <View style={styles.formSignUp}>
        <Text style={styles.titulo}>Welcome to My-Tinerary!</Text>
        <Text style={styles.textoLog}>Sign In with your account</Text>
        <TextInput placeholder="E-Mail" style={styles.inputSearch} />
        <TextInput placeholder="Password" style={styles.inputSearch} />
        <Text style={styles.textoLog}>Or create a new account</Text>
        <Pressable
          style={styles.botonColor}
          onPress={() => props.navigation.navigate("DetailsHotel", place._id)}
        >
          <Text style={styles.fondoBoton}>Sign Up</Text>
        </Pressable>
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  signUp: {
    height: "100%",
    display: "flex",
  },
  formSignUp: {
    height: "88%",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  textoLog: {
    marginBottom: 5,
  },

  inputSearch: {
    height: 40,
    width: 180,
    backgroundColor: "white",
    marginBottom: 10,
    fontSize: 12,
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 4,
  },

  botonColor: {
    backgroundColor: "#ff3648",
    height: 40,
    width: 180,
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 4,
  },

  fondoBoton: {
    backgroundColor: "#ff3648",
    height: 18,
    width: 180,
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 4,
    fontSize: 13,
    color: "white",
  },

  logo: {
    width: 120,
    height: 120,
  },


  titulo:{
    marginBottom: 20,
    fontSize: 20,
    fontWeight: "bold"
  }
});
