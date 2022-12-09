import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import reactionsActions from "../redux/actions/reactionsActions";
import LikeDislike from "./LikeDislike";

export default function ReactionsItineraries({ itinerary }) {
  const { id, token } = useSelector((store) => store.userReducer);
  const dispatch = useDispatch();
  let [reactionss, setReactionss] = useState([]);

  const { reactions } = reactionsActions;

  async function reactionsfunction() {
    const res = await dispatch(reactions({ id: itinerary, token: token }));
    setReactionss(res.payload.reactions);
  }

  useEffect(() => {
    reactionsfunction();
  }, []);

  console.log(reactionss);

  return (
    <View style={{flexDirection: "row"}}>
      {reactionss.map((reaction) => (
        <LikeDislike
          reaction={reaction}
          key={reaction._id}
          itineraryId={itinerary}
        ></LikeDislike>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  

   
  });
