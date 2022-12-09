import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Button,
  Alert,
} from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import userActions from "../redux/actions/userActions";
import Footer from "../components/Footer";

export default function Profile() {
  let { logged, role, name, id, photo, token, lastName } = useSelector(
    (store) => store.userReducer
  );
  const dispatch = useDispatch();
  const { getDatos, logout } = userActions;
  useEffect(() => {
    dispatch(getDatos(id));
  }, []);

  const desconect = async () => {
    await dispatch(logout(token));
    Alert.alert(`Bye ${name} ${lastName}!`);
  };

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
        <Button title="Logout" onPress={desconect} color="#ff3648"></Button>
      </View>
      <View style={styles.divEdit}></View>
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
  divEdit: {
    color: "#white",
  },
});
