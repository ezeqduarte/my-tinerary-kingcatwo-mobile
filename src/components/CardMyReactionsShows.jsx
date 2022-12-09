import { View, Text, StyleSheet, Image, Button, Alert } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import reactionsActions from "../redux/actions/reactionsActions";

export default function CardMyReactionsShows({ reaction }) {
  let { logged, role, name, id, photo, token, lastName } = useSelector(
    (store) => store.userReducer
  );
  const dispatch = useDispatch();
  const { deleteReaction } = reactionsActions;

  const deleteReactionClick = () => {
    dispatch(deleteReaction({ token, id: reaction._id }));
    Alert.alert(
      `Your reaction in ${reaction.showId.name} has deleted succesfuly`
    );
  };

  return (
    <View key={reaction._id} style={styles.cardReaction}>
      <View style={styles.infoReaction}>
        <Image
          style={styles.image}
          source={{
            uri: `${reaction?.showId.photo}`,
          }}
        />
      </View>
      <View style={styles.infoReaction}>
        <Text style={styles.tittleYourReaction} key={reaction._id}>
          {reaction.showId.name}
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.textYourReaction} key={reaction._id}>
            Your reaction in this itinerary was:
          </Text>
          <Image
            style={styles.imgReaction}
            source={{
              uri: `${reaction?.icon}`,
            }}
          />
        </View>
        <Button
          color="#ff3648"
          onPress={deleteReactionClick}
          title="DELETE"
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    height: 330,
    width: "100%",
    borderRadius: 15,
  },
  cardReaction: {
    width: 350,
    height: 250,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 15,
    marginVertical: 5,
    marginLeft: 28,
  },
  main: {
    display: "flex",
    justifyContent: "center",
  },
  secondarytext: {
    color: "black",
    fontSize: 30,
    lineHeight: 65,
    fontWeight: "bold",
    textAlign: "center",
  },
  imgReaction: {
    width: 50,
    height: 50,
  },

  decored: {
    color: "#ff3648",
  },
  containerCities: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
  },
  textYourReaction: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
  },
  infoReaction: {
    padding: 10,
    width: "50%",
    flex: 1,
    justifyContent: "space-between",
  },
  tittleYourReaction: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center"
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
