import React, { useContext, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import AppContext from "../context/AppContext";

const discover = [
  {
    id: 1,
    title: "Buy FASTag",
    image: require("../assets/images/shopping.png"),
    route: "Buy FASTag",
  },
  {
    id: 2,
    title: "Replace FASTag",
    image: require("../assets/images/published.png"),
    route: "Replace FASTag",
  },
  {
    id: 3,
    title: "Active FASTag",
    image: require("../assets/images/done.png"),
    route: "Activate FASTag",
  },
  {
    id: 4,
    title: "Close FASTag",
    image: require("../assets/images/scan.png"),
    route: "Close FASTag",
  },
];

const FastRecharge = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState("");
  const [alert, setAlert] = useState(false);
  const { setFastNum } = useContext(AppContext);

  const handlePress = (route) => {
    navigation.navigate(`${route}`);
  };

  const handleRecharge = () => {
    if (validation(value)) {
      navigation.navigate("FASTag Recharge");
      setFastNum(value);
      setValue("");
    } else {
      setAlert(true);
    }
  };



  const handleChange = (text) => {
    !validation(text) ? setAlert(true) : setAlert(false);
    setValue(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>FASTag Recharge</Text>
      <Text style={[styles.text, { color: "#A0A0A0" }]}>
        Get upto 100% cashback on first 3 Fastag Recharge
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add vehicle or chassis number"
          placeholderTextColor="#1A9E75"
          autoCapitalize="characters"
          onChangeText={handleChange}
          value={value}
        />
        <TouchableOpacity onPress={handleRecharge} style={styles.button}>
          <Text style={[styles.bold, { color: "white" }]}>Recharge</Text>
        </TouchableOpacity>
      </View>
      {alert && (
        <Text style={[styles.text, { color: "#FC6969" }]}>Invalid format.</Text>
      )}
      <View style={styles.bannerContainer}>
        <Text style={[styles.text, { color: "#A0A0A0" }]}>Powered by</Text>
        <Image
          style={{ maxWidth: 60, maxHeight: 20 }}
          source={require("../assets/images/netc.png")}
        />
        <Image
          style={{ maxWidth: 50, maxHeight: 15 }}
          source={require("../assets/images/bps.png")}
        />
      </View>
      <View style={styles.line}></View>

      <Text style={styles.header}>Discover</Text>
      <View style={styles.discContainer}>
        {discover.map((item) => (
          <Pressable key={item.id} onPress={() => handlePress(item.route)}>
            <View style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <View style={styles.icon}>
                <Image
                  style={{ maxHeight: 25, maxWidth: 30 }}
                  source={item.image}
                />
              </View>
              <Text style={styles.iconText}>{item.title}</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    padding: 15,
    backgroundColor: "white",
    borderRadius: 15,
    display: "flex",
    gap: 8,
    elevation: 3,
  },
  header: {
    fontSize: 16,
    fontFamily: "Poppins_500Medium",
    color: "#393939",
  },
  text: {
    fontFamily: "Poppins_400Regular",
    color: "#393939",
  },
  bold: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 14,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  input: {
    borderColor: "#1A9E75",
    height: 40,
    flex: 1,
    paddingLeft: 8,
    borderRadius: 8,
    backgroundColor: "#F0FFFA",
    borderWidth: 1,
    fontFamily: "Poppins_500Medium",
    fontSize: 12,
    color: "#1A9E75",
    paddingTop: 2,
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1A9E75",
    paddingHorizontal: 10,
    height: 40,
    borderRadius: 8,
  },
  bannerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  line: {
    flex: 1,
    height: 3,
    backgroundColor: "#F5F4F4",
  },
  discContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0FFFA",
    width: 60,
    borderRadius: 9,
    height: 50,
    elevation: 3,
  },
  iconText: {
    width: 50,
    textAlign: "center",
    fontSize: 11,
    fontFamily: "Poppins_400Regular",
    color: "#393939",
  },
});

export default FastRecharge;
