import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import hotelsAction from "../redux/actions/hotelsActions";

import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  Text,
} from "react-native";
import Footer from "../components/Footer";
import CardHotel from "../components/CardHotel";

export default function Hotels(props) {
  const image = {
    uri: "https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  };
  const { getHotels } = hotelsAction;
  const dispatch = useDispatch();

  const hotelsFiltered = useSelector((store) => store.hotelsReducer.hotelsR);
  const [text, setText] = useState("");

  useEffect(() => {
    dispatch(getHotels({ text: text }));
  }, [text]);

  return (
    <>
      <ScrollView>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={styles.container}>
            <Text style={styles.text}>
              <Text style={styles.decored}>[ </Text>
              Meet our Hotels
              <Text style={styles.decored}> ]</Text>
            </Text>
          </View>
        </ImageBackground>
        <View style={styles.containerCities}>
          <Text style={styles.secondarytext}>
            Options for You<Text style={styles.decored}>.</Text>
          </Text>
          <Text style={styles.thirdText}>
            Investigate and find the ideal
            <Text style={styles.decored}></Text>
          </Text>
          <View></View>
          <View style={styles.containerInput}>
            <TextInput
              onChangeText={(newText) => setText(newText)}
              defaultValue={text}
              placeholder="Search for the name of the hotel!"
              style={styles.inputSearch}
            />
          </View>
        </View>
        <ScrollView style={styles.main}>
          {hotelsFiltered.map((hotel) => (
            <CardHotel
              key={hotel._id}
              hotel={hotel}
              props={props.navigation}
            ></CardHotel>
          ))}
        </ScrollView>
        <Footer />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,.606)",
    padding: 3,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height: 630,
  },
  text: {
    color: "white",
    fontSize: 30,
    lineHeight: 65,
    fontWeight: "bold",
    textAlign: "center",
  },
  secondarytext: {
    color: "black",
    fontSize: 28,

    fontWeight: "bold",
    textAlign: "center",
  },
  thirdText: {
    marginTop: 5,
    color: "black",
    fontSize: 20,
    lineHeight: 25,

    fontWeight: "light",
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
    fontSize: 12,
    textAlign: "center",
    padding: 1,
    margin: 10,
    width: 295,

    borderBottomColor: "#4f4f4d",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#f3f3f3",
  },
  main: {
    flex: 1,
    paddingLeft: 58,
  },

  containerInput: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginBottom: -15,
  },
});
