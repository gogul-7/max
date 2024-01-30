import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  BackHandler,
} from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import AppContext from "../../context/AppContext";
import { useNavigation } from "@react-navigation/native";

const Valet5 = () => {
  const navigation = useNavigation();
  const { personalDetails, setPersonalDetails } = useContext(AppContext);
  const [disable, setDisable] = useState(false);
  const [alert, setAlert] = useState(false);
  const name = useRef();
  const number = useRef();
  const mail = useRef();

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        setPersonalDetails({});
      }
    );
    return () => {
      backHandler.remove();
    };
  }, [setPersonalDetails]);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    return isValid;
  };

  useEffect(() => {
    if (
      Object.keys(personalDetails).length === 3 &&
      Object.values(personalDetails).every((value) => !!value)
    ) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [personalDetails]);

  const handleChange = (text, value, name) => {
    if (text.length === 0) {
      value.current.setNativeProps({
        style: { borderColor: "#E5E5E5" },
      });
      setAlert(false);
      setDisable(false);
    } else {
      value.current.setNativeProps({
        style: { borderColor: "#1A9E75" },
      });
    }
    if (name === "name") {
      const cleanedText = text.replace(/[^a-zA-Z]/g, "");
      setPersonalDetails({ ...personalDetails, name: cleanedText });
    } else if (name === "mail") {
      if (validateEmail(text)) {
        setAlert(false);
      } else {
        setAlert(true);
      }
      setPersonalDetails({ ...personalDetails, mail: text });
    } else setPersonalDetails({ ...personalDetails, [name]: text });
  };

  const handleSave = () => {
    navigation.navigate("valet2");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          backgroundColor: "#FFF",
          alignItems: "center",
          paddingTop: 15,
          gap: 10,
          paddingBottom: 50,
        }}
      >
        <Text style={styles.header}>Full Name</Text>
        <TextInput
          ref={name}
          id="name"
          onChangeText={(text) => handleChange(text, name, "name")}
          placeholder="Enter your full name"
          placeholderTextColor={"#AFAFAF"}
          style={styles.input}
          value={personalDetails.name}
        />
        <Text style={styles.header}>Mobile Number</Text>
        <View style={styles.inputContainer} ref={number}>
          <Text style={styles.text}>+91</Text>
          <TextInput
            id="number"
            onChangeText={(text) => handleChange(text, number, "number")}
            placeholder="| Enter your mobile number"
            placeholderTextColor={"#AFAFAF"}
            style={{
              fontFamily: "Poppins_400Regular",
              flex: 1,
              color: "#393939",
            }}
            keyboardType="numeric"
            maxLength={10}
            value={personalDetails.number}
          />
        </View>
        <Text style={styles.header}>Email ID</Text>
        <TextInput
          id="mail"
          ref={mail}
          onChangeText={(text) => handleChange(text, mail, "mail")}
          placeholder="Enter your Email ID"
          placeholderTextColor={"#AFAFAF"}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          value={personalDetails.mail}
        />
        {alert && (
          <Text
            style={[
              styles.text,
              { color: "#FC6969", fontSize: 12, width: "88%", marginTop: -6 },
            ]}
          >
            Invalid mail format.
          </Text>
        )}
        <TouchableOpacity
          onPress={handleSave}
          style={disable ? styles.button : styles.disbaled}
        >
          <Text style={styles.bold}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Valet5;

const styles = StyleSheet.create({
  header: {
    fontFamily: "Poppins_500Medium",
    color: "#393939",
    fontSize: 16,
    width: "90%",
  },
  text: {
    fontFamily: "Poppins_400Regular",
    color: "#393939",
  },
  bold: { fontFamily: "Poppins_600SemiBold", color: "#FFF", fontSize: 16 },
  disbold: {
    fontFamily: "Poppins_600SemiBold",
    color: "#9F9F9F",
    fontSize: 16,
  },
  input: {
    borderColor: "#E5E5E5",
    borderWidth: 1,
    width: "90%",
    height: 40,
    paddingTop: 2,
    paddingLeft: 10,
    borderRadius: 8,
    fontFamily: "Poppins_400Regular",
    color: "#393939",
  },
  inputContainer: {
    borderColor: "#E5E5E5",
    borderWidth: 1,
    borderRadius: 8,
    width: "90%",
    height: 40,
    flexDirection: "row",
    paddingLeft: 10,
    gap: 10,
    alignItems: "center",
    paddingTop: 3,
  },
  button: {
    width: "90%",
    height: 41,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 2,
    backgroundColor: "#1A9E75",
    borderRadius: 14,
    position: "absolute",
    bottom: 25,
  },
  disbaled: {
    width: "90%",
    height: 41,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 2,
    backgroundColor: "#DFDFDF",
    borderRadius: 14,
    position: "absolute",
    bottom: 25,
    pointerEvents: "none",
  },
});
