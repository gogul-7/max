import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Av,
  Platform,
  Animated,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";
import WheelPickerExpo from "react-native-wheel-picker-expo";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Ev7 from "./Ev7";
import MapView, {
  Circle,
  Marker,
  PROVIDER_GOOGLE,
  Polyline,
} from "react-native-maps";
import * as Location from "expo-location";
import LocationLoader from "../LocationLoader";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlace } from "../../store/slices/PlaceSlice";
import style1 from "../MapStyle";
import { fetchGeocode } from "../../store/slices/GeoCodeSlice";
import { LinearGradient } from "expo-linear-gradient";

const months = [
  "1 Month",
  "2 Month",
  "3 Month",
  "4 Month",
  "5 Month",
  "6 Month",
  "7 Month",
  "8 Month",
  "9 Month",
  "10 Month",
  "11 Month",
  "1 Year",
];

const Ev1 = () => {
  const [checkout, setCheckout] = useState(false);
  const [scheme, setScheme] = useState(false);
  const [key, setKey] = useState("");
  const [location, setLocation] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [locationDetails, setLocationDetails] = useState(null);
  const [refresh, setRefresh] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [position, setPosition] = useState(true);
  const [searchSection, setSearchSection] = useState(null);
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);
  const [modal5, setModal5] = useState(false);
  const [modal6, setModal6] = useState(false);
  const [monthArray, setMonthArray] = useState([]);
  const [dateArray, setDateArray] = useState([]);
  const [hourArray, setHourArray] = useState([]);
  const [minArray, setMinArray] = useState([]);
  const [startDate, setStartDate] = useState({
    day: "Today",
    min: "30",
    hr: "18",
  });
  const [endtDate, setEndtDate] = useState({
    day: "Today",
    min: "30",
    hr: "19",
  });
  const [startMonthDate, setStartMonthDate] = useState("Today");
  const [endMonthDate, setEndMonthDate] = useState("");
  const [duration, setDuration] = useState(2);
  const navigation = useNavigation();
  const input = useRef();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.placeData?.data?.predictions);
  const data2 = useSelector((state) => state.geoCode);
  const mapRef = useRef();
  const slide = useRef(new Animated.Value(0)).current;

  const handleSearch = () => {
    setModal5(false);
    setScheme(true);
  };

  useEffect(() => {
    Animated.timing(slide, {
      toValue: position ? 0 : 1,
      useNativeDriver: true,
      duration: 200,
    }).start();
  }, [position]);

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocationDetails(location);
  };

  const getLocationName = async () => {
    const address = await Location.reverseGeocodeAsync({
      longitude: locationDetails.coords.longitude,
      latitude: locationDetails.coords.latitude,
    });
    setCurrentLocation(address[0].city);
  };

  const shops = [
    {
      id: 1,
      amount: 50,
      monthly: 2200,
      longitude: locationDetails?.coords.longitude + 0.0095,
      latitude: locationDetails?.coords.latitude,
      soldout: false,
    },
    {
      id: 2,
      amount: 40,
      monthly: 2100,
      longitude: locationDetails?.coords.longitude - 0.0095,
      latitude: locationDetails?.coords.latitude,
      soldout: false,
    },
    {
      id: 3,
      amount: 40,
      monthly: 2400,
      longitude: locationDetails?.coords.longitude,
      latitude: locationDetails?.coords.latitude + 0.008,
      soldout: false,
    },
    {
      id: 4,
      amount: 40,
      monthly: 2200,
      longitude: locationDetails?.coords.longitude,
      latitude: locationDetails?.coords.latitude - 0.005,
      soldout: false,
    },
    {
      id: 5,
      amount: 40,
      longitude: locationDetails?.coords.longitude - 0.004,
      latitude: locationDetails?.coords.latitude - 0.012,
      soldout: true,
    },
    {
      id: 6,
      amount: 40,
      longitude: locationDetails?.coords.longitude + 0.008,
      latitude: locationDetails?.coords.latitude - 0.01,
      soldout: true,
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      getLocation();
    }, 3000);
  }, []);

  useEffect(() => {
    const keyboardShowListner = Keyboard.addListener("keyboardDidShow", () => {
      setPosition(false);
    });
    const keyboardHideListner = Keyboard.addListener("keyboardDidHide", () => {
      setPosition(true);
    });
    return () => {
      keyboardShowListner.remove();
      keyboardHideListner.remove();
    };
  }, []);

  useEffect(() => {
    if (locationDetails) {
      getLocationName();
    }
  }, [refresh]);

  // console.log(locationDetails);

  const Tab = createMaterialTopTabNavigator();

  const formatDate = (date) => {
    const options = { weekday: "short", day: "numeric", month: "short" };
    const newDate = new Date(date).toLocaleDateString("en-US", options);
    return newDate.slice(0, 3) + newDate.slice(8) + newDate.slice(4, 8);
  };

  const formatDateType2 = (date) => {
    const options = {
      day: "numeric",
      month: "short",
    };
    const newDate = new Date(date).toLocaleDateString("en-US", options);
    const year = new Date(date).getFullYear().toLocaleString();
    return (
      newDate.slice(4, 8) + " " + newDate.slice(0, 3) + " " + year.slice(3, 5)
    );
  };

  function formatDateType3(inputDate) {
    const dateParts = inputDate.split(" ");

    const day = dateParts[0];
    const month = dateParts[1];
    const year = dateParts[2];

    const formattedDate = new Date(`${month} ${day}, ${year}`);

    const formattedYear = formattedDate.getFullYear();
    const formattedMonth = (formattedDate.getMonth() + 1)
      .toString()
      .padStart(2, "0");
    const formattedDay = formattedDate.getDate().toString().padStart(2, "0");

    const result = `${formattedYear}-${formattedMonth}-${formattedDay}`;

    return result;
  }

  const generateArray = () => {
    const today = new Date();
    const dateArray = ["Today"];
    const monthArray = ["Today"];
    const newHours = [];
    const newMinutes = [];

    for (let i = 1; i <= 20; i++) {
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + i);
      const formattedDate = formatDate(nextDate);
      const formattedMonth = formatDateType2(nextDate);
      dateArray.push(formattedDate);
      monthArray.push(formattedMonth);
    }

    for (let i = 1; i <= 24; i++) {
      const formattedHours = i < 10 ? `0${i}` : `${i}`;
      newHours.push(formattedHours);
    }

    for (let i = 0; i <= 60; i++) {
      const formattedMinutes = i < 10 ? `0${i}` : `${i}`;
      newMinutes.push(formattedMinutes);
    }
    setDateArray(dateArray);
    setHourArray(newHours);
    setMinArray(newMinutes);
    setMonthArray(monthArray);
  };

  useEffect(() => {
    generateArray();
  }, []);

  // useEffect(() => {
  //   return () => {
  //     fetchGeocode(null);
  //   };
  // }, []);

  console.log(data2);

  const handleChange = (text) => {
    setKey(text);
    if (text.length === 0) {
      input.current.setNativeProps({
        style: { borderColor: "#EEE" },
      });
    } else {
      input.current.setNativeProps({
        style: { borderColor: "#1A9E75" },
      });
    }
  };

  const handlePlaceSearch = (text) => {
    if (text.length === 0) setSearchSection(false);
    else {
      setSearchSection(true);
      dispatch(fetchPlace(text));
    }
    setCurrentLocation(text);
  };

  const handleRegion = (item) => {
    dispatch(fetchGeocode(item.place_id));

    setSearchSection(false);
    setCurrentLocation(item.structured_formatting.main_text);
    Keyboard.dismiss();
  };

  const geoCode = useSelector((state) => state?.geoCode?.data?.location);

  useEffect(() => {
    if (geoCode) {
      setLocationDetails({
        coords: {
          latitude: geoCode.latitude,
          longitude: geoCode.longitude,
        },
      });
    }
  }, [geoCode]);

  // console.log(currentLocation.length);

  const handleRegionChange = () => {
    getLocation();
    mapRef.current.animateToRegion({
      longitude: locationDetails.coords.longitude,
      latitude: locationDetails.coords.latitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
    setTimeout(() => {
      setRefresh(!refresh);
    }, 1000);
  };

  function calculateEndDate(startDate, durationInMonths) {
    const newDate = formatDateType3(startDate);
    console.log(newDate);
    const startDateObj = new Date("2024-03-01");
    console.log(startDateObj);
    const endDateObj = new Date(startDateObj);
    endDateObj.setMonth(startDateObj.getMonth() + durationInMonths);

    const endDateString = endDateObj.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    setEndMonthDate(endDateString);
  }

  useEffect(() => {
    calculateEndDate(startMonthDate, 2);
  }, [startMonthDate]);

  // console.log(locationDetails.coords.longitude + 1);

  const handlePress = () => {
    navigation.navigate("ev2");
    setCheckout(false);
  };

  if (locationDetails === null) {
    return <LocationLoader />;
  }

  return (
    <TouchableWithoutFeedback onPress={() => setSearchSection(false)}>
      <View style={{ flex: 1 }}>
        <View style={styles.headerContainer}>
          <View style={{ width: "90%", justifyContent: "center" }}>
            <TextInput
              style={styles.input}
              placeholder="Enter destination or loca..."
              value={
                currentLocation && currentLocation.length > 25
                  ? currentLocation.slice(0, 24) + "..."
                  : currentLocation
              }
              placeholderTextColor="#1A9E75"
              onChangeText={handlePlaceSearch}
            />
            {searchSection && (
              <View style={styles.searchSection}>
                {data ? (
                  data
                    .filter((item, index) => index <= 3)
                    .map((item, index) => (
                      <TouchableOpacity
                        onPress={() => handleRegion(item)}
                        style={
                          data.length === 1
                            ? [styles.searchResult, { borderBottomWidth: 0 }]
                            : styles.searchResult
                        }
                        key={item.place_id}
                      >
                        <Text
                          style={[
                            styles.header,
                            {
                              color: "#393939",
                              textAlignVertical: "center",
                              paddingTop: 3,
                            },
                          ]}
                        >
                          {item.structured_formatting.main_text}
                        </Text>
                        <Text
                          style={[
                            styles.text,
                            {
                              color: "#393939",
                              fontSize: 12,
                              textAlignVertical: "center",
                              paddingBottom: 3,
                              marginTop: -3,
                            },
                          ]}
                        >
                          {item.description.slice(0, 50)}
                          {item.description.length > 49 && "..."}
                        </Text>
                      </TouchableOpacity>
                    ))
                ) : (
                  <Text
                    style={[
                      styles.text,
                      {
                        color: "#393939",
                        paddingTop: 5,
                        textAlignVertical: "center",
                      },
                    ]}
                  >
                    Loading ...
                  </Text>
                )}
              </View>
            )}
            <Image
              style={styles.location}
              source={require("../assets/images/greenlocation.png")}
            />
            <TouchableOpacity
              onPress={() => {
                setScheme(!scheme);
                setLocation(false);
              }}
              style={styles.slider}
            >
              <Text style={[styles.header, { color: "white", paddingTop: 2 }]}>
                {scheme ? "Monthly" : "Hourly"}
              </Text>
              <View>
                <FontAwesomeIcon icon={"angle-up"} size={10} color="white" />
                <FontAwesomeIcon icon={"angle-down"} size={10} color="white" />
              </View>
            </TouchableOpacity>
          </View>
          {scheme ? (
            <TouchableOpacity
              onPress={() => {
                setModal3(true);
                setStartMonthDate(dateArray[1]);
              }}
              style={{
                height: 37,
                width: "90%",
                backgroundColor: "#FFF",
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 15,
                marginTop: 5,
                borderRadius: 4,
                justifyContent: "space-between",
              }}
            >
              <Text
                style={[styles.header, { color: "#1A9E75", paddingTop: 2 }]}
              >
                Arrive from:{" "}
                <Text style={{ color: "#393939" }}>{startMonthDate}</Text>
              </Text>
              <FontAwesomeIcon icon={"angle-down"} color="#1A9E75" size={12} />
            </TouchableOpacity>
          ) : (
            <View
              style={{
                flexDirection: "row",
                width: "90%",
                justifyContent: "space-between",
                marginTop: 5,
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setModal(true);
                  setStartDate({ ...startDate, day: dateArray[1] });
                  setEndtDate({ ...endtDate, hr: hourArray[6] });
                }}
                style={styles.dropDown}
              >
                <Text
                  style={[styles.text, { paddingTop: 2 }]}
                >{`${startDate.hr}:${startDate.min} ${startDate.day}`}</Text>
                <FontAwesomeIcon
                  icon={"angle-down"}
                  color="#1A9E75"
                  size={12}
                />
              </TouchableOpacity>
              <FontAwesomeIcon icon={"arrow-right-long"} color="white" />
              <TouchableOpacity
                onPress={() => {
                  setModal2(true);
                }}
                style={styles.dropDown}
              >
                <Text
                  style={[styles.text, { paddingTop: 2 }]}
                >{`${endtDate.hr}:${endtDate.min} ${endtDate.day}`}</Text>
                <FontAwesomeIcon
                  icon={"angle-down"}
                  color="#1A9E75"
                  size={12}
                />
              </TouchableOpacity>
            </View>
          )}
        </View>
        <MapView
          style={{ flex: 1, zIndex: -3 }}
          provider={PROVIDER_GOOGLE}
          region={{
            longitude: locationDetails.coords.longitude,
            latitude: locationDetails.coords.latitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          ref={mapRef}
          customMapStyle={style1}
        >
          {/* <Polyline
              coordinates={lineCoordinates}
              strokeColor="rgba(0,0,0,0)" // Set strokeColor to transparent
              strokeWidth={4}
              lineDashPattern={[20, 20]} // Set the dash pattern
            /> */}
          <Marker
            coordinate={{
              longitude: locationDetails.coords.longitude,
              latitude: locationDetails.coords.latitude,
            }}
            renderToHardwareTextureAndroid
            image={require("../assets/images/currentlocation.png")}
          />
          {location && (
            <>
              <Circle
                center={{
                  longitude: locationDetails.coords.longitude,
                  latitude: locationDetails.coords.latitude,
                }}
                radius={1500}
              />
              {shops.map((item) => (
                <Marker
                  key={item.id}
                  coordinate={{
                    longitude: item.longitude,
                    latitude: item.latitude,
                  }}
                >
                  <CustomMarker
                    soldout={item.soldout}
                    rate={item.amount}
                    scheme={scheme}
                    monthly={item.monthly}
                  />
                </Marker>
              ))}
            </>
          )}
        </MapView>

        <Animated.View
          style={{
            position: "absolute",
            right: 18,
            bottom: 250,
            gap: 10,
            zIndex: -2,
            transform: [
              {
                translateX: slide.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 100],
                }),
              },
            ],
          }}
        >
          <TouchableOpacity style={styles.circle}>
            <Image
              style={{ height: 22, width: 22 }}
              source={require("../assets/images/scanner.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              getLocation();
              handleRegionChange({
                location: {
                  latitude: locationDetails.coords.latitude,
                  longitude: locationDetails.coords.longitude,
                },
              });
            }}
            style={styles.circle}
          >
            <Image
              style={{ height: 22, width: 22 }}
              source={require("../assets/images/gps.png")}
            />
          </TouchableOpacity>
        </Animated.View>

        <Animated.View
          style={{
            transform: [
              {
                translateY: slide.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 500],
                }),
              },
            ],
          }}
        >
          <ImageBackground
            source={require("../assets/images/base2.png")}
            style={styles.base}
          >
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                justifyContent: "center",
                gap: 20,
                paddingRight: 30,
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                style={{ alignItems: "center" }}
              >
                <Image
                  style={{ height: 24, width: 24 }}
                  source={require("../assets/images/greenhome.png")}
                />
                <Text style={[styles.text, { color: "#1B9E76", fontSize: 10 }]}>
                  Home
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Nearby")}
                style={{ alignItems: "center" }}
              >
                <Image
                  style={{ height: 24, width: 24 }}
                  source={require("../assets/images/greenpark.png")}
                />
                <Text style={[styles.text, { color: "#1B9E76", fontSize: 10 }]}>
                  Parking
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                justifyContent: "center",
                gap: 20,
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("FASTag Recharge2")}
                style={{ alignItems: "center" }}
              >
                <Image
                  style={{ height: 24, width: 24 }}
                  source={require("../assets/images/greenfast.png")}
                />
                <Text style={[styles.text, { color: "#1B9E76", fontSize: 10 }]}>
                  Fastag
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Bookings")}
                style={{ alignItems: "center" }}
              >
                <Image
                  style={{ height: 24, width: 24 }}
                  source={require("../assets/images/greencalendar.png")}
                />
                <Text style={[styles.text, { color: "#1B9E76", fontSize: 10 }]}>
                  Bookings
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <TouchableOpacity
            onPress={() => setModal4(true)}
            style={styles.logoContainer}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../assets/images/logo3.png")}
            />
          </TouchableOpacity>
        </Animated.View>

        <Modal
          isVisible={modal4}
          backdropColor="#B7B7B7"
          style={{ margin: 0, justifyContent: "flex-end" }}
          backdropOpacity={0}
          useNativeDriver
          useNativeDriverForBackdrop
          onBackButtonPress={() => setModal4(false)}
          onBackdropPress={() => setModal4(false)}
        >
          <View style={[styles.checkout, { height: 283 }]}>
            <TouchableOpacity
              onPress={() => setModal4(false)}
              style={{
                height: 30,
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <View style={styles.line1} />
            </TouchableOpacity>
            <Text style={[styles.header, { fontSize: 16, width: "80%" }]}>
              What do you want to do today?
            </Text>
            <TouchableOpacity
              onPress={() => {
                setModal4(false);
                setModal5(true);
                setLocation(false);
              }}
              style={[
                styles.container,
                {
                  width: "90%",
                  justifyContent: "flex-start",
                  gap: 15,
                  alignItems: "center",
                  paddingVertical: 10,
                },
              ]}
            >
              <Image
                source={require("../assets/images/parkboard.png")}
                style={{ width: 25, height: 25 }}
              />
              <View>
                <Text style={[styles.text, { fontSize: 16 }]}>
                  Reserve a monthly parking
                </Text>
                <Text style={[styles.text, { fontSize: 12, color: "#A0A0A0" }]}>
                  Book your spot in advance
                </Text>
              </View>
            </TouchableOpacity>
            <Text style={[styles.text, { fontSize: 12, color: "#8E8E8E" }]}>
              or
            </Text>
            <TouchableOpacity
              onPress={() => {
                setModal4(false);
                setModal6(true);
              }}
              style={[
                styles.container,
                {
                  width: "90%",
                  justifyContent: "flex-start",
                  gap: 15,
                  alignItems: "center",
                  paddingVertical: 10,
                },
              ]}
            >
              <Image
                source={require("../assets/images/locationring.png")}
                style={{ width: 25, height: 25 }}
              />
              <View>
                <Text style={[styles.text, { fontSize: 16 }]}>
                  Enter location ID
                </Text>
                <Text style={[styles.text, { fontSize: 12, color: "#A0A0A0" }]}>
                  Book your spot by entering Location ID
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </Modal>
        <Modal
          isVisible={modal5}
          backdropOpacity={0.2}
          backdropColor="#FFF"
          useNativeDriver
          style={styles.modal}
          onBackButtonPress={() => setModal5(false)}
        >
          <View
            style={[
              styles.checkout,
              {
                height: "95%",
                padding: 0,
                paddingTop: 15,
                alignItems: "flex-start",
                gap: 15,
              },
            ]}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                alignItems: "center",
                paddingHorizontal: 15,
              }}
            >
              <TouchableOpacity onPress={() => setModal5(false)}>
                <FontAwesomeIcon
                  icon={"angle-left"}
                  size={24}
                  color="#1A9E75"
                />
              </TouchableOpacity>
              <View style={styles.input1} ref={input}>
                {key ? (
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/images/greensearch.png")}
                  />
                ) : (
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/images/search.png")}
                  />
                )}
                <TextInput
                  placeholder="Enter destination or location"
                  placeholderTextColor={"#A0A0A0"}
                  style={{
                    fontFamily: "Poppins_400Regular",
                    flex: 1,
                    paddingTop: 2,
                    height: "100%",
                  }}
                  onChangeText={handleChange}
                />
              </View>
            </View>
            <TouchableOpacity
              onPress={handleSearch}
              style={{
                flexDirection: "row",
                gap: 10,
                alignItems: "center",
                width: "100%",
                borderBottomColor: "#F4F5F5",
                borderBottomWidth: 3,
                padding: 15,
              }}
            >
              <Image
                style={{ width: 20, height: 20 }}
                source={require("../assets/images/distance.png")}
              />
              <Text style={[styles.text, { paddingTop: 5 }]}>
                Search Nearby
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                color: "#393939",
                fontWeight: 500,
                left: 15,
              }}
            >
              Recent Searches
            </Text>
            <View style={{ gap: 5 }}>
              <TouchableOpacity
                onPress={handleSearch}
                style={{
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                  paddingHorizontal: 15,
                }}
              >
                <Image
                  style={{ width: 18, height: 18 }}
                  source={require("../assets/images/blacksearch.png")}
                />
                <Text style={[styles.text, { paddingTop: 2 }]}>
                  Kelambakkam
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleSearch}
                style={{
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                  paddingHorizontal: 15,
                }}
              >
                <Image
                  style={{ width: 18, height: 18 }}
                  source={require("../assets/images/blacksearch.png")}
                />
                <Text style={[styles.text, { paddingTop: 3 }]}>Vandalur</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Modal
          style={styles.modal}
          isVisible={modal6}
          backdropOpacity={0.4}
          useNativeDriver
          onBackButtonPress={() => setModal6(false)}
        >
          <Ev7 setModal6={setModal6} setCheckout={setCheckout} />
        </Modal>
        <Modal
          isVisible={checkout}
          backdropOpacity={0.4}
          useNativeDriver
          style={styles.modal}
          onBackButtonPress={() => setCheckout(false)}
        >
          <View style={styles.checkout}>
            <TouchableOpacity
              onPress={() => setCheckout(false)}
              style={{
                height: 30,
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <View style={styles.line1} />
            </TouchableOpacity>
            <ScrollView
              style={{ height: "100%", width: "100%" }}
              contentContainerStyle={{
                alignItems: "center",
                gap: 10,
                paddingBottom: 80,
              }}
            >
              <View style={[styles.row, { justifyContent: "space-between" }]}>
                <View style={{ gap: 2 }}>
                  <Text style={[styles.header, { color: "#A0A0A0" }]}>
                    Annaporana Veg
                  </Text>
                  <View style={styles.row}>
                    <Image
                      source={require("../assets/images/stars.png")}
                      style={{ width: 80, height: 20 }}
                    />
                    <Text
                      style={[
                        styles.header,
                        { color: "#A0A0A0", fontSize: 12 },
                      ]}
                    >
                      (1)
                    </Text>
                  </View>
                  <View style={styles.button}>
                    <Text
                      style={[
                        styles.header,
                        { color: "white", fontSize: 12, paddingTop: 3 },
                      ]}
                    >
                      RESERVABLE
                    </Text>
                  </View>
                </View>
                <Image
                  style={{ width: 76, height: 76, borderRadius: 10 }}
                  source={require("../assets/images/ticketimage3.png")}
                />
              </View>
              <View
                style={[
                  styles.row,
                  {
                    justifyContent: "space-evenly",
                    marginTop: 10,
                    width: "100%",
                  },
                ]}
              >
                <Text style={[styles.header, { color: "#393939" }]}>
                  23 Nov 23 at 15:30
                </Text>
                <FontAwesomeIcon
                  icon={"arrow-right-long"}
                  color="rgba(160, 160, 160, 1)"
                  style={{ marginBottom: 3 }}
                />
                <Text style={[styles.header, { color: "#393939" }]}>
                  23 Nov 23 at 15:30
                </Text>
              </View>
              <View
                style={[
                  styles.row,
                  { justifyContent: "space-evenly", marginTop: 10 },
                ]}
              >
                <View style={{ alignItems: "center" }}>
                  <Text style={[styles.header, { color: "#393939" }]}>
                    2 Hours
                  </Text>
                  <Text
                    style={[styles.text, { color: "#A0A0A0", fontSize: 12 }]}
                  >
                    Total Duration
                  </Text>
                </View>
                <View style={styles.line2} />
                <View style={{ alignItems: "center" }}>
                  <Text style={{ color: "#393939" }}>
                    ₹ <Text style={[styles.header]}>250</Text>
                  </Text>
                  <Text
                    style={[styles.text, { color: "#A0A0A0", fontSize: 12 }]}
                  >
                    Parking Fee
                  </Text>
                </View>
                <View style={styles.line2} />
                <View style={{ alignItems: "center" }}>
                  <Text style={[styles.header, { color: "#393939" }]}>
                    40 mins
                  </Text>
                  <Text
                    style={[styles.text, { color: "#A0A0A0", fontSize: 12 }]}
                  >
                    To Destination
                  </Text>
                </View>
              </View>
              <View
                style={[
                  styles.container,
                  {
                    overflow: "hidden",
                    padding: 0,
                    height: 109,
                    width: "90%",
                    justifyContent: "flex-start",
                    gap: 20,
                  },
                ]}
              >
                <View
                  style={{
                    height: "100%",
                    width: 77,
                    backgroundColor: "#1A9E75",
                    alignItems: "center",
                    gap: 5,
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={require("../assets/images/ccs2.png")}
                    style={{ width: 31, height: 47 }}
                  />
                  <Text
                    style={[styles.header, { color: "#FFF", fontSize: 12 }]}
                  >
                    CCS2
                  </Text>
                </View>
                <View style={{ paddingVertical: 15 }}>
                  <Text
                    style={[styles.header, { color: "#A0A0A0", fontSize: 10 }]}
                  >
                    Status
                  </Text>
                  <LinearGradient
                    colors={["#64D51F", "#4DBB09"]}
                    start={{ x: 0.5, y: 1.0 }}
                    end={{ x: 0.5, y: 0.0 }}
                    locations={[0.2683, 0.8802]}
                    style={styles.gradient}
                  >
                    <Text
                      style={[
                        styles.header,
                        {
                          color: "#FFF",
                          fontSize: 10,
                          alignSelf: "center",
                          paddingTop: 1,
                        },
                      ]}
                    >
                      Available
                    </Text>
                  </LinearGradient>
                  <Text
                    style={[
                      styles.header,
                      { color: "#A0A0A0", fontSize: 10, marginTop: 12 },
                    ]}
                  >
                    Type
                  </Text>
                  <Text
                    style={[styles.text, { color: "#393939", marginTop: -2 }]}
                  >
                    DC
                  </Text>
                </View>
                <View style={{ paddingVertical: 15 }}>
                  <Text
                    style={[styles.header, { color: "#A0A0A0", fontSize: 10 }]}
                  >
                    Capacity
                  </Text>
                  <Text
                    style={[styles.text, { color: "#393939", marginTop: -2 }]}
                  >
                    24.0 kW
                  </Text>
                  <Text
                    style={[
                      styles.header,
                      { color: "#A0A0A0", fontSize: 10, marginTop: 8 },
                    ]}
                  >
                    Pricing
                  </Text>
                  <Text style={{ color: "#393939", marginTop: -2 }}>
                    ₹<Text style={[styles.text]}>25/kW</Text>
                    <Text
                      style={[
                        styles.header,
                        { color: "#A0A0A0", fontSize: 10 },
                      ]}
                    >
                      + 18% GST
                    </Text>
                  </Text>
                </View>
              </View>
              <View
                style={[
                  styles.container,
                  {
                    overflow: "hidden",
                    padding: 0,
                    height: 109,
                    width: "90%",
                    justifyContent: "flex-start",
                    gap: 20,
                  },
                ]}
              >
                <View
                  style={{
                    height: "100%",
                    width: 77,
                    backgroundColor: "#1A9E75",
                    alignItems: "center",
                    gap: 5,
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={require("../assets/images/chad.png")}
                    style={{ width: 30, height: 30 }}
                  />
                  <Text
                    style={[styles.header, { color: "#FFF", fontSize: 12 }]}
                  >
                    CHAdeMO
                  </Text>
                </View>
                <View style={{ paddingVertical: 15 }}>
                  <Text
                    style={[styles.header, { color: "#A0A0A0", fontSize: 10 }]}
                  >
                    Status
                  </Text>
                  <LinearGradient
                    colors={["#64D51F", "#4DBB09"]}
                    start={{ x: 0.5, y: 1.0 }}
                    end={{ x: 0.5, y: 0.0 }}
                    locations={[0.2683, 0.8802]}
                    style={styles.gradient}
                  >
                    <Text
                      style={[
                        styles.header,
                        {
                          color: "#FFF",
                          fontSize: 10,
                          alignSelf: "center",
                          paddingTop: 1,
                        },
                      ]}
                    >
                      Available
                    </Text>
                  </LinearGradient>
                  <Text
                    style={[
                      styles.header,
                      { color: "#A0A0A0", fontSize: 10, marginTop: 12 },
                    ]}
                  >
                    Type
                  </Text>
                  <Text
                    style={[styles.text, { color: "#393939", marginTop: -2 }]}
                  >
                    DC
                  </Text>
                </View>
                <View style={{ paddingVertical: 15 }}>
                  <Text
                    style={[styles.header, { color: "#A0A0A0", fontSize: 10 }]}
                  >
                    Capacity
                  </Text>
                  <Text
                    style={[styles.text, { color: "#393939", marginTop: -2 }]}
                  >
                    24.0 kW
                  </Text>
                  <Text
                    style={[
                      styles.header,
                      { color: "#A0A0A0", fontSize: 10, marginTop: 8 },
                    ]}
                  >
                    Pricing
                  </Text>
                  <Text style={{ color: "#393939", marginTop: -2 }}>
                    ₹<Text style={[styles.text]}>25/kW</Text>
                    <Text
                      style={[
                        styles.header,
                        { color: "#A0A0A0", fontSize: 10 },
                      ]}
                    >
                      + 18% GST
                    </Text>
                  </Text>
                </View>
              </View>

              <View style={{ width: "100%", height: 460 }}>
                <Tab.Navigator
                  initialRouteName="Item1"
                  sceneContainerStyle={{
                    paddingTop: 10,
                    alignItems: "center",
                    flex: 1,
                    backgroundColor: "white",
                  }}
                  style={{ width: "100%" }}
                  screenOptions={{
                    tabBarPressColor: "#FFF",
                    tabBarStyle: {
                      elevation: 0,
                    },
                    tabBarLabelStyle: {
                      fontSize: 15,
                      top: 10,
                      textTransform: "none",
                      fontFamily: "Poppins_400Regular",
                      width: "100%",
                      left: -5,
                    },

                    tabBarActiveTintColor: "#1A9E75",
                    tabBarInactiveTintColor: "black",
                    tabBarGap: 0,
                  }}
                >
                  <Tab.Screen
                    name="Item1"
                    options={{
                      tabBarLabel: "Information",

                      // tabBarIndicatorStyle: {
                      //   borderWidth: 2,
                      //   borderColor: "#1A9E75",
                      //   width: 96,
                      //   left: 15,
                      //   borderRadius: 2,
                      // },
                      tabBarIndicatorStyle: {
                        borderBottomColor: "#1A9E75",
                        borderBottomWidth: 2,
                        flex: 1,
                      },
                    }}
                    component={Information}
                  />
                  <Tab.Screen
                    name="Item2"
                    options={{
                      tabBarLabel: "Reviews",
                      tabBarIndicatorStyle: {
                        borderBottomColor: "#1A9E75",
                        borderBottomWidth: 2,
                        flex: 1,
                      },
                    }}
                    component={Reviews}
                  />
                  <Tab.Screen
                    name="Item3"
                    options={{
                      tabBarLabel: "How It Works",
                      tabBarIndicatorStyle: {
                        borderBottomColor: "#1A9E75",
                        borderBottomWidth: 2,
                        flex: 1,
                      },
                    }}
                    component={HowItWorks}
                  />
                </Tab.Navigator>
              </View>
            </ScrollView>
            <View
              style={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                alignItems: "center",
                backgroundColor: "white",
                height: 70,
                paddingTop: 10,
              }}
            >
              <TouchableOpacity onPress={handlePress} style={styles.button3}>
                <Text
                  style={[
                    styles.bold,
                    { fontSize: 16, color: "white", paddingTop: 3 },
                  ]}
                >
                  Proceed To Checkout
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Modal
          isVisible={modal}
          backdropColor="#B7B7B7"
          style={{ margin: 0, justifyContent: "flex-end" }}
          useNativeDriver
          useNativeDriverForBackdrop
          onBackButtonPress={() => setModal(false)}
        >
          <View style={styles.modalContainer}>
            <TouchableOpacity
              onPress={() => {
                setModal(false);
              }}
              style={{
                height: 30,
                width: "90%",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#FFF",
              }}
            >
              <View style={styles.line} />
            </TouchableOpacity>
            <View
              style={{
                width: "82%",
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: "#FFF",
              }}
            >
              <Text
                style={[
                  styles.header,
                  {
                    color: "#393939",
                    fontSize: 16,
                  },
                ]}
              >
                Select start Date
              </Text>
              <Text
                style={[
                  styles.header,
                  {
                    color: "#393939",
                    fontSize: 16,

                    width: "25%",
                  },
                ]}
              >
                Time
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "75%",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: -40,
                zIndex: -10,
              }}
            >
              <WheelPickerExpo
                height={230}
                width={100}
                selectedStyle={{ borderColor: "#1A9E75", borderWidth: 2 }}
                initialSelectedIndex={1}
                haptics
                items={dateArray.map((name) => ({
                  label: (
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: "Poppins_400Regular",
                        color: "#393939",
                        paddingTop: 2,
                      }}
                    >
                      {name}
                    </Text>
                  ),
                  value: { name },
                }))}
                onChange={({ item }) => {
                  setStartDate({ ...startDate, day: item.value.name });
                  setEndtDate({ ...endtDate, day: item.value.name });
                  // setInitialIndex(item.value.name);
                }}
              />

              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
              >
                <WheelPickerExpo
                  height={230}
                  width={36}
                  selectedStyle={{ borderColor: "#1A9E75", borderWidth: 2 }}
                  initialSelectedIndex={5}
                  haptics
                  items={hourArray.map((name) => ({
                    label: (
                      <Text
                        style={{
                          fontSize: 16,
                          fontFamily: "Poppins_400Regular",
                          color: "#393939",
                          paddingTop: 2,
                        }}
                      >
                        {name}
                      </Text>
                    ),
                    value: { name },
                  }))}
                  onChange={({ item }) => {
                    setStartDate({ ...startDate, hr: item.value.name });
                    setEndtDate({
                      ...endtDate,
                      hr:
                        parseInt(item.value.name) + 1 < 10
                          ? `0${parseInt(item.value.name) + 1}`
                          : parseInt(item.value.name) + 1,
                    });
                  }}
                />

                <Text
                  style={{
                    fontFamily: "Poppins_400Regular",
                    color: "#000",
                    paddingTop: 2,
                  }}
                >
                  :
                </Text>
                <WheelPickerExpo
                  height={230}
                  width={36}
                  selectedStyle={{ borderColor: "#1A9E75", borderWidth: 2 }}
                  initialSelectedIndex={30}
                  haptics
                  items={minArray.map((name) => ({
                    label: (
                      <Text
                        style={{
                          fontSize: 16,
                          fontFamily: "Poppins_400Regular",
                          color: "#393939",
                          paddingTop: 2,
                        }}
                      >
                        {name}
                      </Text>
                    ),
                    value: { name },
                  }))}
                  onChange={({ item }) => {
                    setStartDate({ ...startDate, min: item.value.name });
                    setEndtDate({ ...endtDate, min: item.value.name });
                  }}
                />
              </View>
            </View>
            <View
              style={{
                position: "absolute",
                bottom: 0,
                height: 110,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#fff",
                width: "100%",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setModal(false);
                  setLocation(true);
                }}
                style={styles.button4}
              >
                <Text style={[styles.bold, { fontSize: 16, color: "#FFF" }]}>
                  Done
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Modal
          isVisible={modal2}
          backdropColor="#B7B7B7"
          style={{ margin: 0, justifyContent: "flex-end" }}
          useNativeDriver
          useNativeDriverForBackdrop
          onBackButtonPress={() => setModal2(false)}
        >
          <View style={styles.modalContainer}>
            <TouchableOpacity
              onPress={() => {
                setModal2(false);
              }}
              style={{
                height: 30,
                width: "90%",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#FFF",
              }}
            >
              <View style={styles.line} />
            </TouchableOpacity>
            <View
              style={{
                width: "82%",
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: "#FFF",
              }}
            >
              <Text
                style={[
                  styles.header,
                  {
                    color: "#393939",
                    fontSize: 16,
                  },
                ]}
              >
                Select End Date
              </Text>
              <Text
                style={[
                  styles.header,
                  {
                    color: "#393939",
                    fontSize: 16,
                    width: "25%",
                  },
                ]}
              >
                Time
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "75%",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: -40,
                zIndex: -10,
              }}
            >
              <WheelPickerExpo
                height={230}
                width={100}
                selectedStyle={{ borderColor: "#1A9E75", borderWidth: 2 }}
                initialSelectedIndex={1}
                haptics
                items={dateArray.map((name) => ({
                  label: (
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: "Poppins_400Regular",
                        color: "#393939",
                        paddingTop: 2,
                      }}
                    >
                      {name}
                    </Text>
                  ),
                  value: { name },
                }))}
                onChange={({ item }) =>
                  setEndtDate({ ...endtDate, day: item.value.name })
                }
              />

              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
              >
                <WheelPickerExpo
                  height={230}
                  width={36}
                  selectedStyle={{ borderColor: "#1A9E75", borderWidth: 2 }}
                  initialSelectedIndex={6}
                  haptics
                  items={hourArray.map((name) => ({
                    label: (
                      <Text
                        style={{
                          fontSize: 16,
                          fontFamily: "Poppins_400Regular",
                          color: "#393939",
                          paddingTop: 2,
                        }}
                      >
                        {name}
                      </Text>
                    ),
                    value: { name },
                  }))}
                  onChange={({ item }) =>
                    setEndtDate({ ...endtDate, hr: item.value.name })
                  }
                />

                <Text
                  style={{
                    fontFamily: "Poppins_400Regular",
                    color: "#000",
                    paddingTop: 2,
                  }}
                >
                  :
                </Text>
                <WheelPickerExpo
                  height={230}
                  width={36}
                  selectedStyle={{ borderColor: "#1A9E75", borderWidth: 2 }}
                  initialSelectedIndex={30}
                  haptics
                  items={minArray.map((name) => ({
                    label: (
                      <Text
                        style={{
                          fontSize: 16,
                          fontFamily: "Poppins_400Regular",
                          color: "#393939",
                          paddingTop: 2,
                        }}
                      >
                        {name}
                      </Text>
                    ),
                    value: { name },
                  }))}
                  onChange={({ item }) =>
                    setEndtDate({ ...endtDate, min: item.value.name })
                  }
                />
              </View>
            </View>
            <View
              style={{
                position: "absolute",
                bottom: 0,
                height: 110,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#fff",
                width: "100%",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setModal2(false);
                  setLocation(true);
                }}
                style={styles.button4}
              >
                <Text style={[styles.bold, { fontSize: 16, color: "#FFF" }]}>
                  Done
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Modal
          isVisible={modal3}
          backdropColor="#B7B7B7"
          style={{ margin: 0, justifyContent: "flex-end" }}
          useNativeDriver
          useNativeDriverForBackdrop
          onBackButtonPress={() => setModal3(false)}
        >
          <View style={styles.modalContainer}>
            <TouchableOpacity
              onPress={() => {
                setModal3(false);
              }}
              style={{
                height: 30,
                width: "90%",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#FFF",
              }}
            >
              <View style={styles.line} />
            </TouchableOpacity>
            <View
              style={{
                width: "80%",
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: "#FFF",
              }}
            >
              <Text
                style={[
                  styles.header,
                  {
                    color: "#393939",
                    fontSize: 16,
                  },
                ]}
              >
                Select start Date
              </Text>
              <Text
                style={[
                  styles.header,
                  {
                    color: "#393939",
                    fontSize: 16,
                    width: "30%",
                  },
                ]}
              >
                Duration
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "75%",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: -40,
                zIndex: -10,
              }}
            >
              <WheelPickerExpo
                height={230}
                width={100}
                selectedStyle={{ borderColor: "#1A9E75", borderWidth: 2 }}
                initialSelectedIndex={1}
                haptics
                items={monthArray.map((name) => ({
                  label: (
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: "Poppins_400Regular",
                        color: "#393939",
                        paddingTop: 2,
                      }}
                    >
                      {name}
                    </Text>
                  ),
                  value: { name },
                }))}
                onChange={({ item }) => {
                  setStartMonthDate(item.value.name);
                }}
              />

              <WheelPickerExpo
                height={230}
                width={90}
                selectedStyle={{ borderColor: "#1A9E75", borderWidth: 2 }}
                initialSelectedIndex={1}
                haptics
                items={months.map((name) => ({
                  label: (
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: "Poppins_400Regular",
                        color: "#393939",
                        paddingTop: 2,
                      }}
                    >
                      {name}
                    </Text>
                  ),
                  value: { name },
                }))}
                onChange={({ item }) => setDuration(item.value.name)}
              />
            </View>
            <View
              style={{
                position: "absolute",
                bottom: 0,
                height: 110,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#fff",
                width: "100%",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setModal3(false);
                  setLocation(true);
                }}
                style={styles.button4}
              >
                <Text style={[styles.bold, { fontSize: 16, color: "#FFF" }]}>
                  Done
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Ev1;

