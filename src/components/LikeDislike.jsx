import React, { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import reactionsActions from "../redux/actions/reactionsActions";

export default function LikeDislike({ reaction: reactionProp, itineraryId }) {
  const { id, token } = useSelector((store) => store.userReducer);

  let [reaction, setReaction] = useState(reactionProp);
  const { likeDislike } = reactionsActions;

  const dispatch = useDispatch();

  const like = async () => {
    const res = await dispatch(
      likeDislike({
        token: token,
        id: itineraryId,
        name: reactionProp.name,
      })
    );

    setReaction(res.payload.reaction);
  };

  let urlPhoto = "";
  reaction?.userId.includes(id)
    ? (urlPhoto = reaction.icon)
    : (urlPhoto = reaction.iconBack);

  return (
    <View style={{marginHorizontal: 15, marginVertical: 10, display: "flex", alignItems: "center"}}>
      <Text>{reaction.userId.length}</Text>
      <Pressable onPress={like}>
        <Image
          style={{ width: 30, height: 30 }}
          source={{
            uri: urlPhoto,
          }}
          alt={reaction._id}
        />
      </Pressable>
    </View>
  );
}
