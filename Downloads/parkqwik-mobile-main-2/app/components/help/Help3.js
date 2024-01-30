import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Help3 = () => {
  return (
    <View
      style={{
        alignItems: "center",
        paddingTop: 15,
        gap: 10,
        backgroundColor: "#FFF",
        flex: 1,
      }}
    >
      <View style={styles.container}>
        <Image
          style={{ width: 25, height: 25 }}
          source={require("../assets/images/bluepark.png")}
        />
        <View>
          <Text style={[styles.text]}>Central Mall Car Parking</Text>
          <Text style={[styles.header, { color: "#A0A0A0", fontSize: 12 }]}>
            Ticket ID: 22145116260
          </Text>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <Text style={[styles.header, { color: "#A0A0A0", fontSize: 10 }]}>
            25 Oct 23
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Image
              style={{ width: 15, height: 15 }}
              source={require("../assets/images/check_circle.png")}
            />

            <Text style={[styles.text, { color: "#00A638", fontSize: 12 }]}>
              Sloved
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <Image
          style={{ width: 25, height: 25 }}
          source={require("../assets/images/bluepark.png")}
        />
        <View>
          <Text style={[styles.text]}>Central Mall Car Parking</Text>
          <Text style={[styles.header, { color: "#A0A0A0", fontSize: 12 }]}>
            Ticket ID: 22145182450
          </Text>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <Text style={[styles.header, { color: "#A0A0A0", fontSize: 10 }]}>
            25 Oct 23
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Image
              style={{ width: 15, height: 15 }}
              source={require("../assets/images/error.png")}
            />

            <Text style={[styles.text, { color: "#FF4A4A", fontSize: 12 }]}>
              Pending
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Help3;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 15,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    elevation: 3,
  },
  text: {
    fontFamily: "Poppins_400Regular",
    paddingTop: 2,
    color: "#393939",
  },
  header: {
    fontFamily: "Poppins_500Medium",
  },
});
