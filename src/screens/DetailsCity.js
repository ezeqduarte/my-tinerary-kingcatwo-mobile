import React, { useEffect, useState } from "react";
import CardCity from "../components/CardCity";
import { useDispatch, useSelector } from "react-redux";
import citiesActions from "../redux/actions/citiesActions";
import tinerariesActions from "../redux/actions/tinerariesActions";
import Footer from "../components/Footer";

import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  Text,
} from "react-native";
import CardTinerary from "../components/CardTinerary";

export default function DetailsCity(props) {
  console.log(props.route.params);
  const { getCity } = citiesActions;
  const { getTinerariesOfCity } = tinerariesActions;
  let [detailCity, setDetailCity] = useState();
  let [itineraries, setItineraries] = useState();

  const dispatch = useDispatch();

  async function petitionCity() {
    const res = await dispatch(getCity({ id: props.route.params }));
    setDetailCity(res.payload.cities);
  }

  async function petitionItineraries() {
    const res = await dispatch(getTinerariesOfCity({ id: props.route.params }));
    setItineraries(res.payload.itineraries);
  }


  useEffect(() => {
    petitionCity();
    petitionItineraries();
  }, []);

  const image = { uri: `${detailCity?.photo}` };
  return (
    <ScrollView>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.container}>
          <Text style={styles.text}>
            {detailCity?.name}
            <Text style={styles.decored}>.</Text>
          </Text>
          <Text style={styles.undertext}>
            {`This place is ubicated in ${detailCity?.continent}`}
            <Text style={styles.decored}>.</Text>
          </Text>
          <Text style={styles.undertext}>
            {`Have a population of ${detailCity?.population} people`}
            <Text style={styles.decored}>.</Text>
          </Text>
        </View>
      </ImageBackground>
      <View style={styles.containerCities}>
        <ScrollView>
          <Text style={styles.secondarytext}>
            Tineraries of {detailCity?.name}
            <Text style={styles.decored}>.</Text>
          </Text>
        {/*   {itineraries?.map(itinerary=><CardTinerary itinerary={itinerary}></CardTinerary>)} */}
        </ScrollView>
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
    backgroundColor: "rgba(0,0,0,.496)",
    padding: 3,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height: 575,
  },
  text: {
    color: "white",
    fontSize: 47,
    lineHeight: 65,
    fontWeight: "bold",
    textAlign: "left",
  },
  undertext: {
    color: "white",
    fontSize: 15,
    lineHeight: 20,
    fontWeight: "light",
    textAlign: "left",
  },
  secondarytext: {
    color: "black",
    fontSize: 35,
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
    borderBottomColor: "#000000",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#f3f3f3",
  },
  main: {
    paddingHorizontal: 20,
  },
});
