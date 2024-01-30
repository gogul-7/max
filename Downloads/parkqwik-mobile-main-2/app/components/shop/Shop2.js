import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Shop2 = () => {
  const navigation = useNavigation();
  const Perfumes = [
    {
      id: "1",
      offer: 15,
      image: require("../assets/logos/godrej.png"),
      name: "Godrej       ",
      detail: "Car Air Freshener, Spill Proof (45g)",
      rate: 340,
      original: 399,
    },
    {
      id: "2",
      offer: 57,
      image: require("../assets/logos/UNO.png"),
      left: 20,
      name: "UNO Aroma",
      detail: "Car Air Freshener, Spill Proof (45g)",
      rate: 258,
      original: 599,
    },
    {
      id: "3",
      offer: 15,
      image: require("../assets/logos/evair.png"),
      left: 20,
      name: "Evair       ",
      detail: "Car Air Freshener with Essential Oils(15ml)",
      rate: 340,
      original: 399,
    },
    {
      id: "4",
      offer: 57,
      image: require("../assets/logos/UNO.png"),
      left: 20,
      name: "UNO Aroma",
      detail: "Car Air Freshener, Spill Proof (45g)",
      rate: 340,
      original: 399,
    },
    {
      id: "5",
      offer: 57,
      image: require("../assets/logos/UNO.png"),
      left: 20,
      name: "UNO Aroma",
      detail: "Car Air Freshener, Spill Proof (45g)",
      rate: 340,
      original: 399,
    },
    {
      id: "6",
      offer: 57,
      image: require("../assets/logos/UNO.png"),
      left: 20,
      name: "UNO Aroma",
      detail: "Car Air Freshener, Spill Proof (45g)",
      rate: 340,
      original: 399,
    },
  ];
  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
          flexDirection: "row",
          justifyContent: "space-evenly",
          paddingTop: 20,
          gap: 10,
          flexWrap: "wrap",
          paddingBottom: 30,
        }}
      >
        {Perfumes.map((deal, index) => (
          <View key={index} style={styles.deal}>
            <Image
              style={{
                width: 58,
                height: 14,
                position: "absolute",
                right: 5,
                top: 164,
              }}
              source={require("../assets/images/stars.png")}
            />
            <View style={styles.deal1}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "95%",
                }}
              >
                <Text
                  style={{
                    fontFamily: "Poppins_500Medium",
                    fontSize: 12,
                    color: "#1A9E75",
                  }}
                >
                  {deal.offer}% off
                </Text>
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../assets/logos/favorite.png")}
                />
              </View>
              <Image
                source={deal.image}
                style={{
                  width: 109,
                  height: 109,
                  alignSelf: "center",
                  top: 5,
                }}
              ></Image>
            </View>
            <Text
              style={{
                fontFamily: "Poppins_500Medium",
                color: "#FFF",
                width: "90%",
              }}
            >
              {deal.name}
            </Text>
            <Text
              style={{
                fontSize: 10,
                fontFamily: "Poppins_400Regular",
                color: "#FFF",
                width: "80%",
                alignSelf: "flex-start",
                marginTop: -7,
                marginLeft: 8,
              }}
            >
              {deal.detail}
            </Text>
            <View
              style={{
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
                width: "85%",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: "#CDCDCD",
                  paddingTop: 4,
                }}
              >
                ₹{" "}
                <Text
                  style={{
                    fontFamily: "Poppins_500Medium",
                    textDecorationLine: "line-through",
                  }}
                >
                  {deal.original}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "#FFF",
                  paddingTop: 4,
                }}
              >
                ₹{" "}
                <Text style={{ fontFamily: "Poppins_500Medium" }}>
                  {deal.rate}
                </Text>
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("shop3")}
              style={{
                width: "80%",
                height: 30,
                backgroundColor: "#FFF",
                borderRadius: 13,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins_500Medium",
                  fontSize: 12,
                  color: "#1A9E75",
                  alignSelf: "center",
                  paddingTop: 2,
                }}
              >
                Buy Now
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Shop2;

const styles = StyleSheet.create({
  deal: {
    width: 154,
    paddingBottom: 10,
    borderRadius: 15,
    backgroundColor: "#1A9E75",
    alignItems: "center",
    gap: 5,
  },
  deal1: {
    width: 153,
    height: 155,
    backgroundColor: "#FFF",
    borderColor: "#1A9E75",
    borderWidth: 1,
    borderRadius: 15,
    padding: 5,
    alignItems: "center",
  },
});
