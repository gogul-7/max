import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Share } from "react-native";

const Refer1 = () => {
  const handleShare = async () => {
    try {
      const res = await Share.share({
        message: "Checkout ParkQwik App https://parkqwik.referrallink.one...",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{ paddingVertical: 15, alignItems: "center", gap: 15 }}>
      <View style={styles.container}>
        <Text style={styles.header}>Referral Link</Text>
        <Text style={styles.text}>
          Refer your friend and get assured rewards!
        </Text>
        <View style={styles.greenContianer}>
          <Text
            style={[
              styles.header,
              { color: "#1A9E75", fontSize: 14, paddingTop: 2 },
            ]}
          >
            https://parkqwik.referrallink.one...
          </Text>
          <Image
            source={require("../assets/images/copy.png")}
            style={{ width: 19, height: 27, marginRight: 8 }}
          />
        </View>
        <Pressable style={styles.button} onPress={handleShare}>
          <Text style={[styles.bold, { color: "white" }]}>Refer Now</Text>
        </Pressable>
      </View>
      <Text style={[styles.header, { fontSize: 16, width: "88%" }]}>
        How it works?
      </Text>
      <View
        style={{
          flexDirection: "row",
          width: "95%",
        }}
      >
        <View style={{ alignItems: "center", gap: 3, flex: 1 }}>
          <View style={styles.imageContainer}>
            <Image
              style={{ width: 35, height: 56, marginRight: 3 }}
              source={require("../assets/images/person1.png")}
            />
          </View>
          <Text style={[styles.header, { color: "black" }]}>Step 1</Text>
          <Text
            style={[
              styles.text,
              { fontSize: 10, width: "90%", textAlign: "center" },
            ]}
          >
            Share referral link to your friends
          </Text>
        </View>
        <FontAwesomeIcon
          style={{ marginTop: 20 }}
          icon={"arrow-right-long"}
          color="#1A9E75"
          size={18}
        />
        <View style={{ alignItems: "center", gap: 3, flex: 1 }}>
          <View style={styles.imageContainer}>
            <Image
              style={{ width: 35, height: 56, marginRight: 3 }}
              source={require("../assets/images/person2.png")}
            />
          </View>
          <Text style={[styles.header, { color: "black" }]}>Step 2</Text>
          <Text
            style={[
              styles.text,
              { fontSize: 10, width: "100%", textAlign: "center" },
            ]}
          >
            Ask your friend to download app and enter vehicle details
          </Text>
        </View>
        <FontAwesomeIcon
          style={{ marginTop: 20 }}
          icon={"arrow-right-long"}
          color="#1A9E75"
          size={18}
        />
        <View style={{ alignItems: "center", gap: 3, flex: 1 }}>
          <View style={[styles.imageContainer, { justifyContent: "center" }]}>
            <Image
              style={{ width: 30, height: 35, marginRight: 3 }}
              source={require("../assets/images/gift2.png")}
            />
          </View>
          <Text style={[styles.header, { color: "black" }]}>Step 3</Text>
          <Text style={[styles.text, { fontSize: 10, textAlign: "center" }]}>
            You win rewards
          </Text>
        </View>
      </View>
      <ImageBackground
        style={styles.imageBg}
        source={require("../assets/images/group22.png")}
      >
        <Text
          style={{
            color: "white",
            fontFamily: "NunitoSans_600SemiBold",
            fontSize: 18,
            lineHeight: 20,
          }}
        >
          Refer Your Friend & Get 50% Discount on Your Parking
        </Text>
        <Text
          style={{
            color: "white",
            fontFamily: "Poppins_400Regular",
            fontSize: 10,
            width: "65%",
          }}
        >
          Share referral link and ask your friend to register vehicle details
        </Text>
        <TouchableOpacity onPress={handleShare} style={styles.button2}>
          <Text style={[styles.bold, { fontSize: 10 }]}>Refer Now</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Refer1;

const styles = StyleSheet.create({
  greenContianer: {
    width: "100%",
    backgroundColor: "#F0FFFA",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#1A9E75",
    paddingVertical: 5,
    paddingHorizontal: 8,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bold: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 16,
    marginTop: 3,
  },
  container: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 15,
    width: "90%",
  },
  header: {
    fontFamily: "Poppins_500Medium",
  },
  text: {
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
    color: "#8E8E8E",
  },
  button: {
    paddingVertical: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
    backgroundColor: "#1A9E75",
    marginTop: 25,
    width: "100%",
  },
  imageContainer: {
    height: 65,
    width: 65,
    borderRadius: 65,
    backgroundColor: "#F0FFFA",
    alignItems: "center",
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  imageBg: { width: 328, height: 136, marginTop: 10, padding: 12, gap: 5 },
  button2: {
    width: 80,
    height: 25,
    borderRadius: 15,
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },
});
