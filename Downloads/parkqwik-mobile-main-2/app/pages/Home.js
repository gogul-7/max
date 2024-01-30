import React, { useContext, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  Image,
  FlatList,
  ImageBackground,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import FastRecharge from "../components/FastRecharge";
import Banner from "../components/Banner";
import Deals from "../components/Deals";
import PremiumPlans from "../components/PremiumPlans";
import CarsCenter from "../components/CarsCenter";
import { useNavigation } from "@react-navigation/native";
import Hamburger from "../components/Hamburger";
import AppContext from "../context/AppContext";
import Modal from "react-native-modal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GOOGLE_API_KEY } from "@env";
import CryptoJS from "crypto-js";

const services = [
  {
    id: 2,
    title: "Nearby Parking",
    image: require("../assets/images/location.png"),
    route: "Nearby",
  },
  {
    id: 3,
    title: "EV Parking",
    image: require("../assets/images/electric.png"),
    route: "Ev Parking",
  },
  {
    id: 8,
    title: "Car Wash",
    image: require("../assets/images/wash.png"),
    route: "Wash",
  },
  {
    id: 4,
    title: "Vehicle Insurance",
    image: require("../assets/images/insure.png"),
    route: "Insurance",
  },
  {
    id: 5,
    title: "Road Assistance",
    image: require("../assets/images/crane.png"),
    route: "Road Assistance",
  },
  {
    id: 6,
    title: "Pay Challan",
    image: require("../assets/images/challan.png"),
    route: "Pay Challan",
  },
  {
    id: 7,
    title: "Toll Estimator",
    image: require("../assets/images/toll.png"),
    route: "Toll",
  },
  {
    id: 8,
    title: "Valet Parking",
    image: require("../assets/images/valet.png"),
    route: "Valet",
  },

  {
    id: 10,
    title: "Rentout Helmet",
    image: require("../assets/images/helmet.png"),
    route: "Helmet",
  },
  {
    id: 11,
    title: "Fuel Price",
    image: require("../assets/images/fuel.png"),
    route: "Fuel",
  },
  {
    id: 9,
    title: "Shop Here",
    image: require("../assets/images/shop.png"),
    route: "Shop",
  },
  {
    id: 13,
    title: "My Vehicles",
    image: require("../assets/images/car.png"),
    route: "My Vehicles",
    route2: "My Vehicles2",
  },
];

const mainService = services.filter((item) => item.id < 9);

const otherService = services.filter((item) => item.id >= 9);

const Home = () => {
  const { ham, setHam } = useContext(AppContext);
  const navigation = useNavigation();

  // var data = `<?xml version=""1.0"" encoding=""UTF-8""?><billerInfoRequest><billerId>OTME00005XXZ43</billerId></billerInfoRequest>`;
  // var key = "1F7EE91264F479B5033F2EBA14111B94";

  // data = CryptoJS.enc.Utf8.parse(data);

  // key = CryptoJS.enc.Utf8.parse(key);

  // var encrypted = CryptoJS.AES.encrypt(data, key, {
  //   mode: CryptoJS.mode.ECB,
  //   padding: CryptoJS.pad.ZeroPadding,
  // });
  // encrypted = encrypted.ciphertext.toString(CryptoJS.enc.Hex);
  // console.log("encrypted", encrypted);

  // function encryptXml(xmlString, key) {
  //   const keyWords = CryptoJS.enc.Utf8.parse(key);

  //   const xmlWords = CryptoJS.enc.Utf8.parse(xmlString);

  //   const encrypted = CryptoJS.AES.encrypt(xmlWords, keyWords, {
  //     mode: CryptoJS.mode.ECB,
  //   });

  //   return encrypted.toString();
  // }

  // const xmlBody = `<?xml version=""1.0"" encoding=""UTF-8""?><billerInfoRequest><billerId>OTME00005XXZ43</billerId></billerInfoRequest>`;

  // const encryptionKey = "1F7EE91264F479B5033F2EBA14111B94";

  // const encryptedXml = encryptXml(xmlBody, encryptionKey);
  // console.log("Encrypted XML:", encryptedXml);

  // useEffect(() => {
  //   AsyncStorage.removeItem("selectedVehicle");
  //   AsyncStorage.removeItem("vehicleData");
  // });

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
      <StatusBar backgroundColor="#B8DED2" barStyle="dark-content" />
      <Modal
        isVisible={ham}
        animationIn={"slideInLeft"}
        animationOut={"slideOutLeft"}
        style={{ margin: 0 }}
        useNativeDriverForBackdrop
        useNativeDriver
        onBackdropPress={() => setHam(false)}
      >
        <Hamburger />
      </Modal>

      <ImageBackground
        style={styles.backImage}
        source={require("../assets/images/headerback.png")}
      />
      <View style={styles.homeContent}>
        <View style={[styles.serviceContainer, { paddingBottom: 4 }]}>
          <Text style={styles.header}>Services</Text>
          <FlatList
            data={mainService}
            numColumns="4"
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <List item={item} />}
            contentContainerStyle={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </View>
        <FastRecharge />
        <Banner />
        <View style={[styles.serviceContainer, { paddingBottom: 3 }]}>
          <Text style={styles.header}>Others</Text>
          <FlatList
            data={otherService}
            numColumns="4"
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <List item={item} />}
          />
        </View>
        <Deals />
        <PremiumPlans />
        <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.bannerContainer}
          horizontal
        >
          <LinearGradient
            colors={["#1A9E75", "#27CD99"]}
            // start={{ x: 0.0, y: 0.0 }}
            // end={{ x: 1.0, y: 0.0 }}
            locations={[0.1149, 0.923]}
            style={styles.banner}
          >
            <Text
              style={[
                styles.text,
                { color: "#FBFF29", fontSize: 18, marginBottom: -8 },
              ]}
            >
              Get 15% off on
            </Text>
            <Text style={[styles.text, { color: "white", fontSize: 20 }]}>
              FASTag recharge
            </Text>
            <Text style={[styles.text, { color: "white", fontSize: 9 }]}>
              Pay using Axis Bank Credit & Debit Cards
            </Text>
            <View
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("FASTag Recharge2")}
                style={styles.button}
              >
                <Text
                  style={[
                    styles.bold,
                    { fontSize: 10, color: "#393939", paddingTop: 1 },
                  ]}
                >
                  Recharge Now
                </Text>
              </TouchableOpacity>
              <Image
                style={{ maxWidth: 90, maxHeight: 20, marginTop: 5 }}
                source={require("../assets/images/fastag.png")}
              />
            </View>
          </LinearGradient>
          <LinearGradient
            colors={["#1B53E4", "#268AFF"]}
            // start={{ x: 0.0, y: 0.0 }}
            // end={{ x: 1.0, y: 0.0 }}
            locations={[0.1149, 0.923]}
            style={styles.banner}
          >
            <Text style={[styles.text, { color: "white", fontSize: 18 }]}>
              Reserve a Parking Slot
            </Text>
            <Text
              style={[
                styles.text,
                { color: "white", fontSize: 9, marginBottom: 10, width: "80%" },
              ]}
            >
              Win 300ml petrol on your first parking!
            </Text>
            <View
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("Nearby")}
                style={styles.button}
              >
                <Text
                  style={[
                    styles.bold,
                    { fontSize: 10, color: "#393939", paddingTop: 1 },
                  ]}
                >
                  Explore Now
                </Text>
              </TouchableOpacity>
              <Image
                style={{
                  maxWidth: 68,
                  maxHeight: 75,
                  position: "absolute",
                  right: 20,
                  bottom: -6,
                }}
                source={require("../assets/images/reservecar.png")}
              />
            </View>
          </LinearGradient>
        </ScrollView>
        <CarsCenter />
      </View>
    </View>
  );
};

