import { View, Text, StyleSheet, Image, Button } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import reactionsActions from "../redux/actions/reactionsActions";
import CardMyReactionsShows from "./CardMyReactionsShows";

export default function ReactionShows({ reactionsOfShows }) {
  const { deleteReaction } = reactionsActions;
  const dispatch = useDispatch();

  const deleteReactionClick = () => {
    dispatch(deleteReaction({ token, id: _id }));
  };

  return (
    <ScrollView>
      {reactionsOfShows.length > 0 ? (
        reactionsOfShows.map((reaction) => (
          <CardMyReactionsTineraries
            reaction={reaction} key={reaction._id}
          ></CardMyReactionsTineraries>
        ))
      ) : (
        <Text style={{textAlign: "center", fontSize:15}}>You dont have reactions in our shows.</Text>
      )}
    </ScrollView>
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
