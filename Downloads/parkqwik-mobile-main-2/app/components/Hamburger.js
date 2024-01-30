import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Animated,
  Pressable,
  Easing,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import AppContext from "../context/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import * as Sharing from "expo-sharing";
import { captureRef } from "react-native-view-shot";
import { Share } from "react-native";

const options = [
  {
    id: 1,
    icon: require("../assets/images/greenperson.png"),
    title: "My Profile",
    details: "Your Personal Details",
    route: "My Profile",
  },
  {
    id: 2,
    icon: require("../assets/images/greentrans.png"),
    title: "Transactions",
    details: "Your Transaction History, Bill Payments & more",
    route: "Transaction",
  },
  {
    id: 3,
    icon: require("../assets/images/greencart.png"),
    title: "Bookings & Orders",
    details: "Your Transaction History, Bill Payments & more",
    route: "Bookings",
  },
  {
    id: 4,
    icon: require("../assets/images/greenlocation2.png"),
    title: "Saved Address",
    details: "Manage Your Saved Address",
    route: "Address",
  },
  {
    id: 5,
    icon: require("../assets/images/greencard2.png"),
    title: "Saved Cards",
    details: "Manage Your Debit / Credit Cards",
    route: "Cards",
  },
  {
    id: 6,
    icon: require("../assets/images/gift.png"),
    title: "Rewards",
    details: "Scratch Cards & Discounts",
    route: "Rewards",
  },
  {
    id: 7,
    icon: require("../assets/images/greenhelp.png"),
    title: "Help & Support",
    details: "Customer Support, FAQ’s & more",
    route: "Help",
  },
  {
    id: 8,
    icon: require("../assets/images/greenabout.png"),
    title: "About Us",
    details: "Privacy Policy, Terms & Conditions",
  },
];

const Hamburger = () => {
  const ref = useRef();
  const { setHam } = useContext(AppContext);
  const navigation = useNavigation();
  // const imagePlaceholder =
  //   "https://images.unsplash.com/photo-1673209139602-30b6e9100131?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";

  const handleHam = () => {
    setHam(false);
  };

  const handleShare = async () => {
    try {
      messageText = "Text that you want to share goes here";
      const options = {
        dialogTitle: messageText,
      };
      const uri = await captureRef(ref, {
        format: "png",
        quality: 0.7,
      });
      await Sharing.shareAsync(uri, options);
    } catch (error) {
      console.log(error);
    }
  };

  const handleShareLink = async () => {
    try {
      const res = await Share.share({
        message: "Checkout ParkQwik App https://parkqwik.referrallink.one...",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleNavigate = (route) => {
    navigation.navigate(route);
    setHam(false);
  };

  return (
    <View style={[styles.contanier]}>
      <View style={styles.topContainer}>
        <Pressable style={styles.backArrow} onPress={handleHam}>
        <Image
              style={{ width: 24, height: 24 }}
              source={require("../assets/images/arrowleft.png")}
            />
        </Pressable>
        <View style={[styles.row, { width: "75%" }]}>
          <Image
            style={{ width: 55, height: 55 }}
            source={require("../assets/images/dp.png")}
          />
          <View>
            <Text style={[styles.header, { color: "white" }]}>Krishna</Text>
            <Text style={[styles.text, { color: "white" }]}>
              +91 8200089270
            </Text>
          </View>
        </View>
        <View ref={ref} style={styles.qrContainer}>
          <Image
            style={{ width: "90%", height: "90%" }}
            source={require("../assets/images/qr.png")}
          />
        </View>
        <View
          style={[
            styles.row,
            { justifyContent: "space-between", marginTop: 15 },
          ]}
        >
          <TouchableOpacity onPress={handleShare} style={styles.button}>
            <Image
              style={{ height: 18, width: 18 }}
              source={require("../assets/images/share.png")}
            />
            <Text style={[styles.header, { color: "white", fontSize: 12 }]}>
              Share QR
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleShareLink} style={styles.button}>
            <Image
              style={{ height: 18, width: 18 }}
              source={require("../assets/images/share.png")}
            />
            <Text style={[styles.header, { color: "white", fontSize: 12 }]}>
              Share Link
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{ paddingTop: 10 }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            width: "100%",
            gap: 10,
            borderBottomColor: "#E4E4E4",
            borderBottomWidth: 1,
            paddingStart: 15,
          }}
        >
          {options.map((item) => (
            <Pressable
              onPress={() => handleNavigate(item.route)}
              key={item.id}
              style={[styles.row, { alignItems: "flex-start" }]}
            >
              <Image
                style={{ height: 25, width: 25, marginTop: 2 }}
                source={item.icon}
              />
              <View
                style={
                  item.id === 8
                    ? [
                        styles.row,
                        {
                          flex: 1,
                          justifyContent: "space-between",
                          paddingRight: 10,
                          paddingBottom: 8,
                        },
                      ]
                    : [
                        styles.row,
                        {
                          borderBottomWidth: 1,
                          borderBottomColor: "#E6E6E6",
                          flex: 1,
                          justifyContent: "space-between",
                          paddingRight: 10,
                          paddingBottom: 8,
                        },
                      ]
                }
              >
                <View style={{ width: "95%" }}>
                  <Text style={[styles.header, { fontSize: 14 }]}>
                    {item.title}
                  </Text>
                  <Text
                    style={[
                      styles.text,
                      {
                        fontSize: 12,
                        color: "#A0A0A0",
                        lineHeight: 15,
                        width: "100%",
                      },
                    ]}
                  >
                    {item.details}
                  </Text>
                </View>
                <FontAwesomeIcon
                  icon={"angle-right"}
                  color="rgba(160, 160, 160, 1)"
                  style={{ position: "absolute", right: 8 }}
                />
              </View>
            </Pressable>
          ))}
        </View>
        <Pressable
          onPress={() => {
            setHam(false);
            navigation.navigate("Login");
          }}
          style={[styles.row, { height: 60, paddingStart: 25 }]}
        >
          <Image
            style={{ height: 25, width: 25 }}
            source={require("../assets/images/greenlogout.png")}
          />
          <Text style={[styles.header, { fontSize: 16, color: "#1A9E75" }]}>
            Logout
          </Text>
          <FontAwesomeIcon
            icon={"angle-right"}
            color="rgba(160, 160, 160, 1)"
            style={{ position: "absolute", right: 8 }}
          />
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default Hamburger;

const styles = StyleSheet.create({
  contanier: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    flex: 1,
    overflow: "hidden",
  },
  topContainer: {
    backgroundColor: "#1A9E75",
    height: 400,
    width: "100%",
    alignItems: "center",
    paddingTop: 20,
    gap: 10,
  },
  backArrow: {
    position: "absolute",
    top: 28,
    left: 15,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  text: {
    fontFamily: "Poppins_400Regular",
  },
  header: {
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
    paddingTop: 2,
  },
  bold: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 16,
    color: "#1A9E75",
    marginTop: 2,
  },
  qrContainer: {
    width: 230,
    height: 230,
    borderRadius: 15,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "white",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 2,
    gap: 5,
  },
});
