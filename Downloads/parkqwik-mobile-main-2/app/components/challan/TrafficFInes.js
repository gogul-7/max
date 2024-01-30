import React, { useEffect, useRef, useState } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
  Animated,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Modal from "react-native-modal";
import { RadioButton } from "react-native-paper";

const states = [
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Sikkim",
  "Tripura",
  "Jammu and Kashmir",
];

const details = [
  { id: 1, title: "Violation of general traffic rules", fine: "500" },
  { id: 2, title: "Violation of road regulations", fine: "500" },
  { id: 3, title: "Traveling without ticket", fine: "200 to 500" },
  { id: 4, title: "Disobeying orders of traffic police", fine: "2000" },
  {
    id: 5,
    title: "Driving without valid Registration Certificate",
    fine: "5000",
  },
  { id: 6, title: "Driving without valid Driving License", fine: "5000" },
  { id: 7, title: "Driving without valid car insurance policy", fine: "2000" },
  { id: 8, title: "Driving with expired /suspended license", fine: "10,000" },
  { id: 9, title: "Driving oversized vehicles", fine: "5000" },
  { id: 10, title: "Rash driving", fine: "5000", upto: true },
  { id: 11, title: "Drunken driving", fine: "10,000", upto: true },
  { id: 12, title: "Using a mobile phone while driving", fine: "1000 to 2000" },
  { id: 13, title: "Drag racing", fine: "10,000" },
  { id: 14, title: "Overloading of passengers", fine: "1000" },
  { id: 15, title: "Not wearing seat belt", fine: "1000" },
  { id: 16, title: "Blocking emergency vehicles", fine: "10,000" },
  { id: 17, title: "Overloading of passengers", fine: "1000" },
  {
    id: 18,
    title: "Overspeeding",
    fine: "1000",
    more: "Rs. 1000 for Light Motor Vehicles (LMV) , Rs. 2000 for Medium Sized Vehicles ",
  },
  {
    id: 19,
    title: "Riding a two-wheeler with more than two persons",
    fine: "2000",
    more: "Rs. 2000 with license suspension for 3 months",
  },
  {
    id: 20,
    title: "Riding without helmet",
    fine: "2000",
    more: "Rs. 2000 with license suspension for 3 months",
  },
  {
    id: 21,
    title: "Violations by juveniles",
    fine: "25,000",
    more: "Rs. 25,000 with 3 year imprisonment & cancellation of vehicle registration",
  },
  {
    id: 22,
    title: "Violation of license conditions",
    fine: "25,000",
    more: "Rs. 25,000 to Rs. 1,00,000",
  },
  {
    id: 23,
    title: "Excessive pollution by car",
    fine: "1000",
    more: "For first offence Rs. 1000, For repeat offence Rs.2000",
  },
];

