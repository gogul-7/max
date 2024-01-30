import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  FlatList,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const services = [
  {
    id: 1,
    title: "Fastag Recharge",
    image: require("../assets/images/greenfast.png"),
    route: "FASTag Recharge2",
  },
  {
    id: 2,
    title: "Mobile Recharge",
    image: require("../assets/images/greenmobile.png"),
    route: "Mobile Recharge",
  },
  {
    id: 3,
    title: "Electricity",
    image: require("../assets/images/greenelectricity.png"),
    route: "Electricity Bill",
  },
  {
    id: 4,
    title: "Water",
    image: require("../assets/images/greenwater.png"),
    route: "Water Bill",
  },
  {
    id: 5,
    title: "Gas Cylinder",
    image: require("../assets/images/greengas.png"),
    route: "Book Gas Cylinder",
  },
  {
    id: 6,
    title: "Loan Payment",
    image: require("../assets/images/greenhand.png"),
    route: "Loan Payment",
  },
  {
    id: 7,
    title: "DTH",
    image: require("../assets/images/greendish.png"),
    route: "Recharge DTH",
  },
  {
    id: 8,
    title: "House Rent",
    image: require("../assets/images/greenhouse.png"),
    route: "Rent Payment",
  },
];

const PremiumPlans = () => {
  const navigation = useNavigation();

  const handlePress = (route) => {
    navigation.navigate(`${route}`);
  };
  return (
    <View style={styles.contianer}>
      <Text style={[styles.header, { marginLeft: 3 }]}>Premium Plans</Text>
      <View style={styles.planContainer}>
        <LinearGradient
          colors={["#48C9A1", "#199E75"]}
          // start={{ x: 0, y: 0 }}
          // end={{ x: 1, y: 0 }}
          style={styles.backImage}
          source={require("../assets/images/frame7.png")}
        >
          <Text style={[styles.bold, { fontSize: 15, color: "#FBFF35" }]}>
            Monthly Parking
          </Text>
          <Text style={[styles.text, { fontSize: 8, color: "white" }]}>
            Dedicated parking available near you.
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 3,
              marginTop: 5,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("Nearby")}
              style={styles.button}
            >
              <Text style={[styles.bold, { fontSize: 8, paddingTop: 1 }]}>
                Explore Now
              </Text>
              <FontAwesomeIcon
                style={{ maxWidth: 10, marginBottom: 0 }}
                icon="arrow-right-long"
              />
            </TouchableOpacity>
            <Image
              style={{
                width: 40,
                height: 45,
                marginTop: -10,
                marginLeft: 5,
              }}
              source={require("../assets/images/group1.png")}
            />
          </View>
        </LinearGradient>
        <LinearGradient
          colors={["#48C9A1", "#199E75"]}
          // start={{ x: 0, y: 0 }}
          // end={{ x: 1, y: 0 }}
          style={styles.backImage}
        >
          <Text style={[styles.bold, { fontSize: 15, color: "#FBFF35" }]}>
            Elite Car Wash
          </Text>
          <Text style={[styles.text, { fontSize: 8, color: "white" }]}>
            Elite car grooming at your doorstep.
          </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("Wash")}
            style={[styles.button, { marginTop: 8 }]}
          >
            <Text style={[styles.bold, { fontSize: 8, paddingTop: 1 }]}>
              Explore Now
            </Text>
            <FontAwesomeIcon
              style={{ maxWidth: 10, marginBottom: 0 }}
              icon="arrow-right-long"
            />
          </TouchableOpacity>
          <Image
            style={{
              width: 55,
              height: 35,
              position: "absolute",
              right: -8,
              bottom: 10,
            }}
            source={require("../assets/images/group2.png")}
          />
        </LinearGradient>
      </View>
      <View style={[styles.serviceContainer, { paddingBottom: 3 }]}>
        <Text style={[styles.header, { marginLeft: 10 }]}>
          Recharge & Bill Payments
        </Text>
        <FlatList
          data={services}
          numColumns="4"
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => handlePress(item.route)}
              style={styles.gridItem}
            >
              <View style={styles.imgCard}>
                <Image style={styles.image} source={item.image} />
              </View>
              <Text style={styles.title}>{item.title}</Text>
            </Pressable>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contianer: {
    width: "90%",
    display: "flex",
    alignItems: "flex-start",
    gap: 10,
  },
  header: {
    fontSize: 16,
    fontFamily: "Poppins_500Medium",
    color: "#393939",
  },
  planContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  backImage: {
    width: "48%",
    height: 110,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 15,
    overflow: "hidden",
  },
  text: {
    color: "#393939",
    fontFamily: "Poppins_400Regular",
  },
  bold: {
    fontFamily: "Poppins_600SemiBold",
  },
  button: {
    width: 80,
    height: 25,
    borderRadius: 15,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
  },
  serviceContainer: {
    flex: 0.9,
    backgroundColor: "#FFF",
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginTop: 15,
    elevation: 3,
  },
  gridItem: {
    width: "25%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginVertical: 10,
    gap: 8,
  },
  title: {
    width: "90%",
    textAlign: "center",
    fontSize: 11,
    fontFamily: "Poppins_400Regular",
  },
  imgCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0FFFA",
    width: 60,
    borderRadius: 9,
    height: 50,
    elevation: 3,
  },
  image: {
    maxHeight: 30,
    maxWidth: 30,
  },
});

export default PremiumPlans;
