import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";

const Nearby10 = () => {
  const { bookData } = useContext(AppContext);
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("nearby11");
  };

  const openLocationLink = () => {
    const locationLink = bookData.location;

    Linking.openURL(locationLink)
      .then(() => console.log("Location link opened successfully"))
      .catch((err) => console.error("Error opening location link:", err));
  };

  return (
    <View
      style={{
        paddingTop: 15,
        alignItems: "center",
        gap: 10,
        backgroundColor: "#FFF",
        flex: 1,
      }}
    >
      <View style={styles.container}>
        <View style={styles.topPart}>
          <View>
            <Text style={[styles.text, { fontSize: 16 }]}>
              {bookData.title}
            </Text>
            <Text
              style={[
                styles.header,
                { fontSize: 12, color: "#A0A0A0", marginTop: -4 },
              ]}
            >
              {bookData.details}
            </Text>
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <Text style={{ color: "#00A638", fontSize: 16 }}>
              ₹<Text style={[styles.header]}> {bookData.amount}</Text>
            </Text>
            <LinearGradient
              colors={["#64D51F", "#4DBB09"]}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              style={styles.gradient}
            >
              <Text
                style={[
                  styles.header,
                  { fontSize: 9, color: "#FFF", paddingBottom: 0 },
                ]}
              >
                Paid
              </Text>
            </LinearGradient>
          </View>
        </View>
        <Text style={[styles.text]}>{bookData.address}</Text>
        <View style={[styles.row, { justifyContent: "space-between" }]}>
          <View style={styles.bookingId}>
            <Text style={[styles.text, { fontSize: 10, color: "#393939" }]}>
              Booking ID #{bookData.bookId}
            </Text>
          </View>
          <TouchableOpacity
            onPress={openLocationLink}
            style={[styles.row, { gap: 5 }]}
          >
            <Text
              style={[
                styles.header,
                { color: "rgba(26, 158, 117, 1)", fontSize: 12, paddingTop: 3 },
              ]}
            >
              Get Direction
            </Text>
            <FontAwesomeIcon
              icon={"diamond-turn-right"}
              size={14}
              color="rgba(26, 158, 117, 1)"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.topPart}>
          <View>
            <Text
              style={[
                styles.header,
                { fontSize: 12, color: "#A0A0A0", marginBottom: -3 },
              ]}
            >
              Parking Booked For
            </Text>
            <Text style={[styles.text]}>TN04FD8902 - Toyota Glanza</Text>
          </View>
        </View>
        <View style={[styles.row, { justifyContent: "space-between" }]}>
          <View>
            <Text
              style={[
                styles.header,
                { color: "rgba(26, 158, 117, 1)", fontSize: 14 },
              ]}
            >
              03:30 PM
            </Text>
            <Text
              style={[
                styles.text,
                { color: "#A0A0A0", fontSize: 12, marginTop: -5 },
              ]}
            >
              04 Nov 2023
            </Text>
          </View>
          <View style={[styles.row, { gap: 8 }]}>
            <Image
              style={styles.arrow}
              source={require("../assets/images/leftarrowlong.png")}
            />
            <LinearGradient
              colors={["#E44E2D", "#E4852E"]}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              style={styles.gradient}
            >
              <Text
                style={[
                  styles.header,
                  { fontSize: 9, color: "#FFF", paddingBottom: 0 },
                ]}
              >
                2 hours
              </Text>
            </LinearGradient>
            <Image
              style={styles.arrow}
              source={require("../assets/images/rightarrowlong.png")}
            />
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <Text
              style={[
                styles.header,
                { color: "rgba(26, 158, 117, 1)", fontSize: 14 },
              ]}
            >
              05:30 PM
            </Text>
            <Text
              style={[
                styles.text,
                { color: "#A0A0A0", fontSize: 12, marginTop: -5 },
              ]}
            >
              04 Nov 2023
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={handlePress} style={styles.button}>
        <Text style={[styles.bold, { paddingTop: 3 }]}>View Pass</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Nearby10;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    gap: 15,
    elevation: 3,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontFamily: "Poppins_400Regular",
    paddingTop: 2,
  },
  header: {
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
  },
  topPart: {
    borderBottomColor: "#E6E6E6",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 10,
  },
  gradient: {
    height: 13,
    paddingHorizontal: 3,
    borderRadius: 3,
  },
  bookingId: {
    padding: 3,
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  arrow: {
    height: 5,
    width: 27,
  },
  bold: {
    fontFamily: "Poppins_600SemiBold",
    color: "#1A9E75",
  },
  button: {
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#1A9E75",
    backgroundColor: "#F0FFFA",
    paddingHorizontal: 50,
    paddingVertical: 6,
    marginTop: 10,
  },
});
