import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React, { useContext } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import AppContext from "../../context/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const Nearby11 = () => {
  const navigation = useNavigation();
  const { bookData } = useContext(AppContext);

  const handlePress = () => {
    navigation.goBack();
  };

  const openLocationLink = () => {
    const locationLink = bookData.location;

    Linking.openURL(locationLink)
      .then(() => console.log("Location link opened successfully"))
      .catch((err) => console.error("Error opening location link:", err));
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <LinearGradient
        colors={["#1A9E75", "#39B790"]}
        start={{ x: 0.5, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.backGround}
      >
        <View style={{ width: "90%" }}>
          <Pressable onPress={handlePress}>
            <Image
              style={{ width: 23, height: 23 }}
              source={require("../assets/images/arrowleft.png")}
            />
          </Pressable>
        </View>
        <View style={styles.container}>
          <View style={[styles.row, { width: "90%" }]}>
            <View style={{ width: "60%" }}>
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
              <Text
                style={[
                  styles.bold,
                  {
                    marginTop: 7,
                    color: "black",
                    textDecorationLine: "underline",
                  },
                ]}
              >
                Address
              </Text>
              <Text
                style={[
                  styles.text,
                  {
                    marginTop: 2,
                    fontSize: 12,
                  },
                ]}
              >
                {bookData.address}
              </Text>
            </View>
            <View style={{ alignItems: "flex-end", gap: 10 }}>
              <Image
                style={styles.ticketImage}
                source={require("../assets/images/ticketimage.png")}
              />
              <TouchableOpacity
                onPress={openLocationLink}
                style={[styles.row, { gap: 5 }]}
              >
                <Text
                  style={[
                    styles.header,
                    {
                      color: "rgba(26, 158, 117, 1)",
                      fontSize: 12,
                      paddingTop: 3,
                    },
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
          <View style={styles.container2}>
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
          <View style={[styles.row, { width: "100%" }]}>
            <Image
              style={styles.semicircle}
              source={require("../assets/images/semicircle1.png")}
            />
            <View style={styles.line} />
            <Image
              style={styles.semicircle}
              source={require("../assets/images/semicircle2.png")}
            />
          </View>
          <View style={styles.qrContainer}>
            <Image
              style={{ width: "90%", height: "90%" }}
              source={require("../assets/images/qr.png")}
            />
          </View>
          <View style={styles.bookingId}>
            <Text style={[styles.text, { fontSize: 12, color: "#393939" }]}>
              Booking ID #{bookData.bookId}
            </Text>
          </View>
          <View style={styles.amontContainer}>
            <Text>
              <Text style={styles.text}>Total Amount: </Text>₹
              <Text style={styles.bold}> {bookData.amount}</Text>
            </Text>
            <LinearGradient
              colors={["#64D51F", "#4DBB09"]}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              style={[styles.gradient, { height: 17, paddingHorizontal: 8 }]}
            >
              <Text
                style={[
                  styles.header,
                  { fontSize: 12, color: "#FFF", paddingBottom: 0 },
                ]}
              >
                Paid
              </Text>
            </LinearGradient>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default Nearby11;

const styles = StyleSheet.create({
  backGround: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
    gap: 20,
    paddingBottom: 40,
  },
  container: {
    backgroundColor: "white",
    width: "88%",
    borderRadius: 10,
    paddingVertical: 18,
    alignItems: "center",
    gap: 15,
    overflow: "hidden",
  },
  container2: {
    width: "88%",
    backgroundColor: "#F0FFFA",
    borderRadius: 15,
    paddingTop: 10,
    paddingHorizontal: 15,
    gap: 15,
    paddingBottom: 10,
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
  arrow: {
    height: 3,
    width: 15,
  },
  qrContainer: {
    width: 230,
    height: 230,
    borderRadius: 15,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  bookingId: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  text: {
    fontFamily: "Poppins_400Regular",
    paddingTop: 2,
  },
  header: {
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
  },
  bold: {
    fontFamily: "Poppins_600SemiBold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  semicircle: {
    width: 15,
    height: 35,
  },
  line: {
    height: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#A0A0A0",
    borderStyle: "dashed",
    width: "75%",
  },
  ticketImage: {
    width: 102,
    height: 102,
    borderRadius: 10,
  },
  amontContainer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#F2F2F2",
    height: 30,
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
