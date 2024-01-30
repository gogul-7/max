import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import AppContext from "../../context/AppContext";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Ev2 = () => {
  const { personalDetails, vehicleDetails } = useContext(AppContext);
  const navigation = useNavigation();
  const [disable, setDisable] = useState(true);
  const [data, setData] = useState(true);

  useEffect(() => {
    if (
      Object.keys(vehicleDetails).length !== 0 &&
      Object.keys(personalDetails).length !== 0
    ) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [personalDetails, vehicleDetails]);

  const retrieveData = async () => {
    try {
      const data = await AsyncStorage.getItem("vehicleData");
      setData(JSON.parse(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      retrieveData();
    });

    return unsubscribe;
  }, [navigation]);

  const handleContinue = () => {
    navigation.navigate("ev5");
  };
  return (
    <View
      style={{
        alignItems: "center",
        backgroundColor: "#FFF",
        flex: 1,
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
        <View style={[styles.container, { borderRadius: 8, gap: 10 }]}>
          <View
            style={{
              height: 32,
              backgroundColor: "#1A9E75",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 18,
              flexDirection: "row",
              width: "100%",
            }}
          >
            <Text style={[styles.header, { color: "#FFF", paddingTop: 2 }]}>
              Elite Car Parking
            </Text>
            <View
              style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
            >
              <Image
                source={require("../assets/images/whitelocation.png")}
                style={{ width: 15, height: 18 }}
              />
              <Text style={[styles.header, { color: "#FFF", paddingTop: 2 }]}>
                Ramapuram
              </Text>
            </View>
          </View>
          <View
            style={{
              width: "90%",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <View style={{ gap: 3 }}>
              <Text style={[styles.text, { color: "#A0A0A0", fontSize: 12 }]}>
                Parking from
              </Text>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 3 }}
              >
                <Text
                  style={[
                    styles.text,
                    {
                      color: "#393939",
                      fontSize: 12,
                      borderBottomColor: "#1A9E75",
                      borderBottomWidth: 1,
                    },
                  ]}
                >
                  Today at 15:30
                </Text>
                <FontAwesomeIcon
                  icon={"angle-down"}
                  color="#1A9E75"
                  size={13}
                />
              </View>
            </View>
            <View style={{ gap: 3 }}>
              <Text style={[styles.text, { color: "#A0A0A0", fontSize: 12 }]}>
                Parking Until
              </Text>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 3 }}
              >
                <Text
                  style={[
                    styles.text,
                    {
                      color: "#393939",
                      fontSize: 12,
                      borderBottomColor: "#1A9E75",
                      borderBottomWidth: 1,
                    },
                  ]}
                >
                  Today at 18:30
                </Text>
                <FontAwesomeIcon
                  icon={"angle-down"}
                  color="#1A9E75"
                  size={13}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "100%",
              marginBottom: 10,
              marginTop: 8,
            }}
          >
            <View style={{ alignItems: "center" }}>
              <Text
                style={[
                  styles.header,
                  {
                    color: "#393939",
                    marginBottom: -4,
                  },
                ]}
              >
                2 Hours
              </Text>
              <Text
                style={[
                  styles.text,
                  {
                    color: "#A0A0A0",
                    fontSize: 12,
                  },
                ]}
              >
                Total Duration
              </Text>
            </View>
            <View style={styles.line2} />
            <View style={{ alignItems: "center" }}>
              <View
                style={{
                  flexDirection: "row",
                  gap: 2,
                  alignItems: "center",
                  marginBottom: -4,
                }}
              >
                <Image
                  style={{ width: 14, height: 14 }}
                  source={require("../assets/images/blackdirection.png")}
                />
                <Text
                  style={[
                    styles.header,
                    {
                      color: "#393939",
                      paddingTop: 2,
                    },
                  ]}
                >
                  40 mins
                </Text>
              </View>
              <Text
                style={[
                  styles.text,
                  {
                    color: "#A0A0A0",
                    fontSize: 12,
                  },
                ]}
              >
                To Destination
              </Text>
            </View>
          </View>
        </View>
        <Text
          style={[
            styles.header,
            {
              color: "#393939",
              fontSize: 16,
              width: "90%",
              marginTop: 10,
              marginBottom: -3,
            },
          ]}
        >
          Payment Summary
        </Text>
        <View
          style={[
            styles.container,
            {
              backgroundColor: "#F0FFFA",
              paddingVertical: 15,
              gap: 5,
              elevation: 0,
            },
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
              Recharge Amount
            </Text>
            <Text
              style={{
                color: "#393939",
              }}
            >
              ₹ <Text style={[styles.text]}>250</Text>
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
              Transaction Fee
            </Text>
            <Text
              style={{
                color: "#393939",
              }}
            >
              ₹ <Text style={[styles.text]}>20</Text>
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
              ₹ <Text style={[styles.header]}>270</Text>
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
              marginTop: 10,
            },
          ]}
        >
          Personal Details
        </Text>
        {Object.keys(personalDetails).length !== 0 ? (
          <View
            style={[
              styles.container,
              {
                alignItems: "flex-start",
                padding: 15,
                justifyContent: "center",
              },
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
              {personalDetails.name}
            </Text>
            <Text
              style={[
                styles.text,
                {
                  color: "#A0A0A0",
                  fontSize: 12,
                },
              ]}
            >
              {personalDetails.mail}
            </Text>
            <Text
              style={[
                styles.text,
                {
                  color: "#A0A0A0",
                  fontSize: 12,
                },
              ]}
            >
              +91 {personalDetails.number}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("ev3")}
              style={styles.button}
            >
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
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ev3");
            }}
            style={[styles.container2]}
          >
            <Text
              style={[
                styles.header,
                {
                  color: "#A0A0A0",
                  paddingTop: 3,
                },
              ]}
            >
              Tap to add personal details
            </Text>
            <FontAwesomeIcon
              icon={"circle-plus"}
              color="rgba(26, 158, 117, 1)"
              size={20}
            />
          </TouchableOpacity>
        )}
        <Text
          style={[
            styles.header,
            {
              color: "#393939",
              fontSize: 16,
              width: "90%",
              marginTop: 10,
            },
          ]}
        >
          Vehicle Details
        </Text>
        {Object.keys(vehicleDetails).length !== 0 ? (
          <View
            style={[
              styles.container,
              {
                alignItems: "flex-start",
                padding: 15,
                justifyContent: "center",
              },
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
              {vehicleDetails.number}
            </Text>
            <Text
              style={[
                styles.text,
                {
                  color: "#A0A0A0",
                  marginTop: -3,
                },
              ]}
            >
              {vehicleDetails.type} | {vehicleDetails.fuel}
            </Text>

            <TouchableOpacity
              onPress={() => navigation.navigate("ev8")}
              style={styles.button3}
            >
              <Text
                style={[
                  styles.header,
                  {
                    color: "#1A9E75",
                    fontSize: 10,
                    paddingTop: 1,
                  },
                ]}
              >
                Change
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => {
              data.length !== 0
                ? navigation.navigate("ev8")
                : navigation.navigate("ev4");
            }}
            style={[styles.container2]}
          >
            <Text
              style={[
                styles.header,
                {
                  color: "#A0A0A0",
                  paddingTop: 3,
                },
              ]}
            >
              Tap to add vehicle details
            </Text>
            <FontAwesomeIcon
              icon={"circle-plus"}
              color="rgba(26, 158, 117, 1)"
              size={20}
            />
          </TouchableOpacity>
        )}
        <Text
          style={[
            styles.header,
            {
              color: "#393939",
              fontSize: 16,
              width: "90%",
              marginTop: 10,
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
          backgroundColor: "#FFF",
          alignItems: "center",
          position: "absolute",
          bottom: 0,
          width: "100%",
          elevation: 10,
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
            270
          </Text>
        </Text>
        <TouchableOpacity
          onPress={handleContinue}
          style={disable ? styles.disbaled : styles.button2}
        >
          <Text
            style={
              disable
                ? [
                    styles.bold,
                    {
                      color: "#9F9F9F",
                      fontSize: 16,
                      paddingTop: 1,
                    },
                  ]
                : [
                    styles.bold,
                    {
                      color: "#FFF",
                      fontSize: 16,
                      paddingTop: 1,
                    },
                  ]
            }
          >
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Ev2;

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    backgroundColor: "#FFF",
    width: "90%",
    overflow: "hidden",
    alignItems: "center",
    elevation: 3,
  },
  container2: {
    borderRadius: 15,
    backgroundColor: "#FFF",
    width: "90%",
    overflow: "hidden",
    alignItems: "center",
    elevation: 3,
    height: 55,
    flexDirection: "row",
    paddingHorizontal: 15,
    justifyContent: "space-between",
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
    height: 41,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1A9E75",
    justifyContent: "center",
    paddingVertical: 7,
    borderRadius: 14,
  },
  button3: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#1A9E75",
    paddingHorizontal: 8,
    paddingVertical: 2,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    position: "absolute",
    right: 15,
    backgroundColor: "#F0FFFA",
  },
  disbaled: {
    width: 178,
    height: 41,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DFDFDF",
    borderRadius: 14,
    pointerEvents: "none",
  },
});
