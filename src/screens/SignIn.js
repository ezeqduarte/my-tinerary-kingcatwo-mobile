import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Pressable,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Footer from "../components/Footer";
import API from "../api/api";
import axios from "axios";
import { useDispatch } from "react-redux";
import userActions from "../redux/actions/userActions";

export default function SignUp(props) {
  const [loginAccount, setloginAccount] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  async function sendLoginAcc() {
    await axios
      .post(`${API}auth/sign-in`, loginAccount, { new: true })
      .then((response) => {
        if (!response.data.succes) {
          response.data.message.map((message) => {
            Alert.alert(`${message}`);
          });
        } else {
          dispatch(userActions.ingress(loginAccount));
        
          Alert.alert(`Welcome again ${response.data.response.user.name}`).then(props.navigation.navigate("Home"));
        }
        console.log(response.data);
      });
  }
  console.log(loginAccount);
  return (
    <View style={styles.signUp}>
      <View style={styles.formSignUp}>
        <Text style={styles.titulo}>Welcome to My-Tinerary!</Text>
        <Text style={styles.textoLog}>Sign In with your account</Text>
        <TextInput
          onChangeText={(newText) =>
            setloginAccount({ ...loginAccount, email: newText })
          }
          defaultValue={loginAccount.email}
          placeholder="E-Mail"
          style={styles.inputSearch}
        />
        <TextInput
          secureTextEntry={true}
          autoCorrect={false}
          onChangeText={(newText) =>
            setloginAccount({ ...loginAccount, password: newText })
          }
          defaultValue={loginAccount.password}
          placeholder="Password"
          style={styles.inputSearch}
        />
        <Pressable style={styles.botonColor} onPress={sendLoginAcc}>
          <Text style={styles.fondoBoton}>Sign In</Text>
        </Pressable>
        <Text style={styles.textoLog2}>Or create a new account!</Text>
        <Pressable
          style={styles.botonColor}
          onPress={() => props.navigation.navigate("Sign Up")}
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

  textoLog2: {
    marginBottom: 5,
    marginTop: 45,
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

  titulo: {
    marginBottom: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
});
