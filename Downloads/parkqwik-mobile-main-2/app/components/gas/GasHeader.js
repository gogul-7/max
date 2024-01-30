import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import AppContext from "../../context/AppContext";
import { useNavigation } from "@react-navigation/native";

const GasHeader = ({ name }) => {
  const navigation = useNavigation();

  const { setSearchKey, headData } = useContext(AppContext);

  const handleChange = (text) => {
    setSearchKey(text);
  };

  const handlePress = () => {
    navigation.goBack();
  };

  if (name === "gas1")
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
          paddingBottom: 15,
          backgroundColor: "#FFF",
        }}
      >
        <View style={styles.headerContainer}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Pressable onPress={handlePress}>
              <Image
                style={{ width: 23, height: 23 }}
                source={require("../assets/images/arrowleft.png")}
              />
            </Pressable>
            <Text style={styles.bold}>Book Gas Cylinder</Text>
          </View>
        </View>
        <View
          style={{
            width: "90%",
            justifyContent: "center",
          }}
        >
          <TextInput
            style={styles.input}
            placeholder="Search Your Provider"
            onChangeText={handleChange}
          />
          <Image
            style={styles.search}
            source={require("../assets/images/search.png")}
          />
        </View>
      </View>
    );
  else if (name === "gas2")
    return (
      <View style={styles.header}>
        <View style={styles.headerContainer}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Pressable onPress={handlePress}>
              <Image
                style={{ width: 23, height: 23 }}
                source={require("../assets/images/arrowleft.png")}
              />
            </Pressable>
            <Text style={styles.bold}>Book Gas Cylinder</Text>
          </View>
        </View>
        <View style={styles.container}>
          <Image style={styles.image} source={headData.image} />
          <View style={{ flex: 1 }}>
            <Text
              style={[
                styles.headerText,
                { color: "#A0A0A0", fontSize: 12, marginBottom: -2 },
              ]}
            >
              Gas Provider
            </Text>
            <Text style={[styles.headerText, { width: "70%" }]}>
              {headData.name}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("gas1")}
            style={styles.change}
          >
            <Text
              style={[styles.headerText, { color: "#1A9E75", fontSize: 10 }]}
            >
              Change
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  else if (name === "gas3") {
    return (
      <View style={styles.header}>
        <View style={styles.headerContainer}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Pressable onPress={handlePress}>
              <Image
                style={{ width: 23, height: 23 }}
                source={require("../assets/images/arrowleft.png")}
              />
            </Pressable>
            <Text style={styles.bold}>Book Gas Cylinder</Text>
          </View>
        </View>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require("../assets/images/hp.png")}
          />
          <View>
            <Text
              style={[
                styles.headerText,
                { color: "#A0A0A0", fontSize: 12, marginBottom: -2 },
              ]}
            >
              09579127298
            </Text>
            <Text style={styles.headerText}>Krishna K</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("gas1")}
            style={styles.change}
          >
            <Text
              style={[styles.headerText, { color: "#1A9E75", fontSize: 10 }]}
            >
              Change
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  } else if (name === "gas4")
    return (
      <View style={styles.header}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            width: "92%",
            marginTop: 15,
          }}
        >
          <Pressable onPress={handlePress}>
            <Image
              style={{ width: 23, height: 23 }}
              source={require("../assets/images/arrowleft.png")}
            />
          </Pressable>
          <Text style={styles.bold}>Payment Options </Text>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#EEE",
    borderRadius: 9,
    height: 40,
    paddingLeft: 35,
    fontFamily: "Poppins_400Regular",
    paddingTop: 3,
  },
  search: { width: 20, height: 20, position: "absolute", left: 10 },
  header: {
    paddingVertical: 15,
    gap: 20,
    backgroundColor: "#1A9E75",
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    height: 80,
    paddingTop: 20,
    backgroundColor: "#1A9E75",
    paddingHorizontal: 15,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    width: "100%",
  },
  container: {
    width: "90%",
    paddingHorizontal: 10,
    paddingVertical: 13,
    backgroundColor: "#FFF",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  text: {
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
  },
  bold: {
    color: "#FFF",
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    paddingTop: 3,
  },
  headerText: {
    fontFamily: "Poppins_500Medium",
    color: "#393939",
  },
  image: {
    width: 35,
    height: 35,
  },
  change: {
    borderWidth: 1,
    borderColor: "#1A9E75",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0FFFA",
    paddingHorizontal: 7,
    paddingVertical: 3,
    position: "absolute",
    right: 10,
  },
});

export default GasHeader;
