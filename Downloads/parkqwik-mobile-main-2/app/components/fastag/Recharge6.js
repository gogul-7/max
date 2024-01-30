import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState, useContext } from "react";
import AppContext from "../../context/AppContext";
import { useNavigation } from "@react-navigation/native";

const Recharge6 = () => {
  const { setFastNum } = useContext(AppContext);
  const navigation = useNavigation();

  const [disable, setDisable] = useState(true);
  const input = useRef();
  const [alert, setAlert] = useState(false);

  const validation = (value) => {
    let pattern = /^[A-Z]{2}\d{2}[A-Z]{1,2}\d{4}$/;
    return pattern.test(value);
  };

  const handleChange = (text) => {
    if (text.length === 0) {
      setDisable(true);
      input.current.setNativeProps({
        style: { borderColor: "#E5E5E5" },
      });
    } else {
      input.current.setNativeProps({
        style: { borderColor: "#1A9E75" },
      });
      if (validation(text)) {
        setDisable(false);
        setAlert(false);
      } else {
        setDisable(true);
        setAlert(true);
      }
    }
    setFastNum(text);
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#FFF",
        paddingTop: 15,
        gap: 15,
      }}
    >
      <Text
        style={[
          styles.header,
          { fontSize: 16, marginBottom: -10, width: "90%" },
        ]}
      >
        Enter Vehicle or Chassis Number
      </Text>
      <Text
        style={[styles.text, { color: "#A0A0A0", fontSize: 14, width: "90%" }]}
      >
        Get upto 100% cashback on first 3 Fastag Recharge
      </Text>

      <TextInput
        ref={input}
        style={[styles.input]}
        placeholder="Enter Vehicle Number"
        placeholderTextColor={"#AFAFAF"}
        onChangeText={handleChange}
        autoCapitalize="characters"
      />
      {alert && (
        <Text
          style={[
            styles.text,
            { color: "#FC6969", fontSize: 14, width: "88%", marginTop: -10 },
          ]}
        >
          Invalid format.
        </Text>
      )}
      <View style={styles.bannerContainer2}>
        <Text style={[styles.text, { color: "#393939", fontSize: 12 }]}>
          Powered by
        </Text>
        <Image
          style={{ maxWidth: 50, maxHeight: 20 }}
          source={require("../assets/images/netc.png")}
        />
        <Image
          style={{ maxWidth: 40, maxHeight: 15, marginBottom: 4 }}
          source={require("../assets/images/bps.png")}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("recharge1")}
        style={disable ? styles.disabled : styles.button}
      >
        <Text
          style={
            disable
              ? [styles.bold, { fontSize: 16, paddingTop: 2, color: "#9F9F9F" }]
              : [styles.bold, { fontSize: 16, paddingTop: 2, color: "#FFF" }]
          }
        >
          Recharge Now
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Recharge6;

const styles = StyleSheet.create({
  button: {
    width: "90%",
    height: 40,
    borderRadius: 14,
    backgroundColor: "#1A9E75",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 20,
  },
  disabled: {
    width: "90%",
    height: 40,
    borderRadius: 14,
    backgroundColor: "#DFDFDF",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 20,
    pointerEvents: "none",
  },
  header: {
    fontSize: 16,
    fontFamily: "Poppins_500Medium",
    color: "#393939",
  },
  bannerContainer2: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: -3,
    left: 3,
    width: "90%",
  },
  input: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#E5E5E5",
    height: 40,
    paddingLeft: 12,
    borderRadius: 8,
    fontFamily: "Poppins_400Regular",
    paddingTop: 2,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Poppins_400Regular",
  },
  bold: {
    fontFamily: "Poppins_600SemiBold",
  },
});
