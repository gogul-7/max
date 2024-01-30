import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  useWindowDimensions,
  ScrollView,
  Pressable,
  Linking,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const carCenter = [
  {
    id: 1,
    title: "Pay Challans",
    image: require("../assets/images/greenchallan.png"),
    route: "Pay Challan",
  },
  {
    id: 2,
    title: "Crime Reporter",
    image: require("../assets/images/greencrime.png"),
    route: "Crime Reporter",
  },
  {
    id: 3,
    title: "RTO Center",
    image: require("../assets/images/greenrto.png"),
    route: "RTO Center",
  },
  {
    id: 4,
    title: "PUCC Center",
    image: require("../assets/images/greenpucc.png"),
    route: "PUCC Center",
  },
];

const rewards = [
  {
    id: 1,
    title: "Rewards",
    image: require("../assets/images/greenreward.png"),
    route: "Rewards",
  },
  {
    id: 2,
    title: "Discounts",
    image: require("../assets/images/greendiscount.png"),
    route: "Discounts",
  },
  {
    id: 3,
    title: "Refer & Win",
    image: require("../assets/images/greenrefer.png"),
    route: "Refer & Win",
  },
];

const CarsCenter = () => {
  const { width } = useWindowDimensions();

  const navigation = useNavigation();

  const handleNavigate = (value) => {
    navigation.navigate(`${value}`);
  };

  return (
    <View style={{ width: "100%", alignItems: "center", gap: 15 }}>
      <View style={[styles.travelContainer, { paddingBottom: 13 }]}>
        <Text style={styles.header}>Your Car’s Center</Text>
        <View style={styles.discContainer}>
          {carCenter.map((item) => (
            <Pressable
              onPress={() => handleNavigate(item.route)}
              key={item.id}
              style={{ display: "flex", alignItems: "center", gap: 5 }}
            >
              <View style={styles.icon}>
                <Image
                  style={{ maxHeight: 25, maxWidth: 30 }}
                  source={item.image}
                />
              </View>
              <Text style={[styles.iconText, { width: 60 }]}>{item.title}</Text>
            </Pressable>
          ))}
        </View>
      </View>
      <View style={{ width: "90%", marginBottom: -8 }}>
        <Text style={[styles.header, { marginTop: 3, marginLeft: 3 }]}>
          Trending
        </Text>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
        style={{ marginBottom: 5 }}
      >
        <View
          style={{
            width,
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "90%",
              height: 193,
              borderRadius: 9,
              overflow: "hidden",
            }}
          >
            <ImageBackground
              style={{ flex: 1, padding: 20 }}
              source={require("../assets/images/trendingbg.png")}
            >
              <Text style={[styles.text, { color: "#EBFF00", fontSize: 25 }]}>
                Save <Text style={{ fontFamily: "" }}>₹</Text> 500
              </Text>
              <Text style={[styles.text, { color: "white", fontSize: 16 }]}>
                On Your First EV Parking
              </Text>
              <Text
                style={[
                  styles.text,
                  { color: "white", fontSize: 10, width: "60%" },
                ]}
              >
                We provide dedicated monthly parking with surveillance
              </Text>
              <View
                style={{
                  position: "absolute",
                  right: 20,
                  bottom: 30,
                  flexDirection: "row",
                  gap: 5,
                  alignItems: "center",
                }}
              >
                <Image
                  style={{ width: 55, height: 30 }}
                  source={require("../assets/images/happycus.png")}
                />
                <View>
                  <Text style={[styles.bold, { fontSize: 20, color: "white" }]}>
                    100 +
                  </Text>
                  <Text
                    style={[
                      styles.text,
                      { fontSize: 8, color: "white", marginTop: -6 },
                    ]}
                  >
                    Happy Customers
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>
        {/* <View style={{ width, alignItems: "center", justifyContent: "center" }}>
          <ImageBackground
            style={{ width: 328, height: 193 }}
            source={require("../assets/images/group10.png")}
          />
        </View> */}
      </ScrollView>
      <View style={styles.travelContainer}>
        <Text style={styles.header}>Exclusive Offers</Text>
        <View
          style={[styles.discContainer, { justifyContent: "space-around" }]}
        >
          {rewards.map((item) => (
            <Pressable
              onPress={() => handleNavigate(item.route)}
              key={item.id}
              style={{ display: "flex", alignItems: "center", gap: 5 }}
            >
              <View style={styles.icon}>
                <Image
                  style={{ maxHeight: 25, maxWidth: 30 }}
                  source={item.image}
                />
              </View>
              <Text style={styles.iconText}>{item.title}</Text>
            </Pressable>
          ))}
        </View>
      </View>
      <View style={{ width: "90%", marginBottom: -6 }}>
        <Text style={[styles.header, { marginLeft: 10 }]}>
          How parkqwik works ?
        </Text>
      </View>
      <LinearGradient
        colors={["#9EFFE1", "#E9FFF8"]}
        // start={{ x: 0.5, y: 0.0 }}
        // end={{ x: 0.5, y: 1.0 }}
        style={styles.gradient}
      >
        <TouchableOpacity
          onPress={() => {
            Linking.openURL("https://www.youtube.com/watch?v=J7PcCgTHhWU")
              .then(() => console.log("Location link opened successfully"))
              .catch((err) =>
                console.error("Error opening location link:", err)
              );
          }}
        >
          <Image
            style={{ maxWidth: 75, maxHeight: 115, marginLeft: 15 }}
            source={require("../assets/images/iPhone.png")}
          />
        </TouchableOpacity>
        <Image
          style={{
            maxWidth: 25,
            maxHeight: 25,
            position: "absolute",
          }}
          source={require("../assets/images/play_circle.png")}
        />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  travelContainer: {
    width: "90%",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#FFF",
    borderRadius: 15,
    display: "flex",
    gap: 8,
    elevation: 3,
  },
  header: {
    fontSize: 16,
    fontFamily: "Poppins_500Medium",
    color: "#393939",
  },
  discContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  bold: {
    fontFamily: "Poppins_600SemiBold",

    fontSize: 14,
  },
  text: {
    fontFamily: "Poppins_400Regular",
    color: "#393939",
  },
  icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0FFFA",
    width: 60,
    borderRadius: 9,
    height: 50,
    elevation: 3,
  },
  iconText: {
    width: 70,
    textAlign: "center",
    fontSize: 11,
    fontFamily: "Poppins_400Regular",
    color: "#393939",
  },
  gradient: {
    width: "90%",
    height: 150,
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CarsCenter;
