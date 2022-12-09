import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import hotelActions from "../redux/actions/hotelsActions";
import showsActions from "../redux/actions/showsActions";
import Footer from "../components/Footer";

import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  Text,
} from "react-native";
import CardShow from "../components/CardShow";

export default function DetailsHotel(props) {
  const { getSpecificHotel } = hotelActions;
  const { getShows } = showsActions;
  let [detailHotel, setDetailHotel] = useState();

  let [shows, setShows] = useState([]);
  
  const dispatch = useDispatch();

  async function petitionHotel() {
    const res = await dispatch(getSpecificHotel({ id: props.route.params }));
    setDetailHotel(res.payload.hotel);
  }

  async function petitionShow() {
    const res = await dispatch(getShows({ id: props.route.params }));

    setShows(res.payload.shows);
  }

  useEffect(() => {
    petitionHotel();
    petitionShow();
  }, []);

  const image = { uri: `${detailHotel?.photo[0]}` };

  return (
    <ScrollView>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.container}>
          <Text style={styles.text}>
            {detailHotel?.name}
            <Text style={styles.decored}>.</Text>
          </Text>

          <Text style={styles.undertext2}>
            {` ${detailHotel?.description}`}
          </Text>
          <Text style={styles.undertext}>
          <Text style={styles.decored}> | </Text>
            {`The hotel capacity ${detailHotel?.capacity} people`}
            <Text style={styles.decored}> | </Text>
          </Text>
        </View>
      </ImageBackground>
      <View style={styles.containerCities}>
        <ScrollView>
          <Text style={styles.secondarytext}>
            Shows of {detailHotel?.name}
            <Text style={styles.decored}>.</Text>
          </Text>
          {shows?.length > 0 ? (
            shows?.map((show) => <CardShow show={show} key={show._id}></CardShow>)
          ) : (
            <Text style={styles.thirdText}>
              No shows available
              <Text style={styles.decored}>.</Text>
            </Text>
          )}
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
    marginBottom: -12,
    fontWeight: "light",
    textAlign: "left",
  },
  undertext2: {
    color: "white",
    fontSize: 18,
    padding: 15,

    fontWeight: "light",
    textAlign: "center",
  },
  secondarytext: {
    marginTop: 20,
    color: "black",
    fontSize: 35,
    lineHeight: 35,
    fontWeight: "bold",
    textAlign: "center",
  },
  thirdText: {
    marginTop: 40,
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
