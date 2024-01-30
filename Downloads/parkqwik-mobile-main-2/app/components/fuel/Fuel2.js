import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const Fuel2 = () => {
  const openLocationLink = () => {
    const locationLink =
      "https://www.google.com/maps?rlz=1C1RXQR_enIN960IN960&gs_lcrp=EgZjaHJvbWUqEAgBEC4YrwEYxwEYgAQYjgUyBggAEEUYOTIQCAEQLhivARjHARiABBiOBTIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABNIBCDU2OTNqMGo3qAIAsAIA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KcF_So4qYVI6MebmydpUSjrT&daddr=Doctor,+No+89,+2nd+Main+Rd,+Kothari+Nagar,+Ramapuram,+Chennai,+Tamil+Nadu+600089";

    Linking.openURL(locationLink)
      .then(() => console.log("Location link opened successfully"))
      .catch((err) => console.error("Error opening location link:", err));
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
      <View style={styles.headerContainer}>
        <View style={styles.input}>
          <Image
            style={{ width: 18, height: 18 }}
            source={require("../assets/images/whitelocation.png")}
          />
          <Text style={[styles.text, { color: "white", paddingTop: 3 }]}>
            HP Petrol Pump, Kelambakkam
          </Text>
        </View>
      </View>
      <Image
        style={{ width: "100%", height: "100%" }}
        source={require("../assets/images/map3.png")}
      />
      <View style={{ position: "absolute", right: 30, bottom: 220, gap: 20 }}>
        <View style={styles.circle}>
          <Image
            style={{ width: 24, height: 23 }}
            source={require("../assets/images/layer.png")}
          />
        </View>
        <View style={styles.circle}>
          <TouchableOpacity onPress={openLocationLink}>
            <FontAwesomeIcon
              size={20}
              icon={"diamond-turn-right"}
              color="#1A9E75"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.modal}>
        <TouchableOpacity style={{ position: "absolute", right: 20, top: 15 }}>
          <FontAwesomeIcon size={22} icon={"circle-xmark"} color="#1A9E75" />
        </TouchableOpacity>
        <Text style={[styles.header, { fontSize: 16 }]}>
          <Text style={{ color: "#E44E2D" }}>7 min</Text> (2 km)
        </Text>
        <Text style={[styles.text, { color: "#A0A0A0", paddingTop: 3 }]}>
          Fastest route now due to traffic condition
        </Text>
        <View style={styles.button}>
          <Text
            style={[
              styles.bold,
              { color: "#FFF", paddingTop: 2, fontSize: 16 },
            ]}
          >
            Start
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Fuel2;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "rgba(255, 255, 255, .4)",
    borderRadius: 4,
    width: "90%",
    height: 43,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    gap: 5,
  },
  circle: {
    backgroundColor: "#F0FFFA",
    width: 41,
    height: 41,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 41,
    elevation: 5,
  },
  headerContainer: {
    backgroundColor: "#1A9E75",
    height: 120,
    paddingBottom: 25,
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
  },
  modal: {
    height: 168,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: "#FFF",
    width: "100%",
    position: "absolute",
    bottom: 0,
    padding: 20,
  },
  bold: {
    fontFamily: "Poppins_600SemiBold",
  },
  header: {
    fontFamily: "Poppins_500Medium",
    color: "#393939",
  },
  text: {
    fontFamily: "Poppins_400Regular",
    color: "#8E8E8E",
  },
  button: {
    paddingVertical: 6,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
    backgroundColor: "#1A9E75",
    marginTop: 25,
    width: "100%",
    alignSelf: "center",
  },
});
