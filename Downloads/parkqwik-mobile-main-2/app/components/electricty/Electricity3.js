import React from "react";
import { View, StyleSheet, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Electricity3 = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("electricitypay");
  };
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={[{ color: "#1B9D76", fontSize: 24 }]}>
          ₹ <Text style={[styles.headerText, { color: "#1B9D76" }]}>600</Text>
        </Text>
        <Text style={[styles.headerText, { color: "#8E8E8E", fontSize: 12 }]}>
          Due Date:
          <Text style={[styles.headerText, { fontSize: 14 }]}> 12 Sep 23</Text>
        </Text>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 10,
          width: "100%",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Pressable onPress={handlePress} style={styles.button}>
          <Text style={[styles.bold, { color: "#FFF" }]}>Continue</Text>
        </Pressable>
        <View
          style={{
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",
            gap: 5,
          }}
        >
          <Text style={[styles.text, { fontSize: 12, marginTop: 4 }]}>
            Secured by Bharat BillPay
          </Text>
          <Image
            style={{ width: 48, height: 24 }}
            source={require("../assets/images/bps.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 20,
    flex: 1,
    backgroundColor: "#FFF",
  },
  card: {
    backgroundColor: "#F4F4F4",
    height: 163,
    width: "75%",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    borderRadius: 28,
  },
  text: {
    fontFamily: "Poppins_400Regular",
    color: "#393939",
  },
  bold: {
    color: "#FFF",
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    paddingTop: 3,
  },
  headerText: {
    fontFamily: "Poppins_500Medium",
    color: "#393939",
  },
  button: {
    width: "90%",
    height: 41,
    marginTop: 30,
    backgroundColor: "#1A9E75",
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Electricity3;
