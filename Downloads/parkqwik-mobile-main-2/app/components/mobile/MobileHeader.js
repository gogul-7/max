import React, { useContext } from "react";
import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import AppContext from "../../context/AppContext";
import { useNavigation } from "@react-navigation/native";

const MobileHeader = ({ name }) => {
  const { amount } = useContext(AppContext);
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("mobile3");
  };

  if (name === "mobile3")
    return (
      <View style={styles.header}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require("../assets/images/airtel.png")}
          />
          <View>
            <Text
              style={[
                styles.headerText,
                { fontSize: 16, marginBottom: -4, marginTop: 3 },
              ]}
            >
              82000 89270
            </Text>
            <Text
              style={[styles.headerText, { color: "#A0A0A0", fontSize: 12 }]}
            >
              Prepaid - Tamil Nadu
            </Text>
          </View>
          <View style={styles.change}>
            <Text style={[styles.text, { color: "#1A9E75", fontSize: 11 }]}>
              Change
            </Text>
          </View>
        </View>
      </View>
    );
  else if (name === "mobile4")
    return (
      <View style={[styles.header, { height: 110, backgroundColor: "#FFF" }]}>
        <View style={[styles.container, { elevation: 1 }]}>
          <Image
            style={styles.image}
            source={require("../assets/images/airtel.png")}
          />
          <View>
            <Text
              style={[
                styles.headerText,
                { fontSize: 16, marginBottom: -4, marginTop: 3 },
              ]}
            >
              82000 89270
            </Text>
            <Text
              style={[styles.headerText, { color: "#A0A0A0", fontSize: 12 }]}
            >
              Prepaid - Tamil Nadu
            </Text>
          </View>
          <View style={styles.line}></View>
          <View style={styles.amount}>
            <Text style={{ color: "#393939", fontSize: 16, marginBottom: -5 }}>
              ₹ <Text style={styles.headerText}>{amount}</Text>
            </Text>

            <Text
              onPress={handlePress}
              style={[styles.headerText, { color: "#1A9E75", fontSize: 10 }]}
            >
              Change Plan
            </Text>
          </View>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  header: {
    height: 100,
    paddingBottom: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1A9E75",
  },
  container: {
    width: "90%",
    paddingHorizontal: 15,
    paddingVertical: 13,
    backgroundColor: "white",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  text: {
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
  },
  headerText: {
    fontFamily: "Poppins_500Medium",
    color: "#393939",
  },
  bold: { fontFamily: "Poppins_600SemiBold" },
  image: {
    width: 35,
    height: 35,
  },
  amount: {
    alignItems: "flex-end",
    position: "absolute",
    right: 10,
    paddingRight: 8,
  },
  line: {
    height: "60%",
    width: 2,
    backgroundColor: "#EEEEEE",
    marginLeft: 15,
  },
  change: {
    borderWidth: 1,
    borderColor: "#1A9E75",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0FFFA",
    paddingHorizontal: 8,
    paddingVertical: 3,
    position: "absolute",
    right: 10,
    marginRight: 4,
  },
});

export default MobileHeader;