const List = ({ item }) => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const retrieveData = async () => {
    try {
      const storedData = await AsyncStorage.getItem("vehicleData");
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
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      retrieveData();
    });
    return unsubscribe;
  }, [navigation]);
  const handlePress = (route) => {
    navigation.navigate(`${route}`);
  };
  if (item.title === "My Vehicles") {
    return (
      <Pressable
        onPress={
          data.length === 0
            ? () => handlePress(item.route2)
            : () => handlePress(item.route)
        }
        style={styles.gridItem}
      >
        <View style={styles.imgCard}>
          <Image style={styles.image} source={item.image} />
        </View>
        <Text style={styles.title}>{item.title}</Text>
      </Pressable>
    );
  } else {
    return (
      <Pressable
        onPress={() => handlePress(item.route)}
        style={styles.gridItem}
      >
        <View style={styles.imgCard}>
          <Image style={styles.image} source={item.image} />
        </View>
        <Text style={styles.title}>{item.title}</Text>
      </Pressable>
    );
  }
};

const styles = StyleSheet.create({
  homeContainer: {
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  backImage: {
    height: 128,
    width: "100%",
    display: "flex",
    alignItems: "center",
    position: "absolute",
  },
  homeContent: {
    alignItems: "center",
    gap: 25,
  },
  serviceContainer: {
    width: "90%",
    backgroundColor: "#FFF",
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 10,
    elevation: 3,
  },
  header: {
    fontSize: 16,
    fontFamily: "Poppins_500Medium",
    marginLeft: 8,
    color: "#393939",
  },
  gridItem: {
    width: "25%",
    alignItems: "center",
    justifyContent: "flex-start",
    marginVertical: 10,
    gap: 8,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Poppins_400Regular",
  },
  bold: {
    fontFamily: "Poppins_600SemiBold",
  },
  title: {
    width: "85%",
    textAlign: "center",
    fontSize: 11,
    fontFamily: "Poppins_400Regular",
    color: "#393939",
  },
  imgCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    width: 60,
    borderRadius: 9,
    height: 50,
    elevation: 3,
  },
  image: {
    maxHeight: 35,
    maxWidth: 45,
  },
  lineContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    height: 20,
  },
  line: {
    width: 30,
    height: 3,
    backgroundColor: "#1A9E75",
    borderRadius: 2,
  },
  bannerContainer: {
    paddingLeft: "5%",
    paddingRight: 7,
  },
  banner: {
    width: 230,
    height: 130,
    borderRadius: 15,
    marginRight: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  button: {
    width: 90,
    height: 25,
    borderRadius: 15,
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
});

export default Home;
