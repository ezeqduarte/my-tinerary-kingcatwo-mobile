import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import reactionsActions from "../redux/actions/reactionsActions";
import LikeDislike from "./LikeDislike";

export default function ReactionsOfShows({ itinerary: show }) {
  const { token } = useSelector((store) => store.userReducer);
  const dispatch = useDispatch();
  let [reactionss, setReactionss] = useState([]);

  const { reactionsShow } = reactionsActions;

  async function reactionsfunction() {
    const res = await dispatch(reactionsShow({ id: show, token: token }));
    setReactionss(res.payload.reactions);
  }

  useEffect(() => {
    reactionsfunction();
  }, []);

  return (
    <View style={{ flexDirection: "row" }}>
      {reactionss.map((reaction) => (
        <LikeDislike
          reaction={reaction}
          key={reaction._id}
          itineraryId={show}
        ></LikeDislike>
      ))}
    </View>
  );
}
