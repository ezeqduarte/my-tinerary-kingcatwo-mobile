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

export default function CardHotel(props) {
  let { hotel } = props;

  return (
    <View style={styles.CardHotel}>
      <View className="imgCard">
        <Image
          style={styles.image}
          source={{
            uri: `${hotel?.photo[0]}`,
          }}
        />
      </View>
      <Text style={styles.h3}>{hotel.name}</Text>
      <View style={styles.btnDetails}>
        <Button color="#ff3648" title="More details" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  CardHotel: {
    height: 398,
    backgroundColor: "#fffffa",
    marginTop: 35,
    width: 300,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 28,
   
  },
  image: {
    width: 300,
    height: 320,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    
  },
  h3: {
    fontSize: 20,
    textAlign: "center",
    margin: 20,
   fontWeight: "bold",
   color: "#252625",

   

  },
  btnDetails: {
    fontWeight: 800,
    fontSize: 90,
    width: 300,
    marginBottom: 20,
   
  },
});