const TrafficFInes = () => {
  const [isOpen, setIsOpen] = useState([]);
  const [value, setValue] = useState("");
  const [modal, setModal] = useState(false);

  // useEffect(() => {
  //   if (value === "Tamil Nadu") {
  //     setModal(false);
  //     navigation.navigate("challan5");
  //   }
  // }, [value]);

  const animatedHeight = useRef(
    details.map(() => new Animated.Value(0))
  ).current;

  const handleClick = (n) => {
    const index = details.findIndex((item) => item.id === n);
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
    Animated.timing(animatedHeight[index], {
      toValue: newIsOpen[index] ? 1 : 0,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          gap: 10,
          justifyContent: "center",
          paddingBottom: 30,
          paddingTop: 15,
        }}
      >
        <TouchableOpacity
          onPress={() => setModal(true)}
          style={styles.dropdown}
        >
          <Text style={[styles.text, { color: "#AFAFAF", paddingTop: 2 }]}>
            Select Your State
          </Text>
          <FontAwesomeIcon icon="caret-down" color="#1A9E75" />
        </TouchableOpacity>
        <View
          style={[styles.container, { backgroundColor: "#F0FFFA", gap: 15 }]}
        >
          <Image
            style={{ width: 25, height: 35 }}
            source={require("../assets/images/greentraffic.png")}
          />
          <View>
            <Text style={[styles.text, { fontSize: 16 }]}>
              Traffic fines in Tamil Nadu
            </Text>
            <Text style={[styles.text, { fontSize: 8, marginTop: -5 }]}>
              List of traffic fines as per Motor Vehicle (Amendment) Act
            </Text>
          </View>
        </View>
        {details.map((item, index) =>
          item.more ? (
            <Animated.View
              key={item.id}
              style={[
                styles.container,
                {
                  flexDirection: "column",
                  overflow: "hidden",
                  height: animatedHeight[index].interpolate({
                    inputRange: [0, 1],
                    outputRange: [70, 130],
                  }),
                },
              ]}
            >
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  height: 50,
                  alignItems: "center",
                }}
              >
                <Text style={[styles.text, { width: "63%" }]}>
                  {item.title}
                </Text>
                <Pressable
                  onPress={() => item.more && handleClick(item.id)}
                  style={styles.amount}
                >
                  {item.upto ? (
                    <Text>
                      Up to{"  "}
                      <Text style={{ color: "#1A9E75" }}>
                        ₹ <Text style={styles.text}>{item.fine}</Text>
                      </Text>
                    </Text>
                  ) : (
                    <Text style={{ color: "#1A9E75" }}>
                      ₹ <Text style={styles.text}>{item.fine}</Text>
                    </Text>
                  )}
                  {item.more && (
                    <FontAwesomeIcon icon={"angle-down"} size={12} />
                  )}
                </Pressable>
              </View>
              {item.more && (
                <Text
                  style={[
                    styles.text,
                    {
                      color: "#A0A0A0",
                      textAlign: "center",
                      width: "95%",
                      marginTop: 10,
                    },
                  ]}
                >
                  {item.more}
                </Text>
              )}
            </Animated.View>
          ) : (
            <View
              key={item.id}
              style={[
                styles.container,
                {
                  flexDirection: "column",
                  overflow: "hidden",
                },
              ]}
            >
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  height: 50,
                  alignItems: "center",
                }}
              >
                <Text style={[styles.text, { width: "63%" }]}>
                  {item.title}
                </Text>
                <Pressable
                  onPress={() => item.more && handleClick(item.id)}
                  style={styles.amount}
                >
                  {item.upto ? (
                    <Text>
                      Up to{"  "}
                      <Text style={{ color: "#1A9E75" }}>
                        ₹ <Text style={styles.text}>{item.fine}</Text>
                      </Text>
                    </Text>
                  ) : (
                    <Text style={{ color: "#1A9E75" }}>
                      ₹ <Text style={styles.text}>{item.fine}</Text>
                    </Text>
                  )}
                  {item.more && (
                    <FontAwesomeIcon icon={"angle-down"} size={12} />
                  )}
                </Pressable>
              </View>
            </View>
          )
        )}
      </ScrollView>
      <Modal
        useNativeDriver
        style={{ margin: 0, justifyContent: "flex-end" }}
        isVisible={modal}
        backdropOpacity={0.3}
        useNativeDriverForBackdrop
      >
        <View style={styles.modal}>
          <TouchableOpacity
            onPress={() => setModal(false)}
            style={{ position: "absolute", right: 20, top: 20, zIndex: 5 }}
          >
            <FontAwesomeIcon icon={"circle-xmark"} size={22} color="#1A9E75" />
          </TouchableOpacity>
          <Text style={[styles.header, { fontSize: 16 }]}>Choose State</Text>
          <ScrollView
            contentContainerStyle={{ gap: 10 }}
            showsVerticalScrollIndicator={false}
          >
            <RadioButton.Group
              onValueChange={(value) => setValue(value)}
              value={value}
            >
              {states.map((item, index) => (
                <View key={index} style={{ flexDirection: "row" }}>
                  <View style={{ height: 15 }}>
                    <RadioButton
                      value={item}
                      color="#1A9E75"
                      uncheckedColor="#1A9E75"
                    />
                  </View>
                  <View>
                    <Text
                      style={[styles.text, { paddingTop: 7, marginLeft: 5 }]}
                    >
                      {item}
                    </Text>
                  </View>
                </View>
              ))}
            </RadioButton.Group>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "white",
    borderRadius: 15,
    flexDirection: "row",
    minHeight: 60,
    alignItems: "center",
    elevation: 3,
  },
  modal: {
    backgroundColor: "#FFF",
    height: 559,
    width: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  header: {
    fontFamily: "Poppins_500Medium",
    color: "#393939",
  },
  amount: {
    height: "80%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 130,
    borderLeftColor: "#E4E4E4",
    borderLeftWidth: 1,
    gap: 5,
  },
  dropdown: {
    width: "90%",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#A0A0A0",
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    alignItems: "center",
  },
  text: {
    fontFamily: "Poppins_400Regular",
    marginTop: 2,
  },
});

export default TrafficFInes;