const CustomMarker = ({ soldout, rate, monthly, scheme }) => {
  return (
    <View style={{ height: 33, width: 63 }}>
      {scheme ? (
        <ImageBackground
          style={{ flex: 1 }}
          source={
            soldout
              ? require("../assets/images/soldout.png")
              : require("../assets/images/monthlypin.png")
          }
        >
          {!soldout && (
            <Text
              style={[
                styles.header,
                {
                  color: "#FFF",
                  paddingTop: 2,
                  fontSize: 11,
                  left: 23,
                  top: 3.5,
                },
              ]}
            >
              {monthly}
            </Text>
          )}
        </ImageBackground>
      ) : (
        <ImageBackground
          style={{ flex: 1 }}
          source={
            soldout
              ? require("../assets/images/soldout.png")
              : require("../assets/images/amountpin.png")
          }
        >
          {!soldout && (
            <Text
              style={[
                styles.header,
                {
                  color: "#FFF",
                  paddingTop: 2,
                  fontSize: 9,
                  left: 17,
                  top: 5.5,
                },
              ]}
            >
              {rate}/hour
            </Text>
          )}
        </ImageBackground>
      )}
    </View>
  );
};

const array = [
  { id: 1, name: "Kumar", desc: "Very nice day", date: "22 Nov 2023" },
  {
    id: 2,
    name: "Joy",
    desc: "2nd time parking here. Security guards were really nice and helpful.",
    date: "15 Oct 2023",
  },
  {
    id: 3,
    name: "Kavya",
    desc: "Great and easy to use. Great experience we had.",
    date: "20 Mar 2023",
  },
];

