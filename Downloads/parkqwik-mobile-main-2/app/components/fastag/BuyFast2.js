import React, { useContext, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  Image,
  Pressable,
  Linking,
  TouchableOpacity,
} from "react-native";
import AppContext from "../../context/AppContext";
import { useNavigation } from "@react-navigation/native";

const BuyFast2 = () => {
  const { setHeaderNum } = useContext(AppContext);

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("buyscreen3");
  };

  const openLocationLink = () => {
    const locationLink =
      "https://www.google.com/maps?rlz=1C1RXQR_enIN960IN960&gs_lcrp=EgZjaHJvbWUqEAgBEC4YrwEYxwEYgAQYjgUyBggAEEUYOTIQCAEQLhivARjHARiABBiOBTIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABNIBCDU2OTNqMGo3qAIAsAIA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KcF_So4qYVI6MebmydpUSjrT&daddr=Doctor,+No+89,+2nd+Main+Rd,+Kothari+Nagar,+Ramapuram,+Chennai,+Tamil+Nadu+600089";

    Linking.openURL(locationLink)
      .then(() => console.log("Location link opened successfully"))
      .catch((err) => console.error("Error opening location link:", err));
  };

  useEffect(() => {
    setHeaderNum(2);
    return () => {
      setHeaderNum(1);
    };
  }, []);
  return (
    <View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <View style={styles.inputCotainer}>
          <Text style={styles.header}>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your full name"
            placeholderTextColor="#AFAFAF"
          />
        </View>
        <View style={[styles.inputCotainer]}>
          <Text style={styles.header}>Mobile Number</Text>
          <View style={{ width: "100%", justifyContent: "center" }}>
            <Text
              style={[styles.text, { position: "absolute", top: 10, left: 10 }]}
            >
              +91
            </Text>
            <TextInput
              style={[styles.input, { paddingLeft: 40 }]}
              placeholder="| Enter your mobile number"
              placeholderTextColor="#AFAFAF"
            />
          </View>
        </View>
        <View style={styles.inputCotainer}>
          <Text style={styles.header}>Address Line 1</Text>
          <TextInput
            style={styles.input}
            placeholder="House No / Flat No , Street name"
            placeholderTextColor="#AFAFAF"
          />
        </View>
        <View style={styles.inputCotainer}>
          <Text style={styles.header}>Address Line 2</Text>
          <TextInput
            style={styles.input}
            placeholder="Locality name / Area name"
            placeholderTextColor="#AFAFAF"
          />
        </View>
        <View style={styles.inputCotainer}>
          <Text style={styles.header}>City</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your city"
            placeholderTextColor="#AFAFAF"
          />
        </View>
        <View style={styles.inputCotainer}>
          <Text style={styles.header}>State</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your state"
            placeholderTextColor="#AFAFAF"
          />
        </View>
        <View style={{ width: "100%", display: "flex", alignItems: "center" }}>
          <Text style={styles.text}>or</Text>
        </View>
        <TouchableOpacity
          style={styles.locationContainer}
          onPress={openLocationLink}
        >
          <Image
            source={require("../assets/images/greenlocation.png")}
            style={{ width: 22, height: 23, marginBottom: 3 }}
          />
          <Text style={[styles.header, { fontSize: 14, color: "#1A9E75" }]}>
            Point location through map
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.payment}>
        <Text style={[{ fontSize: 20 }]}>
          ₹ <Text style={[styles.header, { fontSize: 20 }]}>350</Text>
        </Text>
        <Pressable onPress={handlePress} style={styles.button}>
          <Text
            style={[
              styles.bold,
              { color: "#FFF", fontSize: 16, paddingTop: 2 },
            ]}
          >
            Continue
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    paddingTop: 20,
    gap: 15,
    backgroundColor: "#FFF",
  },
  inputCotainer: {
    width: "90%",
    display: "flex",
    gap: 5,
  },
  text: {
    fontFamily: "Poppins_400Regular",
  },
  header: {
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
  },
  bold: { fontFamily: "Poppins_600SemiBold" },
  locationContainer: {
    width: "90%",
    borderWidth: 1,
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 10,
    borderColor: "#1A9E75",
    backgroundColor: "#F0FFFA",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    marginTop: -5,
    marginBottom: 100,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 10,
    borderColor: "#AFAFAF",
    fontFamily: "Poppins_400Regular",
    paddingTop: 3,
  },
  payment: {
    position: "absolute",
    height: 63,
    backgroundColor: "white",
    bottom: 0,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  button: {
    width: 178,
    height: 40,
    backgroundColor: "#1A9E75",
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BuyFast2;
