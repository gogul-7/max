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

const Shop4 = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("shop5");
  };

  return (
    <View
      style={{
        alignItems: "center",
        backgroundColor: "#FFF",
      }}
    >
      <ScrollView
        style={{ width: "100%" }}
        contentContainerStyle={{
          alignItems: "center",
          gap: 10,
          paddingTop: 15,
          paddingBottom: 80,
        }}
      >
        <View
          style={[styles.container, { padding: 15, alignItems: "flex-start" }]}
        >
          <View style={{ flexDirection: "row", gap: 15, alignItems: "center" }}>
            <Image
              source={require("../assets/images/ambipure.png")}
              style={styles.image}
            />
            <View style={{ width: "80%" }}>
              <Text style={[styles.text, { width: "90%", fontSize: 12 }]}>
                Car Air Freshener, Long - Lasting, Spill - Proof, Rich Irish
                Cocktail (45g)
              </Text>
              <Text style={{ color: "#A0A0A0", fontWeight: 500 }}>
                ₹{" "}
                <Text
                  style={[
                    styles.header,
                    { color: "#A0A0A0", textDecorationLine: "line-through" },
                  ]}
                >
                  399{" "}
                </Text>
                <Text style={{ color: "#393939" }}>₹ </Text>
                <Text style={styles.header}>
                  340 | <Text style={{ color: "#00A638" }}>15% off</Text>
                </Text>
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
              width: "95%",
              marginTop: 10,
              gap: 5,
            }}
          >
            <Image
              source={require("../assets/images/addbtn.png")}
              style={{ width: 20, height: 20 }}
            />
            <View
              style={{
                width: 20,
                borderBottomColor: "#1A9E75",
                borderBottomWidth: 1,
                alignItems: "center",
                height: "80%",
              }}
            >
              <Text style={[styles.text, { color: "#030303" }]}>1</Text>
            </View>
            <Image
              source={require("../assets/images/subbtn.png")}
              style={{ width: 20, height: 20 }}
            />
          </View>
        </View>
        <Text
          style={[
            styles.header,
            {
              color: "#393939",
              fontSize: 16,
              width: "90%",
            },
          ]}
        >
          Payment Summary
        </Text>
        <View
          style={[
            styles.container,
            { backgroundColor: "#F0FFFA", paddingVertical: 15, gap: 5 },
          ]}
        >
          <View
            style={{
              width: "90%",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Text
              style={[
                styles.text,
                {
                  color: "#393939",
                },
              ]}
            >
              Price
            </Text>
            <Text
              style={{
                color: "#393939",
              }}
            >
              ₹ <Text style={[styles.text]}>399</Text>
            </Text>
          </View>
          <View
            style={{
              width: "90%",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Text
              style={[
                styles.text,
                {
                  color: "#393939",
                },
              ]}
            >
              Discount
            </Text>
            <Text
              style={{
                color: "#1A9E75",
              }}
            >
              - ₹ <Text style={[styles.text]}>59</Text>
            </Text>
          </View>
          <View
            style={{
              width: "90%",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Text
              style={[
                styles.text,
                {
                  color: "#393939",
                },
              ]}
            >
              Delivery Charge
            </Text>
            <Text
              style={{
                color: "#393939",
              }}
            >
              ₹ <Text style={[styles.text]}>40</Text>
            </Text>
          </View>
          <View style={styles.line1} />
          <View
            style={{
              width: "90%",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Text
              style={[
                styles.header,
                {
                  color: "#393939",
                },
              ]}
            >
              Total Amount
            </Text>
            <Text
              style={{
                color: "#393939",
              }}
            >
              ₹ <Text style={[styles.header]}>380</Text>
            </Text>
          </View>
        </View>
        <Text
          style={[
            styles.header,
            {
              color: "#393939",
              fontSize: 16,
              width: "90%",
            },
          ]}
        >
          Delivery Address
        </Text>
        <View
          style={[
            styles.container,
            { alignItems: "flex-start", padding: 15, justifyContent: "center" },
          ]}
        >
          <Text
            style={[
              styles.header,
              {
                color: "#393939",
              },
            ]}
          >
            Krishna
          </Text>
          <Text
            style={[
              styles.text,
              {
                color: "#A0A0A0",
                fontSize: 12,
                width: "50%",
              },
            ]}
          >
            NO.20, Anna Street, Near Water Tank, Perungudi, Chennai - 600096
          </Text>
          <View style={styles.button}>
            <Image
              source={require("../assets/images/greenedit.png")}
              style={{ width: 15, height: 15 }}
            />
            <Text
              style={[
                styles.text,
                {
                  color: "#1A9E75",
                  fontSize: 12,
                },
              ]}
            >
              Edit
            </Text>
          </View>
        </View>

        <Text
          style={[
            styles.header,
            {
              color: "#393939",
              fontSize: 16,
              width: "90%",
            },
          ]}
        >
          Cancellation Policy
        </Text>
        <Text
          style={[
            styles.text,
            {
              color: "#858585",
              fontSize: 12,
              width: "90%",
              marginTop: -10,
            },
          ]}
        >
          Cancel more than <Text style={{ color: "#1A9E75" }}>24 hrs</Text>{" "}
          before the booking starts and get a full refund less the transaction
          fee. For more details click through to our cancellation policies
        </Text>
      </ScrollView>
      <View
        style={{
          height: 63,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 25,
          backgroundColor: "white",
          alignItems: "center",
          position: "absolute",
          bottom: 0,
          width: "100%",
        }}
      >
        <Text style={{ color: "#393939", fontSize: 20 }}>
          ₹{" "}
          <Text
            style={[
              styles.header,
              {
                width: "90%",
              },
            ]}
          >
            380
          </Text>
        </Text>
        <TouchableOpacity onPress={handlePress} style={styles.button2}>
          <Text
            style={[
              styles.bold,
              {
                color: "white",
                fontSize: 16,
              },
            ]}
          >
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Shop4;

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    backgroundColor: "white",
    width: "90%",
    overflow: "hidden",
    alignItems: "center",
    elevation: 3,
  },
  image: {
    width: 68,
    height: 68,
    borderWidth: 1,
    borderColor: "#F4EDED",
    borderRadius: 5,
  },
  header: {
    fontFamily: "Poppins_500Medium",
  },
  text: {
    fontFamily: "Poppins_400Regular",
  },
  bold: { fontFamily: "Poppins_600SemiBold" },
  line2: {
    width: 1,
    height: 27,
    backgroundColor: "#E4E4E4",
  },
  line1: {
    width: "90%",
    height: 1,
    backgroundColor: "rgba(26, 158, 117, 0.23)",
  },
  button: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#1A9E75",
    paddingHorizontal: 5,
    paddingVertical: 3,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    position: "absolute",
    right: 15,
  },
  button2: {
    width: 178,
    alignItems: "center",
    backgroundColor: "#1A9E75",
    justifyContent: "center",
    paddingVertical: 7,
    borderRadius: 14,
  },
});