const Information = () => {
  const [more, setMore] = useState(false);
  return (
    <View style={{ width: "90%", marginTop: 10, gap: 15 }}>
      <Text style={[styles.bold, { color: "#393939" }]}>Space Features</Text>
      <View
        style={[
          styles.row,
          {
            justifyContent: "space-between",
            width: "100%",
          },
        ]}
      >
        <View style={{ alignItems: "center", gap: 5, flex: 1 }}>
          <Image
            style={{ width: 28, height: 28 }}
            source={require("../assets/images/greencovered.png")}
          />
          <Text
            style={[
              styles.text,
              {
                color: "#393939",
                fontSize: 10,
                width: "80%",
                textAlign: "center",
              },
            ]}
          >
            Covered Parking
          </Text>
        </View>
        <View style={styles.line3} />
        <View style={{ alignItems: "center", gap: 5, flex: 1 }}>
          <Image
            style={{ width: 28, height: 28 }}
            source={require("../assets/images/greencctv.png")}
          />
          <Text style={[styles.text, { color: "#393939", fontSize: 10 }]}>
            CCTV
          </Text>
        </View>
        <View style={styles.line3} />
        <View style={{ alignItems: "center", gap: 5, flex: 1 }}>
          <Image
            style={{ width: 28, height: 28 }}
            source={require("../assets/images/greenwash2.png")}
          />
          <Text
            style={[
              styles.text,
              {
                color: "#393939",
                fontSize: 10,
                width: "80%",
                textAlign: "center",
              },
            ]}
          >
            Doorstep Car Wash
          </Text>
        </View>
        <View style={styles.line3} />
        <View style={{ alignItems: "center", gap: 5, flex: 1 }}>
          <Image
            style={{ width: 28, height: 28 }}
            source={require("../assets/images/greenevcharge.png")}
          />
          <Text style={[styles.text, { color: "#393939", fontSize: 10 }]}>
            EV Charge
          </Text>
        </View>
      </View>
      {more ? (
        <Text style={[styles.text, { color: "#393939" }]}>
          Two private parking spaces are available in a safe and quiet location,
          equipped with 24/7 CCTV surveillance.
        </Text>
      ) : (
        <Text style={[styles.text, { color: "#393939" }]}>
          Two private parking spaces are available in a safe...{" "}
          <Text onPress={() => setMore(true)} style={{ color: "#1A9E75" }}>
            See more
          </Text>
        </Text>
      )}
      <View style={styles.button2}>
        <Image
          style={{ width: 21, height: 26 }}
          source={require("../assets/images/360.png")}
        />
        <Text style={[styles.header, { color: "#1A9E75", paddingTop: 3 }]}>
          View Streetview
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          height: 148,
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        <ImageBackground
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
          source={require("../assets/images/ticketimage2.png")}
        >
          <FontAwesomeIcon icon={"circle-play"} color="#FFF" size={26} />
        </ImageBackground>
      </View>
    </View>
  );
};

