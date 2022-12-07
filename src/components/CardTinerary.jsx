import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function CardTinerary({ itinerary }) {
  return (
    <View style={styles.cardCity}>
      <Image
        style={styles.image}
        source={{
          uri: `${itinerary?.photo[0]}`,
        }}
      />
      <Text  style={styles.h4}>{itinerary?.name}</Text>
      <Text  style={styles.description}>{itinerary?.description}</Text>
      <View>
        <Text>{`Price is $${itinerary?.price}`}</Text>
        <Text>{`Duration is ${itinerary?.duration}hs`}</Text>
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
    fontSize: 40,
    textAlign: "center",
    margin: 20,
  },
  description: {
    fontSize: 15,
    textAlign: "center",
    fontStyle: "italic",
  },
  btnDetails: {
    fontWeight: 800,
    fontSize: 90,
    width: 350,
    marginBottom: 20,
    backgroundColor: "#ff3648",
  },
});
