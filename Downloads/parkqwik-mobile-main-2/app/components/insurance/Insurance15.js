import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useContext, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import AppContext from "../../context/AppContext";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: 1,
    title: "Policy Bazaar",
    image: require("../assets/images/policybazar.png"),
  },
  {
    id: 2,
    title: "ACKO Insurance Motor",
    image: require("../assets/images/iacko.png"),
  },
  {
    id: 3,
    title: "Royal Sundaram Insurance",
    image: require("../assets/images/iroyal.png"),
  },
  {
    id: 4,
    title: "Life Insurance Corporation",
    image: require("../assets/images/ilic.png"),
  },
  {
    id: 5,
    title: "Bajaj Allianz",
    image: require("../assets/images/ibajaj.png"),
  },
  {
    id: 6,
    title: "National Insurance Co Ltd",
    image: require("../assets/images/inational.png"),
  },
];

const Insurance15 = () => {
  const [key, setKey] = useState("");
  const input = useRef();
  const { setHeadData } = useContext(AppContext);
  const navigation = useNavigation();

  const handleChange = (text) => {
    setKey(text);
    if (text.length === 0) {
      input.current.setNativeProps({
        style: { borderColor: "#EEE" },
      });
    } else {
      input.current.setNativeProps({
        style: { borderColor: "#1A9E75" },
      });
    }
  };

  console.log(key);

  const handlePress = (item) => {
    setHeadData(item);
    navigation.navigate("insurance16");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        flex: 1,
        alignItems: "center",
        paddingTop: 15,
        gap: 15,
        backgroundColor: "#FFF",
      }}
    >
      <View style={styles.input} ref={input}>
        <Image
          style={{
            maxWidth: 20,
            maxHeight: 20,
          }}
          source={
            key
              ? require("../assets/images/greensearch.png")
              : require("../assets/images/search.png")
          }
        />
        <TextInput
          placeholderTextColor={"#A0A0A0"}
          placeholder="Search Your Provider"
          style={[styles.text, { flex: 1, paddingTop: 4 }]}
          onChangeText={handleChange}
        />
      </View>
      <Text style={styles.header}>Search Your Provider</Text>
      {key
        ? data
            .filter((item) =>
              item.title.toLowerCase().includes(key.toLowerCase())
            )
            .map((item) => (
              <TouchableOpacity
                onPress={() => handlePress(item)}
                key={item.id}
                style={styles.container}
              >
                <Image
                  style={{
                    maxWidth: 35,
                    maxHeight: 35,
                  }}
                  source={item.image}
                />
                <Text style={styles.text}>{item.title}</Text>
                <FontAwesomeIcon
                  icon={"angle-right"}
                  color="#1A9E75"
                  style={{ position: "absolute", right: 15 }}
                />
              </TouchableOpacity>
            ))
        : data.map((item) => (
            <TouchableOpacity
              onPress={() => handlePress(item)}
              key={item.id}
              style={styles.container}
            >
              <Image
                style={{
                  maxWidth: 35,
                  maxHeight: 35,
                }}
                source={item.image}
              />
              <Text style={styles.text}>{item.title}</Text>
              <FontAwesomeIcon
                icon={"angle-right"}
                color="#1A9E75"
                style={{ position: "absolute", right: 15 }}
              />
            </TouchableOpacity>
          ))}
      <View
        style={{
          flexDirection: "row",
          gap: 5,
          position: "absolute",
          bottom: 10,
          alignItems: "center",
        }}
      >
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
    </KeyboardAvoidingView>
  );
};

export default Insurance15;

const styles = StyleSheet.create({
  input: {
    width: "90%",
    height: 40,
    borderWidth: 1,
    borderColor: "#EEE",
    borderRadius: 9,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
    gap: 10,
  },
  container: {
    width: "90%",
    paddingHorizontal: 15,
    height: 59,
    backgroundColor: "#FFF",
    elevation: 3,
    flexDirection: "row",
    gap: 15,
    borderRadius: 15,
    alignItems: "center",
  },
  text: {
    fontFamily: "Poppins_400Regular",
    paddingTop: 2,
    color: "#393939",
  },
  header: {
    fontFamily: "Poppins_500Medium",
    color: "#393939",
    fontSize: 16,
    width: "90%",
  },
  bold: { fontFamily: "Poppins_600SemiBold" },
});
