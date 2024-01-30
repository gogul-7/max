import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const BannerItem = ({ item }) => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  if (item.linear) {
    return (
      <View style={[styles.bannerContainer, { width }]}>
        <LinearGradient
          colors={["rgba(26, 158, 117, 0.80)", "#1A9E75", "#A6A765"]}
          locations={[0, 0.3958, 1]}
          style={[styles.bannerBox, { paddingLeft: 15 }]}
        >
          <View style={{ width: "60%" }}>
            <Text style={styles.text}>{item.title}</Text>
            <Text style={[styles.text, { fontSize: 12, fontWeight: "400" }]}>
              {item.desc}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate(item.route)}
              style={styles.button}
            >
              <Text style={[styles.bold, { color: "#1A9E75", paddingTop: 1 }]}>
                {item.buttonText}
              </Text>
            </TouchableOpacity>
          </View>
          <Image style={styles.bannerimage} source={item.image} />
        </LinearGradient>
      </View>
    );
  }

  return (
    <View style={[styles.bannerContainer, { width }]}>
      <View style={styles.bannerBox}>
        <View style={styles.bannerContent}>
          <Text style={styles.text}>{item.title}</Text>
          <Text style={[styles.text, { fontSize: 12, fontWeight: "400" }]}>
            {item.desc}
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(item.route)}
            style={
              item.id === 3
                ? [styles.button, { backgroundColor: "#0A6C6F" }]
                : styles.button
            }
          >
            <Text
              style={
                item.id === 3
                  ? [styles.bold, { color: "white", paddingTop: 1 }]
                  : [styles.bold, { color: "#1A9E75", paddingTop: 1 }]
              }
            >
              {item.buttonText}
            </Text>
          </TouchableOpacity>
        </View>
        <Image style={styles.bannerimage} source={item.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    height: 150,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  bannerBox: {
    backgroundColor: "#1A9E75CC",
    borderRadius: 10,
    height: "100%",
    flex: 0.9,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  bannerContent: {
    width: "50%",
  },
  bannerimage: {
    maxHeight: 90,
    maxWidth: 120,
  },
  bold: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 11,
  },
  button: {
    backgroundColor: "white",
    borderRadius: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    paddingHorizontal: 1,
    width: 100,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Poppins_400Regular",
  },
});

export default BannerItem;
