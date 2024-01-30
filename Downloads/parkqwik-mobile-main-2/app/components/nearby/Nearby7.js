import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useRef, useState } from "react";

const Nearby7 = ({ setModal6, setCheckout }) => {
  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();
  const input4 = useRef();
  const [focusedInput, setFocusedInput] = useState(1);
  const [inputValues, setInputValues] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
  });
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const handleKeyPress = (num) => {
    if (inputValues[focusedInput] !== "" && focusedInput <= 3) {
      setFocusedInput((prev) => prev + 1);
      setInputValues({ ...inputValues, [focusedInput + 1]: `${num}` });
    } else {
      setInputValues({ ...inputValues, [focusedInput]: `${num}` });
      if (focusedInput <= 3) {
        setFocusedInput((prev) => prev + 1);
      }
    }
  };

  const handleBackSpace = () => {
    setInputValues({ ...inputValues, [focusedInput]: "" });
    if (focusedInput > 1) {
      setFocusedInput((prev) => prev - 1);
    }
  };

  const handleCheck = () => {
    if (Object.keys(inputValues).every((value) => value)) {
      setModal6(false);
      setCheckout(true);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFF",
        alignItems: "center",
        gap: 10,
        paddingTop: 15,
      }}
    >
      <StatusBar backgroundColor={"#FFF"} />
      <Image
        style={{
          flex: 1,
        }}
        resizeMode="contain"
        source={require("../assets/images/locationimage.png")}
      />
      <Text
        style={[
          styles.text,
          {
            color: "#1B9E76",
            fontSize: 16,
            width: "60%",
            textAlign: "center",
          },
        ]}
      >
        Enter 4 digit <Text style={styles.bold}>Location ID</Text> of parking
        space
      </Text>
      <View style={styles.bottom}>
        <Text style={[styles.header, { fontSize: 16 }]}>Enter Location ID</Text>
        <View style={{ flexDirection: "row", gap: 15 }}>
          <View style={styles.input}>
            <Text style={[styles.text, { fontSize: 16 }]}>
              {inputValues[1]}
            </Text>
          </View>
          <View style={styles.input}>
            <Text style={[styles.text, { fontSize: 16 }]}>
              {inputValues[2]}
            </Text>
          </View>
          <View style={styles.input}>
            <Text style={[styles.text, { fontSize: 16 }]}>
              {inputValues[3]}
            </Text>
          </View>
          <View style={styles.input}>
            <Text style={[styles.text, { fontSize: 16 }]}>
              {inputValues[4]}
            </Text>
          </View>
          {/* <TextInput
              showSoftInputOnFocus={false}
              style={styles.input}
              maxLength={1}
              ref={input1}
              onChangeText={(text) => handleChange(text, input2, input1)}
              onPressIn={() => handleInputPress(input1)}
              value={inputValues.input1}
            />
            <TextInput
              showSoftInputOnFocus={false}
              style={styles.input}
              maxLength={1}
              ref={input2}
              onChangeText={(text) => handleChange(text, input3, input1)}
              onPressIn={() => handleInputPress(input2)}
              value={inputValues.input2}
            />
            <TextInput
              showSoftInputOnFocus={false}
              style={styles.input}
              maxLength={1}
              ref={input3}
              onChangeText={(text) => handleChange(text, input4, input2)}
              onPressIn={() => handleInputPress(input3)}
              value={inputValues.input3}
            />
            <TextInput
              showSoftInputOnFocus={false}
              style={styles.input}
              maxLength={1}
              ref={input4}
              onChangeText={(text) => handleChange(text, input4, input3)}
              onPressIn={() => handleInputPress(input4)}
              value={inputValues.input4}
            /> */}
        </View>
        <View style={styles.numberContainer}>
          {number.map((item) => (
            <TouchableOpacity
              onPress={() => handleKeyPress(item)}
              key={item}
              style={styles.key}
            >
              <Text style={[styles.text, { fontSize: 28, paddingTop: 7 }]}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 5,
            justifyContent: "space-between",
            width: "85%",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={handleBackSpace} style={{ width: 60 }}>
            <Image
              style={{
                height: 60,
                width: 60,
              }}
              source={require("../assets/images/backspace.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleKeyPress(0)}
            style={styles.key}
          >
            <Text style={[styles.text, { fontSize: 28, paddingTop: 7 }]}>
              0
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCheck} style={{ width: 60 }}>
            <Image
              style={{
                height: 56,
                width: 56,
              }}
              source={require("../assets/images/tickcircle.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Nearby7;

const styles = StyleSheet.create({
  bottom: {
    alignItems: "center",
    marginTop: 8,
    backgroundColor: "#FFF",
    width: "100%",
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    elevation: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  input: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#1A9E75",
    paddingTop: 10,
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
  numberContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    paddingHorizontal: 10,
    marginTop: 30,
  },
  key: {
    width: 60,
    height: 56,
    backgroundColor: "#FFF",
    marginHorizontal: 15,
    marginVertical: 10,
    elevation: 2,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
