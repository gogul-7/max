import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const Shop1 = () => {
  const navigation = useNavigation();
  const Categories = [
    {
      id: "1",
      name: "Car Perfume",
      image: require("../assets/logos/perfume.png"),
      width: 45,
      height: 45,
    },
    {
      id: "2",
      name: "Mobile Holder",
      image: require("../assets/logos/holder.png"),
      width: 33,
      height: 39.88,
    },
    {
      id: "3",
      name: "Car Covers",
      image: require("../assets/logos/cover.png"),
      width: 52,
      height: 45,
    },
    {
      id: "4",
      name: "Car Cleaners",
      image: require("../assets/logos/cleaner.png"),
      width: 43,
      height: 43,
    },
    {
      id: "5",
      name: "Utilities",
      image: require("../assets/logos/utilities.png"),
      width: 50,
      height: 50,
    },
    {
      id: "6",
      name: "Chargers",
      image: require("../assets/logos/charger.png"),
      width: 50,
      height: 40,
    },
    {
      id: "7",
      name: "Snacks",
      image: require("../assets/logos/snacks.png"),
      width: 50,
      height: 50,
    },
    {
      id: "8",
      name: "Speakers",
      image: require("../assets/logos/speakers.png"),
      width: 50,
      height: 50,
    },
    {
      id: "9",
      name: "Cushions",
      image: require("../assets/logos/cushions.png"),
      width: 50,
      height: 48,
    },
  ];
  const Deals = [
    {
      offer: "20",
      image: require("../assets/logos/Autofit.png"),
      name: "AUTOFIT",
      detail: "Double Quilted Car Cushion Combo Set",
      rate: "220",
    },
    {
      offer: "37",
      image: require("../assets/logos/aroma.png"),
      name: "Aromahpure",
      detail: "Premium car perfume fragrance flakes",
      rate: "199",
    },
    {
      offer: "20",
      image: require("../assets/logos/Autofit.png"),
      name: "AUTOFIT",
      detail: "Double Quilted Car Cushion Combo Set",
      rate: "220",
    },
  ];
  const Arrivals = [
    {
      offer: "24",
      image: require("../assets/logos/ERH.png"),
      height: 99,
      width: 99,
      name: "ERH India",
      detail: "Car Tweeter (Pack of 1 Pair)",
      rate: "320",
    },
    {
      offer: "15",
      image: require("../assets/logos/brocade.png"),
      name: "ERH India",
      detail: "Car Tweeter (Pack of 1 Pair)",
      width: 99,
      height: 99,
      rate: "320",
    },
    {
      offer: "20",
      image: require("../assets/logos/Autofit.png"),
      name: "AUTOFIT",
      detail: "Double Quilted Car Cushion Combo Set",
      rate: "220",
      width: 99,
      height: 99,
    },
  ];
  return (
    <View
      style={{
        backgroundColor: "#FFF",
        flex: 1,
      }}
    >
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          paddingTop: 20,
          gap: 15,
          paddingBottom: 30,
        }}
      >
        <Text style={styles.title}>Categories</Text>
        <View
          style={{
            flexDirection: "row",
            gap: 8,
            flexWrap: "wrap",
            width: "100%",
            justifyContent: "center",
          }}
        >
          {Categories.map((category) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("shop2")}
              key={category.id}
              style={styles.container}
            >
              <Image
                source={category.image}
                style={{ width: category.width, height: category.height }}
              ></Image>
              <Text style={styles.name}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.viewmore}>
          <Text style={{ fontFamily: "Poppins_500Medium", color: "#1A9E75" }}>
            View More
          </Text>
          <FontAwesomeIcon icon={"angle-down"} color="#1A9E75" size={14} />
        </View>
        <Text style={styles.title}>Deals Of the Day</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 15, gap: 10 }}
        >
          {Deals.map((deal, index) => (
            <View key={index} style={styles.deal}>
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
                  width: "85%",
                }}
              >
                {deal.name}
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: "Poppins_400Regular",
                  color: "#FFF",
                  width: "85%",
                  marginTop: -10,
                }}
              >
                {deal.detail}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "85%",
                }}
              >
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
                <TouchableOpacity
                  style={{
                    width: 70,
                    height: 24,
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
            </View>
          ))}
        </ScrollView>
        <LinearGradient
          colors={["#6568F1", "#8C8EFF"]}
          start={{ x: 0.0, y: 0.5 }}
          end={{ x: 1.0, y: 0.5 }}
          locations={[0.211, 0.7187]}
          style={{
            width: "90%",
            height: 136,
            marginTop: 15,
            borderRadius: 10,
            padding: 15,
            gap: 8,
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins_500Medium",
              color: "#FFF",
              fontSize: 15,
              width: "60%",
            }}
          >
            Lemon Car Freshner Get at 50% Off
          </Text>

          <Text style={{ fontSize: 19, color: "#FFF", marginTop: -10 }}>
            ₹{" "}
            <Text
              style={{
                textDecorationLine: "line-through",
                fontSize: 20,
                color: "#FFF",
              }}
            >
              897
            </Text>
            <Text style={{ fontSize: 20, color: "#1BFF68" }}> ₹448</Text>
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              style={{
                paddingHorizontal: 10,
                paddingVertical: 3,
                backgroundColor: "#FFF",
                borderRadius: 15,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins_600SemiBold",
                  fontSize: 12,
                  color: "#6568F1",
                  paddingTop: 2,
                }}
              >
                Buy Now
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                fontFamily: "Poppins_500Medium",
                fontSize: 12,
                color: "#FFF",
              }}
            >
              Offer valid till 10:28:30
            </Text>
          </View>
          <Image
            source={require("../assets/logos/ambipure.png")}
            style={{
              width: 117,
              height: 59,
              position: "absolute",
              right: 20,
              top: 30,
            }}
          />
        </LinearGradient>
        <Text style={styles.title}>New Arrivals</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 15, gap: 10 }}
        >
          {Arrivals.map((deal, index) => (
            <View key={index} style={styles.deal}>
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
                    width: deal.width,
                    height: deal.height,

                    alignSelf: "center",
                    top: 5,
                  }}
                ></Image>
              </View>
              <Text
                style={{
                  fontFamily: "Poppins_500Medium",
                  color: "#FFF",
                  width: "85%",
                }}
              >
                {deal.name}
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: "Poppins_400Regular",
                  color: "#FFF",
                  width: "85%",
                  marginTop: -10,
                }}
              >
                {deal.detail}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "85%",
                }}
              >
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
                <TouchableOpacity
                  style={{
                    width: 70,
                    height: 24,
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
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default Shop1;

const styles = StyleSheet.create({
  title: {
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
    color: "#393939",
    width: "90%",
  },
  name: {
    fontFamily: "Poppins_400Regular",
    color: "#393939",
    fontSize: 12,
    position: "absolute",
    bottom: 10,
  },
  container: {
    width: 104,
    height: 104,
    backgroundColor: "#FFF",
    alignItems: "center",
    paddingVertical: 20,
    shadowColor: "black",
    elevation: 3,
    borderRadius: 14,
  },
  image: {
    width: 109,
    height: 109,
    resizeMode: "stretch",
  },
  viewmore: {
    width: "85%",
    marginTop: 15,
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#1A9E75",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#F0FFFA",
    flexDirection: "row",
    gap: 5,
  },
  deal: {
    width: 146,
    height: 265,
    borderRadius: 15,
    backgroundColor: "#1A9E75",
    alignItems: "center",
    gap: 10,
  },
  deal1: {
    width: 146,
    height: 155,
    backgroundColor: "#FFF",
    borderColor: "#1A9E75",
    borderWidth: 1,
    borderRadius: 15,
    padding: 5,
    alignItems: "center",
  },
});
