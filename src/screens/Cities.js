import React from "react";
import CardCity from "../components/CardCity";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  Text,
} from "react-native";

export default function Cities() {
  const image = { uri: "https://cdn.wallpapersafari.com/80/95/bhD7xr.jpg" };

  return (
    <ScrollView>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.container}>
          <Text style={styles.text}>
            Meet our most popular locations
            <Text style={styles.decored}>.</Text>
          </Text>
        </View>
      </ImageBackground>
      <View style={styles.containerCities}>
        <Text style={styles.secondarytext}>
          Cities<Text style={styles.decored}>.</Text>
        </Text>
        <TextInput placeholder="Search for name" style={styles.inputSearch} />
      </View>
      <ScrollView style={styles.main}>
        <CardCity></CardCity>
        <CardCity></CardCity>
        <CardCity></CardCity>
        <CardCity></CardCity>
        <CardCity></CardCity>
        <CardCity></CardCity>
        <CardCity></CardCity>
        <CardCity></CardCity>
      </ScrollView>
      <View style={styles.footer}>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,.496)",
    padding: 3,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height: 710,
  },
  text: {
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
    padding: 20,
    flex: 1,
    justifyContent: "center",
  },
  inputSearch: {
    fontSize: 15,
    textAlign: "center",
    padding: 3,
    margin: 10,
    borderBottomColor: "#000000",
    borderWidth: 1,
    borderRadius: 5,
  },
  main: {
    paddingHorizontal: 20,
  },
});
