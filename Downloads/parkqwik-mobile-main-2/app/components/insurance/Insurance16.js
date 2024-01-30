import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Insurance16 = () => {
  const input = useRef();
  const [alert, setAlert] = useState(false);
  const [disable, setDisable] = useState(true);
  const navigation = useNavigation();

  const handleChange = (text) => {
    setAlert(false);
    if (text !== "123456") {
      setAlert(true);
      input.current.setNativeProps({
        style: { borderColor: "#FC6969" },
      });
      setDisable(true);
    } else {
      setAlert(false);
      setDisable(false);
      input.current.setNativeProps({
        style: { borderColor: "#1A9E75" },
      });
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        flex: 1,
        backgroundColor: "#FFF",
        alignItems: "center",
        paddingTop: 15,
        gap: 15,
      }}
    >
      <Text style={styles.header}>Policy Number</Text>
      <TextInput
        placeholderTextColor={"#A0A0A0"}
        placeholder="Enter a valid Policy number"
        style={[styles.input, styles.text]}
        onChangeText={handleChange}
        ref={input}
        keyboardType="numeric"
      />
      {alert && (
        <Text
          style={[
            styles.text,
            { color: "#FC6969", fontSize: 12, width: "88%", marginTop: -13 },
          ]}
        >
          Invalid Policy Number
        </Text>
      )}
      <View
        style={{
          gap: 10,
          position: "absolute",
          bottom: 10,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("insurance17")}
          style={disable ? styles.disable : styles.button}
        >
          <Text
            style={
              disable
                ? [styles.bold, { color: "#9F9F9F", paddingTop: 2 }]
                : [styles.bold, { color: "#FFF", paddingTop: 2 }]
            }
          >
            Continue
          </Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
          <Text style={[styles.text, { fontSize: 12 }]}>
            Secured by Bharat BillPay
          </Text>
          <Image
            style={{
              maxWidth: 47,
              maxHeight: 25,
            }}
            source={require("../assets/images/bps.png")}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Insurance16;

const styles = StyleSheet.create({
  header: {
    fontFamily: "Poppins_500Medium",
    color: "#393939",
    fontSize: 16,
    width: "90%",
  },
  input: {
    width: "90%",
    height: 40,
    borderWidth: 1,
    borderColor: "#EEE",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
    gap: 10,
    marginTop: -5,
  },
  text: {
    fontFamily: "Poppins_400Regular",
    paddingTop: 2,
    color: "#393939",
  },
  button: {
    width: "90%",
    backgroundColor: "#1A9E75",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    height: 41,
  },
  disable: {
    width: "90%",
    backgroundColor: "#DFDFDF",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    height: 41,
    pointerEvents: "none",
  },
  bold: { fontFamily: "Poppins_600SemiBold", fontSize: 16 },
});
