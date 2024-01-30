import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

const LocationLoader = () => {
  return (
    <View
      style={{
        backgroundColor: "#FFF",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
      }}
    >
      <LottieView
        autoPlay
        source={require("../assets/locationLoader.json")}
        style={{
          width: "80%",
          height: 150,
        }}
        loop
      />
      <Text style={styles.text}>Fetching Location...</Text>
    </View>
  );
};

export default LocationLoader;

const styles = StyleSheet.create({
  text: {
    fontFamily: "Poppins_400Regular",
    marginTop: -15,
  },
});
