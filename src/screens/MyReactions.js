import { Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import reactionsActions from "../redux/actions/reactionsActions";
import ReactionsItineraries from "../components/ReactionsItineraries";
import ReactionShows from "../components/ReactionShows";

export default function MyReactions() {
  let { id, token } = useSelector((store) => store.userReducer);
  let { refresh } = useSelector((store) => store.reactionsReducer);
  const { getReactionsOfUser } = reactionsActions;
  const dispatch = useDispatch();
  let allReactionsOfUser = useSelector(
    (store) => store.reactionsReducer.allReactionsOfUser
  );
  useEffect(() => {
    dispatch(getReactionsOfUser({ token: token, id: id }));
  }, [refresh]);

  const reactionsOfTineraries = allReactionsOfUser.filter(
    (reaction) => reaction.itineraryId
  );
  const reactionsOfShows = allReactionsOfUser.filter(
    (reaction) => reaction.showId
  );

  return (
    <ScrollView>
      <Text style={styles.secondarytext}>
        Your reactions of tineraries are here
        <Text style={styles.decored}>.</Text>
      </Text>
      <ReactionsItineraries reactionsOfTineraries={reactionsOfTineraries} />
      <Text style={styles.secondarytext}>
        Your reactions of shows are here
        <Text style={styles.decored}>.</Text>
      </Text>
      <ReactionShows reactionsOfShows={reactionsOfShows} />
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
    paddingHorizontal: 35,
    fontSize: 35,
    lineHeight: 35,
    marginVertical: 20,
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
