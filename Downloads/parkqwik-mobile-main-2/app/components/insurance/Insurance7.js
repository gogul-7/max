import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AppContext from "../../context/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const Insurance7 = () => {
  const { personalDetails, vehicleDetails, addressDetails } =
    useContext(AppContext);
  const navigation = useNavigation();
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    if (
      Object.keys(vehicleDetails).length !== 0 &&
      Object.keys(personalDetails).length !== 0 &&
      Object.keys(addressDetails).length !== 0
    ) {
      setDisable(false);
    }
  }, [personalDetails, vehicleDetails]);
  const handlePress = () => {
    navigation.navigate("insurance8");
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
              Premium Subscription
            </Text>
            <Text
              style={{
                color: "#393939",
              }}
            >
              ₹ <Text style={[styles.text]}>2,431</Text>
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
              GST 18%
            </Text>
            <Text
              style={{
                color: "#393939",
              }}
            >
              ₹ <Text style={[styles.text]}>438</Text>
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
              ₹ <Text style={[styles.header]}>2,869</Text>
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
              onPress={() => navigation.navigate("insurance10")}
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
              navigation.navigate("insurance10");
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
            },
          ]}
        >
          Address Details
        </Text>
        {Object.keys(addressDetails).length !== 0 ? (
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
              {addressDetails.name}
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
              {`${addressDetails.address1}, ${addressDetails.address2},`}
            </Text>
            <Text
              style={[
                styles.text,
                {
                  color: "#A0A0A0",
                  fontSize: 12,
                  marginTop: -3,
                },
              ]}
            >
              {`${addressDetails.city}, ${addressDetails.state},`}
            </Text>
            <Text
              style={[
                styles.text,
                {
                  color: "#A0A0A0",
                  fontSize: 12,
                  marginTop: -3,
                },
              ]}
            >
              {addressDetails.number}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("insurance12")}
              style={[styles.button3]}
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
              navigation.navigate("insurance12");
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
              Tap to add address
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
                  paddingTop: 5,
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
              {vehicleDetails.type ? vehicleDetails.type : vehicleDetails.model}{" "}
              | {vehicleDetails.fuel}
            </Text>

            <TouchableOpacity
              onPress={() => navigation.navigate("insurance14")}
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
              navigation.navigate("insurance14");
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
            2,869
          </Text>
        </Text>
        <TouchableOpacity
          onPress={handlePress}
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

export default Insurance7;

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    backgroundColor: "white",
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
    alignItems: "center",
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
