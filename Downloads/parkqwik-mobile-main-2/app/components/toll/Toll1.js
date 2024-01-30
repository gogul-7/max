import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Animated,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { RadioButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_API_KEY } from "@env";
import AppContext from "../../context/AppContext";

const types = ["Car/Jeep/Van", "LCV", "Bus/Truck", "HCM/EME"];

const Toll1 = () => {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState("");

  const navigation = useNavigation();
  const { setTollDetails, tollDetails } = useContext(AppContext);

  const height = useRef(new Animated.Value(0)).current;

  const handleNavigate = () => {
    navigation.navigate("toll2");
  };

  const handleAnimation = () => {
    setOpen(!open);
    Animated.timing(height, {
      useNativeDriver: false,
      toValue: open ? 1 : 0,
      duration: 300,
    }).start();
  };

  console.log(value);

  const animatedHeight = height.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 125],
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "#FFF",
          alignItems: "center",
          paddingTop: 20,
          gap: 15,
        }}
      >
        <View style={styles.container}>
          <Text style={[styles.header]}>From</Text>
          <View style={styles.inputContainer}>
            <Image
              style={{
                width: 16,
                height: 16,
                position: "absolute",
                left: 10,
                top: 12,
                zIndex: 10,
              }}
              source={require("../assets/images/greenlocation.png")}
            />
            <GooglePlacesAutocomplete
              placeholder="Enter starting point"
              onPress={(data, details = null) => {
                setTollDetails({
                  ...tollDetails,
                  origin: {
                    lat: details.geometry.location.lat,
                    lng: details.geometry.location.lng,
                  },
                });
              }}
              query={{
                key: GOOGLE_API_KEY,
                language: "en",
              }}
              fetchDetails
              styles={{
                textInput: {
                  fontFamily: "Poppins_400Regular",
                  height: 40,
                  paddingTop: 8,
                  paddingLeft: 20,
                  paddingHorizontal: 0,
                },
                textInputContainer: {
                  height: 40,
                },
                poweredContainer: {
                  display: "none",
                },
                description: {
                  fontFamily: "Poppins_400Regular",
                  paddingTop: 2,
                },
              }}
            />
          </View>
          <Text style={[styles.header]}>To</Text>
          <View style={styles.inputContainer}>
            <Image
              style={{
                width: 16,
                height: 16,
                position: "absolute",
                left: 10,
                top: 12,
                zIndex: 10,
              }}
              source={require("../assets/images/greenlocation.png")}
            />
            <GooglePlacesAutocomplete
              placeholder="Enter destination"
              onPress={(data, details = null) => {
                setTollDetails({
                  ...tollDetails,
                  destination: {
                    lat: details.geometry.location.lat,
                    lng: details.geometry.location.lng,
                  },
                });
              }}
              query={{
                key: GOOGLE_API_KEY,
                language: "en",
              }}
              fetchDetails
              styles={{
                textInput: {
                  fontFamily: "Poppins_400Regular",
                  height: 40,
                  paddingTop: 8,
                  paddingLeft: 20,
                  paddingHorizontal: 0,
                },
                textInputContainer: {
                  height: 40,
                },
                poweredContainer: {
                  display: "none",
                },
                description: {
                  fontFamily: "Poppins_400Regular",
                  paddingTop: 2,
                },
              }}
            />
          </View>
        </View>
        <Text style={[styles.header, { width: "90%" }]}>Vehicle Type</Text>
        <TouchableOpacity
          style={[styles.inputContainer, { width: "90%", height: 41 }]}
          onPress={handleAnimation}
        >
          {selected ? (
            <Text style={[styles.text, { fontSize: 12, paddingTop: 2 }]}>
              {selected}
            </Text>
          ) : (
            <Text style={[styles.text, { color: "#AFAFAF", paddingTop: 2 }]}>
              Select your vehicle type
            </Text>
          )}
          <FontAwesomeIcon
            icon={"angle-down"}
            style={{
              color: "#393939",
              position: "absolute",
              right: 15,
            }}
            size={14}
          />
        </TouchableOpacity>
        <Animated.View style={[styles.card, { height: animatedHeight }]}>
          {types.map((item) => (
            <Text
              onPress={() => {
                handleAnimation();
                setSelected(item);
              }}
              key={item}
              style={[styles.text, { fontSize: 12, left: 15 }]}
            >
              {item}
            </Text>
          ))}
        </Animated.View>
        <Text style={[styles.header, { width: "90%" }]}>Trip Type</Text>
        <View style={{ width: "92%", marginTop: -10 }}>
          <RadioButton.Group
            onValueChange={(newValue) => {
              setValue(newValue);
            }}
            value={value}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={{ height: 15 }}>
                <RadioButton
                  value={"one way"}
                  color="#1A9E75"
                  uncheckedColor="#1A9E75"
                />
              </View>

              <Text style={[styles.text, { paddingTop: 8, marginLeft: 5 }]}>
                One Way
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ height: 15 }}>
                <RadioButton
                  value={"return"}
                  color="#1A9E75"
                  uncheckedColor="#1A9E75"
                />
              </View>
              <Text style={[styles.text, { paddingTop: 8, marginLeft: 5 }]}>
                Return
              </Text>
            </View>
          </RadioButton.Group>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleNavigate}>
          <Text
            style={[
              styles.bold,
              { color: "#FFF", fontSize: 16, paddingTop: 2 },
            ]}
          >
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Toll1;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: "#FFF",
    elevation: 3,
    borderRadius: 15,
    padding: 15,
    gap: 10,
    paddingBottom: 20,
  },
  inputContainer: {
    width: "100%",
    borderColor: "#E5E5E5",
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 10,
    gap: 6,
  },
  card: {
    elevation: 1,
    width: "90%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    marginTop: -13,
    gap: 5,
    overflow: "hidden",
    justifyContent: "center",
    gap: 7,
  },
  input: {
    fontFamily: "Poppins_400Regular",
    paddingTop: 3,
    flex: 1,
  },
  text: {
    fontFamily: "Poppins_400Regular",
    color: "#393939",
  },
  header: {
    fontFamily: "Poppins_500Medium",
    color: "#393939",
    fontSize: 16,
  },
  bold: { fontFamily: "Poppins_600SemiBold" },
  button: {
    width: "90%",
    height: 41,
    backgroundColor: "#1A9E75",
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 20,
  },
});
