import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Pressable,
  Animated,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useContext, useState, useRef } from "react";
import AppContext from "../context/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";

const Rewards = () => {
  const { setHideHeader } = useContext(AppContext);
  const [selected, setSelected] = useState("active");
  const [isCover, setIsCover] = useState(true);
  const [isRedeem, setIsRedeem] = useState(false);
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    setHideHeader(true);
    return () => {
      setHideHeader(false);
    };
  });
  const opacity = useRef(new Animated.Value(1)).current;
  const slider = useRef(new Animated.Value(0)).current;

  const hanldeClick = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 800,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      setIsCover(false);
    }, 900);
  };

  useEffect(() => {
    Animated.timing(slider, {
      toValue: isRedeem ? 0 : 1,
      useNativeDriver: true,
      duration: 300,
    }).start();
  }, [isRedeem]);

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
      <ImageBackground
        style={{
          width: "100%",
          height: 178,
          position: "absolute",
        }}
        source={require("../assets/images/group18.png")}
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
      <View style={styles.container}>
        <View
          style={{
            width: "90%",
            flexDirection: "row",
            borderBottomWidth: 1,
            borderBottomColor: "#E6E6E6",
            height: 40,
            alignItems: "flex-end",
            justifyContent: "space-between",
            paddingHorizontal: 50,
          }}
        >
          <Pressable onPress={() => setSelected("active")}>
            <Text
              style={
                selected == "active"
                  ? [styles.header, styles.selected]
                  : [styles.header, { paddingBottom: 5 }]
              }
            >
              Active
            </Text>
          </Pressable>
          <Pressable onPress={() => setSelected("expired")}>
            <Text
              style={
                selected == "expired"
                  ? [styles.header, styles.selected]
                  : [styles.header, { paddingBottom: 5 }]
              }
            >
              Expired
            </Text>
          </Pressable>
        </View>
        {selected === "active" ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.cardContainer}
            style={{ width: "100%" }}
          >
            <View style={styles.card}>
              <Image
                style={{ height: 40, width: 40 }}
                source={require("../assets/images/bluepark.png")}
              />
              <View style={{ alignItems: "center" }}>
                <Text style={styles.header}>Get 15% Off</Text>
                <Text style={styles.text}>On Your Parking</Text>
              </View>
              <Pressable
                onPress={() => setIsRedeem(true)}
                style={styles.button}
              >
                <Text style={[styles.bold, { fontSize: 12, color: "white" }]}>
                  Redeem Now
                </Text>
              </Pressable>

              {/* {isCover && (
                <Pressable
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                  }}
                  onPress={hanldeClick}
                >
                  <Animated.Image
                    style={[styles.cover, { opacity: opacity }]}
                    source={require("../assets/images/group19.png")}
                  />
                </Pressable>
              )} */}
            </View>
            <View style={styles.card}>
              <Image
                style={{ height: 30, width: 50 }}
                source={require("../assets/images/group2.png")}
              />
              <View style={{ alignItems: "center" }}>
                <Text style={styles.header}>Get 20% Off</Text>
                <Text style={styles.text}>On Your First Car Wash</Text>
              </View>
              <View style={styles.button}>
                <Text style={[styles.bold, { fontSize: 12, color: "white" }]}>
                  Redeem Now
                </Text>
              </View>
            </View>

            <View style={styles.card}>
              <Image
                style={{ height: 23, width: 98 }}
                source={require("../assets/images/fastag.png")}
              />
              <View style={{ alignItems: "center" }}>
                <Text style={styles.header}>Get 15% Off</Text>
                <Text style={styles.text}>On FASTag Recharge</Text>
              </View>
              <View style={styles.button}>
                <Text style={[styles.bold, { fontSize: 12, color: "white" }]}>
                  Redeem Now
                </Text>
              </View>
            </View>
            <View style={styles.card}>
              <Image
                style={styles.cover}
                source={require("../assets/images/group20.png")}
              />
            </View>

            <View style={styles.card}>
              <Image
                style={styles.cover}
                source={require("../assets/images/group21.png")}
              />
            </View>
            <View style={styles.card}>
              <Image
                style={{ height: 40, width: 40 }}
                source={require("../assets/images/bluepark.png")}
              />
              <View style={{ alignItems: "center" }}>
                <Text style={styles.header}>Get 10% Off</Text>
                <Text style={styles.text}>On Your Parking</Text>
              </View>
              <View style={styles.button}>
                <Text style={[styles.bold, { fontSize: 12, color: "white" }]}>
                  Redeem Now
                </Text>
              </View>
            </View>
            <View style={styles.card}>
              <Image
                style={{ height: 40, width: 40 }}
                source={require("../assets/images/bluepark.png")}
              />
              <View style={{ alignItems: "center" }}>
                <Text style={styles.header}>Get 10% Off</Text>
                <Text style={styles.text}>On Your Parking</Text>
              </View>
              <View style={styles.button}>
                <Text style={[styles.bold, { fontSize: 12, color: "white" }]}>
                  Redeem Now
                </Text>
              </View>
            </View>
            <View style={styles.card}>
              <Image
                style={{ height: 40, width: 40 }}
                source={require("../assets/images/bluepark.png")}
              />
              <View style={{ alignItems: "center" }}>
                <Text style={styles.header}>Get 10% Off</Text>
                <Text style={styles.text}>On Your Parking</Text>
              </View>
              <View style={styles.button}>
                <Text style={[styles.bold, { fontSize: 12, color: "white" }]}>
                  Redeem Now
                </Text>
              </View>
            </View>
          </ScrollView>
        ) : (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.cardContainer}
            style={{ width: "100%" }}
          >
            <View
              style={[styles.card, { opacity: 0.7, pointerEvents: "none" }]}
            >
              <Image
                style={{ height: 23, width: 98 }}
                source={require("../assets/images/fastag.png")}
              />
              <View style={{ alignItems: "center" }}>
                <Text style={styles.header}>Get 15% Off</Text>
                <Text style={styles.text}>On FASTag Recharge</Text>
              </View>
              <View style={[styles.button, { backgroundColor: "#DFDFDF" }]}>
                <Text style={[styles.bold, { fontSize: 12, color: "#9F9F9F" }]}>
                  Expired
                </Text>
              </View>
            </View>
            <View
              style={[styles.card, { opacity: 0.7, pointerEvents: "none" }]}
            >
              <Image
                style={{ height: 30, width: 50 }}
                source={require("../assets/images/group2.png")}
              />
              <View style={{ alignItems: "center" }}>
                <Text style={styles.header}>Get 20% Off</Text>
                <Text style={styles.text}>On Your First Car Wash</Text>
              </View>
              <View style={[styles.button, { backgroundColor: "#DFDFDF" }]}>
                <Text style={[styles.bold, { fontSize: 12, color: "#9F9F9F" }]}>
                  Expired
                </Text>
              </View>
            </View>
          </ScrollView>
        )}
      </View>
      <Modal
        isVisible={isRedeem}
        style={{ margin: 0 }}
        backdropOpacity={0.2}
        onBackdropPress={() => setIsRedeem(false)}
      >
        <ScrollView
          contentContainerStyle={[
            styles.container,
            {
              position: "absolute",
              bottom: 0,
              paddingTop: 25,
              padding: 15,
              paddingBottom: 30,
              marginTop: 0,
            },
          ]}
        >
          <TouchableOpacity
            style={{ position: "absolute", right: 20, top: 20, zIndex: 5 }}
            onPress={() => setIsRedeem(false)}
          >
            <FontAwesomeIcon icon={"circle-xmark"} color="#1A9E75" size={24} />
          </TouchableOpacity>
          <Text style={[styles.header, { fontSize: 18, width: "95%" }]}>
            Congratulations!
          </Text>
          <View
            style={[
              styles.card,
              {
                elevation: 0,
                borderWidth: 1,
                borderColor: "#E5E5E5",
                marginVertical: 20,
                gap: 15,
              },
            ]}
          >
            <Image
              style={{ height: 40, width: 40 }}
              source={require("../assets/images/bluepark.png")}
            />
            <View style={{ alignItems: "center" }}>
              <Text style={[styles.text, { fontSize: 16, color: "black" }]}>
                Get 15% Off
              </Text>
              <Text style={[styles.text, { fontSize: 14 }]}>
                On Your Parking
              </Text>
            </View>
          </View>
          <Text
            style={[
              styles.header,
              {
                fontSize: 16,
                textDecorationLine: "underline",
                paddingBottom: 2,
              },
            ]}
          >
            How To Redeem
          </Text>
          <View
            style={{
              flexDirection: "row",
              width: "90%",
              alignItems: "flex-start",
              gap: 10,
              marginTop: -5,
            }}
          >
            <Text style={[styles.bold, { fontSize: 22, marginTop: -11 }]}>
              .
            </Text>
            <Text style={[styles.text, { color: "#393939", fontSize: 15 }]}>
              Copy the coupon code and apply it when booking your parking space
              or simply click on 'Redeem Now’
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "90%",
              alignItems: "flex-start",
              gap: 10,
              marginTop: -10,
            }}
          >
            <Text style={[styles.bold, { fontSize: 22, marginTop: -11 }]}>
              .
            </Text>
            <Text style={[styles.text, { color: "#393939", fontSize: 15 }]}>
              Coupon will be valid till{" "}
              <Text style={styles.bold}>22 Nov 2023</Text>
            </Text>
          </View>
          <View style={styles.greenContianer}>
            <Text
              style={[
                styles.header,
                { color: "#1A9E75", fontSize: 18, paddingTop: 4 },
              ]}
            >
              PRKQWK10
            </Text>
            <Image
              source={require("../assets/images/copy.png")}
              style={{ width: 19, height: 27 }}
            />
          </View>
          <Pressable
            onPress={() => setIsRedeem(false)}
            style={[
              styles.button,
              {
                width: "98%",
                paddingVertical: 5,
                marginTop: 30,
              },
            ]}
          >
            <Text style={[styles.bold, { fontSize: 16, color: "white" }]}>
              Redeem Now
            </Text>
          </Pressable>
        </ScrollView>
      </Modal>
    </View>
  );
};

export default Rewards;

const styles = StyleSheet.create({
  greenContianer: {
    width: "90%",
    backgroundColor: "#F0FFFA",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#1A9E75",
    paddingVertical: 5,
    paddingHorizontal: 15,
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
    borderTopLeftRadius: 21,
    borderTopRightRadius: 21,
    marginTop: 145,
    paddingVertical: 15,
    gap: 15,
    width: "100%",
    alignItems: "center",
    paddingBottom: 50,
  },
  header: {
    fontFamily: "Poppins_500Medium",
  },
  selected: {
    borderBottomColor: "#1A9E75",
    borderBottomWidth: 2,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardContainer: {
    flexWrap: "wrap",
    gap: 10,
    paddingTop: 8,
    flexDirection: "row",
    paddingBottom: 30,
    width: "100%",
    justifyContent: "center",
  },
  card: {
    width: 157,
    height: 157,
    backgroundColor: "white",
    borderRadius: 15,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  text: {
    fontFamily: "Poppins_400Regular",
    fontSize: 10,
    color: "#8E8E8E",
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: "#1A9E75",
    marginTop: 3,
  },
  cover: {
    height: "100%",
    width: "100%",
  },
});
