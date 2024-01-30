import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Animated,
} from "react-native";
import React, { useRef, useState } from "react";
import Modal from "react-native-modal";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";

const Insurance6 = ({ show, setShow }) => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState("about");

  return (
    <Modal
      isVisible={show}
      useNativeDriver
      backdropOpacity={0.3}
      style={{ margin: 0, justifyContent: "flex-end" }}
    >
      <View style={styles.modal}>
        <TouchableOpacity
          onPress={() => setShow(false)}
          style={{
            height: 20,
            paddingTop: 10,
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <View style={styles.line} />
        </TouchableOpacity>
        <View style={{ flexDirection: "row", gap: 20, width: "90%" }}>
          <Text
            onPress={() => setSelected("about")}
            style={
              selected === "about"
                ? styles.selected
                : [styles.text, { fontSize: 16, color: "#A0A0A0" }]
            }
          >
            About Policy
          </Text>
          <Text
            onPress={() => setSelected("premium")}
            style={
              selected === "premium"
                ? styles.selected
                : [styles.text, { fontSize: 16, color: "#A0A0A0" }]
            }
          >
            Premium Breakup
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            alignItems: "center",
            gap: 10,
            flex: 1,
          }}
        >
          <Content selected={selected} />
          <TouchableOpacity
            style={styles.button2}
            onPress={() => {
              setShow(false);
              navigation.navigate("insurance7");
            }}
          >
            <Text
              style={[
                styles.bold,
                { color: "#FFF", fontSize: 16, paddingTop: 2 },
              ]}
            >
              Proceed To Checkout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default Insurance6;

const Content = ({ selected }) => {
  const height1 = useRef(new Animated.Value(0)).current;
  const height2 = useRef(new Animated.Value(0)).current;
  const height3 = useRef(new Animated.Value(0)).current;

  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(true);
  const [open3, setOpen3] = useState(true);

  const handleHeight = (n) => {
    if (n === 1) {
      Animated.timing(height1, {
        useNativeDriver: false,
        toValue: open1 ? 1 : 0,
        duration: 200,
      }).start();
    }
    if (n === 2) {
      Animated.timing(height2, {
        useNativeDriver: false,
        toValue: open2 ? 1 : 0,
        duration: 200,
      }).start();
    }
    if (n === 3) {
      Animated.timing(height3, {
        useNativeDriver: false,
        toValue: open3 ? 1 : 0,
        duration: 200,
      }).start();
    }
  };

  const animatedHeight1 = height1.interpolate({
    inputRange: [0, 1],
    outputRange: [56, 195],
  });
  const animatedHeight2 = height2.interpolate({
    inputRange: [0, 1],
    outputRange: [56, 195],
  });
  const animatedHeight3 = height3.interpolate({
    inputRange: [0, 1],
    outputRange: [56, 195],
  });

  if (selected === "about") {
    return (
      <>
        <Animated.View
          style={[styles.container, { height: animatedHeight1, gap: 20 }]}
        >
          <TouchableOpacity
            onPress={() => {
              handleHeight(1);
              setOpen1(!open1);
            }}
            style={{
              alignItems: "center",
              flexDirection: "row",
              gap: 10,
              width: "100%",
            }}
          >
            <Image
              source={require("../assets/images/check_circle.png")}
              style={{ width: 24, height: 24 }}
            />
            <Text style={[styles.text, { paddingTop: 2 }]}>What Covered</Text>
            <FontAwesomeIcon
              icon={"angle-down"}
              style={{ position: "absolute", right: 0 }}
            />
          </TouchableOpacity>
          <View style={{ width: "100%" }}>
            <Image
              source={require("../assets/images/text1.png")}
              style={{ width: 260, height: 115, left: 8 }}
            />
          </View>
        </Animated.View>
        <Animated.View
          style={[styles.container, { height: animatedHeight2, gap: 20 }]}
        >
          <TouchableOpacity
            onPress={() => {
              handleHeight(2);
              setOpen2(!open2);
            }}
            style={{
              alignItems: "center",
              flexDirection: "row",
              gap: 10,
              width: "100%",
            }}
          >
            <Image
              source={require("../assets/images/crosscircle.png")}
              style={{ width: 24, height: 24 }}
            />
            <Text style={[styles.text, { paddingTop: 2 }]}>
              What Not Covered
            </Text>
            <FontAwesomeIcon
              icon={"angle-down"}
              style={{ position: "absolute", right: 0 }}
            />
          </TouchableOpacity>
          <View style={{ width: "100%" }}>
            <Image
              source={require("../assets/images/text2.png")}
              style={{ width: 246, height: 115, left: 9 }}
            />
          </View>
        </Animated.View>
        <Animated.View
          style={[styles.container, { height: animatedHeight3, gap: 20 }]}
        >
          <TouchableOpacity
            onPress={() => {
              handleHeight(3);
              setOpen3(!open3);
            }}
            style={{
              alignItems: "center",
              flexDirection: "row",
              gap: 10,
              width: "100%",
            }}
          >
            <Image
              source={require("../assets/images/coverage.png")}
              style={{ width: 24, height: 20 }}
            />
            <Text style={[styles.text, { paddingTop: 2 }]}>Added</Text>
            <FontAwesomeIcon
              icon={"angle-down"}
              style={{ position: "absolute", right: 0 }}
            />
          </TouchableOpacity>
          <View style={{ width: "100%" }}>
            <Text
              style={[styles.text, { color: "#A0A0A0", width: "88%", left: 8 }]}
            >
              24x7 Roadside Assistance An add-on which provides various services
              in emergency situations. Eg. Flat tyre repair, Fuel delivery,
              Breakdown repair services, Car towing, Minor servicing etc. on the
              road.
            </Text>
          </View>
        </Animated.View>
      </>
    );
  } else {
    return (
      <>
        <View
          style={[
            styles.container,
            {
              flexDirection: "column",
              paddingHorizontal: 0,
              paddingBottom: 35,
            },
          ]}
        >
          <View style={{ width: "90%", alignItems: "center" }}>
            <Text style={[styles.text, { width: "100%" }]}>Basic Cover</Text>
            <View
              style={{
                width: "100%",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.text, { color: "#A0A0A0" }]}>
                Basic Own Damage Premium
              </Text>
              <Text style={{ fontSize: 14, color: "#393939" }}>
                ₹ <Text style={styles.header}>2,431</Text>
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.text, { color: "#A0A0A0" }]}>
                Third Party Cover Premium
              </Text>
              <Text style={{ fontSize: 14, color: "#393939" }}>
                ₹ <Text style={styles.header}>2,094</Text>
              </Text>
            </View>
          </View>
          <View style={{ width: "90%", alignItems: "center" }}>
            <Text style={[styles.text, { width: "100%" }]}>
              Addon & Accessories
            </Text>
            <View
              style={{
                width: "100%",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.text, { color: "#A0A0A0" }]}>
                24x7 Roadside Assistance
              </Text>
              <Text style={styles.header}>Free</Text>
            </View>
          </View>
          <View style={{ width: "90%", alignItems: "center" }}>
            <Text style={[styles.text, { width: "100%" }]}>Discounts</Text>
            <View
              style={{
                width: "100%",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.text, { color: "#A0A0A0" }]}>
                No-Claim Bonus
              </Text>
              <Text style={{ fontSize: 14, color: "#00A638" }}>
                - ₹{" "}
                <Text style={[styles.header, { color: "#00A638" }]}>181</Text>
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.text, { color: "#A0A0A0" }]}>
                Other Discounts
              </Text>
              <Text style={{ fontSize: 14, color: "#00A638" }}>
                - ₹{" "}
                <Text style={[styles.header, { color: "#00A638" }]}>3,240</Text>
              </Text>
            </View>
          </View>
          <View style={{ width: "90%", alignItems: "center" }}>
            <Text style={[styles.text, { width: "100%" }]}>
              Premium Details
            </Text>
            <View
              style={{
                width: "100%",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.text, { color: "#A0A0A0" }]}>
                Package Premium
              </Text>
              <Text style={{ fontSize: 14, color: "#E44E2D" }}>
                - ₹{" "}
                <Text style={[styles.header, { color: "#E44E2D" }]}>2,431</Text>
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.text, { color: "#A0A0A0" }]}>GST 18%</Text>
              <Text style={{ fontSize: 14, color: "#393939" }}>
                ₹ <Text style={styles.header}>438</Text>
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#F0FFFA",
              height: 35,
              bottom: 0,
              width: "100%",
              position: "absolute",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: 3,
              paddingHorizontal: 15,
            }}
          >
            <Text style={[styles.header, { color: "#1A9E75" }]}>
              Total Amount
            </Text>
            <Text style={{ color: "#1A9E75", fontWeight: 500 }}>
              ₹ <Text style={[styles.header, { color: "#1A9E75" }]}>2,869</Text>
            </Text>
          </View>
        </View>
      </>
    );
  }
};

const styles = StyleSheet.create({
  modal: {
    height: "92%",
    backgroundColor: "#FFF",
    width: "100%",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    alignItems: "center",
    overflow: "hidden",
    gap: 15,
  },
  line: {
    width: 29,
    height: 4,
    backgroundColor: "#D6D6D6",
    borderRadius: 2,
  },
  text: {
    fontFamily: "Poppins_400Regular",
    color: "#393939",
  },
  header: {
    fontFamily: "Poppins_500Medium",
    color: "#393939",
  },
  bold: { fontFamily: "Poppins_600SemiBold", color: "#393939" },
  selected: {
    fontFamily: "Poppins_400Regular",
    color: "#1A9E75",
    borderBottomColor: "#1A9E75",
    borderBottomWidth: 3,
    fontSize: 16,
  },
  container: {
    width: "90%",
    backgroundColor: "#FFF",
    elevation: 3,
    borderRadius: 15,
    padding: 15,
    alignItems: "center",
    gap: 10,
    overflow: "hidden",
  },
  button2: {
    width: "90%",
    alignItems: "center",
    backgroundColor: "#1A9E75",
    justifyContent: "center",
    height: 41,
    borderRadius: 14,
    position: "absolute",
    bottom: 25,
  },
});
