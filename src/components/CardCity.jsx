import React from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  Text,
  Button,
  Image,
} from "react-native";

export default function CardCity(props) {
  let { city } = props;

  return (
    <View style={styles.cardCity}>
      <View className="imgCard">
        <Image
          style={styles.image}
          source={{
            uri: `${city.photo}`,
          }}
        />
      </View>
      <Text style={styles.h3}>{city.name}</Text>
      <View style={styles.btnDetails}>
        <Button
          color="#ff3648"
          onPress={() => props.props.navigate("Details City", city._id)}
          title="More details"
          id={city._id}
        />
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
  h3: {
    fontSize: 30,
    textAlign: "center",
    margin: 20,
  },
  btnDetails: {
    fontWeight: 800,
    fontSize: 90,
    width: 350,
    marginBottom: 20,
    backgroundColor: "#ff3648",
  },
});
