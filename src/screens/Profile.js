import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Button,
} from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import userActions from "../redux/actions/userActions";
import Footer from "../components/Footer";

export default function Profile() {
  let { logged, role, name, id, photo, lastName } = useSelector(
    (store) => store.userReducer
  );
  const dispatch = useDispatch();
  const { getDatos } = userActions;
  useEffect(() => {
    dispatch(getDatos(id));
  }, []);

  console.log(photo);

  return (
    <ScrollView>
      <View style={styles.profile}>
        <Text style={styles.secondarytext}>
          Hello, {name} {lastName}
          <Text style={styles.decored}>.</Text>{" "}
        </Text>
        <Image
          style={styles.image}
          source={{
            uri: `${photo}`,
          }}
        />
        <Button title="Logout" color="#ff3648"></Button>
      </View>
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 250,
    borderRadius: 360,
    marginBottom: 20,
    borderColor: "#252625",
    borderWidth: 2,
  },
  profile: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 543,
  },
  secondarytext: {
    color: "black",
    fontSize: 25,
    lineHeight: 65,
    fontWeight: "bold",
    textAlign: "center",
    color: "#252625",
  },
  decored: {
    color: "#ff3648",
  },
});
