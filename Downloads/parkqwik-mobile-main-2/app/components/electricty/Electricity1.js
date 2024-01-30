import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Electricity1 = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("electricity2");
  };

  return (
    <View
      style={{
        alignItems: "center",
        gap: 15,
        flex: 1,
        backgroundColor: "#FFF",
      }}
    >
      <View style={{ width: "90%" }}>
        <Text style={[styles.header]}>Select Your Electricity Board</Text>
      </View>
      <Pressable onPress={handlePress} style={styles.container}>
        <Image
          style={styles.image}
          source={require("../assets/images/tneb.png")}
        />
        <Text style={styles.text}>Tamil Nadu Electricity Board</Text>
        <FontAwesomeIcon
          style={{ position: "absolute", right: 15 }}
          icon={"angle-right"}
          color="#1A9E75"
          size={18}
        />
      </Pressable>
      <View
        style={{
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "center",
          gap: 5,
          position: "absolute",
          bottom: 10,
          width: "100%",
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
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: "#FFF",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    elevation: 3,
  },
  text: {
    fontFamily: "Poppins_400Regular",
    color: "#393939",
  },
  image: {
    width: 35,
    height: 35,
  },
  header: {
    fontFamily: "Poppins_500Medium",
    color: "#393939",
    fontSize: 16,
  },
  bold: { fontFamily: "Poppins_600SemiBold", color: "#393939" },
});

export default Electricity1;