const Reviews = () => {
  return (
    <View style={{ width: "90%", marginTop: 10, gap: 10 }}>
      {array.map((item) => (
        <View key={item.id} style={styles.container}>
          <View style={{ width: "75%" }}>
            <Text style={[styles.header, { color: "#393939" }]}>
              {item.name}
            </Text>
            <Text style={[styles.text, { color: "#393939", fontSize: 12 }]}>
              {item.desc}
            </Text>
          </View>
          <View
            style={{
              alignItems: "flex-end",
              justifyContent: "space-between",
              right: 5,
            }}
          >
            <Image
              source={require("../assets/images/stars.png")}
              style={{ width: 80, height: 20 }}
            />
            <Text style={[styles.text, { color: "#A0A0A0", fontSize: 10 }]}>
              {item.date}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const HowItWorks = () => {
  return (
    <View style={{ width: "90%", marginTop: 10, gap: 10 }}>
      <View style={[styles.row, { gap: 10 }]}>
        <View style={{ alignItems: "center", gap: 15 }}>
          <Image
            source={require("../assets/images/greenmap.png")}
            style={{ width: 38, height: 38 }}
          />
          <Image
            source={require("../assets/images/arrowdashed.png")}
            style={{ width: 10, height: 18 }}
          />
          <Image
            source={require("../assets/images/greenbell.png")}
            style={{ width: 38, height: 42 }}
          />
          <Image
            source={require("../assets/images/arrowdashed.png")}
            style={{ width: 10, height: 18 }}
          />
          <Image
            source={require("../assets/images/greenhousecar.png")}
            style={{ width: 38, height: 38 }}
          />
        </View>
        <View style={{ gap: 40 }}>
          <Text style={[styles.header, { color: "#393939" }]}>
            Once you’ve paid:
          </Text>
          <Text
            style={[
              styles.header,
              { color: "#393939", fontSize: 12, marginTop: -40 },
            ]}
          >
            You’ll receive directions to the space and information on how to
            access.
          </Text>
          <Text
            style={[
              styles.header,
              { color: "#393939", fontSize: 12, top: -10 },
            ]}
          >
            The space owner/car park is notified of your booking.
          </Text>
          <Text style={[styles.header, { color: "#393939", fontSize: 12 }]}>
            Just turn up, park your vehicle and get on with your day.
          </Text>
        </View>
      </View>
      <View>
        <Text style={[styles.header, { color: "#393939", marginTop: 10 }]}>
          Need help ?
        </Text>
        <Text style={[styles.text, { color: "#393939", fontSize: 12 }]}>
          You can read our{" "}
          <Text style={{ color: "#1A9E75" }}>Frequently Asked Questions.</Text>
        </Text>
        <Text style={[styles.text, { color: "#393939", fontSize: 12 }]}>
          If your questions remains unanswered , you can call or message our
          customer support team from the
          <Text style={{ color: "#1A9E75" }}> help screen.</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: "flex-end",
  },
  circle: {
    width: 40,
    height: 40,
    backgroundColor: "#F0FFFA",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  line: {
    backgroundColor: "#D6D6D6",
    borderRadius: 2,
    width: 29,
    height: 4,
  },
  line1: { width: 30, height: 4, backgroundColor: "#D6D6D6", borderRadius: 2 },
  line2: {
    width: 1,
    height: 27,
    backgroundColor: "#E4E4E4",
  },
  line3: {
    borderBottomWidth: 1,
    borderStyle: "dashed",
    borderBottomColor: "#1A9E75",
    width: 22,
  },
  searchSection: {
    width: "100%",
    minHeight: 60,
    padding: 15,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    position: "absolute",
    top: 50,
    backgroundColor: "#FFF",
    zIndex: 15,
  },
  searchResult: {
    borderBottomWidth: 2,
    borderBottomColor: "#E5E5E5",
    paddingHorizontal: 5,
  },
  container: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 15,
    justifyContent: "space-between",
    elevation: 2,
    flexDirection: "row",
  },
  area: {
    bottom: 200,
    position: "absolute",
    right: 100,
    height: 187,
    width: 187,
    borderWidth: 2,
    borderColor: "#1A9E75",
    borderRadius: 187,
    borderStyle: "dashed",
  },
  row: {
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00C62C",
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    width: 100,
    marginTop: 10,
  },
  button2: {
    width: "100%",
    paddingVertical: 6,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#F0FFFA",
    borderWidth: 1,
    borderColor: "#1A9E75",
    borderRadius: 8,
  },
  button3: {
    width: "90%",
    paddingVertical: 6,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1A9E75",
    borderRadius: 14,
  },
  button4: {
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
    backgroundColor: "#1A9E75",
    marginTop: 25,
    width: "90%",
  },
  checkout: {
    width: "100%",
    height: "92%",
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    alignItems: "center",
    gap: 10,
  },
  headerContainer: {
    height: 174,
    paddingTop: 50,
    backgroundColor: "#1A9E75",
    gap: 15,
    alignItems: "center",
  },
  input: {
    width: "100%",
    height: 43,
    backgroundColor: "#C9FCEB",
    borderRadius: 4,
    paddingLeft: 35,
    fontFamily: "Poppins_500Medium",
    paddingTop: 3,
    color: "#1A9E75",
  },
  input1: {
    flex: 1,
    height: 40,
    backgroundColor: "#FFF",
    borderRadius: 9,
    paddingLeft: 10,
    fontFamily: "Poppins_400Regular",
    borderWidth: 1,
    borderColor: "#EEE",
    marginRight: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  text: {
    fontFamily: "Poppins_400Regular",
    color: "#393939",
  },
  location: {
    width: 20,
    height: 20,
    position: "absolute",
    left: 10,
  },
  slider: {
    backgroundColor: "#1A9E75",
    borderRadius: 4,
    width: 78,
    height: 33,
    gap: 3,
    position: "absolute",
    right: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontFamily: "Poppins_500Medium",
    color: "#393939",
  },
  selected: {
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
    color: "#1A9E75",
  },
  selectedDiv: {
    borderBottomWidth: 3,
    borderBottomColor: "#1A9E75",
  },
  bold: { fontFamily: "Poppins_600SemiBold" },
  dropDown: {
    backgroundColor: "white",
    borderRadius: 4,
    paddingHorizontal: 5,
    paddingVertical: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    gap: 2,
    minWidth: 120,
  },
  base: {
    position: "absolute",
    bottom: 15,
    width: "100%",
    height: 63,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    height: 60,
    width: 60,
    borderRadius: 50,
    backgroundColor: "white",
    position: "absolute",
    bottom: 47,
    alignSelf: "center",
  },
  modalContainer: {
    width: "100%",
    height: 300,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: "#FFF",
    alignItems: "center",
    overflow: "hidden",
  },
});
