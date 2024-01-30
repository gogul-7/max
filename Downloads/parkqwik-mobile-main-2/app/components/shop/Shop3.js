import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Shop3 = () => {
  const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: "#FFF", flex: 1 }}>
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          paddingTop: 25,
          gap: 15,
          paddingBottom: 80,
        }}
      >
        <Image
          source={require("../assets/images/ambipure.png")}
          style={{ width: 169, height: 169 }}
        />
        <Image
          source={require("../assets/images/slider.png")}
          style={{ width: 33, height: 5, marginTop: 20 }}
        />
        <View style={{ position: "absolute", right: 30, top: 30, gap: 20 }}>
          <Image
            source={require("../assets/images/share2.png")}
            style={{ width: 24, height: 24 }}
          />
          <Image
            source={require("../assets/images/greenheart.png")}
            style={{ width: 24, height: 24 }}
          />
        </View>
        <View
          style={{
            width: "90%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={[styles.header, { color: "#A0A0A0" }]}>Godrej</Text>
          <Image
            source={require("../assets/images/stars.png")}
            style={{ width: 55, height: 16, right: 10 }}
          />
        </View>
        <View style={{ width: "90%" }}>
          <Text style={[styles.text, { width: "84%" }]}>
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
        <View style={styles.line} />
        <Text style={[styles.header, { width: "90%", fontSize: 16 }]}>
          Product Details
        </Text>
        <View style={{ flexDirection: "row", width: "90%", marginTop: -10 }}>
          <Text style={[styles.text, { width: 110 }]}>Scent</Text>
          <Text style={[styles.text, { color: "#A0A0A0" }]}>
            Rich Irish Cocktail
          </Text>
        </View>
        <View style={{ flexDirection: "row", width: "90%", marginTop: -15 }}>
          <Text style={[styles.text, { width: 110 }]}>Color</Text>
          <Text style={[styles.text, { color: "#A0A0A0" }]}>Purple</Text>
        </View>
        <View style={{ flexDirection: "row", width: "90%", marginTop: -15 }}>
          <Text style={[styles.text, { width: 110 }]}>Item Form</Text>
          <Text style={[styles.text, { color: "#A0A0A0" }]}>Gel</Text>
        </View>
        <View style={{ flexDirection: "row", width: "90%", marginTop: -15 }}>
          <Text style={[styles.text, { width: 110 }]}>Power Source</Text>
          <Text style={[styles.text, { color: "#A0A0A0" }]}>
            Non - Powdered
          </Text>
        </View>
        <View style={{ width: "90%" }}>
          <Text
            style={[
              styles.text,
              { color: "#A0A0A0", fontSize: 12, width: "95%" },
            ]}
          >
            EASY TO USE: Versatile twist mechanism to turn on/off and control
            fragrance intensity
          </Text>
          <Text
            style={[
              styles.text,
              { color: "#A0A0A0", fontSize: 12, width: "95%" },
            ]}
          >
            LONG-LASTING: Clever gel technology that keeps the car fragrant for
            up to 60 days
          </Text>
          <Text
            style={[
              styles.text,
              { color: "#A0A0A0", fontSize: 12, width: "98%" },
            ]}
          >
            ZERO SPILL: Spill-proof car fragrance that allows one to take on the
            bumpy roads
          </Text>
        </View>
        <Text style={[styles.header, { width: "90%", fontSize: 16 }]}>
          Check Availablility
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter Pincode"
            placeholderTextColor={"#AFAFAF"}
            style={styles.input}
          />
          <Text style={[styles.bold, { color: "#1A9E75" }]}>Check</Text>
        </View>
        <View style={styles.line} />
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Image
              source={require("../assets/images/truck2.png")}
              style={{ width: 35, height: 35 }}
            />
            <Text style={[styles.bold, { color: "#1A9E75", fontSize: 10 }]}>
              Free Delivery
            </Text>
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Image
              source={require("../assets/images/money2.png")}
              style={{ width: 35, height: 35 }}
            />
            <Text style={[styles.bold, { color: "#1A9E75", fontSize: 10 }]}>
              Cash On Delivery
            </Text>
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Image
              source={require("../assets/images/secure2.png")}
              style={{ width: 35, height: 35 }}
            />
            <Text style={[styles.bold, { color: "#1A9E75", fontSize: 10 }]}>
              Secure Transaction
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <Text style={{ color: "#393939", fontSize: 20 }}>
          ₹ <Text style={[styles.header]}>340</Text>
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("shop4");
          }}
          style={styles.button}
        >
          <Text
            style={[
              styles.bold,
              { fontSize: 16, paddingTop: 2, color: "#FFF" },
            ]}
          >
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Shop3;

const styles = StyleSheet.create({
  header: {
    fontFamily: "Poppins_500Medium",
    color: "#393939",
  },
  text: {
    fontFamily: "Poppins_400Regular",
    color: "#393939",
  },
  bold: {
    fontFamily: "Poppins_600SemiBold",
  },
  line: {
    width: "100%",
    height: 3,
    backgroundColor: "#F5F4F4",
  },
  inputContainer: {
    width: "90%",
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: "center",
  },
  input: {
    paddingTop: 3,
    fontFamily: "Poppins_400Regular",
    flex: 1,
  },
  bottomContainer: {
    backgroundColor: "#FFF",
    height: 63,
    width: "100%",
    elevation: 10,
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  button: {
    width: 178,
    height: 41,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
    backgroundColor: "#1A9E75",
  },
});
