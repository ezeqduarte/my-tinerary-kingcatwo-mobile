import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import ReactionOfShows from "./ReactionOfShows";

export default function CardShow({ show }) {
  return (
    <View style={styles.cardCity}>
      <View style={styles.reactions}>
       
          <ReactionOfShows itinerary={show._id}></ReactionOfShows>
        
      </View>
      <Image
        style={styles.image}
        source={{
          uri: `${show?.photo}`,
        }}
      />
      <Text style={styles.h4}>
        <Text style={styles.decored}>[ </Text>
        {show?.name}
        <Text style={styles.decored}> ]</Text>
      </Text>
      <Text style={styles.description}>{show?.description}</Text>
      <View style={styles.backInfo}>
        <Text style={styles.backInfotext}>{`Price: $${show?.price}`}</Text>
        <Text style={styles.backInfotext}>{`Date: ${show?.date.slice(
          0,
          10
        )}`}</Text>
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
    backgroundColor: "#333232",
    width: 450,
    marginTop: 25,
  },
  backInfotext: {
    color: "white",
    fontSize: 15,
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
