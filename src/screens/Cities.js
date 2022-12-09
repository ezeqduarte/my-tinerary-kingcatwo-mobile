import React, { useEffect, useState } from "react";
import CardCity from "../components/CardCity";
import { useDispatch, useSelector } from "react-redux";
import citiesActions from "../redux/actions/citiesActions";
import Footer from "../components/Footer";

import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  Text,
} from "react-native";

export default function Cities(props) {
  const image = { uri: "https://cdn.wallpapersafari.com/80/95/bhD7xr.jpg" };
  const { getCities, getContinent } = citiesActions;
  const dispatch = useDispatch();
  let allContinents = useSelector((store) => store.citiesReducer.continents);
  const citiesFiltered = useSelector((store) => store.citiesReducer.cities);
  const [text, setText] = useState("");

  allContinents = [
    ...new Set([...allContinents].map((city) => city.continent)),
  ];

  useEffect(() => {
    dispatch(getContinent());
  }, []);

  useEffect(() => {
    dispatch(getCities({ text: text }));
  }, [text]);

  return (
    <>
      <ScrollView>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={styles.container}>
            <Text style={styles.text}>
              <Text style={styles.decored}>[</Text> Meet our Locations
              <Text style={styles.decored}> ]</Text>
            </Text>
          </View>
        </ImageBackground>
        <View style={styles.containerCities}>
          <Text style={styles.secondarytext}>
            Cities<Text style={styles.decored}>.</Text>
          </Text>
          <Text style={styles.thirdText}>
            Investigate our cities
            <Text style={styles.decored}>.</Text>
          </Text>
          <View>
            {/*  {allContinents.map((continent) => (
            <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
          ))} */}
          </View>
          <TextInput
            onChangeText={(newText) => setText(newText)}
            defaultValue={text}
            placeholder="Search for name"
            style={styles.inputSearch}
          />
        </View>
        <ScrollView style={styles.main}>
          {citiesFiltered.map((city) => (
            <CardCity
              key={city._id}
              props={props.navigation}
              city={city}
            ></CardCity>
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
    backgroundColor: "rgba(0,0,0,.496)",
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
    fontSize: 47,
    lineHeight: 65,
    fontWeight: "bold",
    textAlign: "center",
  },
  thirdText: {
    marginTop: 10,
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
    fontSize: 15,
    textAlign: "center",
    padding: 1,
    margin: 10,
    borderColor: "rgba(0,0,0,.496)",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#f3f3f3",
  },
  main: {
    paddingHorizontal: 20,
  },
});
