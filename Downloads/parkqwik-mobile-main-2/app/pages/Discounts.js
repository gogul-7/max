import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useContext } from "react";
import AppContext from "../context/AppContext";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { LinearGradient } from "expo-linear-gradient";

const Discounts = () => {
  const { setHideHeader } = useContext(AppContext);
  const navigation = useNavigation();

  useEffect(() => {
    setHideHeader(true);
    return () => {
      setHideHeader(false);
    };
  });
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{
          width: "100%",
          height: 160,
          position: "absolute",
        }}
        source={require("../assets/images/group17.png")}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            paddingTop: 40,
            paddingLeft: 15,
          }}
        >
          <Pressable onPress={goBack}>
            <Image
              style={{ width: 23, height: 23 }}
              source={require("../assets/images/arrowleft.png")}
            />
          </Pressable>
          <Text style={[styles.bold, { color: "white" }]}>Rewards</Text>
        </View>
      </ImageBackground>
      <View style={{ marginTop: 145, backgroundColor: "#FFF" }}>
        <ScrollView
          contentContainerStyle={{
            gap: 15,
            paddingTop: 10,
            paddingBottom: 15,
          }}
        >
          <View style={{ width: "100%" }}>
            <Text style={[styles.header, { marginLeft: 22 }]}>
              Deals For You
            </Text>
          </View>
          <ScrollView
            style={{ backgroundColor: "#F0FFFA" }}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              gap: 7,
              paddingStart: 15,
              paddingEnd: 10,
              height: 180,
              alignItems: "center",
            }}
          >
            <ImageBackground
              style={styles.image}
              source={require("../assets/images/frame4.png")}
            >
              <Text style={[styles.text, { fontSize: 18, color: "#FBFF35" }]}>
                Get 25% off
              </Text>
              <Text
                style={[
                  styles.text,
                  { fontSize: 8, color: "white", marginTop: -5 },
                ]}
              >
                on your first car wash
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("Wash")}
                style={styles.button}
              >
                <Text style={{ fontWeight: "600", fontSize: 12 }}>
                  Book Now
                </Text>
              </TouchableOpacity>
            </ImageBackground>
            <ImageBackground
              style={styles.image}
              source={require("../assets/images/frame5.png")}
            >
              <Image
                style={styles.acko}
                source={require("../assets/images/acko.png")}
              />
              <Text
                style={[
                  styles.text,
                  { color: "white", fontSize: 9, marginTop: 8 },
                ]}
              >
                Car Insurance
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 3,
                }}
              >
                <Text
                  style={[
                    styles.text,
                    { color: "#FBFF35", fontSize: 15, marginTop: -3 },
                  ]}
                >
                  Starting at
                </Text>
                <Image
                  style={{ width: 40, height: 13, marginBottom: 5 }}
                  source={require("../assets/images/moneytag.png")}
                />
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("Insurance")}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 3,
                  marginTop: 5,
                }}
              >
                <Text style={[styles.text, { color: "white", fontSize: 10 }]}>
                  View Details
                </Text>
                <FontAwesomeIcon
                  style={{ color: "white", maxWidth: 13, marginBottom: 1 }}
                  icon="arrow-right-long"
                />
              </TouchableOpacity>
            </ImageBackground>
            <ImageBackground
              style={styles.image}
              source={require("../assets/images/frame9.png")}
            >
              <Text style={[styles.text, { fontSize: 18, color: "#FBFF35" }]}>
                Get 25% off
              </Text>
              <Text
                style={[
                  styles.text,
                  { fontSize: 8, color: "white", marginTop: -5 },
                ]}
              >
                on your first car wash
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("Wash")}
                style={styles.button}
              >
                <Text style={{ fontWeight: "600", fontSize: 12 }}>
                  Book Now
                </Text>
              </TouchableOpacity>
            </ImageBackground>
          </ScrollView>
          <Text style={[styles.header, { marginLeft: 22 }]}>Parking</Text>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.bannerContainer}
            horizontal
          >
            <LinearGradient
              colors={["#1B53E4", "#268AFF"]}
              start={{ x: 0.0, y: 0.0 }}
              end={{ x: 1.0, y: 0.0 }}
              locations={[0.1149, 0.923]}
              style={styles.banner}
            >
              <Text style={[styles.text, { color: "white", fontSize: 18 }]}>
                Reserve a Parking Slot
              </Text>
              <Text
                style={[
                  styles.text,
                  {
                    color: "white",
                    fontSize: 9,
                    marginBottom: 10,
                    width: "80%",
                  },
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
                  <Text style={[styles.bold, { fontSize: 10, color: "black" }]}>
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
            <LinearGradient
              colors={["#7C58E2", "#AF60FF"]}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              style={styles.banner}
            >
              <Text style={[styles.text, { color: "white", fontSize: 18 }]}>
                Book a EV Parking Slot
              </Text>
              <Text
                style={[
                  styles.text,
                  {
                    color: "white",
                    fontSize: 9,
                    width: "70%",
                    marginBottom: 10,
                  },
                ]}
              >
                Get exciting rewards on your EV Parking
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
                  onPress={() => navigation.navigate("Ev Parking")}
                  style={styles.button}
                >
                  <Text style={[styles.bold, { fontSize: 10, color: "black" }]}>
                    Explore Now
                  </Text>
                </TouchableOpacity>
              </View>
              <Image
                style={{
                  maxWidth: 102,
                  maxHeight: 73,
                  position: "absolute",
                  right: 10,
                  bottom: 15,
                }}
                source={require("../assets/images/evimage.png")}
              />
            </LinearGradient>
          </ScrollView>
          <Text style={[styles.header, { marginLeft: 22 }]}>FASTag</Text>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.bannerContainer}
            horizontal
          >
            <LinearGradient
              colors={["#1A9E75", "#27CD99"]}
              start={{ x: 0.0, y: 0.0 }}
              end={{ x: 1.0, y: 0.0 }}
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
                  <Text style={[styles.bold, { fontSize: 10, color: "black" }]}>
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
              colors={["#F2691B", "#FFBF74"]}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              style={styles.banner}
            >
              <Text style={[styles.text, { color: "white", fontSize: 16 }]}>
                Buy FASTag & Get Free Petrol Worth ₹ 100
              </Text>
              <Text
                style={[
                  styles.text,
                  { color: "white", fontSize: 8, marginBottom: 5 },
                ]}
              >
                Win Free Petrol On FASTag Activation
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
                  onPress={() => navigation.navigate("Buy FASTag")}
                  style={[styles.button]}
                >
                  <Text style={[styles.bold, { fontSize: 10, color: "black" }]}>
                    Buy Now
                  </Text>
                </TouchableOpacity>
              </View>
              <Image
                style={{
                  maxWidth: 92,
                  maxHeight: 54,
                  position: "absolute",
                  right: 8,
                  bottom: 11,
                }}
                source={require("../assets/images/fuelcar.png")}
              />
            </LinearGradient>
          </ScrollView>
        </ScrollView>
      </View>
    </View>
  );
};

export default Discounts;

const styles = StyleSheet.create({
  bold: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 16,
    marginTop: 3,
  },
  header: {
    fontSize: 16,
    fontFamily: "Poppins_500Medium",
    marginBottom: -5,
  },
  image: {
    height: 140,
    width: 150,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Poppins_400Regular",
  },
  button: {
    height: 25,
    borderRadius: 15,
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
    paddingHorizontal: 15,
    paddingBottom: 2,
  },
  acko: {
    height: 28,
    width: 80,
  },
  bannerContainer: {
    paddingLeft: "5%",
  },
  banner: {
    width: 230,
    height: 130,
    borderRadius: 15,
    marginRight: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  button2: {
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
