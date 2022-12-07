import React from 'react'
import {
    ImageBackground,
    ScrollView,
    StyleSheet,
    TextInput,
    View,
    Text,
    FlatList,
    Image,
    Dimensions,
    SafeAreaView,
    Animated,
  } from "react-native";


export default function ImagesHome() {
  return (
    <>
    <View style={styles.container5}>
        <Image
          style={styles.imageHome8}
          source={{
            uri: "https://i.redd.it/fav-wallpapers-of-the-week-v0-7ys61yxirjz91.jpg?width=3840&format=pjpg&auto=webp&s=d0852798f1d4e8bb4fec3116f3afa3dd394783a9",
          }}
        />
        <Image
          style={styles.imageHome9}
          source={{
            uri: "https://wallpapers.com/images/hd/buenos-aires-aerial-puerto-madero-iawmwi6htqrot4u7.jpg",
          }}
        />
      </View>
      <View style={styles.container6}>
        <Image
          style={styles.imageHomeW}
          source={{
            uri: "https://images.pexels.com/photos/3375997/pexels-photo-3375997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=16",
          }}
        />
       
      </View>
     
      <View style={styles.container4}>
        <Image
          style={styles.imageHome}
          source={{
            uri: "https://images3.alphacoders.com/846/84689.jpg",
          }}
        />
        <Image
          style={styles.imageHome}
          source={{
            uri: "https://images.pexels.com/photos/3538236/pexels-photo-3538236.jpeg",
          }}
        />
      </View>
      <View style={styles.container6}>
        <Image
          style={styles.imageHomeW}
          source={{
            uri: "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=80",
          }}
        />
       
      </View>
      </>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0,0,0,.650)",
      padding: 3,
    },
    image: {
      flex: 1,
      justifyContent: "center",
      height: 710,
      
    },
    text: {
      color: "#eee",
      fontSize: 40,
      lineHeight: 65,
      fontWeight: "bold",
      textAlign: "left",
    },
  
    barSeparate: {
      backgroundColor: "black",
      height: 25,
    },
  
    text5: {
      color: "#eee",
      fontSize: 15,
      fontWeight: "bold",
    },
  
    decored: {
      color: "#ff3648",
    },
  
    container2: {
      backgroundColor: "#f0ece9",
      flexDirection: "row",
      flex: 1,
    },
  
    secondarytexthome: {
      color: "#1a1a1a",
      fontSize: 40,
      lineHeight: 65,
      fontWeight: "bold",
      textAlign: "center",
      marginTop: 10,
      marginBottom: 10,
    },
  
    imageHome: {
      height: 240,
      width: 155,
      margin: 2,
      borderRadius: 1,
    },
  
    container4: {
      backgroundColor: "#f0ece9",
      flexDirection: "row",
      flex: 1,
      justifyContent: "center",
    },
  
    container5: {
      backgroundColor: "#f0ece9",
      flexDirection: "row",
      flex: 1,
  
      margin: 0,
      justifyContent: "center",
    },
  
    container6: {
      backgroundColor: "#f0ece9",
    
      flexDirection: "row",
      flex: 1,
  
      margin: 0,
      justifyContent: "center",
    },
  
  
    imageHomeW: {height: 240,
      width:315,
      margin: 2,
      borderRadius: 1,
      },
  
      imageHome8: {
        height: 240,
        width: 90,
        margin: 2,
        borderRadius: 1,
      },
      imageHome9: {
        height: 240,
        width: 220,
        margin: 2,
        borderRadius: 1,
      },
  
  
  });
  