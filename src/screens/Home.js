import React from "react";

import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  SafeAreaView,
  Animated,
} from "react-native";
import Footer from "../components/Footer";
import ImagesHome from "../components/ImagesHome";

export default function Cities() {
  const image = {
    uri: "https://s1.1zoom.me/big3/697/Italy_Mountains_Houses_Cinque_Terre_park_Crag_612651_5120x2926.jpg",
  };

  return (
    <ScrollView>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={{
              uri: "https://cdn.discordapp.com/attachments/1026888381814288424/1049871880804388984/aa.png",
            }}
          ></Image>

          <Text style={styles.text}>
            <Text style={styles.decored}>[ </Text>
            Know the World
            <Text style={styles.decored}> ]</Text>
          </Text>
          <Text style={styles.text5}>Mobile version</Text>
        </View>
      </ImageBackground>

      {/* Aca me traigo el componente que tiene todas las imagenes */}
      <View style={styles.contenedorGaleria}>
        <ImagesHome></ImagesHome>
      </View>
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,.550)",
    padding: 3,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height: 710,
  },
  text: {
    color: "#eee",
    fontSize: 25,

    fontWeight: "bold",
    textAlign: "left",
  },

  barSeparate: {
    backgroundColor: "black",
    height: 18,
  },

  text5: {
    color: "#eee",
    fontSize: 15,
    fontWeight: "light",
    margin: 4,
  },

  decored: {
    color: "#ff3648",
  },

  secondarytexthome: {
    color: "#1a1a1a",
    fontSize: 40,
    lineHeight: 65,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
  },

  logo: {
    height: 130,
    width: 130,
    marginRight: 12,
  },

  contenedorGaleria: {
    marginBottom: 35,
    marginTop: 35,
  },
});
