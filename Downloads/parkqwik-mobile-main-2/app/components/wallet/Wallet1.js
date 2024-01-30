import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import AppContext from "../../context/AppContext";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const amount = [
  { id: 1, amnt: "200" },
  { id: 2, amnt: "500" },
  { id: 3, amnt: "700" },
  { id: 4, amnt: "900" },
];

const Wallet1 = () => {
  const { setAmount } = useContext(AppContext);
  const [num, setNum] = useState("");
  const [value, setValue] = useState("");
  const navigation = useNavigation();

  const handlePress = (value) => {
    setValue(value);
  };

  handleChange = (value) => {
    setValue(value);
  };

  const handleContinue = () => {
    setAmount(value);
    navigation.navigate("wallet2");
  };

  return (
    <View style={{ flex: 1, paddingTop: 15, backgroundColor: "#FFF" }}>
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          gap: 15,
          paddingBottom: 50,
        }}
        style={{ width: "100%", flex: 1 }}
      >
        <View style={styles.container}>
          <Image
            style={{ width: 36, height: 36 }}
            source={require("../assets/images/wallet2.png")}
          />
          <View>
            <Text style={styles.header}>ParkQwik Wallet</Text>
            <Text style={{ color: "#1A9E75", fontSize: 12, marginTop: -3 }}>
              <Text style={[styles.header, { color: "#8E8E8E" }]}>
                Available Balance:{" "}
              </Text>
              ₹<Text style={styles.header}> 100</Text>
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.container,
            {
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 10,
              paddingBottom: 15,
            },
          ]}
        >
          <Text style={[styles.header, { fontSize: 16 }]}>Enter Amount</Text>
          <TextInput
            onChangeText={handleChange}
            placeholder="Eg. 500"
            keyboardType="number-pad"
            style={styles.input}
            value={value}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              height: 40,
            }}
          >
            {amount.map((item) => (
              <TouchableOpacity
                onPress={() => handlePress(item.amnt)}
                key={item.id}
                style={styles.button}
              >
                <Text style={{ color: "white" }}>
                  ₹ <Text style={styles.header}>{item.amnt}</Text>
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View
            style={[
              styles.greenCard,
              { paddingHorizontal: 10, height: 43, gap: 10, width: "100%" },
            ]}
          >
            <Image
              style={{ width: 20, height: 20 }}
              source={require("../assets/images/promo.png")}
            />
            <Text style={[styles.text, { color: "#1A9E75", paddingTop: 3 }]}>
              Apply Promo Code
            </Text>
            <FontAwesomeIcon
              icon={"angle-right"}
              style={{ position: "absolute", right: 15 }}
              size={14}
              color="#1A9E75"
            />
          </View>
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.bannerContainer}
          horizontal
        >
          <LinearGradient
            colors={["#1D66D4", "#4389F9"]}
            start={{ x: 0.0, y: 0.5 }}
            end={{ x: 1.0, y: 0.5 }}
            locations={[0.1149, 0.923]}
            style={styles.banner}
          >
            <Text style={[styles.header, { color: "white", fontSize: 17 }]}>
              Recharge Your FASTag Today!
            </Text>
            <Text style={[styles.text, { color: "white", fontSize: 10 }]}>
              Get Excting Cashbacks
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
              <View style={styles.button2}>
                <Text
                  style={[
                    styles.bold,
                    { fontSize: 10, color: "black", paddingTop: 2 },
                  ]}
                >
                  Recharge Now
                </Text>
              </View>
              <Image
                style={{
                  position: "absolute",
                  maxWidth: 66,
                  maxHeight: 61,
                  marginTop: 5,
                  right: 0,
                  bottom: 0,
                }}
                source={require("../assets/images/car5.png")}
              />
            </View>
          </LinearGradient>
          <LinearGradient
            colors={["#00A657", "#0BB678"]}
            start={{ x: 0.0, y: 0.5 }}
            end={{ x: 1.0, y: 0.5 }}
            locations={[0.1149, 0.923]}
            style={styles.banner}
          >
            <Text style={[styles.header, { color: "white", fontSize: 18 }]}>
              Get 20% Off On Your Parking!
            </Text>
            <Text style={[styles.text, { color: "white", fontSize: 10 }]}>
              Reserve Your Monthly Parking
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
              <View style={styles.button2}>
                <Text
                  style={[
                    styles.bold,
                    { fontSize: 10, color: "black", paddingTop: 2 },
                  ]}
                >
                  Book Now
                </Text>
              </View>
              <Image
                style={{
                  position: "absolute",
                  right: -5,
                  bottom: 0,
                  maxWidth: 90,
                  maxHeight: 73,
                  marginTop: 5,
                }}
                source={require("../assets/images/car6.png")}
              />
            </View>
          </LinearGradient>
          <LinearGradient
            colors={["#F2691B", "#FFBF74"]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={styles.banner}
          >
            <Text style={[styles.header, { color: "white", fontSize: 18 }]}>
              Renew Your Car Insurance
            </Text>
            <Text
              style={[
                styles.text,
                { color: "white", fontSize: 9, marginBottom: 5 },
              ]}
            >
              Get Exciting Rewards
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
              <View style={[styles.button3]}>
                <Text
                  style={[
                    styles.bold,
                    { fontSize: 10, color: "black", paddingTop: 2 },
                  ]}
                >
                  Renew Now
                </Text>
              </View>

              {/* <Image
                style={{
                  maxWidth: 68,
                  maxHeight: 75,
                  position: "absolute",
                  right: 20,
                  bottom: -6,
                }}
                source={require("../assets/images/reservecar.png")}
              /> */}
            </View>
            <Image
              style={{
                position: "absolute",
                right: 0,
                bottom: 20,
                maxWidth: 90,
                maxHeight: 73,
                marginTop: 5,
              }}
              source={require("../assets/images/car7.png")}
            />
          </LinearGradient>
        </ScrollView>
        <View
          style={[
            styles.container,
            {
              paddingHorizontal: 10,
              height: 59,
              gap: 10,
              width: "90%",
              marginTop: 10,
              backgroundColor: "#F0FFFA",
              elevation: 0,
            },
          ]}
        >
          <Image
            style={{ width: 30, height: 20 }}
            source={require("../assets/images/greencard.png")}
          />
          <Text style={[styles.text, { paddingTop: 3 }]}>Saved Cards</Text>
          <FontAwesomeIcon
            icon={"angle-right"}
            style={{ position: "absolute", right: 15 }}
            size={14}
            color="#1A9E75"
          />
        </View>
      </ScrollView>
      {value && (
        <View style={styles.payment}>
          <Text style={[{ fontSize: 20, width: "50%" }]}>₹ {value}</Text>
          <TouchableOpacity
            style={[
              styles.button,
              { width: 160, borderRadius: 14, height: 41 },
            ]}
            onPress={handleContinue}
          >
            <Text style={[styles.bold, { color: "white", fontSize: 16 }]}>
              Proceed To Pay
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  greenCard: {
    height: 50,
    width: "90%",
    backgroundColor: "#F0FFFA",
    borderRadius: 8,
    borderColor: "#1A9E75",
    borderWidth: 1,
    alignItems: "center",
    paddingHorizontal: 15,
    flexDirection: "row",
    gap: 15,
  },
  text: {
    fontFamily: "Poppins_400Regular",
  },
  header: {
    fontFamily: "Poppins_500Medium",
  },
  bold: { fontFamily: "Poppins_600SemiBold" },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#A0A0A0",
    borderRadius: 9,
    height: 40,
    paddingLeft: 15,
    position: "relative",
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    paddingTop: 3,
  },
  container: {
    width: "90%",
    backgroundColor: "#FFF",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    elevation: 3,
  },
  bannerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  payment: {
    position: "absolute",
    height: 65,
    backgroundColor: "white",
    bottom: 0,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    elevation: 10,
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
  button: {
    width: 65,
    height: 30,
    paddingTop: 3,
    backgroundColor: "#1A9E75",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  button3: {
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
  border: {
    borderBottomWidth: 2,
    borderColor: "#e3e3e3",
    width: "100%",
    height: 2,
  },
});

export default Wallet1;
