import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Cards2 = () => {
  const [border, setBorder] = useState({
    name: "#E5E5E5",
    number: "#E5E5E5",
    from: "#E5E5E5",
    thru: "#E5E5E5",
  });
  const navigation = useNavigation();
  const [formattedInput, setFormattedInput] = useState("");
  const [formattedFrom, setFormattedFrom] = useState("");
  const [formattedThru, setFormattedThru] = useState("");
  const [name, setName] = useState("");
  const [disabled, setDisabled] = useState(true);

  const handleChangeText = (text, key) => {
    setBorder({ ...border, [key]: "#1A9E75" });
    if (text.length === 0) setBorder({ ...border, [key]: "#E5E5E5" });
    // setValue({ ...value, [key]: text });

    if (key === "number") {
      const numericInput = text.replace(/[^0-9]/g, "");
      let formattedValue = numericInput.replace(/(.{4})/g, "$1 ");
      if (
        text.length < formattedInput.length &&
        formattedInput.charAt(formattedInput.length - 1) === " "
      ) {
        formattedValue = formattedValue.slice(0, -1);
      }
      setFormattedInput(formattedValue);
    } else if (key === "thru") {
      const numericInput = text.replace(/[^0-9]/g, "");
      let formattedValue = "";
      for (let i = 0; i < Math.min(numericInput.length, 4); i += 2) {
        if (i > 1) {
          formattedValue += " / ";
        }
        formattedValue += numericInput.substr(i, 2);
      }
      setFormattedThru(formattedValue);
    } else if (key === "from") {
      const numericInput = text.replace(/[^0-9]/g, "");
      let formattedValue = "";
      for (let i = 0; i < Math.min(numericInput.length, 4); i += 2) {
        if (i > 1) {
          formattedValue += " / ";
        }
        formattedValue += numericInput.substr(i, 2);
      }
      setFormattedFrom(formattedValue);
    } else {
      setName(text);
    }
    if (
      formattedFrom.length !== 0 &&
      formattedInput.length !== 0 &&
      formattedThru.length !== 0 &&
      name.length !== 0
    ) {
      setDisabled(false);
    }
  };

  const handleSave = () => {
    navigation.navigate("Home");
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#FFF",
      }}
    >
      <ScrollView
        contentContainerStyle={{
          paddingTop: 15,
          alignItems: "center",
          gap: 15,
          paddingBottom: 90,
        }}
        style={{ width: "100%" }}
      >
        <Text style={styles.header}>Card Number</Text>
        <TextInput
          maxLength={19}
          onChangeText={(text) => handleChangeText(text, "number")}
          style={[styles.input, { borderColor: border.number }]}
          placeholder="Enter Your Card Number"
          value={formattedInput}
          keyboardType="numeric"
        />
        <View style={{ width: "90%", flexDirection: "row", gap: 10 }}>
          <View style={{ width: "30%", gap: 10 }}>
            <Text style={styles.header}>Valid From</Text>
            <TextInput
              onChangeText={(text) => handleChangeText(text, "from")}
              style={[styles.input, { borderColor: border.from }]}
              placeholder="MM / YY"
              maxLength={7}
              keyboardType="numeric"
              value={formattedFrom}
            />
          </View>
          <View style={{ width: "30%", gap: 10 }}>
            <Text style={styles.header}>Valid Thru</Text>
            <TextInput
              onChangeText={(text) => handleChangeText(text, "thru")}
              style={[styles.input, { borderColor: border.thru }]}
              placeholder="MM / YY"
              value={formattedThru}
              maxLength={7}
              keyboardType="numeric"
            />
          </View>
        </View>
        <Text style={styles.header}>Card Holder Name</Text>
        <TextInput
          onChangeText={(text) => handleChangeText(text, "name")}
          style={[styles.input, { borderColor: border.name }]}
          placeholder="Enter Card Holder Name"
          autoCapitalize="characters"
          keyboardType="name-phone-pad"
        />
      </ScrollView>
      <TouchableOpacity
        onPress={handleSave}
        style={disabled ? styles.disabled : styles.button2}
      >
        <Text
          style={
            disabled
              ? [
                  styles.bold,
                  {
                    color: "#9F9F9F",
                    width: "auto",
                    paddingTop: 2,
                  },
                ]
              : [
                  styles.bold,
                  {
                    color: "white",
                    width: "auto",
                    paddingTop: 2,
                  },
                ]
          }
        >
          Save
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cards2;

const styles = StyleSheet.create({
  header: {
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
    width: "90%",
  },
  text: {
    fontFamily: "Poppins_400Regular",
  },
  bold: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 16,
  },
  input: {
    width: "90%",
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    paddingLeft: 15,
    fontFamily: "Poppins_400Regular",
    paddingTop: 5,
    marginTop: -5,
  },
  button2: {
    borderRadius: 14,
    backgroundColor: "#1A9E75",
    width: "90%",
    height: 41,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    position: "absolute",
    bottom: 25,
  },
  disabled: {
    borderRadius: 14,
    backgroundColor: "#DFDFDF",
    width: "90%",
    height: 41,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    position: "absolute",
    bottom: 25,
    pointerEvents: "none",
  },
});
