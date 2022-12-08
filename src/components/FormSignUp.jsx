import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import React, { useState } from "react";
import axios from "axios";
import API from "../api/api";

const Separator = () => <View style={styles.separator} />;

export default function FormSignUp(props) {
  const [newAccount, setNewAccount] = useState({
    name: "",
    lastName: "",
    photo: "",
    age: null,
    email: "",
    password: "",
    role: `user`,
  });

  async function sendNewAcc() {
    await axios.post(`${API}auth/sign-up`, newAccount).then((response) => {
      if (!response.data.success) {
        response.data.message.map((message) => {
          Alert.alert(`${message}`);
        });
      } else {
        Alert.alert(`The user has created succesfuly`);
        props.props.navigate("Home");
      }
    });
  }

  const clickNewAcc = () => {
    sendNewAcc();
  };
  return (
    <View style={styles.formSignUp}>
      <Text style={styles.createAccount}>
        Create your account <Text style={styles.decored}>.</Text>
      </Text>
      <Separator />
      <TextInput
        placeholder="Ingress your name"
        onChangeText={(newText) =>
          setNewAccount({ ...newAccount, name: newText })
        }
        defaultValue={newAccount.name}
        style={styles.inputSearch}
      />
      <TextInput
        placeholder="Ingress your last name"
        onChangeText={(newText) =>
          setNewAccount({ ...newAccount, lastName: newText })
        }
        defaultValue={newAccount.lastName}
        style={styles.inputSearch}
      />
      <TextInput
        placeholder="Ingress your age"
        onChangeText={(newText) =>
          setNewAccount({ ...newAccount, age: newText })
        }
        defaultValue={newAccount.age}
        keyboardType="numeric"
        style={styles.inputSearch}
      />
      <TextInput
        placeholder="Ingress your email"
        style={styles.inputSearch}
        onChangeText={(newText) =>
          setNewAccount({ ...newAccount, email: newText })
        }
        defaultValue={newAccount.email}
      />
      <TextInput
        placeholder="Ingress your photo"
        style={styles.inputSearch}
        onChangeText={(newText) =>
          setNewAccount({ ...newAccount, photo: newText })
        }
        defaultValue={newAccount.photo}
      />
      <TextInput
        placeholder="Ingress your password"
        style={styles.inputSearch}
        secureTextEntry={true}
        autoCorrect={false}
        onChangeText={(newText) =>
          setNewAccount({ ...newAccount, password: newText })
        }
        defaultValue={newAccount.password}
      />
      <Separator />
      <Button
        style={styles.buttonFormSignUp}
        title="Send"
        color="#ff3648"
        onPress={clickNewAcc}
      ></Button>
      <Separator />
      <Button
        style={styles.buttonFormSignUp}
        title="Sign in whit account"
        /* onPress={() => props.props.navigate("Sign In")} */
        color="#ff3648"
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  formSignUp: {
    height: "88%",
    width: "80%",
    display: "flex",
    justifyContent: "center",
  },
  createAccount: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
    color: "#1a1900",
  },
  inputSearch: {
    fontSize: 15,
    textAlign: "center",
    padding: 1,
    margin: 3,
    borderColor: "rgba(0,0,0,.496)",
    borderWidth: 1,
    borderRadius: 2,
    backgroundColor: "#f3f3f3",
  },
  decored: {
    color: "#ff3648",
  },
  separator: {
    marginVertical: 5,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
