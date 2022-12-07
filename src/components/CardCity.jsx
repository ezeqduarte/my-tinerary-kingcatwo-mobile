import React from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  Text,
} from "react-native";

export default function CardCity(props) {
  /* let {city}=props */
  return (
    <View style={styles.cardCity}>
      <View className="imgCard"></View>
      <Text>Meet our most popular locations</Text>
      <View className="btn-details">
        <Text>Meet our most popular locations</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardCity: {
    width: 340,
    height: 470,
    backgroundColor: "#f3f3f3",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  imgCard: {
    flex: 1,
    justifyContent: "center",
    height: 710,
  },
  btnDetails: {
    color: "white",
    fontSize: 47,
    lineHeight: 65,
    fontWeight: "bold",
    textAlign: "left",
  },
  secondarytext: {
    color: "black",
    fontSize: 47,
    lineHeight: 65,
    fontWeight: "bold",
    textAlign: "center",
  },

  decored: {
    color: "#ff3648",
  },
  containerCities: {
    backgroundColor: "#fefefe",
    padding: 20,
    flex: 1,
    justifyContent: "center",
  },
  inputSearch: {
    backgroundColor: "#fefefe",
    fontSize: 15,
    textAlign: "center",
    padding: 3,
    margin: 10,
    borderBottomColor: "#000000",
    borderWidth: 1,
    borderRadius: 5,
  },
});
