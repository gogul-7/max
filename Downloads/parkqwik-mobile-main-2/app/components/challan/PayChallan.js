import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useEffect, useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  Pressable,
  TouchableOpacity,
  Animated,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
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

const faqs = [
  {
    id: 1,
    question: "What is a traffic challan ?",
    answer:
      "A traffic challan is a fine or penalty imposed on individuals for violating traffic rules and regulations.",
    height: 60,
    maxHeight: 150,
  },
  {
    id: 2,
    question: "Can I contest or dispute a traffic challan?",
    height: 65,
    maxHeight: 170,
    answer:
      "Yes, you can contest or dispute a traffic challan by following the procedures and deadlines set by your local traffic authorities.",
  },
  {
    id: 3,
    height: 65,
    maxHeight: 225,
    question: "How can I avoid future traffic challans ?",
    answer:
      "1. Follow traffic rules and signs.\n2. Maintain speed limits.\n3. Use seatbelts and helmets.\n4. Avoid using mobile devices while driving.\n5. Maintain proper documentation (license, insurance).",
  },
  {
    id: 4,
    height: 65,
    maxHeight: 130,
    question: "How can I download or print a copy of my challan receipt?",
    answer: `Click on the ${"Download"} option to obtain a copy of your challan receipt.`,
  },
];

