import React, { useContext, useState, useEffect, useCallback } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  GestureResponderEvent,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import AppContext from "../context/AppContext";
import * as Location from "expo-location";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Navbar = () => {
  const navigation = useNavigation();
  const { setHam, setNav, nav } = useContext(AppContext);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [currentLocation, setCurrentLocation] = useState("");
  const [shouldFetchData, setShouldFetchData] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      retrieveData();
    });

    return unsubscribe;
  }, [navigation]);

  const retrieveData = async () => {
    try {
      const storedData = await AsyncStorage.getItem("selectedVehicle");

      if (storedData !== null) {
        const parsedDataArray = JSON.parse(storedData);
        setData(parsedDataArray);
      } else {
        console.log("No array found in local storage.");
      }
    } catch (error) {
      console.error("Error retrieving array:", error);
    }
  };

  // console.log(data);

  // const getLocation = async () => {
  //   let { status } = await Location.requestForegroundPermissionsAsync();
  //   if (status !== "granted") {
  //     setErrorMsg("Permission to access location was denied");
  //     return;
  //   }

  //   let location = await Location.getCurrentPositionAsync({});
  //   setLocation(location);
  // };

  // const getLocationName = async () => {
  //   const address = await Location.reverseGeocodeAsync({
  //     longitude: location.coords.longitude,
  //     latitude: location.coords.latitude,
  //   });
  //   const city = address[0].city;
  //   console.log(city);
  //   if (address) setCurrentLocation(city);
  // };

  // useEffect(() => {
  //   getLocation();
  // }, []);

  // useEffect(() => {
  //   if (location) {
  //     getLocationName();
  //   }
  // }, [location]);

  const handleHamburger = () => {
    setHam(true);
  };

  const handlePress = (route) => {
    navigation.navigate(route);
  };
  if (nav) {
    return (
      <View style={styles.navContainer}>
        <View style={styles.navbar}>
          <Pressable onPress={handleHamburger} style={styles.dpContainer}>
            <Image
              style={styles.dp}
              source={require("../assets/images/dp.png")}
            />
            <View style={styles.dpMenu}>
              <FontAwesomeIcon icon="bars" style={{ maxWidth: 12 }} />
            </View>
          </Pressable>
          <View style={styles.navContent}>
            {data !== null ? (
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("My Vehicles")}
              >
                <Text
                  style={[styles.bold, { color: "#1A9E75", paddingTop: 2 }]}
                >
                  {data.maker_model.split(" ")[0]} - {data.rc_number.slice(6)}
                </Text>
                <FontAwesomeIcon
                  icon={"caret-down"}
                  color="rgba(28, 27, 31, 1)"
                  style={{ marginTop: -2 }}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => navigation.navigate("Add Vehicle")}
                style={styles.button}
              >
                <FontAwesomeIcon icon={"circle-plus"} color="#1A9E75" />
                <Text
                  style={[styles.bold, { color: "#1A9E75", paddingTop: 2 }]}
                >
                  Add Vehicle
                </Text>
              </TouchableOpacity>
            )}
            <View style={styles.detailContainer}>
              <TouchableOpacity
                onPress={() => handlePress("Wallet")}
                style={styles.iconContainer}
              >
                <Image
                  style={{ width: 17, height: 17, marginBottom: 2 }}
                  source={require("../assets/images/whitewallet.png")}
                />
                <View style={styles.walletAmount}>
                  <Text
                    style={{
                      color: "#393939",
                      paddingTop: 1,
                      fontSize: 8,
                      fontWeight: 600,
                    }}
                  >
                    ₹
                    <Text style={[styles.bold, { color: "#393939" }]}>450</Text>
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handlePress("Notification")}
                style={styles.iconContainer}
              >
                <FontAwesomeIcon
                  icon="fa-regular fa-bell"
                  style={styles.text}
                  size={16}
                />
                <View
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: 6,
                    backgroundColor: "#FFCA28",
                    position: "absolute",
                    right: 8,
                    top: 8,
                  }}
                ></View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handlePress("Wallet")}
                style={styles.iconContainer}
              >
                <Image
                  style={{ width: 13.844, height: 13.626 }}
                  source={require("../assets/images/angleright.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  navContainer: {
    backgroundColor: "#1A9E75",
    paddingHorizontal: 5,
  },
  navbar: {
    flexDirection: "row",
    height: 70,
    marginTop: 20,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  dpContainer: {
    position: "relative",
  },
  dp: {
    width: 51,
    height: 51,
    marginTop: 8,
  },
  dpMenu: {
    position: "absolute",
    bottom: 5,
    right: 0,
    backgroundColor: "white",
    borderRadius: 50,
    width: 20,
    height: 20,

    alignItems: "center",
    justifyContent: "center",
  },
  walletAmount: {
    minWidth: 26,
    height: 14,
    borderRadius: 7.5,
    backgroundColor: "#FFCA28",
    position: "absolute",
    top: -3,
    left: -7,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontFamily: "Poppins_400Regular",
  },
  header: {
    color: "white",
    fontFamily: "Poppins_500Medium",
  },
  bold: {
    color: "white",
    fontFamily: "Poppins_600SemiBold",
  },
  navContent: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: 12,
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 12,
  },
  button: {
    width: 159,
    height: 32,
    borderRadius: 16.5,
    borderWidth: 1,
    borderColor: "#FFF",
    backgroundColor: "#F0FFFA",
    elevation: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    left: 10,
  },
  detailContainer: {
    flexDirection: "row",
    alignItems: "center",

    left: 5,
  },
  iconContainer: {
    width: 30,
    height: 30,
    marginLeft: 3,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 0.35);",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  underline: {
    borderBottomWidth: 1,
    borderBottomColor: "white",
    borderStyle: "dashed",
    paddingEnd: 1.8,
  },
});

export default Navbar;
