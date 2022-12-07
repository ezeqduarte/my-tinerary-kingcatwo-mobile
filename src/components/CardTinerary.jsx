import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function CardTinerary({ itinerary }) {
  return (
    <View style={styles.cardCity}>
      <View style={styles.reactions}>

      </View>
      <Image
        style={styles.image}
        source={{
          uri: `${itinerary?.photo[0]}`,
        }}
      />
      <Text style={styles.h4}>
        <Text style={styles.decored}>[ </Text>
        {itinerary?.name}
        <Text style={styles.decored}> ]</Text>
      </Text>
      <Text style={styles.description}>{itinerary?.description}</Text>
      <View style={styles.backInfo}>
        <Text style={styles.backInfotext}>{`Price $${itinerary?.price}`}</Text>
        <Text
          style={styles.backInfotext}
        >{`Duration ${itinerary?.duration}hs`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardCity: {
    height: "auto",
    backgroundColor: "#fefefe",
    marginTop: 35,
    width: "auto",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  image: {
    width: 430,
    height: 320,
    borderRadius: 15,
  },
  h4: {
    fontSize: 30,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
    color: "#171717",
  },
  description: {
    fontSize: 15,
    textAlign: "center",
    fontStyle: "italic",
    paddingHorizontal: 20,
    color: "#171717",
  },
  btnDetails: {
    fontWeight: 800,
    fontSize: 90,
    width: 350,
    marginBottom: 20,
    backgroundColor: "#ff3648",
  },
  backInfo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#ff3648",
    width: 450,
    fontSize: 50,
    marginTop: 25,
  },
  backInfotext: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    paddingVertical: 5,
  },
  decored: {
    color: "#ff3648",
  },
  reactions: {
    color: "white",
  },
});