const PayChallan = () => {
  const navigation = useNavigation();
  const [modal, setModal] = useState(false);
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState([]);

  const animatedHeight = useRef(faqs.map(() => new Animated.Value(0))).current;

  const handleClick = (n) => {
    const index = faqs.findIndex((item) => item.id === n);
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
    Animated.timing(animatedHeight[index], {
      toValue: newIsOpen[index] ? 1 : 0,
      useNativeDriver: false,
      duration: 300,
    }).start();
  };

  const handlePress = () => {
    navigation.navigate("challan2");
  };
  console.log(isOpen);

  useEffect(() => {
    if (value === "Tamil Nadu") {
      setModal(false);
      navigation.navigate("challan5");
    }
  }, [value]);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View
          style={{
            alignItems: "center",
            padding: 15,
            gap: 20,
            backgroundColor: "#FFF",
          }}
        >
          <View style={styles.container}>
            <Text style={[styles.header, { fontSize: 16 }]}>Check Challan</Text>
            <Text style={[styles.text, { color: "#A0A0A0", width: "90%" }]}>
              Enter your vehicle number and check your challans
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter Your Vehicle Number"
                placeholderTextColor="#1A9E75"
              />
              <Pressable onPress={handlePress} style={styles.button}>
                <Text style={[styles.bold, { color: "#FFF", paddingTop: 2 }]}>
                  Check
                </Text>
              </Pressable>
            </View>
          </View>

          <View style={{ width: "100%", gap: 10 }}>
            <Text style={[styles.header, { fontSize: 16 }]}>How it works?</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <View style={{ alignItems: "center", width: "30%" }}>
                <View style={styles.circle}>
                  <Image
                    style={{ width: 50, height: 20 }}
                    source={require("../assets/images/greenlicense.png")}
                  />
                </View>
                <Text style={[styles.header]}>Step 1</Text>
                <Text
                  style={[
                    styles.text,
                    {
                      color: "#A0A0A0",
                      fontSize: 10,
                      width: "80%",
                      textAlign: "center",
                    },
                  ]}
                >
                  Enter your vehicle number
                </Text>
              </View>
              <FontAwesomeIcon
                style={{ marginBottom: 50 }}
                icon="arrow-right-long"
                size={20}
                color="#1A9E75"
              />
              <View style={{ alignItems: "center", width: "30%" }}>
                <View style={styles.circle}>
                  <Image
                    style={{ width: 32, height: 40 }}
                    source={require("../assets/images/greendocument.png")}
                  />
                </View>
                <Text style={[styles.header]}>Step 2</Text>
                <Text
                  style={[
                    styles.text,
                    {
                      color: "#A0A0A0",
                      fontSize: 10,
                      width: "90%",
                      textAlign: "center",
                    },
                  ]}
                >
                  Check Your Challans
                </Text>
              </View>
              <FontAwesomeIcon
                style={{ marginBottom: 50 }}
                icon="arrow-right-long"
                size={20}
                color="#1A9E75"
              />
              <View
                style={{
                  alignItems: "center",
                  width: "30%",
                  justifyContent: "flex-start",
                }}
              >
                <View style={styles.circle}>
                  <Image
                    style={{ width: 40, height: 40 }}
                    source={require("../assets/images/greenpayment.png")}
                  />
                </View>
                <Text style={[styles.header]}>Step 3</Text>
                <Text
                  style={[
                    styles.text,
                    {
                      color: "#A0A0A0",
                      fontSize: 10,
                      width: "60%",
                      textAlign: "center",
                    },
                  ]}
                >
                  Make Payment
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.container}>
            <Text style={[styles.header, { fontSize: 16 }]}>Traffic Fines</Text>
            <Text
              style={[
                styles.text,
                { color: "#A0A0A0", marginBottom: 5, width: "90%" },
              ]}
            >
              Select your state to see traffic fines
            </Text>
            <TouchableOpacity
              onPress={() => setModal(true)}
              style={styles.dropdown}
            >
              <Text style={[styles.text, { color: "#AFAFAF", paddingTop: 3 }]}>
                Select Your State
              </Text>
              <FontAwesomeIcon icon="caret-down" color="#1A9E75" />
            </TouchableOpacity>
          </View>
          <LinearGradient
            colors={["#0BC189", "#27CD99"]}
            start={{ x: 0.0, y: 0.0 }}
            end={{ x: 1.0, y: 1.0 }}
            style={styles.gradient}
          >
            <Text style={[styles.text, { color: "#FBFF29", fontSize: 14 }]}>
              Invite your friends to make hassle-free
            </Text>
            <Text style={[styles.text, { color: "white", fontSize: 17 }]}>
              Challan Payments
            </Text>
            <Text style={[styles.text, { color: "white", fontSize: 11 }]}>
              Pay using UPI, Debit & Credit Cards
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Refer & Win")}
              style={styles.buttonSmall}
            >
              <Text style={[styles.bold, { fontSize: 10, paddingTop: 1 }]}>
                Invite Now
              </Text>
            </TouchableOpacity>
            <Image
              style={styles.image}
              source={require("../assets/images/michand.png")}
            />
          </LinearGradient>
          <View style={{ width: "95%", gap: 15 }}>
            <Text style={[styles.header, { fontSize: 16 }]}>FAQs</Text>
            <View style={{ width: "100%", gap: 10 }}>
              {faqs.map((item, index) => (
                <Animated.View
                  key={item.id}
                  style={[
                    styles.container,
                    {
                      paddingVertical: 0,
                      paddingHorizontal: 0,
                      alignItems: "center",
                      overflow: "hidden",
                      height: animatedHeight[index].interpolate({
                        inputRange: [0, 1],
                        outputRange: [item.height, item.maxHeight],
                      }),
                    },
                  ]}
                >
                  <TouchableOpacity
                    onPress={() => handleClick(item.id)}
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "100%",
                      paddingHorizontal: 12,
                      alignItems: "center",
                      height: item.height,
                    }}
                  >
                    <Text
                      style={[
                        styles.text,
                        { color: "#393939", width: "88%", paddingTop: 2 },
                      ]}
                    >
                      {item.question}
                    </Text>
                    <FontAwesomeIcon icon={"angle-down"} style={{}} />
                  </TouchableOpacity>
                  <Text
                    style={[styles.text, { color: "#A0A0A0", width: "93%" }]}
                  >
                    {item.answer}
                  </Text>
                </Animated.View>
              ))}
            </View>
          </View>
        </View>
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
  modal: {
    backgroundColor: "#FFF",
    height: 559,
    width: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  container: {
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: 15,
    padding: 15,
    gap: 5,
    elevation: 2,
  },
  text: {
    fontFamily: "Poppins_400Regular",
    color: "#393939",
  },
  header: {
    fontFamily: "Poppins_500Medium",
    color: "#393939",
  },
  bold: { fontFamily: "Poppins_600SemiBold" },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  input: {
    borderColor: "#1A9E75",
    height: 39,
    paddingTop: 2,
    flex: 1,
    paddingLeft: 10,
    borderRadius: 8,
    backgroundColor: "#F0FFFA",
    borderWidth: 1,
    fontFamily: "Poppins_500Medium",
    fontSize: 12,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1A9E75",
    height: 39,
    borderRadius: 8,
    paddingHorizontal: 15,
  },
  circle: {
    width: 65,
    height: 65,
    borderRadius: 70,
    backgroundColor: "#F0FFFA",
    alignItems: "center",
    justifyContent: "center",
  },
  dropdown: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#A0A0A0",
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    alignItems: "center",
  },
  gradient: {
    width: "100%",
    height: 140,
    borderRadius: 15,
    padding: 15,
    overflow: "hidden",
  },
  buttonSmall: {
    backgroundColor: "white",
    width: 71,
    height: 24,

    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  image: {
    width: 100,
    height: 100,
    position: "absolute",
    right: 0,
    bottom: 0,
  },
});

export default PayChallan;
