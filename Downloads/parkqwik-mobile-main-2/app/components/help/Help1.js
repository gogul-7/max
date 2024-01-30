import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import AppContext from "../../context/AppContext";

const data = [
  {
    id: 1,
    title: "Nearby Parking",
    image: require("../assets/images/greennearby.png"),
    route: "",
  },
  {
    id: 2,
    title: "EV Parking",
    image: require("../assets/images/greenev.png"),
    route: "",
  },
  {
    id: 3,
    title: "Car Wash",
    image: require("../assets/images/greenwash.png"),
    route: "",
  },
  {
    id: 4,
    title: "Fastag Services",
    image: require("../assets/images/greenfastag.png"),
    category: "fastag",
  },
  {
    id: 5,
    title: "Road Assistance",
    image: require("../assets/images/greentow.png"),
    route: "",
  },
  {
    id: 6,
    title: "Pay Challan",
    image: require("../assets/images/greenchallan.png"),
    route: "",
  },
  {
    id: 7,
    title: "Estimate Toll",
    image: require("../assets/images/greentoll.png"),
    route: "",
  },
  {
    id: 8,
    title: "Valet Parking",
    image: require("../assets/images/greenvalet.png"),
    route: "",
  },
  {
    id: 9,
    title: "Car Insurance",
    image: require("../assets/images/greeninsure.png"),
    route: "",
  },
  {
    id: 10,
    title: "Rentout Helmet",
    image: require("../assets/images/greenhelmet.png"),
    route: "",
  },
  {
    id: 11,
    title: "Shop",
    image: require("../assets/images/greenshop.png"),
    route: "",
  },
  {
    id: 12,
    title: "Fastag Recharge",
    image: require("../assets/images/greenfast.png"),
    route: "",
  },
  {
    id: 13,
    title: "Mobile Recharge",
    image: require("../assets/images/greenmobile.png"),
    route: "",
  },
  {
    id: 14,
    title: "Electricity",
    image: require("../assets/images/greenelectricity.png"),
    route: "",
  },
  {
    id: 15,
    title: "Water",
    image: require("../assets/images/greenwater.png"),
    route: "",
  },
  {
    id: 16,
    title: "Gas Cylinder",
    image: require("../assets/images/greengas.png"),
    route: "",
  },
  {
    id: 17,
    title: "Loan Payment",
    image: require("../assets/images/greenhand.png"),
    route: "",
  },
  {
    id: 18,
    title: "DTH",
    image: require("../assets/images/greendish.png"),
    route: "",
  },
  {
    id: 19,
    title: "House Rent",
    image: require("../assets/images/greenhouse.png"),
    route: "",
  },
];

const Help1 = () => {
  const navigation = useNavigation();
  const { setCategory } = useContext(AppContext);

  const handleNavigate = (value) => {
    setCategory(value);
    if (value === "fastag") navigation.navigate("help2");
  };

  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: "center",
        paddingTop: 15,
        gap: 15,
        paddingBottom: 30,
        backgroundColor: "#FFF",
      }}
    >
      <Text style={[styles.header, { fontSize: 16, width: "90%" }]}>
        Select a service you require assistance with
      </Text>
      <View style={styles.container}>
        {data
          .filter((item) => item.id <= 11)
          .map((item) => (
            <View
              key={item.id}
              style={{
                alignItems: "center",
                width: "25%",
                padding: 8,
                gap: 5,
              }}
            >
              <TouchableOpacity
                onPress={() => handleNavigate(item.category)}
                style={styles.imageContainer}
              >
                <Image style={styles.image} source={item.image} />
              </TouchableOpacity>
              <Text
                style={[styles.text, { fontSize: 10, textAlign: "center" }]}
              >
                {item.title}
              </Text>
            </View>
          ))}
        <View style={styles.line} />
        {data
          .filter((item) => item.id > 11)
          .map((item) => (
            <View
              key={item.id}
              style={{
                alignItems: "center",
                width: "25%",
                padding: 8,
                gap: 5,
              }}
            >
              <View style={styles.imageContainer}>
                <Image style={styles.image} source={item.image} />
              </View>
              <Text
                style={[styles.text, { fontSize: 10, textAlign: "center" }]}
              >
                {item.title}
              </Text>
            </View>
          ))}
      </View>
      <View
        style={[
          styles.container,
          {
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 15,
          },
        ]}
      >
        <Text style={[styles.header, { paddingTop: 3 }]}>Others</Text>
        <FontAwesomeIcon icon={"angle-right"} />
      </View>
    </ScrollView>
  );
};

export default Help1;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    elevation: 3,
  },
  text: {
    fontFamily: "Poppins_400Regular",
    paddingTop: 2,
  },
  header: {
    fontFamily: "Poppins_500Medium",
  },
  bold: { fontFamily: "Poppins_600SemiBold" },
  imageContainer: {
    width: 51,
    height: 41,
    borderRadius: 9,
    elevation: 1,
    backgroundColor: "#F0FFFA",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    maxHeight: 27,
    maxWidth: 27,
  },
  line: {
    backgroundColor: "#F5F4F4",
    height: 3,
    width: "100%",
    marginVertical: 15,
  },
});
