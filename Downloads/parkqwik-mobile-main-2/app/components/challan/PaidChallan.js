import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Pressable,
  useWindowDimensions,
} from "react-native";
import Modal from "react-native-modal";

const PaidChallan = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ImageBackground
          style={styles.card}
          source={require("../assets/images/cardbg.png")}
        >
          <View
            style={{
              width: "88%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={[styles.text, { color: "#A0A0A0", fontSize: 12 }]}>
                Vehicle Number
              </Text>
              <Text style={[styles.text, { color: "#1A9E75" }]}>TN01B5230</Text>
              <Text
                style={[
                  styles.text,
                  { color: "#A0A0A0", fontSize: 12, marginTop: 10 },
                ]}
              >
                Due Date
              </Text>
              <Text style={[styles.text, { color: "#1A9E75" }]}>
                20 Sep 2023
              </Text>
            </View>
            <View style={{ alignItems: "flex-end", marginTop: 15 }}>
              <Text style={[{ color: "#1A9E75", fontSize: 16 }]}>
                ₹ <Text style={styles.bold}>200</Text>
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 3,
                }}
              >
                <Text style={[styles.header, { fontSize: 12 }]}>
                  Obstruction
                </Text>
                <Text
                  style={[
                    styles.text,
                    {
                      fontSize: 9,
                      backgroundColor: "#64D51F",
                      height: 15,
                      color: "white",
                      borderRadius: 5,
                      paddingHorizontal: 3,
                    },
                  ]}
                >
                  Paid
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  marginTop: 10,
                }}
              >
                <Pressable
                  onPress={() => setToggle(true)}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 2,
                    right: 20,
                  }}
                >
                  <Text
                    style={[styles.header, { color: "#1A9E75", fontSize: 12 }]}
                  >
                    More Info
                  </Text>
                  <FontAwesomeIcon
                    icon="chevron-down"
                    size={7}
                    color="#1A9E75"
                  />
                </Pressable>
              </View>
            </View>
          </View>

          <View style={styles.border}></View>
          <ImageBackground
            style={styles.tag}
            source={require("../assets/images/greentag.png")}
          >
            <Text
              style={[
                styles.text,
                { color: "white", fontSize: 10, marginTop: 2 },
              ]}
            >
              TN246972306251330123
            </Text>
          </ImageBackground>
        </ImageBackground>
      </View>
      <MoreDetails setToggle={setToggle} toggle={toggle} />
    </View>
  );
};

const MoreDetails = ({ setToggle, toggle }) => {
  return (
    <Modal
      isVisible={toggle}
      style={[styles.backdrop]}
      useNativeDriver
      backdropOpacity={0.3}
      onBackdropPress={() => setToggle(false)}
    >
      <View style={styles.moreContainer}>
        <Pressable
          onPress={() => setToggle(false)}
          style={{ width: "100%", height: 30, alignItems: "center" }}
        >
          <View style={styles.line}></View>
        </Pressable>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>Vehicle Number</Text>
          <Text style={styles.text}>TN01B5230</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>Challan Number</Text>
          <Text style={styles.text}>TN246972306251330123</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>Violater Name</Text>
          <Text style={styles.text}>RAJKUMAR</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>Received On</Text>
          <Text style={styles.text}>20-06-2023</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>Due Date</Text>
          <Text style={styles.text}>20-09-2023</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>Offences</Text>
          <Text style={styles.text}>Obstruction</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>Challan Amount</Text>
          <Text style={{ fontSize: 16, color: "#1A9E75" }}>
            ₹ <Text style={[styles.header, { color: "#1A9E75" }]}>600</Text>
          </Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 15,
    backgroundColor: "#FFF",
    flex: 1,
  },
  content: {
    width: "95%",
  },
  card: {
    width: "100%",
    height: 150,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Poppins_400Regular",
    color: "#393939",
  },
  header: {
    fontFamily: "Poppins_500Medium",
    color: "#393939",
  },
  bold: {
    fontFamily: "Poppins_600SemiBold",
  },
  border: {
    borderLeftWidth: 1,
    borderColor: "#A0A0A0",
    borderStyle: "dashed",
    position: "absolute",
    height: "60%",
    width: 1,
  },
  tag: {
    position: "absolute",
    right: 0,
    top: 9,
    width: 134,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1A9E75",
    height: 25,
    borderRadius: 8,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  backdrop: {
    margin: 0,
    justifyContent: "flex-end",
  },
  moreContainer: {
    height: 261,
    width: "100%",
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    alignItems: "center",
    padding: 8,
    gap: 5,
  },
  text1: { fontFamily: "Poppins_400Regular", color: "#A0A0A0", fontSize: 14 },
  line: {
    width: 30,
    height: 3,
    backgroundColor: "#D6D6D6",
    borderRadius: 2,
  },
  textContainer: {
    width: "88%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default PaidChallan;
