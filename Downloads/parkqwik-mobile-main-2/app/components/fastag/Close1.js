import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";

const Close1 = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("close2");
  };
  return (
    <View
      style={{
        alignItems: "center",
        paddingVertical: 15,
        backgroundColor: "#FFF",
        flex: 1,
      }}
    >
      <View style={styles.container}>
        <Image
          source={require("../assets/images/car3.png")}
          style={{ width: 25, height: 19 }}
        />
        <Text style={[styles.text]}>TN05BM5656</Text>
      </View>
      <TouchableOpacity onPress={handlePress} style={[styles.button]}>
        <Text style={[styles.bold, { color: "#FFF", fontSize: 16 }]}>
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "90%",
    backgroundColor: "white",
    borderRadius: 8,
    alignItems: "center",
    paddingHorizontal: 15,
    flexDirection: "row",
    gap: 10,
    elevation: 2,
  },
  text: {
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
    paddingTop: 3,
  },
  button: {
    backgroundColor: "#1A9E75",
    width: "90%",
    position: "absolute",
    bottom: 25,
    height: 40,
    marginTop: 30,
    backgroundColor: "#1A9E75",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  bold: { fontFamily: "Poppins_600SemiBold" },
});

export default Close1;
